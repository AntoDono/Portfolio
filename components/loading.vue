<template>
    <div class="fixed w-screen h-screen pt-24 pb-24 z-50 bg-primary flex flex-col justify-center items-center" ref="outer">
        <loadingText class="text-3xl" text="YOUWEI ZHEN" :percentage="percentRef * 100" />
        <!-- <div class="w-[300px] h-1 bg-gray-300" ref="full">
            <div class="h-full w-0 bg-accent1" ref="load"></div>
        </div> -->
    </div>
</template>


<script setup>

import { gsap } from "gsap"

const props = defineProps({
    percent: {
        default: 0,
        type: Number
    }
})

const emits = defineEmits(['loadingComplete'])

// const full = ref(null)
// const load = ref(null)
const outer = ref(null)
const timeline = gsap.timeline()
const time = Date.now()
const percentRef = ref(0)

const sleep = async(ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

watch( ()=> props.percent, async(nv, ov)=>{

    // timeline.to(
        
    //     load.value,
    //     {
    //         ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})",
    //         width: nv * full.value.offsetWidth,
    //         duration: 1,
    //     },
    // )

    if (nv == 1){ // completed loading

        if (Date.now() - time < 1000) {
            for (let i = 0; i <= 100; i++) {
                await sleep(10)
                percentRef.value = i / 100
            }
            await sleep(500)
        }

        timeline.to(
            outer.value,
            {
                autoAlpha: 0,
                duration: 1,
                ease: "power1.out",
                onComplete: () => {
                    document.getElementsByTagName("html")[0].style.overflow = "auto"
                    emits('loadingComplete')
                }
            },
        )
    } else {
        if (Date.now() - time > 300) { // only update if percent update is not too fast
            percentRef.value = nv
        }
    }
})

onMounted(async() => {
    document.getElementsByTagName("html")[0].style.overflow = "hidden"
})

</script>