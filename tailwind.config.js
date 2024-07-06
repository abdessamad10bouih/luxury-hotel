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
        'primary': '#2F80ED',
        'hover': '#163E73',
        'clr': '#ffffff',
        'txt-hover' : '#ffffff'
      }
    },
  },
  plugins: [],
}
