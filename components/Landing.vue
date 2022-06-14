<template>
    <div class="h-[5000px] flex justify-center items-center bg-gradient-to-t from-secondary via-[#00161c] to-primary" id="scroll">
        <div class="fixed top-[50%]">
            <h1 class="opacity-10 text-[10vmin] text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 font-aileron" id="intro">Hi. I am Youwei.</h1>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineComponent({
    name: "Landing",
    setup() {
        gsap.registerPlugin(ScrollTrigger)
    },
    mounted(){
        const scrollTrig = gsap.timeline({
            scrollTrigger: {
                trigger: "#scroll",
                start: "100px top",
                end: "+=100px +=100px",
                toggleActions: "play none reverse none",
                scrub: 1,
                markers: true
            }
        })
        scrollTrig.to("#intro", { autoAlpha: 1 })
       
    }
})
</script>
