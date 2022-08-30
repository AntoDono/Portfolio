<template>
    <div class="z-20 relative w-[25vw] min-w-[300px] opacity-[10%]" ref="container">
        <div>
            <img class="logo" :src="`https://res.cloudinary.com/youweizhen/image/upload/c_scale,h_50,w_50/skills/${img_name.toLowerCase()}.png`" :alt="skill_name"/>
        </div>
        <div class="flex justify-between">
            <h2 class="text-white font-bogart">{{ skill_name }}</h2>
            <h2 class="text-white font-fenix">{{ skill_level }}</h2>
        </div>
        <div class="h-2 w-full bg-gray-500" ref="full">
            <div class="h-full bg-[#0f89f5] w-0" ref="load"></div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        img_name: {
            default: null,
            type: String
        },
        skill_name: {
            default: "Skill name",
            type: String
        },
        percent: {
            default: 0.75,
            type: Number
        },
        skill_level: {
            default: "level",
            type: String
        }
    },
    methods: {
        init() {
            this.$gsap.to(
                this.$refs['container'],
                {
                    autoAlpha: 1,
                    duration: 0.5,
                }
            )
            this.$gsap.to(
                this.$refs['load'],
                {
                    width: this.percent * this.$refs['full'].offsetWidth,
                    duration: 1.5,
                    ease: "steps(7)"
                }
            )
        }
    }
}

</script>

<style scope>
.logo {
    height: 50px;
    width: 50px;
    border-radius: 5px;
}
</style>