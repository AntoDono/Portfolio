<template>
    <div class="fixed z-50 flex flex-row w-full bg-transparent ease-in-out duration-300 menu-container" ref="menu-container">
        <div class="bg-transparent rounded-full w-[5em] h-[5em] flex justify-center items-center relative menu-button z-[70]" ref="menu-button" @click="activate">
            <glitch class="highlight" text="Y" size="2.5em"/>
        </div>
        <div class="mobile-detect bg-primary w-full flex flex-row justify-start items-center gap-x-10 p-3 z-40" ref="menu-options">
            <nuxt-link to="/" class="text-white text-[0.8em] font-uni">Home</nuxt-link>
            <nuxt-link to="/#about" class="text-white text-[0.8em] font-uni">About</nuxt-link>
            <nuxt-link to="projects" class="text-white text-[0.8em] font-uni">Projects</nuxt-link>
            <a href="mailto:youweizhen540@gmail.com" class="text-white text-[0.8em] font-uni">Contact</a>
            <nuxt-link to="/chat" class="text-white text-[0.8em] font-uni">Live Chat</nuxt-link>
        </div>
        <div class="bg-primary flex flex-col justify-center items-center gap-x-10 gap-y-10 p-3 z-[60] fixed w-full h-screen translate-x-[-100%]" ref="mobile-menu">
            <nuxt-link to="/" class="text-white text-[1.5em] font-uni">Home</nuxt-link>
            <nuxt-link to="/#about" class="text-white text-[1.5em] font-uni">About</nuxt-link>
            <nuxt-link to="projects" class="text-white text-[1.5em] font-uni">Projects</nuxt-link>
            <a href="mailto:youweizhen540@gmail.com" class="text-white text-[1.5em] font-uni">Contact</a>
            <nuxt-link to="/chat" class="text-white text-[1.5em] font-uni">Live Chat</nuxt-link>
        </div>
    </div>
</template>

<script>
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

export default {
    name: "navbar",
    data(){
        return {
            prevScrollpos: 0,
            currentScrollPos: 0,
            active: false,
            mobile: false,
        }
    },
    mounted(){
        gsap.set(
            this.$refs['menu-options'],
            {
                x: - 1.5 * this.$refs['menu-options'].offsetWidth
            }
        )
        this.prevScrollpos = window.pageYOffset;
        this.currentScrollPos = window.pageYOffset;
        window.onscroll = this.scroll
        if (window.innerWidth <= 800) this.mobile = true
        if (!this.mobile) this.activate()
    },
    methods: {
        scroll(){
            this.currentScrollPos = window.pageYOffset;
            if (this.prevScrollpos > this.currentScrollPos) {
                this.$refs['menu-container'].style.top = "0";
            } else {
                this.$refs['menu-container'].style.top = `-${this.$refs['menu-container'].offsetHeight}px`;
            }
            this.prevScrollpos = this.currentScrollPos;
        },
        preventScroll(event) {
            window.scrollTo(0, 0)
        },
        activate(){
            this.active = !this.active

            let t1 = gsap.timeline()
            t1.to(
                this.$refs['menu-button'],
                {
                    rotate: 270 * this.active,
                    duration: 0.25,
                    ease: "power1.out"
                }
            )

            if (this.mobile){
                t1.to(this.$refs['mobile-menu'], {
                    x: !this.active * - this.$refs['mobile-menu'].offsetWidth,
                    duration: 1
                })

                if (this.active){ // disable scroll
                    window.addEventListener('scroll', this.preventScroll, { passive: false });
                }else{
                    window.removeEventListener('scroll', this.preventScroll);
                }

                return
            }

            t1.to(
                this.$refs['menu-options'],
                {
                    x: !this.active * - this.$refs['menu-options'].offsetWidth,
                    duration: 0.5,
                    ease: "power1.out"
                }
            )
        }
    }
}

</script>

<style>

.menu-button{
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non */
    transition: all ease 0.2s;
}

.menu-button:hover{
    cursor: pointer;
}

.glitch {
    text-transform: uppercase;
    position: relative;
    color: white;

    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

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

.highlight{
    animation: 1.7s enlarge infinite ease-in-out;
}

@keyframes enlarge{
  0%{
    transform: scale(150%);
  }
  50%{
    transform: scale(100%);
  }
  100%{
    transform: scale(150%);
  }
}

.mobile-detect{
    display: flex;
}

@media  (max-width: 800px) {
    .mobile-detect{
        display: none;
    }
}

</style>

