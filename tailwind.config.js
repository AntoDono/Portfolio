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
        'montserrat': ['Montserrat'],
        'moderne': ['Moderne'],
        "chelsea": ['Chelsea'],
        "neovixbold": ['NeovixBold'],
        "bogart": ['Bogart'],
        "sf": ['SF']
      },
      colors: {
        darkmode: {
          "primary": "#111",
          "secondary": "#00396b",
          "accent1": "#4817eb",
          "accent2": "#40d9ff"
        },
        "primary": "#111",
        "secondary": "#1c1c1c",
        "background": "#262626",
        "accent1": "#4817eb",
        "accent2": "#40d9ff",
        "accent3": "#7d00d1",
        "accent4": "#63b5f7"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};