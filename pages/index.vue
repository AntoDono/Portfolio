<template>
  <div>
    <loading :percent="percent" @loading-complete="handleLoadingComplete"/>
    <Landing @percentage="handlePercent" :is-done-loading="isDoneLoading"/>
    <Titles class="pt-48 pb-48" />
    <Featured/>
    <About />
    <Experience />
  </div>
</template>

<script setup>
import About from "../components/Home/About.vue"
import Landing from "../components/Home/Landing.vue"
import Experience from "../components/Home/Experience.vue"

const percent = ref(0)
const isDoneLoading = ref(false)

const handlePercent = (data)=>{
  percent.value = data.percent
}

const handleLoadingComplete = () => {
  isDoneLoading.value = true
}

</script>
