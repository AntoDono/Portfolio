<template>
  <div>
    <client-only>
      <landing />
    </client-only>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    name: "about",
    head(){
      return {
        title: "About | Youwei Zhen"
      }
    }
})
</script>
