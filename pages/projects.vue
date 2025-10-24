<template>
    <div>
        <displayprojects />
    </div>
</template>

<script setup>
import displayprojects from '../components/Projects/displayprojects.vue';

// SEO Meta Tags
useHead({
  title: 'Projects | Youwei Zhen',
  meta: [
    { 
      hid: 'description', 
      name: 'description', 
      content: 'Featured projects by Youwei Zhen including 4Real (HackHarvard 2025), Duelingo (2nd Place BigRedHacks 2025), tempoRoll (1st Place HackMIT 2025), and more innovative AI and web applications.' 
    },
    { 
      hid: 'keywords', 
      name: 'keywords', 
      content: 'Youwei Zhen Projects, 4Real, Duelingo, tempoRoll, HackMIT, BigRedHacks, AI Projects, Web Development, Machine Learning Projects, SammyGPT, BOTISITIVTY' 
    },
    // Open Graph
    { hid: 'og:title', property: 'og:title', content: 'Projects | Youwei Zhen' },
    { hid: 'og:description', property: 'og:description', content: 'Featured projects including award-winning hackathon projects: 4Real, Duelingo, tempoRoll, and more.' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: 'https://youweizhen.com/projects' },
    { hid: 'og:image', property: 'og:image', content: 'https://youweizhen.com/projects/4real.jpg' },
    // Twitter Card
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'Projects | Youwei Zhen' },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Featured projects including award-winning hackathon projects: 4Real, Duelingo, tempoRoll, and more.' },
    { hid: 'twitter:image', name: 'twitter:image', content: 'https://youweizhen.com/projects/4real.jpg' },
  ],
  link: [
    { rel: 'canonical', href: 'https://youweizhen.com/projects' }
  ]
})

</script>