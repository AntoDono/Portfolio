<template>
    <div class="overflow-y-hidden" ref="container">
        <h2 class="text-[7vmin] text-header-accent font-uni overflow-y-hidden" ref="appear">
            {{ text }}
        </h2>
    </div>
</template>

<script setup>

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

const appear = ref(null)
const container = ref(null)

const props = defineProps({
    text: {
        type: String,
        default: "Section Text"
    },
    direction: {
        type: String,
        default: 'N'
    }
})

onMounted(()=>{

    gsap.set(
        appear.value,
        {
            x: props.direction == 'W' ? appear.value.offsetWidth : props.direction == 'E' ? -appear.value.offsetWidth : 0,
            y: props.direction == 'N' ? appear.value.offsetHeight : props.direction == 'S' ? -appear.value.offsetHeight : 0
        }
    )

    gsap.to(
        appear.value,
        {
            scrollTrigger: {
                trigger: container.value,
                markers: false,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none none",
            },
            y: 0,
            x: 0,
            ease: "power1.inOut"
        }
    )
})


</script>


<style scoped>
.text-header-accent {
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
}

/* .text-header-accent:after {
  content: "";
  position: absolute;
  bottom: 0;
  top: 0.75em;
  left: 30%;
  right: 0em;
  height: 1em;
  border-top: 1px solid white;
} */

.text-header-accent:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 50px;
    height: 5px;
    margin-left: 2%;
    border-top: 1px solid #fff;
    /* border-bottom:1px solid #fff; */
}

.text-header-accent:after {
    width: 100%;
    margin-right: -100%;
}
</style>