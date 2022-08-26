<template>
    <footer class="bg-primary z-20 relative h-36 flex justify-center items-center">
        <a href="https://github.com/AntoDono/Portfolio" target="_blank" class=" text-gray-300 font-fenix link">
            Designed & built by Youwei Zhen.
        </a>
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

.link:hover{
    transition: all ease 0.2s;
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
}

</style>
