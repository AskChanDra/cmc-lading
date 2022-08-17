/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./modules/**/*.{js,ts}",
    "./*.{html,js}"
  ],
  theme: {
    screens: {
      'sm': '540px',
      'md': '720px',
      'lg': '960px',
      'xl': '1140px',
      '2xl': '1320px',
    },

    container: {
      center: true,
    },

    extend: {
      colors: {
        lightBlue: '#00deff',
        darkBlack: '#1b2429',
        lightGray: '#333',
        darkGray: '#9095a7',
        darkRed: ' #d0021b',
        darkGreen: '#1ab99f'
      },
    },
  },
  plugins: [],
}
