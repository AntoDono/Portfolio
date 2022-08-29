<template>
    <div class="overflow-y-hidden flex justify-center" ref="title">
        <h3 class="text-[10vmin] text-white font-uni text-center glitch" ref="text">{{title}}</h3>
    </div>
</template>

<script>

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

        this.$gsap.to(
            this.$refs['title'], 
            { 
                scrollTrigger: {
                    trigger: this.$refs['title'],
                    markers: false,
                    start: "top-=10% center-=20%",
                    end: "bottom center-=20%",
                    toggleActions: "play none reverse none",
                    scrub: true
                },
                x: this.direction == 'left' ? -this.$refs['title'].offsetWidth/2 : this.$refs['title'].offsetWidth/2,
                ease: "steps(5)" 
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

.glitch{
    color: white;
    text-shadow: 
        0.025em 0.05em 0 rgb(255, 215, 0);
}

</style>