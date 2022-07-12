<template>
    <footer class="bg-primary">
        <div class="h-72 flex justify-center items-center flex-col">
            <h2 class="font-aileron text-4xl text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1">Youwei.</h2>
            <ul class="mt-5 flex text-[1.2rem] gap-x-8 font-aileron text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1">
                <li class=""><nuxt-link to="/">Skills</nuxt-link></li>
                <li class=""><nuxt-link to="/">Projects</nuxt-link></li>
                <li class=""><nuxt-link to="/">Contacts</nuxt-link></li>
            </ul>
            <div class="flex flex-row pt-5 gap-x-10">
                <socialMedia destination="https://github.com/AntoDono" image="github.png"/>
                <socialMedia destination="https://www.linkedin.com/in/youwei-zhen-a8b662213/" image="linkedin.png"/>
                <socialMedia destination="https://www.instagram.com/antodon0/" image="instagram.png"/>
            </div>
        </div>
    </footer>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    name: "Footer"
})
</script>

<style scoped>
.socialmedia{
    height: 3rem;
}
</style>