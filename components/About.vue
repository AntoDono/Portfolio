<template>
    <div class="h-auto bg-transparent flex justify-center items-start pt-28 pb-28 z-20 relative" id="about">
        <div class="flex justify-around w-[70vw] flex-wrap border-2 border-white pt-10 pb-10">
            <img src="~/assets/images/amongus.jpg" class="pic rounded-xl"/>
            <div class="w-[500px] basis-auto" ref="description">
                <h2 class="text-white text-[3rem] font-bogart text-left">I'm Youwei Zhen,</h2>
                <p class="text-white font-montserrat">a passionate high school student in the field of computer science and entrepreneurship.</p>
                <p class="text-white font-montserrat pt-4">
                    Over the years, I have learned many different skills and frameworks in web and software design. With those skills that I have acquired,
                    I founded and created multiple websites for my nonprofit and for profit company 
                    <nuxt-link to="https://botsitivity.org" class="underline decoration-dotted" target="_blank">BOTSITIVITY INC</nuxt-link> 
                    and <nuxt-link to="https://privacysavior.com" class="underline decoration-dotted" target="_blank">PrivacySavior LLC.</nuxt-link>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineComponent({
    setup() {
        
    },
    name: "About",
    mounted(){
        gsap.registerPlugin(ScrollTrigger)

        gsap.set(
            this.$refs['description'],
            {
                autoAlpha: 0,
                x: -this.$refs['description'].offsetWidth/2
            }
        )

        gsap.to(
            this.$refs['description'], 
            { 
                scrollTrigger: {
                    trigger: this.$refs['description'],
                    markers: false,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none reverse none",
                },
                autoAlpha: 1,
                x: 0,
                ease: "steps(5)" 
            }
        )
    }
})
</script>

<style scoped>
.pic{
    height: 300px;
    width: 300px;
}
@media (max-width:700px) {
    .pic{
        height: 300px;
        width: 300px;
    }
}
</style>