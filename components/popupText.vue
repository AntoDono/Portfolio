<template>
    <div class="overflow-y-hidden" ref="container">
        <h2 :class="`${size} text-white font-bogart overflow-y-hidden opacity-0`" ref="appear">
            {{ text }}
        </h2>
    </div>
</template>

<script setup>
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import gsap from "gsap"

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(ScrollToPlugin)
}

const appear = ref('appear')

const props = defineProps({
    text: {
        type: String,
        default: "Section Text"
    },
    direction: {
        type: String,
        default: 'N'
    },
    show: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: "text-[7vmin]" // accepts L, M, S
    }
})

onMounted(() => {

    gsap.set(
        appear.value,
        {
            x: props.direction == 'W' ? appear.value.offsetWidth : props.direction == 'E' ? -appear.value.offsetWidth : 0,
            y: props.direction == 'N' ? appear.value.offsetHeight : props.direction == 'S' ? -appear.value.offsetHeight : 0
        }
    )

})

const appearText = () => {
    gsap.to(
        appear.value,
        {
            y: 0,
            x: 0,
            ease: "power1.inOut"
        }
    )
}

watch(() => props.show, (new_value, old_value) => {
    if (new_value) {
        gsap.set(
            appear.value,
            { alpha: 1 }
        )
        appearText()
    }
})


</script>
