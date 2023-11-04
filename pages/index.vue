<template>
  <div>
    <!-- <loading /> -->
    <Landing />
    <About />
    <!-- <interests /> -->
    <!-- <timeline /> -->
    <Experience />
    <!-- <ScrollProgress/> -->
  </div>
</template>

<script>
import About from "../components/Home/About.vue"
import Landing from "../components/Home/Landing.vue"
import Experience from "../components/Home/Experience.vue"

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
  },
  components:{
    About,
    Landing,
    Experience
  }
}
</script>

