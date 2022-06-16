<template>
  <div class="h-[10000px] bg-gradient-to-t from-secondary via-[#00161c] to-primary">
    <Navbar/>
    <Landing/>
    <About/>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    name: "index"
})
</script>
