<template>
  <div>
    <loading :percent="percent"/>
    <Landing @percentage="handlePercent"/>
    <About />
    <!-- <interests /> -->
    <!-- <timeline /> -->
    <Experience />
    <!-- <ScrollProgress/> -->
  </div>
</template>

<script setup>
import About from "../components/Home/About.vue"
import Landing from "../components/Home/Landing.vue"
import Experience from "../components/Home/Experience.vue"

const percent = ref(0)

const handlePercent = (data)=>{
  percent.value = data.percent
}

</script>

<!-- 
<script>
import About from "../components/Home/About.vue"
import Landing from "../components/Home/Landing.vue"
import Experience from "../components/Home/Experience.vue"

export default {
  name: "index",
  data(){
    return {
      percent: 0
    }
  },
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
  methods:{
    handlePercent(data){
      this.percent = data.percent
    }
  },
  components:{
    About,
    Landing,
    Experience
  }
}
</script>
 -->
