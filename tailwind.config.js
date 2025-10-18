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
          'athene': ['Athene', 'Georgia', 'serif'],
          'voga': ['Voga', 'Georgia', 'serif'],
          'fenix': ['Fenix', 'Georgia', 'serif'],
          'aileron': ['Aileron', 'Arial', 'Helvetica', 'sans-serif'],
          'montserrat': ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
          'moderne': ['Moderne', 'Arial', 'Helvetica', 'sans-serif'],
          "chelsea": ['Chelsea', 'Arial', 'Helvetica', 'sans-serif'],
          "neovixbold": ['NeovixBold', 'Arial Black', 'sans-serif'],
          "bogart": ['Bogart', 'Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
          "sf": ['SF', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
          "avenir": ['Avenir', 'Arial', 'Helvetica', 'sans-serif'],
          "orbitron": ['Orbitron', 'Arial', 'sans-serif'],
          "orbitronbold": ['OrbitronBold', 'Arial Black', 'sans-serif'],
          "phantom": ['Phantom', 'Arial', 'sans-serif'],
          "uni": ['UniSans', 'Arial', 'sans-serif'],
          "bbhs": ['bbhs', 'Arial', 'Helvetica', 'sans-serif']
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