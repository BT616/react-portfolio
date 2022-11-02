/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      adelia: ["ADELIA", "cursive"],
    }
  },
  plugins: [],
}