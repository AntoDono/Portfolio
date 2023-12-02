<template>
    <div class="h-auto bg-primary flex justify-center items-start z-30 relative overflow-x-hidden">
        <div class="flex justify-center items-center w-[80vw] flex-wrap border-2 border-white pt-10 pb-10" ref="description">
            <div class="w-[500px] basis-auto" ref="description">
                <h2 class="text-white text-[3rem] font-bogart text-left">My Journey.</h2>
                <p class="text-white font-montserrat">
                    Programming started for me when I coded my first TI-Basic program on the TI-84 Plus Calculator.
                </p>
                <p class="text-white font-montserrat pt-4">
                    Since then, I have explored the diverse field of Computer Science. From Machine Learning & Artificial Intelligence
                    to Web Development, I learned and utilized this skills to create end-to-end-user applications.
                </p>
                <p class="text-white font-montserrat pt-4">
                    Taking interest in algorithms, I occasionally participate in competitive programming such as
                    <nuxt-link to="http://usaco.org" class="underline decoration-dotted" target="_blank">USACO</nuxt-link> and 
                    <nuxt-link to="https://leetcode.com/" class="underline decoration-dotted" target="_blank">Leetcode.</nuxt-link>
                </p>
                <p class="text-white font-montserrat pt-4">
                    Some of the languages and libraries I am familiar with are:
                </p>
                <div class="flex justify-center w-full">
                    <ul class="text-white font-montserrat list-disc columns-3 pt-10">
                        <li>Python</li>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>Node.js</li>
                        <li>C#</li>
                        <li>C++</li>
                        <li>R</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Vue.js</li>
                        <li>Nuxt.js</li>
                        <li>React.js</li>
                        <li>MongoDB</li>
                        <li>Nginx</li>
                        <li>Typescript</li>
                        <li>Graphql</li>
                        <li>Linux/ubuntu</li>
                        <li>Git/Github</li>
                        <li>Docker</li>
                        <li>Machine Learning</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

const description = ref(null)

onMounted(() => {

    gsap.set(
        description.value,
        {
            autoAlpha: 0,
            x: -description.value.offsetWidth/2
        }
    )

    gsap.to(
        description.value,
        {
            scrollTrigger: {
                trigger: description.value,
                markers: false,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none none",
            },
            autoAlpha: 1,
            x: 0,
            ease: "power1.inOut",
        }
    )
})
</script>

<style scoped>
.mobile {
    justify-content: space-between;
}

@media (max-width:900px) {
    .mobile {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>