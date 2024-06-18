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
        'intro': 'url(https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=3868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        'finest-dental-care': "url(https://plus.unsplash.com/premium_photo-1664301978110-36462c87b15a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'tranquil-env': "url(https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=3783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'latest-procedures': "url(https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'quality-and-ethics': "url(https://plus.unsplash.com/premium_photo-1661434856831-76779e04e8bc?q=80&w=3838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'personalized-care': "url(https://plus.unsplash.com/premium_photo-1661775868038-77ae66913504?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'enhanced-confidence': "url(https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'braces': 'url(https://images.unsplash.com/photo-1619987614890-4797e713fb03?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        'root-canal': 'url(https://images.unsplash.com/photo-1664530838335-01785f3f3473?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        'dental-crown': 'url(https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        'dentures': 'url(https://images.unsplash.com/photo-1612283104841-d1918e7666c7?q=80&w=3728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        'teeth-filling': 'url(https://images.unsplash.com/photo-1606811951341-756fdd437682?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        'teeth-cleaning': 'url(https://plus.unsplash.com/premium_photo-1674575269472-7bcff51bf3d4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
      },
      colors:{
        "blue_gray": "30526D",
        "bg-blue": " rgb(186 230 253)",
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