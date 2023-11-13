/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#eeeeee',
        'secondary': '#c8c8c8',
        'color-text': '#1d1d1d'
      }
    },
  },
  plugins: [],
}

