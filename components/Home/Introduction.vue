<template>
    <article class="h-auto bg-transparent flex justify-center items-start z-20 relative">
        <div class="flex justify-around items-center w-[80vw] flex-wrap border-2 border-white pt-10 pb-10">
            <div class="pic-border pb-10 flex">
                <img src="~/assets/images/youwei.jpeg" class="pic rounded-xl" alt="picture of youwei zhen" />
            </div>
            <div class="w-[500px] basis-auto pl-4" ref="description" :class="{ 'ssr-visible': !isClient }">
                <h3 class="text-white text-[3rem] font-bogart text-left">I'm Youwei Zhen.</h3>
                <p class="text-white font-montserrat">A builder at heart.</p>
                <p class="text-white font-montserrat pt-4 text-justify">
                    Over the years, I've mastered various skills and used them to build projects that have won numerous hackathons and competitions. From robots that carry your laundry using computer vision, to AI-powered music therapy systems with real-time EEG monitoring for mental health conditions like schizophrenia, bipolar disorder, and ADHD.
                </p>
                <p class="text-white font-montserrat pt-4 text-justify">
                    Currently, I'm diving deep into machine learning and artificial intelligence, focusing on integrating these technologies into critical domains like healthcare and neuroscience.
                </p>
                <p class="text-white font-montserrat pt-4 text-justify">
                    When I'm not grinding out my projects, you can often find me on the fencing piste or side questing.
                </p>
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
const isClient = ref(false)

onMounted(() => {
    isClient.value = true

    gsap.set(
        description.value,
        {
            opacity: 0,
            x: description.value.offsetWidth
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
            opacity: 1,
            x: 0,
            ease: "power1.inOut",
        }
    )
})
</script>

<style scoped>
.pic {
    /* height: 300px; */
    width: 500px;
}

@media (max-width:700px) {
    .pic {
        /* height: 300px; */
        width: 300px;
    }
}

/* Show content during SSR for crawlers/scrapers */
.ssr-visible {
    opacity: 1 !important;
    transform: translateX(0) !important;
}</style>