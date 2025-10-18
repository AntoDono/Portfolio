<template>
  <div></div>
</template>

<script setup>
// Add JSON-LD Structured Data for better SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Youwei Zhen",
        "url": "https://youweizhen.com",
        "image": "https://youweizhen.com/og-image.jpg",
        "sameAs": [
          "https://github.com/youweizhen",
          "https://linkedin.com/in/youwei-zhen"
        ],
        "jobTitle": "Full Stack Developer & AI Engineer",
        "worksFor": {
          "@type": "Organization",
          "name": "Brown University"
        },
        "alumniOf": {
          "@type": "Organization",
          "name": "Brown University"
        },
        "knowsAbout": [
          "Full Stack Development",
          "Artificial Intelligence",
          "Machine Learning",
          "Web Development",
          "Python",
          "JavaScript",
          "TypeScript",
          "React",
          "Vue.js",
          "Node.js"
        ],
        "award": [
          "1st Place HackMIT 2025 (Cerebras Track)",
          "1st Place Cornell BigRedHacks 2025",
          "HackHarvard 2025 Participant"
        ]
      })
    }
  ]
})
</script>

