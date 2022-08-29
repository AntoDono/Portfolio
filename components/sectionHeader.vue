<template>
    <div class="overflow-y-hidden" ref="container">
        <h2 class="text-[7vmin] glitch font-uni overflow-y-hidden" ref="appear">
            {{text}}
        </h2>
    </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
    props: {
        text: {
            type: String,
            default: "Section Text"
        },
        direction: {
            type: String,
            default: 'N'
        }
    },
    mounted(){
        gsap.registerPlugin(ScrollTrigger)
        gsap.set(
            this.$refs['appear'],
            {
                x: this.direction == 'W' ? this.$refs['appear'].offsetWidth : this.direction == 'E' ? -this.$refs['appear'].offsetWidth : 0,
                y: this.direction == 'N'? this.$refs['appear'].offsetHeight : this.direction == 'S'? -this.$refs['appear'].offsetHeight : 0
            }
        )

        gsap.to(
            this.$refs['appear'], 
            { 
                scrollTrigger: {
                    trigger: this.$refs['container'],
                    markers: false,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none",
                },
                y: 0,
                x: 0,
                ease: "steps(5)"
            }
        )
    }
}

</script>


<style scoped>
.glitch {
    text-transform: uppercase;
    position: relative;
    color: white;
    text-shadow: 0.15em 0em 0 rgba(0, 187, 255, 0.958);
}

.glitch:after {
  content: "";
  position: absolute;
  bottom: 0;
  top: 0.75em;
  left: 5em;
  right: 0em;
  height: 1em;
  border-top: 1px solid white;
}

</style>