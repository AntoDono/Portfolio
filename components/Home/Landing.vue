<template>
    <div class="relative flex flex-col justify-center items-center w-screen h-screen">
        <!-- 3D Background -->
        <ParticleSphere class="absolute inset-0 z-0" ref="particleSphereRef" @percentage="handlePercentage" @ready="handleReady" />
        
        <!-- Content Layer -->
        <div class="absolute z-10">
            <scrambledtext text="Hello, I am Youwei" class="font-bogart text-white text-4xl md:text-6xl" mode="wait-for-animation" :animate="isDoneLoading" :delay="0"/>
            <h2 class="text-white font-bogart text-[3.5vmin] text-center">APMA & CS
                <span class="relative bottom-1">@</span>
                <a class="text-yellow-400" href="https://www.brown.edu/" target="_blank">Brown University</a>
            </h2>
        </div>
        <div class="flex justify-center gap-x-7 absolute top-[60%] flex-wrap p-5 z-10">
            <PopupText :show="t1" text="Machine Learning" size="text-[3.5vmin]"/>
            <PopupText :show="t2" text="Artificial Intelligence" size="text-[3.5vmin]"/>
            <PopupText :show="t3" text="Programmer" size="text-[3.5vmin]"/>
        </div>
        <div class="absolute w-full bottom-[10%] flex justify-center opacity-0 z-10" ref="ArrowRef">
            <div class="animate-bounce hover:cursor-pointer">
                <div @click="scroll">
                    <img class="rotate-90 h-[10vmin]" src="~/assets/images/pageselect.png" alt="arrow pointing down"/>
                </div>
            </div>
        </div>
    </div>
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
const t1 = ref(false)
const t2 = ref(false)
const t3 = ref(false)
const ArrowRef = ref(null)

const handlePercentage = (data) => {
    emits('percentage', data)
}

const handleReady = async () => {
    // The ParticleSphere now handles its own talk effects
    await sleep(1000)
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