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
					100: "#FCFAF6",
					200: "#F8F5EC",
					300: "#F2ECDB",
					400: "#EBE3CA",
					500: "#E5D9B8",
					600: "#DED0A6",
					700: "#C9B26D",
					800: "#AA8F3F",
					900: "#715F2A",
					1000: "#393015"
				}
      },
      fontFamily: {
        sans: ['mundial', ...defaultTheme.fontFamily.sans],
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
