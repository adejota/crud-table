/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: colors.white,
      'primary': '#2563EB',
      'primary-dark': '#0F48C2',
      'full-black': '#121212',
      'mid-black': '#1F1F1F',
      'full-white': 'rgb(255, 255, 255, .87)',
      'mid-white': 'rgb(255, 255, 255, .60)',
      'low-white': 'rgb(255, 255, 255, .38)',
      'black': '#222222',
      'error': '#FF5252',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
