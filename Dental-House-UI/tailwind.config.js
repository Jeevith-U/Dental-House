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
        'custom-gradient': 'linear-gradient(0deg, #D1A1F7 0%, #F5F5F5 23%, #D8D8D8 59%, #30526D 100%)',
        'finest-dental-care': "url(https://plus.unsplash.com/premium_photo-1664301978110-36462c87b15a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'tranquil-env': "url(https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=3783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'latest-procedures': "url(https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'quality-and-ethics': "url(https://plus.unsplash.com/premium_photo-1661434856831-76779e04e8bc?q=80&w=3838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'personalized-care': "url(https://plus.unsplash.com/premium_photo-1661775868038-77ae66913504?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'enhanced-confidence': "url(https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
        
      },
      colors:{
        "blue_gray": "30526D",
        "bg-blue": "#D1E5F0",
        "bg-orange": "#FF822E"
      },
      fontFamily:{
        "great-vibes": ["Great Vibes", "cursive"],
        "cormorant-garamond": ["Cormorant Garamond", "serif"],
        "caveat": ["Caveat", "cursive"],
        "open-sans": ["Open Sans", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
        "comfortaa": ["Comfortaa", "sans-serif"]
      },
      fontSize: {
        "xxs": "8px"
      },
      borderColor: {
        "1": "2px"
      }
    },
  },
  plugins: [],
}