<template>
  <span class="scrambled-text-wrapper">
    <span class="sr-only">{{ text }}</span>
    <span ref="textElement" aria-hidden="true"></span>
  </span>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const emits = defineEmits(['animationComplete'])

// Register ScrollTrigger plugin
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: ''
  },
  delay: {
    type: Number,
    default: 0
  },
  scrambleChars: {
    type: String,
    default: '!<>-_\\/[]{}—=+*^?#________'
  },
  mode: {
    type: String,
    default: 'auto', // 'auto', 'duration', 'percentage', 'wait-for-animation'
    validator: (value) => ['auto', 'duration', 'percentage', 'wait-for-animation'].includes(value)
  },
  duration: {
    type: Number,
    default: 2000 // milliseconds
  },
  percentage: {
    type: Number,
    default: 100, // 0-100
    validator: (value) => value >= 0 && value <= 100
  },
  animate: {
    type: Boolean,
    default: false // when true, triggers animation (used with wait-for-animation mode)
  }
})

const textElement = ref(null)
let frameRequest = null
let frame = 0
let queue = []
let resolve = null
let scrollTriggerInstance = null
let hasAnimated = false

const randomChar = () => {
  return props.scrambleChars[Math.floor(Math.random() * props.scrambleChars.length)]
}

const update = () => {
  let output = ''
  let complete = 0
  
  for (let i = 0, n = queue.length; i < n; i++) {
    let { from, to, start, end, char } = queue[i]
    
    if (frame >= end) {
      complete++
      output += to
    } else if (frame >= start) {
      if (!char || Math.random() < 0.28) {
        char = randomChar()
        queue[i].char = char
      }
      output += `<span class="dud">${char}</span>`
    } else {
      output += from
    }
  }
  
  if (textElement.value) {
    textElement.value.innerHTML = output
  }
  
  if (complete === queue.length) {
    if (resolve) resolve()
    emits('animationComplete')
  } else {
    frameRequest = requestAnimationFrame(update)
    frame++
  }
}

const setText = (newText) => {
  const oldText = textElement.value?.innerText || ''
  const length = Math.max(oldText.length, newText.length)
  const promise = new Promise((res) => resolve = res)
  
  queue = []
  
  if (props.mode === 'duration') {
    // Calculate frames based on duration (assuming 60fps)
    const fps = 60
    const totalFrames = Math.floor((props.duration / 1000) * fps)
    const maxStart = Math.floor(totalFrames * 0.3)
    const minDuration = Math.floor(totalFrames * 0.3)
    const maxDuration = Math.floor(totalFrames * 0.7)
    
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * maxStart)
      const end = start + minDuration + Math.floor(Math.random() * (maxDuration - minDuration))
      queue.push({ from, to, start, end })
    }
  } else if (props.mode === 'percentage') {
    // For percentage mode, only some characters will be revealed
    const charsToReveal = Math.floor((props.percentage / 100) * length)
    
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      
      if (i < charsToReveal) {
        // These characters will be revealed
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        queue.push({ from, to, start, end })
      } else {
        // These characters will stay scrambled forever
        const start = 0
        const end = Infinity
        queue.push({ from, to, start, end })
      }
    }
  } else {
    // Auto mode - original behavior
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      queue.push({ from, to, start, end })
    }
  }
  
  cancelAnimationFrame(frameRequest)
  frame = 0
  update()
  return promise
}

const startAnimation = () => {
  if (!textElement.value || hasAnimated) return
  hasAnimated = true
  
  setTimeout(() => {
    setText(props.text)
  }, props.delay)
}

const init = () => {
  if (!textElement.value) return
  
  // Set initial scrambled state
  const scrambledInitial = props.text.split('').map(char => {
    if (char === ' ') return ' '
    return randomChar()
  }).join('')
  textElement.value.innerHTML = scrambledInitial
  
  // If in wait-for-animation mode, don't set up ScrollTrigger or auto-trigger
  if (props.mode === 'wait-for-animation') {
    return
  }
  
  // Setup ScrollTrigger for other modes
  if (process.client) {
    scrollTriggerInstance = ScrollTrigger.create({
      trigger: textElement.value,
      start: 'top bottom-=100', // Start when element is 100px from bottom of viewport
      onEnter: () => startAnimation(),
      onEnterBack: () => {}, // Do nothing when scrolling back
      once: true // Only trigger once
    })
    
    // Check initial viewport
    setTimeout(() => {
      // If element is already in viewport, trigger immediately
      const rect = textElement.value.getBoundingClientRect()
      const inView = rect.top < window.innerHeight - 100 && rect.bottom > 0
      if (inView && !hasAnimated) {
        startAnimation()
      }
    }, 100)
  }
}

onMounted(() => {
  init()
})

watch(() => props.text, () => {
  hasAnimated = false
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
  }
  init()
})

// Watch animate prop to trigger animation manually (for wait-for-animation mode)
watch(() => props.animate, (newVal) => {
  if (newVal && !hasAnimated) {
    startAnimation()
  }
})

onUnmounted(() => {
  if (frameRequest) {
    cancelAnimationFrame(frameRequest)
  }
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
  }
})
</script>

<style scoped>
.scrambled-text-wrapper {
  display: inline;
}

.dud {
  color: #757575;
}
</style>

