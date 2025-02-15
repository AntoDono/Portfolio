import OpenAI from "openai"
import { env } from "@/composables/openai"
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

export default defineNuxtPlugin(nuxtApp => {

  const openai = new OpenAI({
    apiKey: env().OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  })

  var history = [
    { 
      role: "system", 
      content: prompt,
    }
  ]

  const isEndingSentence = (sentence) => {
      // Check if the sentence contains a period, exclamation mark, question mark, colon, or semicolon
      return /[.!?;:]/.test(sentence.trim());
  }

  async function chat(user_message, chatMessages, messageDiv) {

    history.push({ role: "user", content: user_message })

    var stream = await openai.chat.completions.create({
      messages: history,
      model: "gpt-4o-mini",
      temperature: 1,
      frequency_penalty: 0,
      presence_penalty: 0.5,
      frequency_penalty: 1,
      max_tokens: 256,
      stream:true,
    });

    var response = ""
    var sentence = ""
    
    chatMessages.value.push({
      role: "bot",
      content: response,
      turn: chatMessages.value.length + 1
    })

    for await (const chunk of stream) {

      let newText = chunk.choices[0]?.delta?.content || "";
    
      response += newText;
      sentence += newText;

      if (isEndingSentence(sentence)){
        let utterance = new SpeechSynthesisUtterance(sentence)
        utterance.rate = 2.5
        if (en_voice) utterance.voice = en_voice
        synth.speak(utterance)
        sentence=""
      }

      chatMessages.value[chatMessages.value.length - 1].content = response
      messageDiv.value.scrollTop = messageDiv.value.scrollHeight
      await sleep(50)
    }


    history.push({ role: "assistant", content: response })

    return new Promise((res, rej)=> res("Done generating"))
  }

  nuxtApp.provide('chat', chat)

});
