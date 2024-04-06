/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
  
      fontFamily: { sans: ['Inter var', ...defaultTheme.fontFamily.sans], }
    },

  },
  plugins: [require('@tailwindcss/forms'),],
}

