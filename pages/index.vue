<template>
  <div>
    <!-- <loading /> -->
    <landing />
    <About />
    <!-- <interests /> -->
    <!-- <timeline /> -->
    <Experience />
    <!-- <ScrollProgress/> -->
  </div>
</template>

<script>
import About from "../components/Home/About.vue"

export default {
  name: "index",
  head() {
    return {
      htmlAttrs: {
        lang: 'en'
      },
      title: "Youwei Zhen",
      meta: [
        { name: "description", content: "Youwei Zhen - Programmer | HS Student" },
      ]
    }
  }
}
</script>

