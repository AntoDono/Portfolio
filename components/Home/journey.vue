<template>
    <article class="h-auto bg-primary flex justify-center items-start z-30 relative overflow-x-hidden px-4">
        <div class="flex justify-center items-center w-full max-w-[80vw] flex-wrap border-2 border-white pt-10 pb-10 px-6" ref="container">
            <div class="w-full max-w-[500px] basis-auto" ref="description" :class="{ 'ssr-visible': !isClient }">
                <h3 class="text-white text-[3rem] font-bogart text-left journey-title">My Journey.</h3>
                <p class="text-white font-montserrat pt-4 text-justify">
                    It all began with a TI-84 Plus Calculator, where I programmed my first text-based racecar game.
                </p>
                <p class="text-white font-montserrat pt-4 text-justify">
                    From there, my curiosity expanded — I built Discord bots, websites, and dove into competitive programming, achieving Platinum Division (Gold Rank) at
                    <nuxt-link to="http://usaco.org" class="underline decoration-dotted" target="_blank">USACO</nuxt-link>.
                </p>
                <p class="text-white font-montserrat pt-4">
                    Since then, I have explored the diverse field of Computer Science. From Machine Learning & Artificial Intelligence
                    to Web Development, I learned and utilized this skills to create end-to-end-user applications.
                </p>
                <p class="text-white font-montserrat pt-4">
                    Some of the languages and libraries I am familiar with are:
                </p>
                <div class="flex justify-center w-full">
                    <ul class="text-white font-montserrat list-disc columns-2 sm:columns-3 pt-10">
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
    </article>
</template>

<script setup>
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import gsap from "gsap"

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(ScrollToPlugin)
}

const description = ref(null)
const container = ref(null)
const isClient = ref(false)

onMounted(() => {
    isClient.value = true
    const isMobile = window.innerWidth <= 900

    gsap.set(
        description.value,
        {
            opacity: 0,
            x: isMobile ? -50 : -description.value.offsetWidth/2
        }
    )

    gsap.to(
        description.value,
        {
            scrollTrigger: {
                trigger: container.value,
                markers: false,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none none",
            },
            opacity: 1,
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

.journey-title {
    overflow-wrap: break-word;
    word-wrap: break-word;
}

@media (max-width:900px) {
    .mobile {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .journey-title {
        font-size: 2rem;
    }
}

@media (max-width: 500px) {
    .journey-title {
        font-size: 1.75rem;
    }
}

/* Show content during SSR for crawlers/scrapers */
.ssr-visible {
    opacity: 1 !important;
    transform: translateX(0) !important;
}
</style>