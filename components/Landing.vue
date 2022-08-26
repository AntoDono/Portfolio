<template>
    <div class="w-full h-[400vmin] z-10 relative bg-primary overflow-x-hidden" ref="trigger">
        <div class="fixed w-full h-full overflow-y-hidden flex justify-center items-center flex-col overflow-x-hidden">
            <div ref="l1"><glitch text="HI. I AM"/></div>
            <div ref="l2"><glitch text="YOUWEI"/></div>
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
                x: - 0.75 * this.$refs['l1'].offsetWidth
            }
        )

        gsap.set(
            this.$refs['l2'],
            {
                x: 0.75 * this.$refs['l2'].offsetWidth
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
                    end: "bottom-=45% top",
                    scrub: 2,
                },
                ease: "steps(12)",
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
