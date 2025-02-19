import { env } from "~/composables/llm"
import { prompt } from "@/assets/chatbot/prompt"

var synth = window.speechSynthesis
var en_voice = null

window.speechSynthesis.onvoiceschanged = ()=>{
  let voices = synth.getVoices()
  // console.log(voices)
  en_voice = voices.find(voice => voice.name === 'Microsoft Mark - English (United States)');
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Initialize WebSocket connection at plugin level
let chatSocket = null;

function initializeWebSocket() {
  if (!chatSocket || chatSocket.readyState !== WebSocket.OPEN) {
    chatSocket = new WebSocket('wss://cortex.voxnexus.net/generate');
    
    chatSocket.onclose = () => {
      console.log('WebSocket closed, attempting to reconnect...');
      setTimeout(initializeWebSocket, 1000); // Reconnect after 1 second
    };

    chatSocket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    chatSocket.onopen = async () => {
      console.log('Sending websocket auth and init');
      await chatSocket.send(JSON.stringify({
        type: "auth",
        APIKey: env().LLM_API_KEY
      }));
      await chatSocket.send(JSON.stringify({
        type: "init",
        prompt: prompt,
        messages: [
          { 
            role: "system", 
            content: prompt,
          }
        ]
      }));
    };
  }
  return chatSocket;
}

export default defineNuxtPlugin(nuxtApp => {

  var history = [
  
  ]

  const isEndingSentence = (sentence) => {
      // Check if the sentence contains a period, exclamation mark, question mark, colon, or semicolon
      return /[.!?;:]/.test(sentence.trim());
  }

  async function chat(user_message, chatMessages, messageDiv) {
    // Ensure WebSocket is connected
    chatSocket = initializeWebSocket();
    
    if (chatSocket.readyState !== WebSocket.OPEN) {
      console.log("Waiting for WebSocket connection...");
      await new Promise((resolve) => {
        chatSocket.onopen = () => resolve();
      });
    }

    history.push({ role: "user", content: user_message });

    let response = "";
    let sentence = "";
    
    chatMessages.value.push({
      role: "bot",
      content: response,
      turn: chatMessages.value.length + 1
    });

    return new Promise(async(resolve, reject) => {
      // Store the current message handler
      const messageHandler = async (event) => {
        try {
          const data = JSON.parse(event.data);

          if (data["type"] === 'start_generation') return
          
          const text = data.content;
          
          // Check for END token
          if (data["type"] === 'end_generation') {
            history.push({ role: "assistant", content: response });
            resolve("Done generating");
            return;
          }

          response += text;
          sentence += text;

          if (isEndingSentence(sentence)) {
            let utterance = new SpeechSynthesisUtterance(sentence);
            utterance.rate = 2.5;
            if (en_voice) utterance.voice = en_voice;
            synth.speak(utterance);
            sentence = "";
          }

          chatMessages.value[chatMessages.value.length - 1].content = response;
          messageDiv.value.scrollTop = messageDiv.value.scrollHeight;
          await sleep(50);

        } catch (error) {
          console.error('Error processing message:', error);
          reject(error);
        }
      };

      // Add message handler for this chat session
      chatSocket.addEventListener('message', messageHandler);

      // Send the message to initiate the chat
      await chatSocket.send(JSON.stringify({
        type: "message",
        prompt: user_message
      }));
    });
  }

  // Initialize WebSocket when plugin loads
  initializeWebSocket();
  
  nuxtApp.provide('chat', chat);

});
