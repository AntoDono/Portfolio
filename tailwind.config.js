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
          "sf": ['SF'],
          "avenir": ['Avenir'],
          "orbitron": ['Orbitron'],
          "orbitronbold": ['OrbitronBold'],
          "phantom": ['Phantom'],
          "uni": ['UniSans']
        },
        colors: {
          darkmode: {
            "primary": "0a0a0a",
            "secondary": "#00396b",
            "accent1": "#4817eb",
            "accent2": "#40d9ff"
          },
          "primary": "#111",
          "secondary": "#1c1c1c",
          "background": "#262626",
          "accent1": "#16aaff"
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };