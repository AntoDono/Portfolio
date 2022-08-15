<template>
  <div>
    <Landing />
    <Titles class="mt-[20vh]"/>
    <About class="mt-[20vh]"/>
    <Skills />
    <client-only>
      <Terrain />
    </client-only>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    name: "index",
    head(){
      return {
        title: "Youwei Zhen"
      }
    }
})
</script>
