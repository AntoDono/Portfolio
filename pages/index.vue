<template>
  <div>
    <loading/>
    <landing/>
    <About/>
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
      title: "Youwei Zhen",
      meta: [
        { name: "description", content: "Youwei Zhen - Programmer | HS Student" }
      ]
    }
  }
})
</script>

