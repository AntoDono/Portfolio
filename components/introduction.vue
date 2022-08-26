<template>
    <div class="h-auto bg-transparent flex justify-center items-start pt-28 pb-28 z-20 relative" id="about">
        <div class="flex justify-around items-center w-[70vw] flex-wrap border-2 border-white pt-10 pb-10">
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
                <p class="text-white font-montserrat pt-4">
                    As of lately, I am currently the project manager of the Staten Island Techtimes website and the Staten Island MSK website. In addition,
                    I am currently in the Silver Divison of the United States of America Computing Olympiad. I also had the honor of placing 1st in the New York City 
                    Youth Entrepreneur Academy and represented the city in the National Saunders Competition.
                </p>
                <p class="text-white font-montserrat pt-4">
                    Recently, I have been working on machine learning, three.js and the latest web frameworks such as Nuxt3.
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
    name: "introduction",
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
                    toggleActions: "play none none none",
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