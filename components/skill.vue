<template>
    <div class="z-20 relative w-[25vw] min-w-[400px] opacity-[10%]" ref="container">
        <div>
            <img class="logo" :src="`../assets/images/skills/${img_name}.png`" />
        </div>
        <div class="flex justify-between">
            <h2 class="text-white font-uni">{{ skill_name }}</h2>
            <h2 class="text-white font-uni">{{ skill_level }}</h2>
        </div>
        <div class="h-2 w-full bg-gray-500 rounded" ref="full">
            <div class="h-full bg-blue-400 w-0" ref="load"></div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'

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
            gsap.to(
                this.$refs['container'],
                {
                    autoAlpha: 1,
                    duration: 0.5
                }
            )
            gsap.to(
                this.$refs['load'],
                {
                    width: this.percent * this.$refs['full'].offsetWidth,
                    duration: 1.5
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