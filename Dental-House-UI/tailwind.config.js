/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'finest-dental-care': "url(https://plus.unsplash.com/premium_photo-1664301978110-36462c87b15a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'tranquil-env': "url(https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=3783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'latest-procedures': "url(https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'quality-and-ethics': "url(https://plus.unsplash.com/premium_photo-1661434856831-76779e04e8bc?q=80&w=3838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'personalized-care': "url(https://plus.unsplash.com/premium_photo-1661775868038-77ae66913504?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'enhanced-confidence': "url(https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'brush': 'url(https://images.pexels.com/photos/4202463/pexels-photo-4202463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        'floss': "url(https://images.pexels.com/photos/5478221/pexels-photo-5478221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        'sugar': 'url(https://plus.unsplash.com/premium_photo-1676473229825-a7071b31cd7e?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        'diet': 'url(https://images.unsplash.com/photo-1519996409144-56c88c9aa612?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        'tobacco': 'url(https://images.unsplash.com/photo-1622708037376-5cba1a57f735?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        'dentist': 'url(https://images.unsplash.com/photo-1588776813677-77aaf5595b83?q=80&w=3082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
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
        "comfortaa": ["Comfortaa", "sans-serif"],
        "head": ["Caveat", "cursive"],
        "body": ["Comfortaa", "sans-serif"]
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