/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bitoid": "#180E2E",
        "bitoid-hover": "#5E576D",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}