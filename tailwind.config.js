/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['PT Serif', 'serif'],
      },
      colors: {
        'primary': '#E0B973',
        'hover': '#E0B973',
        'white-color': '#ffffff'
      }
    },
  },
  plugins: [],
}
