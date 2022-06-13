module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    // './nuxt.config.{js,ts}',
  ],
  theme:{
    extend: {
      fontFamily:{
        'athene': ['Athene'],
        'voga': ['Voga'],
        'fenix': ['Fenix'],
        'aileron': ['Aileron'],
        'montserrat': ['Montserrat']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};