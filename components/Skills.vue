<template>
    <div class="flex flex-wrap justify-center gap-x-10 gap-y-5" ref="skills">
        <skill 
            v-for="skill in skills" 
            :key="skill" :ref="skill.name" 
            :img_name="skill.name" :skill_name="skill.name" 
            :percent="skill.percent" :skill_level="skill.level"
        />
    </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
    data() {
        return {
            skills: [
                {name: "python", percent: 1, level: "proficient" },
                {name: "java", percent: 1, level: "proficient" },
                {name: "js", percent: 1, level: "proficient" },
                {name: "c", percent: 1, level: "proficient" },
                {name: "c++", percent: 1, level: "proficient" },
                {name: "r", percent: 1, level: "proficient" },
                {name: "html", percent: 1, level: "proficient" },
                {name: "css", percent: 1, level: "proficient" },
                {name: "vue", percent: 1, level: "proficient" },
                {name: "react", percent: 1, level: "proficient" },
                {name: "nuxt", percent: 1, level: "proficient" },
                {name: "mongo", percent: 1, level: "proficient" },
                {name: "nginx", percent: 1, level: "proficient" },
                {name: "rasa", percent: 1, level: "proficient" },
                {name: "graphql", percent: 1, level: "proficient" },
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
                    // start: "top center",
                    // end: "bottom bottom",
                    onEnter: this.show
                },
                duration: 0
            }
        )
    },
    methods: {
        show() {
            let tl = gsap.timeline()
            this.skills.forEach((e) => {
                tl.to(this.$refs[e.name][0], {
                    duration: 0.25,
                    ease: "power1.out",
                    onStart: ()=>{
                        this.$refs[e.name][0].init()
                    }
                })
            })
        }
    }
}

</script>