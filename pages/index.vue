<template>
  <div>
    <client-only>
      <terrain />
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
