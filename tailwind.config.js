/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center: true,
        padding: '3rem',
      },
      fontFamily: {
        'tajwal':['Tajawal', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
