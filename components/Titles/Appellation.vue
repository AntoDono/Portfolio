<template>
    <div class="overflow-y-hidden flex justify-center" ref="title">
        <h3 class="text-[10vmin] text-white font-uni text-center text-title-accent" ref="text">{{ props.title }}</h3>
    </div>
</template>

<script setup>

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

const text = ref(null)
const title = ref(null)

const props = defineProps({
    title: {
        type: String,
        default: "Title here"
    },
    stroke: {
        type: Boolean,
        default: false
    },
    direction: {
        type: String,
        default: 'left'
    }
})

onMounted(() => {
    if (props.stroke) text.value.classList.add('stroke')

    gsap.to(
        title.value,
        {
            scrollTrigger: {
                trigger: title.value,
                markers: false,
                start: "top-=10% center-=20%",
                end: "bottom center-=20%",
                toggleActions: "play none reverse none",
                scrub: true
            },
            x: props.direction == 'left' ? -title.value.offsetWidth / 2 : title.value.offsetWidth / 2,
            ease: "power1.inOut"
        }
    )
})


</script>

<style scoped>
.stroke {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    -webkit-text-fill-color: transparent;
}
</style>