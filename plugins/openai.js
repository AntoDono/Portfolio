import OpenAI from "openai"
import { env } from "@/composables/openai"
import { prompt } from "@/assets/chatbot/prompt"

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

  async function chat(user_message, chatMessages, messageDiv) {

    history.push({ role: "user", content: user_message })

    var stream = await openai.chat.completions.create({
      messages: history,
      model: "gpt-4o",
      temperature: 1,
      frequency_penalty: 0,
      presence_penalty: 0.5,
      frequency_penalty: 1,
      max_tokens: 256,
      stream:true,
    });

    var response = ""
    chatMessages.value.push({
      role: "bot",
      content: response,
      turn: chatMessages.value.length + 1
    })

    for await (const chunk of stream) {
      response += chunk.choices[0]?.delta?.content || "";
      chatMessages.value[chatMessages.value.length - 1].content = response
      messageDiv.value.scrollTop = messageDiv.value.scrollHeight
      await sleep(50)
    }

    history.push({ role: "assistant", content: response })

    return new Promise((res, rej)=> res("Done generating"))
  }

  nuxtApp.provide('chat', chat)

});