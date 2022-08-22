<template>
  <div>
    <Landing/>
    <div class="z-20 relative bg-secondary">
        <Titles class="p-10"/>
        <About class="p-10"/>
        <Skills class="p-10"/>
    </div>
    <!-- <client-only>
      <Terrain class="w-full sticky" />
    </client-only> -->
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {

  },
  name: "index",
  head() {
    return {
      title: "Youwei Zhen"
    }
  }
})
</script>

