<template>
    <div class="bg-primary flex justify-center items-center pt-10">
        <div class="w-[80vw]">
            <SectionHeader text="Featured on"/>
            <div ref="container">
                <div class="flex feature-block flex-wrap justify-center items-center pt-10 gap-x-8 gap-y-8 translate-y-[100%] opacity-0" ref="appear">
                    <FeaturedCard 
                        title="NASSP Leadership Magazine" 
                        date="December 2023" 
                        imageSrc="/featured/nassp.jpg"
                        description="As a senior, Zhen created Project SammyGPT, an AI service tailored to Staten Island Tech. Project SammyGPT contains an AI Generated Detection tool, and an AI Chatbot that could converse with parents in their native language and offer school information, complete with reference links from the school website. It's a significant step forward in integrating AI into the educational process."
                        link="https://www.nassp.org/publication/principal-leadership/volume-24-2023-2024/principal-leadership-december-2023/ahead-of-the-ai-curve/"
                    />
                    <FeaturedCard 
                        title="NYC YEA 1st Place Winner & National Semi-finalist" 
                        date="May 2022" 
                        imageSrc="/featured/yea2.png"
                        description="During his sophomore year, Zhen developed PrivacySavior, a company selling devices to protect user privacy. These devices automatically hide applications and files on a computer when an intruder is nearby. PrivacySavior has received a provisional patent from the USPTO, reflecting its innovative approach to digital privacy and security."
                        link="https://www.sichamber.com/news/staten-island-tech-sophomore-wins-2022-yea-investor-panel"
                    />
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

const appear = ref(null)
const container = ref(null)

const props = defineProps({
    text: {
        type: String,
        default: "Section Text"
    },
    direction: {
        type: String,
        default: 'N'
    }
})

onMounted(()=>{

    gsap.to(
        appear.value,
        {
            scrollTrigger: {
                trigger: container.value,
                markers: false,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none none",
            },
            y: 0,
            x: 0,
            alpha: 1,
            duration: 0.7,
            ease: "power1.inOut"
        }
    )
})

</script>

<style scoped> 

.feature-block{
    flex-direction: row;
}

@media (max-width:1600px){
    .feature-block{
        flex-direction: column;
    }
}

</style>