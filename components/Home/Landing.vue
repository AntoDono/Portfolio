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
                    <div class="flex items-center gap-1 whitespace-nowrap">
                        <span class="text-white font-fenix text-[4vmin] sm:text-[3.5vmin]">ML Engineer</span>
                        <span class="text-blue-400 font-fenix text-[4vmin] sm:text-[3.5vmin]">@</span>
                        <a class="text-blue-400 font-fenix text-[4vmin] sm:text-[3.5vmin] underline decoration-dotted" href="https://refine.dev" target="_blank">Refine.Dev</a>
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