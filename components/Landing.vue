<template>
    <div class="z-20 relative h-screen flex items-center justify-center">
        <h1 class="text-white text-9xl overflow-y-hidden font-phantom">YOUWEI</h1>
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
.pic{
    height: 500px;
    width: 500px;
}

@media (max-width:700px) {
    .pic{
        height: 300px;
        width: 300px;
    }
}
</style>
