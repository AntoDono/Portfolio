<template>
    <div class="h-[5000px] flex justify-center items-center bg-gradient-to-t from-secondary via-[#00161c] to-primary" id="scroll">
        <div class="fixed top-[50%]">
            <h1 class="opacity-10 text-[10vmin] text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 font-aileron" id="name">Hi. I am Youwei.</h1>
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
    data(){
        return {
            name_alpha: 0.1
        }
    },
    methods:{
        update_name(){
            console.log(this.name_alpha)
            gsap.set("#name", {
                autoAlpha: this.name_alpha
            })
        }
    },
    mounted(){
        const scrollTrig = gsap.timeline({
            scrollTrigger: {
                trigger: "#scroll",
                start: "100px top",
                end: "+=300px +=100px",
                toggleActions: "play none reverse none",
                // scrub: 0.1,
                markers: true
            },
            onUpdate: this.update_name
        })
        scrollTrig.to(this, { name_alpha: 100, snap: "name_alpha" })
       
    }
})
</script>
