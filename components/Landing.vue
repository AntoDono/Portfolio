<template>
    <div class="w-screen z-20 relative h-screen flex items-center justify-center flex-col">
        <div class="pr-[25vmin]">
            <h1 class="text-white text-[20vmin] overflow-y-hidden font-phantom intro">HI. I AM</h1>
        </div>
        <div class="pl-[25vmin]">
            <h1 class="text-white text-[20vmin] overflow-y-hidden font-phantom">YOUWEI.</h1>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: "Landing",
    setup() {
        
    },
})
</script>

<style scoped>

.intro{
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    -webkit-text-fill-color: transparent;
}

</style>
