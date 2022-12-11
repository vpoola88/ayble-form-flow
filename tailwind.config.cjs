/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06383c",
        secondary: "#56cec6",
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sansPro: ['Source Sans Pro', 'sans-serif']
      }
    }
  },
  plugins: [],
}
