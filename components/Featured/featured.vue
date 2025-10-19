<template>
    <section class="bg-primary flex justify-center items-center pt-10 pb-10" aria-labelledby="featured-heading">
        <div class="w-full px-6">
            <div class="max-w-7xl mx-auto pb-20">
                <h2 id="featured-heading" class="sr-only">Featured On</h2>
                <SectionHeader text="Featured on"/>
            </div>
            <div ref="container" class="carousel-container" role="region" aria-label="Featured achievements carousel">
                <div class="featured-carousel-wrapper translate-y-[100%] opacity-0" ref="appear">
                    <div class="featured-carousel">
                        <FeaturedCard 
                            title="1st Place @ HackMIT" 
                            date="September 2025" 
                            imageSrc="/featured/hackmit.jpeg"
                            description="My team and I built tempoRoll - an AI-powered music therapy system that uses real-time EEG monitoring to help people with mental health conditions like schizophrenia, bipolar disorder, and ADHD. Our hybrid adaptation combines a real-time, in-house trained-from-scratch classification model with Cerebras's lightning-fast inference to detect brainwave imbalances and generate personalized music therapy that guides brainwaves back to baseline."
                            link="https://www.linkedin.com/posts/youwei-zhen-a8b662213_just-won-1st-place-in-the-cerebras-sponsor-activity-7373426633367654400-NAPw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADYGMYsB79hwIxSdH0wKsVQ-TTrxjUW93nk"
                        />
                        <FeaturedCard 
                            title="2nd Place Overall @ Cornell BigRedHacks" 
                            date="September 2025" 
                            imageSrc="/featured/bigredhacks.jpeg"
                            description="My team and I built Duelingo - the world's first non-deterministic language learning game where AI generates every combination in real-time. When seventy-one percent of Americans regret losing their foreign language skills due to boring, predictable apps, we knew we had to reimagine language learning entirely."
                            link="https://www.linkedin.com/posts/youwei-zhen-a8b662213_just-won-2nd-place-overall-at-cornells-bigred-activity-7376007735848361984-ndJU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADYGMYsB79hwIxSdH0wKsVQ-TTrxjUW93nk"
                        />
                        <FeaturedCard 
                            title="1st Place @ Emergent AI Conference" 
                            date="May 2025" 
                            imageSrc="/featured/emergent.jpeg"
                            description="In just 2 hours, my team and I built an AI Mock interviewing tool for medical students studying for the OSCE Exam. Using realtime video and text generation, we created an interview environment where the student can diagnose symptoms of the AI patient and receive feedback."
                            link="https://www.linkedin.com/posts/youwei-zhen-a8b662213_just-won-2nd-place-overall-at-cornells-bigred-activity-7376007735848361984-ndJU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADYGMYsB79hwIxSdH0wKsVQ-TTrxjUW93nk"
                        />
                        <FeaturedCard 
                            title="NASSP Leadership Magazine" 
                            date="December 2023" 
                            imageSrc="/featured/nassp.jpg"
                            description="As a high school senior, Zhen created Project SammyGPT, an AI service tailored to Staten Island Tech. Project SammyGPT contains an AI Generated Detection tool, and an AI Chatbot that could converse with parents in their native language and offer school information, complete with reference links from the school website. It's a significant step forward in integrating AI into the educational process."
                            link="https://www.nassp.org/publication/principal-leadership/volume-24-2023-2024/principal-leadership-december-2023/ahead-of-the-ai-curve/"
                        />
                        <!-- Duplicate for seamless loop -->
                        <FeaturedCard 
                            title="1st Place @ HackMIT" 
                            date="September 2025" 
                            imageSrc="/featured/hackmit.jpeg"
                            description="My team and I built tempoRoll - an AI-powered music therapy system that uses real-time EEG monitoring to help people with mental health conditions like schizophrenia, bipolar disorder, and ADHD. Our hybrid adaptation combines a real-time, in-house trained-from-scratch classification model with Cerebras's lightning-fast inference to detect brainwave imbalances and generate personalized music therapy that guides brainwaves back to baseline."
                            link="https://www.linkedin.com/posts/youwei-zhen-a8b662213_just-won-1st-place-in-the-cerebras-sponsor-activity-7373426633367654400-NAPw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADYGMYsB79hwIxSdH0wKsVQ-TTrxjUW93nk"
                        />
                        <FeaturedCard 
                            title="2nd Place Overall @ Cornell BigRedHacks" 
                            date="September 2025" 
                            imageSrc="/featured/bigredhacks.jpeg"
                            description="My team and I built Duelingo - the world's first non-deterministic language learning game where AI generates every combination in real-time. When seventy-one percent of Americans regret losing their foreign language skills due to boring, predictable apps, we knew we had to reimagine language learning entirely."
                            link="https://www.linkedin.com/posts/youwei-zhen-a8b662213_just-won-2nd-place-overall-at-cornells-bigred-activity-7376007735848361984-ndJU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADYGMYsB79hwIxSdH0wKsVQ-TTrxjUW93nk"
                        />
                        <FeaturedCard 
                            title="1st Place @ Emergent AI Conference" 
                            date="May 2025" 
                            imageSrc="/featured/emergent.jpeg"
                            description="In just 2 hours, my team and I built an AI Mock interviewing tool for medical students studying for the OSCE Exam. Using realtime video and text generation, we created an interview environment where the student can diagnose symptoms of the AI patient and receive feedback."
                            link="https://www.linkedin.com/posts/youwei-zhen-a8b662213_just-won-2nd-place-overall-at-cornells-bigred-activity-7376007735848361984-ndJU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADYGMYsB79hwIxSdH0wKsVQ-TTrxjUW93nk"
                        />
                        <FeaturedCard 
                            title="NASSP Leadership Magazine" 
                            date="December 2023" 
                            imageSrc="/featured/nassp.jpg"
                            description="As a high school senior, Zhen created Project SammyGPT, an AI service tailored to Staten Island Tech. Project SammyGPT contains an AI Generated Detection tool, and an AI Chatbot that could converse with parents in their native language and offer school information, complete with reference links from the school website. It's a significant step forward in integrating AI into the educational process."
                            link="https://www.nassp.org/publication/principal-leadership/volume-24-2023-2024/principal-leadership-december-2023/ahead-of-the-ai-curve/"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import gsap from "gsap"

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(ScrollToPlugin)
}

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

.carousel-container {
    overflow-x: auto;
    overflow-y: hidden;
    padding: 2.5rem 0;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: var(--hover_link) var(--secondary);
    cursor: grab;
}

.carousel-container:active {
    cursor: grabbing;
}

.carousel-container::-webkit-scrollbar {
    height: 8px;
}

.carousel-container::-webkit-scrollbar-track {
    background: var(--secondary);
    border-radius: 10px;
}

.carousel-container::-webkit-scrollbar-thumb {
    background: var(--hover_link);
    border-radius: 10px;
}

.carousel-container::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 187, 255, 0.8);
}

.featured-carousel-wrapper {
    width: 100%;
}

.featured-carousel {
    display: flex;
    gap: 2rem;
    animation: scroll 20s linear infinite;
    width: max-content;
}

.featured-carousel:hover {
    animation-play-state: paused;
}

.carousel-container:hover .featured-carousel {
    animation-play-state: paused;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-50%));
    }
}

@media (max-width: 768px) {
    .carousel-container {
        padding: 2rem 0;
    }
    
    .featured-carousel {
        gap: 1.25rem;
        animation: scroll 10s linear infinite;
    }
}

</style>