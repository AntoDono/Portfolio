<template>
    <div class="h-[7000px] flex justify-center items-center" ref="scroll">
        <div class="fixed top-[40%]" ref="container">
            <h1 class="opacity-0 text-[10vmin] text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 font-aileron" ref="name">Hi. I am Youwei.</h1>
            <ul class="text-center h-[6vmin] overflow-y-hidden" ref="titles">
                <div ref="titleScroller" class="top-0">
                    <li ref="r1" class="font-montserrat text-[4.5vmin] text-white">Web Developer</li>
                    <li ref="r2" class="font-montserrat text-[4.5vmin] text-white">Software Developer</li>
                    <li ref="r3" class="font-montserrat text-[4.5vmin] text-white">Entrepreneur</li>
                    <li ref="r4" class="font-montserrat text-[4.5vmin] text-white">Student</li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineComponent({
    name: "Landing",
    setup() {
        gsap.registerPlugin(ScrollTrigger)
    },
    data(){
        return {
            scrollPrevEnd: 3000,
            childHeight: null,
            currentY: 0,
            scrollInterval: 300,
            readInterval: 700,
        }
    },
    methods:{
        update_name(){
        }
    },
    mounted(){

        gsap.fromTo(this.$refs['name'], {scale: 0.5 ,autoAlpha: 0.1}, {
            autoAlpha:1,
            scale: 1,
            scrollTrigger: {
                trigger: this.$refs['scroll'],
                start: "100px top",
                end: "+=1000px +=100px",
                toggleActions: "play none reverse none",
                scrub: true,
                // markers: true,
                // onUpdate: function() { console.log(this.progress) }
            }
        })

        gsap.fromTo(this.$refs['titles'], { autoAlpha: 0},{
            autoAlpha: 1,
            scrollTrigger: {
                trigger: this.$refs['scroll'],
                start: "1500px top",
                end: "+=500px +=100px",
                toggleActions: "play none reverse none",
                scrub: true,
                // markers: true,
            }
        })


        this.childHeight = this.$refs['titleScroller'].children[0].offsetHeight

        for (let num = 0; num < this.$refs['titleScroller'].children.length-1; num++){

            gsap.fromTo(this.$refs['titleScroller'], {  },{
                y: this.currentY - this.childHeight,
                scrollTrigger: {
                    trigger: this.$refs['scroll'],
                    start: `${this.scrollPrevEnd} top`,
                    end: `+=${this.scrollInterval} +=100px`,
                    toggleActions: "play none reverse none",
                    scrub: 0.5,
                    // markers: true,
                }
            })
            this.currentY -= this.childHeight
            this.scrollPrevEnd += this.scrollInterval + this.readInterval
        }

        gsap.fromTo(this.$refs['container'], { scale: 1 },{
            scale: 0,
            scrollTrigger: {
                trigger: this.$refs['scroll'],
                start: `${this.scrollPrevEnd} top`,
                end: `+=${this.scrollInterval} +=100px`,
                toggleActions: "play none reverse none",
                scrub: 0.2,
                // markers: true,
            }
        })

    }
})
</script>
