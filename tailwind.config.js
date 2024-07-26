const typographyPlugin = require('@tailwindcss/typography')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kitchensKelly: {
					100: "#F2F9F3",
					200: "#E4F2E6",
					300: "#C6E5CB",
					400: "#A2D7AA",
					500: "#4AC975",
					600: "#0EB747",
					700: "#0DA440",
					800: "#0B9239",
					900: "#09742D",
					1000: "#065220"
				},
        leafyGreen: { DEFAULT: '#0F2C15', dark: '#08200D', light: '#244E2C' },
        whippedCream: {
          DEFAULT: '#F8F5EC',
          dark: '#EEEADE',
        },
      },
      fontFamily: {
        sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        18: '4.5rem',
        112: '28rem',
        120: '30rem',
      },
    },
  },
  plugins: [typographyPlugin],
}
