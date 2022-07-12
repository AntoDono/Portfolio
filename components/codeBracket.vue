<template>
    <div ref="whole">
        <div class="h-0.5 w-4 bg-accent2" ref="top"></div>
        <div class="h-0.5 w-4 bg-accent2" ref="bottom"></div>
        <div v-if="!start" class="absolute h-5 w-0.5 bg-accent2" ref="slash"></div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import gsap from "gsap"

export default defineComponent({
    setup() {
    },
    props: {
        start: {
            type: Boolean,
            default: true,
            require: false
        }
    },
    mounted(){
        if (this.start){
            gsap.set(this.$refs['top'], {rotate: -45, y:-4})
            gsap.set(this.$refs['bottom'], {rotate: 45, y:4})
        }else{
            gsap.set(this.$refs['top'], {rotate: 45, y:-4})
            gsap.set(this.$refs['bottom'], {rotate: -45, y:4})
            gsap.set(this.$refs['slash'], {y: -12, x: -5, rotate: 15})
            gsap.set(this.$refs['whole'], {x:8})
        }
    },
    name: "codeBracket"
})
</script>
