<template>
    <section class="relative flex flex-col justify-center items-center w-screen h-screen">
        <!-- 3D Background -->
        <ClientOnly>
            <ParticleSphere class="absolute inset-0 z-0" ref="particleSphereRef" @percentage="handlePercentage" />
        </ClientOnly>
        
        <!-- Content Layer -->
        <header class="absolute z-10 flex flex-col w-full">
            <div class="w-full flex justify-center">
                <h1>
                    <scrambledtext text="Hello, I am Youwei" class="font-bbhs text-white text-4xl md:text-6xl" mode="wait-for-animation" :animate="isDoneLoading" :delay="0"/>
                </h1>
            </div>
            <div class="w-full flex justify-center items-center flex-col gap-y-4">
                <div class="mt-4">
                    <scrambledtext text="APMA & CS" class="text-white font-fenix text-[5vmin] text-center sm:text-[3.5vmin]" mode="wait-for-animation" :animate="isDoneLoading" :delay="500"/>
                    <scrambledtext text=" @ Brown University" class="font-fenix text-yellow-400 text-[5vmin] sm:text-[3.5vmin] text-center" mode="wait-for-animation" :animate="isDoneLoading" :delay="1000" @animation-complete="handleReady" />
                </div>
                <Popup :show="t0" direction="E">
                    <div class="experience flex flex-col items-center gap-1.5 text-center font-fenix max-w-[92vw]">
                        <p class="text-[4vmin] sm:text-[3.5vmin] leading-snug">
                            <span class="text-white/95">SWE Intern</span>
                            <span class="text-accent1"> @ </span>
                            <a
                                class="experience-link experience-link--highlight"
                                href="https://www.amazon.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Amazon</a>
                        </p>
                        <p class="text-[3.2vmin] sm:text-[2.75vmin] text-white/40 leading-snug flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
                            <span class="text-white/25 text-[2.6vmin] sm:text-[2.25vmin] tracking-[0.2em] uppercase">Previously</span>
                            <span class="hidden sm:inline text-white/20" aria-hidden="true">·</span>
                            <a
                                class="experience-link"
                                href="https://www.spacex.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >SpaceX</a>
                            <span class="text-white/25" aria-hidden="true">·</span>
                            <a
                                class="experience-link"
                                href="https://www.refine.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Refine</a>
                        </p>
                    </div>
                </Popup>
            </div>
        </header>
        <div class="flex justify-center gap-x-7 absolute top-[60%] flex-wrap p-5 z-10 mt-8" role="list" aria-label="Key activities">
            <Popup :show="t1">
                <div role="listitem" class="text-white font-bogart text-[4vmin] sm:text-[3.5vmin]">AI-Maxxing</div>       
            </Popup>
            <Popup :show="t2">
                <div role="listitem" class="text-white font-bogart text-[4vmin] sm:text-[3.5vmin]">Creating</div>
            </Popup>
            <Popup :show="t3">
                <div role="listitem" class="text-white font-bogart text-[4vmin] sm:text-[3.5vmin]">Side Questing</div>
            </Popup>
        </div>
        <nav class="absolute w-full bottom-[10%] flex justify-center opacity-0 z-10" ref="ArrowRef" aria-label="Scroll to content">
            <div class="animate-bounce hover:cursor-pointer">
                <button @click="scroll" aria-label="Scroll down to view more content">
                    <img class="rotate-90 h-[10vmin]" src="~/assets/images/pageselect.png" alt="arrow pointing down"/>
                </button>
            </div>
        </nav>
    </section>
</template>

<script setup>
import gsap from "gsap"
import { ref } from 'vue'
import ParticleSphere from './ParticleSphere.vue'

const props = defineProps({
    isDoneLoading: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(['percentage'])

const particleSphereRef = ref(null)
const t0 = ref(false)
const t1 = ref(false)
const t2 = ref(false)
const t3 = ref(false)
const ArrowRef = ref(null)

const handlePercentage = (data) => {
    emits('percentage', data)
}

const handleReady = async () => {
    // The ParticleSphere now handles its own talk effects
    t0.value = true
    await sleep(600)
    t1.value = true
    await sleep(600)
    t2.value = true
    await sleep(600)
    t3.value = true
    await sleep(600)

    gsap.to(ArrowRef.value, {
        duration: 1,
        alpha: 1,
        ease: "power1.easeOut"
    })
}

const scroll = () => {
    gsap.to(window, { duration: 0.15, ease: "power1.inOut", scrollTo: "#titles"})
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
</script>

<style scoped>
.experience-link {
    color: rgb(163 163 163);
    text-decoration: underline;
    text-decoration-color: rgb(255 255 255 / 0.15);
    text-underline-offset: 0.2em;
    transition: color 0.2s ease, text-decoration-color 0.2s ease;
}

.experience-link:hover {
    color: var(--hover_link);
    text-decoration-color: rgb(22 170 255 / 0.45);
}

.experience-link--highlight {
    color: #16aaff;
    text-decoration-color: rgb(22 170 255 / 0.35);
}

.experience-link--highlight:hover {
    color: var(--hover_link);
    text-decoration-color: rgb(22 170 255 / 0.45);
}
</style>