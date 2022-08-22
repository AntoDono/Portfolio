<template>
    <div class="overflow-y-hidden flex justify-center" ref="title">
        <h3 class="text-[10vmin] text-white font-uni text-center" ref="text">{{title}}</h3>
    </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
    props: {
        title: {
            type: String,
            default: "Title here"
        },
        stroke: {
            type: Boolean,
            default: false
        },
        direction: {
            type: String,
            default: 'left'
        }
    },
    mounted(){
        if (this.stroke) this.$refs['text'].classList.add('stroke')

        gsap.registerPlugin(ScrollTrigger)

        gsap.to(
            this.$refs['title'], 
            { 
                scrollTrigger: {
                    trigger: this.$refs['title'],
                    markers: false,
                    start: "top center-=200px",
                    end: "bottom+=200px center-=200px",
                    toggleActions: "play none reverse none",
                    scrub: true
                },
                x: this.direction == 'left' ? -this.$refs['title'].offsetWidth/2 : this.$refs['title'].offsetWidth/2,
                ease: "power1.out" 
            }
        )
    }
}

</script>

<style scoped>
.stroke{
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    -webkit-text-fill-color: transparent;
}

</style>