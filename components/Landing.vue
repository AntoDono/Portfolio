<template>
    <div class="h-[100vh] bg-gradient-to-t from-[#00396b] via-[#00161c] to-primary flex justify-center items-center">
        <div>
            <h1 class="text-[10vmin] text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1 font-aileron">Hi. I am Youwei</h1>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineComponent({
    setup() {
        gsap.registerPlugin(ScrollTrigger)
    },
    name: "Landing"
})
</script>
