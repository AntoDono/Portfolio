<template>
  <div>
    <StructuredData />
    <ClientOnly>
      <loading :percent="percent" @loading-complete="handleLoadingComplete"/>
      <Landing @percentage="handlePercent" :is-done-loading="isDoneLoading"/>
      <Titles class="pt-48 pb-48" />
      <Featured/>
      <About />
      <Experience />
    </ClientOnly>
  </div>
</template>

<script setup>
import About from "../components/Home/About.vue"
import Landing from "../components/Home/Landing.vue"
import Experience from "../components/Home/Experience.vue"
import StructuredData from "../components/SEO/StructuredData.vue"

const percent = ref(0)
const isDoneLoading = ref(false)

const handlePercent = (data)=>{
  percent.value = data.percent
}

const handleLoadingComplete = () => {
  isDoneLoading.value = true
}

// SEO Meta Tags
useHead({
  title: 'Youwei Zhen | Full Stack Developer & AI Engineer',
  meta: [
    { 
      hid: 'description', 
      name: 'description', 
      content: 'Full Stack Developer and AI Engineer at Brown University. Winner of HackMIT 2025, BigRedHacks 2025. Specializing in web development, machine learning, and AI applications.' 
    },
    { 
      hid: 'keywords', 
      name: 'keywords', 
      content: 'Youwei Zhen, Brown University, Full Stack Developer, AI Engineer, Machine Learning, HackMIT Winner, BigRedHacks, Web Development, React, Vue, Nuxt, Python, JavaScript' 
    },
    // Open Graph
    { hid: 'og:title', property: 'og:title', content: 'Youwei Zhen | Full Stack Developer & AI Engineer' },
    { hid: 'og:description', property: 'og:description', content: 'Full Stack Developer and AI Engineer at Brown University. Winner of HackMIT 2025, BigRedHacks 2025.' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: 'https://youweizhen.com' },
    { hid: 'og:image', property: 'og:image', content: 'https://youweizhen.com/og-image.jpg' },
    // Twitter Card
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'Youwei Zhen | Full Stack Developer & AI Engineer' },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Full Stack Developer and AI Engineer at Brown University. Winner of HackMIT 2025, BigRedHacks 2025.' },
    { hid: 'twitter:image', name: 'twitter:image', content: 'https://youweizhen.com/og-image.jpg' },
  ],
  link: [
    { rel: 'canonical', href: 'https://youweizhen.com' }
  ]
})

</script>
