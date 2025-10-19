<template>
  <div>
    <!-- Loading screen is just a visual overlay, content is always in DOM -->
    <ClientOnly>
      <loading :percent="percent" @loading-complete="handleLoadingComplete"/>
    </ClientOnly>
    
    <!-- Content is always rendered for crawlers/scrapers -->
    <main>
      <Landing @percentage="handlePercent" :is-done-loading="isDoneLoading"/>
      <Titles class="pt-48 pb-48" />
      <Featured/>
      <About />
      <Experience />
    </main>
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

// SEO Meta Tags and Structured Data
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
    { hid: 'og:image', property: 'og:image', content: 'https://youweizhen.com/og-image.png' },
    // Twitter Card
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'Youwei Zhen | Full Stack Developer & AI Engineer' },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Full Stack Developer and AI Engineer at Brown University. Winner of HackMIT 2025, BigRedHacks 2025.' },
    { hid: 'twitter:image', name: 'twitter:image', content: 'https://youweizhen.com/og-image.png' },
  ],
  link: [
    { rel: 'canonical', href: 'https://youweizhen.com' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Youwei Zhen",
        "url": "https://youweizhen.com",
        "image": "https://youweizhen.com/og-image.png",
        "jobTitle": ["Full Stack Developer", "AI Engineer", "Machine Learning Engineer"],
        "worksFor": {
          "@type": "Organization",
          "name": "Refine.Dev"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Brown University",
          "department": ["Applied Mathematics", "Computer Science"]
        },
        "description": "Full Stack Developer and AI Engineer specializing in web development, machine learning, and innovative applications. Winner of HackMIT 2025, BigRedHacks 2025, and multiple hackathons.",
        "sameAs": [
          "https://www.linkedin.com/in/youwei-zhen-a8b662213",
          "https://github.com/youweizhen"
        ],
        "knowsAbout": [
          "Artificial Intelligence",
          "Machine Learning",
          "Full Stack Development",
          "Web Development",
          "Python",
          "JavaScript",
          "TypeScript",
          "React",
          "Vue.js",
          "Nuxt.js",
          "Node.js"
        ],
        "award": [
          "1st Place at HackMIT 2025",
          "2nd Place Overall at Cornell BigRedHacks 2025",
          "1st Place at Emergent AI Conference 2025"
        ]
      })
    }
  ]
})

</script>
