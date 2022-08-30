import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: ['~/assets/css/tailwind.css', '~/assets/css/font.css', '~/assets/css/global.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
    transpile: [
      'gsap'
    ],
  },
  modules:[
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ],
    '@nuxtjs/sitemap'
  ],
  generate: {
    fallback: "404.html"
  }
})
