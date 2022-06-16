<template>
    <div class="h-[200vh] bg-primary flex justify-center items-start">
        <div class="flex justify-around w-[70vw] flex-wrap border-2 border-white">
            <img src="~/assets/images/rimuru.png" class="h-[500px] w-[500px] rounded-xl"/>
            <div class="w-[500px] basis-auto">
                <h2 class="text-white text-[4vmin] font-bogart text-left">I'm Youwei Zhen,</h2>
                <p class="text-white font-montserrat">a passionate high school student in the field of computer science and entrepreneurship.</p>
                <p class="text-white font-montserrat pt-4">
                    Over the past two years, I have developed and created two organizations:
                    <nuxt-link to="https://botsitivity.org" class="underline decoration-dotted" target="_blank">BOTSITIVITY INC</nuxt-link> 
                    and <nuxt-link to="https://privacysavior.com" class="underline decoration-dotted" target="_blank">PrivacySavior LLC</nuxt-link>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: "About",
    setup() {
        
    },
})
</script>
