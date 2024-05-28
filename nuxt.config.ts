// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
      public: {
          OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      }
    },
    // target: 'static',
    css: ['~/assets/css/tailwind.css', '~/assets/css/font.css', '~/assets/css/global.css'],
    // plugins: ['~/plugins/gsap.js'],
    // Global page headers: https://go.nuxtjs.dev/config-head
    app:{
        head: {
          title: 'Youwei Zhen Portfolio Site',
          htmlAttrs: {
            lang: 'en'
          },
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Youwei Zhen\'s Portfolio Site' },
            { name: 'format-detection', content: 'telephone=no' },
          ],
          link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
