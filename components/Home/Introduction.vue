<template>
    <div class="h-auto bg-transparent flex justify-center items-start z-20 relative">
        <div class="flex justify-around items-center w-[80vw] flex-wrap border-2 border-white pt-10 pb-10">
            <div class="pic-border pb-10">
                <img src="~/assets/images/youwei.jpg" class="pic rounded-xl" alt="picture of youwei zhen" />
            </div>
            <div class="w-[500px] basis-auto pl-4" ref="description">
                <h2 class="text-white text-[3rem] font-bogart text-left">I'm Youwei Zhen.</h2>
                <p class="text-white font-montserrat">Aspiring Computer Science and Entrepreneurship student.</p>
                <p class="text-white font-montserrat pt-4">
                    Over the years, I have learned many different skills and frameworks in web and software design. With
                    those skills that I have acquired,
                    I founded and created several organizations:
                    <nuxt-link to="https://botsitivity.org" class="underline decoration-dotted" target="_blank">BOTSITIVITY
                        INC</nuxt-link>
                    and <nuxt-link to="https://privacysavior.com" class="underline decoration-dotted"
                        target="_blank">PrivacySavior LLC.</nuxt-link>.
                </p>
                <p class="text-white font-montserrat pt-4">
                    As of lately, I am currently developing and studying machine learning and Artificial Intelligence.
                    I am also in the Gold Divison (Silver Medal) of
                    <nuxt-link to="http://usaco.org" class="underline decoration-dotted" target="_blank">USACO</nuxt-link>
                </p>
                <p class="text-white font-montserrat pt-4">
                    When I am not grinding out my projects, you can often find me on the fencing piste.
                </p>
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
            autoAlpha: 1,
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
}</style>