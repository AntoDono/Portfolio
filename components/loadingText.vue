<template>
  <span ref="textElement" class="text-white font-bbhs"></span>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: ''
  },
  percentage: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0 && value <= 100
  },
  spaceBetween: {
    type: Boolean,
    default: true // whether to add spaces between characters
  },
  underscoreChar: {
    type: String,
    default: '_'
  }
})

const textElement = ref(null)

const updateText = () => {
  if (!textElement.value || !props.text) return
  
  const textLength = props.text.length
  // Calculate how many characters to reveal based on percentage
  const charsToReveal = Math.floor((props.percentage / 100) * textLength)
  
  let output = ''
  
  for (let i = 0; i < textLength; i++) {
    const char = props.text[i]
    
    // Preserve spaces in original text
    if (char === ' ') {
      output += ' '
    } else if (i < charsToReveal) {
      // Reveal this character
      output += char
    } else {
      // Show underscore
      output += props.underscoreChar
    }
    
    // Add space between characters if enabled (except for original spaces and last char)
    if (props.spaceBetween && i < textLength - 1 && props.text[i + 1] !== ' ') {
      output += ' '
    }
  }
  
  textElement.value.textContent = output
}

onMounted(() => {
  updateText()
})

watch(() => props.percentage, () => {
  updateText()
})

watch(() => props.text, () => {
  updateText()
})
</script>

<style scoped>
/* Add any custom styling here */
</style>

