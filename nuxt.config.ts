// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    // target: 'static',
    css: ['~/assets/css/tailwind.css', '~/assets/css/font.css', '~/assets/css/global.css', '~/assets/css/common.css'],
    // plugins: ['~/plugins/gsap.js'],
    // Global page headers: https://go.nuxtjs.dev/config-head
    app:{
        head: {
          title: 'Youwei Zhen | Full Stack Developer & AI Engineer',
          htmlAttrs: {
            lang: 'en'
          },
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Full Stack Developer and AI Engineer specializing in web development, machine learning, and innovative applications. Winner of HackMIT, BigRedHacks, and multiple hackathons.' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'author', content: 'Youwei Zhen' },
            { name: 'keywords', content: 'Youwei Zhen, Full Stack Developer, AI Engineer, Machine Learning, Web Development, React, Vue, Nuxt, Python, JavaScript, TypeScript, Portfolio' },
            
            // Open Graph
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:title', property: 'og:title', content: 'Youwei Zhen | Full Stack Developer & AI Engineer' },
            { hid: 'og:description', property: 'og:description', content: 'Full Stack Developer and AI Engineer specializing in web development, machine learning, and innovative applications. Winner of HackMIT, BigRedHacks, and multiple hackathons.' },
            { hid: 'og:image', property: 'og:image', content: 'https://youweizhen.com/og-image.jpg' },
            { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
            { hid: 'og:image:height', property: 'og:image:height', content: '630' },
            { hid: 'og:url', property: 'og:url', content: 'https://youweizhen.com' },
            { hid: 'og:site_name', property: 'og:site_name', content: 'Youwei Zhen Portfolio' },
            
            // Twitter Card
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:title', name: 'twitter:title', content: 'Youwei Zhen | Full Stack Developer & AI Engineer' },
            { hid: 'twitter:description', name: 'twitter:description', content: 'Full Stack Developer and AI Engineer specializing in web development, machine learning, and innovative applications.' },
            { hid: 'twitter:image', name: 'twitter:image', content: 'https://youweizhen.com/og-image.jpg' },
          ],
          link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'canonical', href: 'https://youweizhen.com' }
          ]
        },
    },
  
    // Global CSS: https://go.nuxtjs.dev/config-css
  
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      // https://go.nuxtjs.dev/tailwindcss
      '@nuxtjs/tailwindcss',
    ],
  
    // gsap: {
    //   extraPlugins: {
    //     scrollTrigger: true,
    //     scrollTo: true
    //   },
    // },
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    
    },
  
    generate: {
    //   fallback: "404"
    },
  
    // server: {
    //   host: "0.0.0.0",
    //   port: 80
    // }
})
