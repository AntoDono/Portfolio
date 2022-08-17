<template>
    <div class="w-screen h-[500vmin] z-20 relative">
        <div class="fixed flex justify-center items-center flex-col w-full" ref="trigger">
            <h1 class="text-white text-[35vmin] overflow-y-hidden font-uni intro" ref="l1">HI. I AM</h1>
            <h1 class="text-white text-[35vmin] overflow-y-hidden font-uni" ref="l2">YOUWEI.</h1>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from "gsap"

export default defineComponent({
    name: "Landing",
    setup() {

    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger)

        gsap.set(
            this.$refs['l1'],
            {
                x: - this.$refs['l1'].offsetWidth
            }
        )

        gsap.set(
            this.$refs['l2'],
            {
                x: window.innerWidth / 2 + this.$refs['l2'].offsetWidth / 5
            }
        )

        gsap.to(
            [
                this.$refs['l1'],
                this.$refs['l2']
            ],
            {
                scrollTrigger: {
                    trigger: this.$refs['trigger'],
                    markers: true,
                    start: "top top",
                    end: "bottom+=100% top",
                    scrub: true,
                    onEnter: () => { console.log("entered") }
                },
                x: 0,
            }
        )
    }
})
</script>

<style scoped>
.intro {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    -webkit-text-fill-color: transparent;
}

.cutout {
    background: none;
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent
}
</style>
