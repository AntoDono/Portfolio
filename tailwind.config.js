module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './*.vue'
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
      },
      colors: {
        "primary": "#111",
        "secondary": "#00396b",
        "accent1": "#4817eb",
        "accent2": "#40d9ff"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};