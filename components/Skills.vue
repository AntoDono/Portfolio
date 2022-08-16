<template>
    <div class="flex flex-wrap justify-center gap-x-10 gap-y-5" ref="skills">
        <skill img_name="python" ref="python" />
        <skill img_name="java" ref="java" />
        <skill img_name="js" ref="js" />
        <skill img_name="c" ref="c" />
        <skill img_name="c++" ref="c++" />
        <skill img_name="r" ref="r" />
        <skill img_name="html" ref="html" />
        <skill img_name="css" ref="css" />
        <skill img_name="vue" ref="vue" />
        <skill img_name="react" ref="react" />
        <skill img_name="nuxt" ref="nuxt" />
        <skill img_name="mongo" ref="mongo" />
        <skill img_name="nginx" ref="nginx" />
        <skill img_name="rasa" ref="rasa" />
        <skill img_name="graphql" ref="graphql" />
    </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
    data() {
        return {
            skills: [
                "python",
                "java",
                "js",
                "c",
                "c++",
                "r",
                "html",
                "css",
                "vue",
                "react",
                "nuxt",
                "mongo",
                "nginx",
                "rasa",
                "graphql",
            ]
        }
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(
            this.$refs['skills'],
            {
                scrollTrigger: {
                    trigger: this.$refs['skills'],
                    markers: false,
                },
                onUpdate: this.show,
                duration: 0
            }
        )
    },
    methods: {
        show() {
            let tl = gsap.timeline()
            this.skills.forEach((e) => {
                tl.to(this.$refs[e], {
                    duration: 0.5,
                    ease: "power1.out",
                    onStart: ()=>{
                        this.$refs[e].init()
                    }
                })
            })
        }
    }
}

</script>