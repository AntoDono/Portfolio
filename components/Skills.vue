<template>
    <div class="flex flex-wrap gap-x-10 gap-y-5 justify-center" ref="skills">
        <skill 
            v-for="skill in skills" 
            :key="skill" :ref="skill.name" 
            :img_name="skill.img_name" :skill_name="skill.name" 
            :percent="skill.percent" :skill_level="skill.level"
        />
    </div>
</template>

<script>

export default {
    data() {
        return {
            skills: [
                {name: "Python", img_name: "python", percent: 1, level: "Proficient" },
                {name: "Java", img_name: "java", percent: 0.6, level: "Intermediate" },
                {name: "JavaScript", img_name: "javascript", percent: 1, level: "Proficient" },
                {name: "C#", img_name: "csharp", percent: 0.5, level: "Intermediate" },
                {name: "C++", img_name: "cpp", percent: 1, level: "Proficient" },
                {name: "R", img_name: "r", percent: 0.5, level: "Intermediate" },
                {name: "Html", img_name: "html", percent: 1, level: "Proficient" },
                {name: "CSS", img_name: "css", percent: 1, level: "Proficient" },
                {name: "Vue", img_name: "vue", percent: 1, level: "Proficient" },
                {name: "React", img_name: "react", percent: 1, level: "Proficient" },
                {name: "Nuxt", img_name: "nuxt", percent: 1, level: "Proficient" },
                {name: "MongoDB", img_name: "mongodb", percent: 1, level: "Proficient" },
                {name: "Nginx", img_name: "nginx", percent: 1, level: "Proficient" },
                {name: "Rasa", img_name: "rasa", percent: 0.5, level: "Intermediate" },
                {name: "Graphql", img_name: "graphql", percent: 0.5, level: "Intermediate" },
            ]
        }
    },
    mounted() {
        this.$gsap.to(
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
            let tl = this.$gsap.timeline()
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