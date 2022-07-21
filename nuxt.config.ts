import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    css: ['~/assets/css/tailwind.css', '~/assets/css/font.css', '~/assets/css/global.css'],
    build: {
        postcss: {
          postcssOptions: require('./postcss.config.js'),
        },
    },
    router: {

    },
})
