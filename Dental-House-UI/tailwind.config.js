/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'custom-gradient': 'linear-gradient(0deg, #D1A1F7 0%, #F5F5F5 23%, #D8D8D8 59%, #30526D 100%)',
        'custom-gradient': 'linear-gradient(0deg, #D1A1F7 0%, #F5F5F5 23%, #D8D8D8 59%, #30526D 100%)'
      },
      colors:{
        "blue_gray": "30526D",
        "bg-blue": "#D1E5F0"
      },
      fontFamily:{
        "great-vibes": ["Great Vibes", "cursive"],
        "cormorant-garamond": ["Cormorant Garamond", "serif"],
        "caveat": ["Caveat", "cursive"],
        "open-sans": ["Open Sans", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
        "comfortaa": ["Comfortaa", "sans-serif"]
      }
    },
  },
  plugins: [],
}