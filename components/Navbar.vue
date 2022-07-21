<template>
    <nav class="flex bg-primary flex-col w-full z-20 relative">
        <div class="flex justify-between items-center w-full p-5">
            <div class="font-aileron text-3xl text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1">
                <h2>Youwei.</h2>
            </div>
            <div>
                <ul class="flex text-[1.2rem] gap-x-8 font-aileron text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1">
                    <li class=""><nuxt-link to="/">Home</nuxt-link></li>
                    <li class=""><nuxt-link to="/about">About</nuxt-link></li>
                    <li class=""><nuxt-link to="/">Skills</nuxt-link></li>
                    <li class=""><nuxt-link to="/">Projects</nuxt-link></li>
                    <li class=""><nuxt-link to="/">Updates</nuxt-link></li>
                    <li class=""><nuxt-link to="/">Contacts</nuxt-link></li>
                </ul>
            </div>
        </div>
        <div class="h-0.5 w-full bg-gradient-to-r from-accent3 to-accent2"></div>
    </nav>
</template>

<script>
export default defineComponent({
    name: "Navbar",
    setup() {}
})
</script>
