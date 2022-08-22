<template>
    <div class="w-screen h-[350vmin] z-10 relative bg-primary" ref="trigger">
        <div class="fixed top-0 w-full h-full  overflow-y-hidden">
            <svg style="opacity:0;position:fixed;z-index:-999" viewBox="0 0 1 1">
                <defs>
                    <clipPath id="clip" clipPathUnits="objectBoundingBox">
                        <text x="50%" y="0.25" font-size="0.25" text-anchor="middle" alignment-baseline="middle" ref="l1">HI. I AM</text>
                        <text x="50%" y="0.7" font-size="0.25" text-anchor="middle" alignment-baseline="middle" ref="l2">YOUWEI</text>
                    </clipPath>
                </defs>
            </svg>
            <video autoplay playsinline muted loop preload>
                <source src="~/assets/video/bg3.mp4" />
            </video>
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
                x: - 0.5
            }
        )

        gsap.set(
            this.$refs['l2'],
            {
                x: 0.5
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
                    markers: false,
                    start: "top top",
                    end: "bottom-=20% top",
                    scrub: 2,
                },
                x: 0,
            }
        )
    }
})
</script>

<style scoped>
body {
  background: linear-gradient(45deg, white 0%, blue 100%);
}
svg{
  font-family: UniSans;
}
video {
  -webkit-clip-path: url(#clip);
  clip-path: url(#clip);
  width: 100%;
  z-index: 1;
}
</style>
