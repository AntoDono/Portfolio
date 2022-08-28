<template>
    <div class="fixed w-screen h-screen z-50 bg-primary flex flex-col justify-center items-center" ref="outer">
        <h2 aria-hidden="true" class="font-uni text-[10vmin] text-white glitch">
            Y
        </h2>
        <div class="w-[200px] h-1 bg-gray-300" ref="full">
            <div class="h-full w-0 bg-accent1" ref="load"></div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'

export default{
    mounted(){
        document.getElementsByTagName("html")[0].style.overflow = "hidden"

        let t1 = gsap.timeline()

        t1.to(
            this.$refs['load'],
            {
                ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})",
                width: this.$refs['full'].offsetWidth,
                duration: 2,
            },
        )

        t1.to(
            this.$refs['outer'],
            {
                autoAlpha: 0,
                duration: 0.5,
                ease: "power1.out",
                onComplete: ()=>{
                    document.getElementsByTagName("html")[0].style.overflow = "auto"
                }
            },
        )
    }
}

</script>

<style scoped>
.glitch {
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    color: white;

    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

    animation: glitch 1000ms infinite;
}

.glitch span {
    position: absolute;
    top: 0;
    left: 0;
}

.glitch span:first-child {
    animation: glitch 750ms infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-0.025em, -0.0125em);
    /* color: green; */
    opacity: 0.8;
}

.glitch span:last-child {
    animation: glitch 675ms infinite;
    clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
    transform: translate(0.0125em, 0.025em);
    /* color: red; */
    opacity: 0.8;
}

/* https://web.dev/prefers-reduced-motion/#(bonus)-forcing-reduced-motion-on-all-websites */

@keyframes glitch {
    0% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
            -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
            -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }

    14% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
            -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
            -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }

    15% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
            0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
            -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }

    49% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
            0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
            -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }

    50% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
            0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }

    99% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
            0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }

    100% {
        text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
            -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
            -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
}

</style>