<template>
    <div class="w-screen z-20 relative h-screen flex items-center justify-center flex-col">
        <div class="pr-[24vmin] overflow-hidden">
            <h1 class="text-white text-[20vmin] overflow-y-hidden font-uni intro" ref="l1">HI. I AM</h1>
        </div>
        <div class="pl-[24vmin] overflow-hidden">
            <h1 class="text-white text-[20vmin] overflow-y-hidden font-uni" ref="l2">YOUWEI.</h1>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import gsap from "gsap"

export default defineComponent({
    name: "Landing",
    setup() {
        
    },
    mounted(){
        gsap.set(this.$refs['l1'], {x: -this.$refs['l1'].offsetWidth})
        gsap.set(this.$refs['l2'], {y: this.$refs['l2'].offsetHeight})
        let timeline = gsap.timeline()
        timeline.to(this.$refs['l1'], {
            x: 0,
            duration: 0.7,
            ease: "power2.out"
        })
        timeline.to(this.$refs['l2'], {
            y: 0,
            duration: 0.7,
            ease: "power2.out"
        })
    }
})
</script>

<style scoped>

.intro{
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    -webkit-text-fill-color: transparent;
}

</style>
