<template>
    <div class="h-[5000px] flex justify-center items-center bg-gradient-to-t from-secondary via-[#00161c] to-primary" id="scroll">
        <div class="fixed top-[50%]">
            <h1 class="opacity-10 text-[10vmin] text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 font-aileron" id="name">Hi. I am Youwei.</h1>
        </div>
        <ul class="fixed top-[60%] text-center">
            <li ref="1" class="font-montserrat text-[3vmin] text-white">Web Developer</li>
            <li class="font-montserrat text-[3vmin] text-white">Software Developer</li>
            <li class="font-montserrat text-[3vmin] text-white">Entrepreneur</li>
            <li class="font-montserrat text-[3vmin] text-white">Student</li>
        </ul>
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
        }
    },
    methods:{
        update_name(){
        }
    },
    mounted(){
        this.$refs['1']
        // const scrollTrig = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: "#scroll",
        //         start: "100px top",
        //         end: "+=300px +=100px",
        //         toggleActions: "play none reverse none",
        //         // scrub: 0.1,
        //         markers: true
        //     },
        //     onUpdate: this.update_name
        // })
        // scrollTrig.fromTo("#name", { autoAlpha: 1 })
        gsap.fromTo('#name', {scale: 0.5 ,autoAlpha: 0.1}, {
            autoAlpha:1,
            scale: 1,
            scrollTrigger: {
                trigger: "#scroll",
                start: "100px top",
                end: "+=1000px +=100px",
                toggleActions: "play none reverse none",
                scrub: true,
                markers: true,
                // onUpdate: function() { console.log(this.progress) }
            }
        })

        titles = gsap.timeline({
            scrollTrigger: {
                trigger: "#scroll",
                start: "1100px"
            }
        })
       
    }
})
</script>
