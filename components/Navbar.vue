<template>
    <nav class="fixed w-full bg-primary flex flex-row p-3 justify-between items-center">
        <div>
            <h2 class="text-[3.2rem] font-aileron text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1">YZ</h2>
        </div>
        <div>
            <NuxtLink to="/" class="text-[1.3rem] text-white font-montserrat pl-2 pr-2">Work</NuxtLink>
            <NuxtLink to="/" class="text-[1.3rem] text-white font-montserrat pl-2 pr-2">About</NuxtLink>
            <NuxtLink to="/" class="text-[1.3rem] text-white font-montserrat pl-2 pr-2">Contact</NuxtLink>
        </div>
    </nav>
</template>

<script>
export default defineComponent({
    name: "Navbar",
    setup() {}
})
</script>
