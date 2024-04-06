/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "red 600",
        "secondary-color": "",
        "background-color": ""
      },
      fontFamily: { sans: ['Inter var', ...defaultTheme.fontFamily.sans], }
    },

  },
  plugins: [require('@tailwindcss/forms'),],
}

