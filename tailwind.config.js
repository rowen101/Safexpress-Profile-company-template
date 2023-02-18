module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
      extend: {
        container: {
          screens: {
            '2xl': '1440px'
          }
        }
      },
    },
    variants: {},
    plugins: [],
  }
  