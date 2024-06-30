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
        'brush': 'url(https://images.unsplash.com/photo-1593010997571-7ebe6c593d8e?q=80&w=3299&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        'floss': "url(https://images.unsplash.com/photo-1626006864160-aa21716d0204?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        'sugar': 'url(https://images.unsplash.com/photo-1486428128344-5413e434ad35?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        'diet': 'url(https://images.unsplash.com/photo-1561043433-aaf687c4cf04?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        'tobacco': 'url(https://images.unsplash.com/photo-1567021185300-23afa08f68ad?q=80&w=3437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        'dentist': 'url(https://images.unsplash.com/photo-1684607633062-b31b5d134814?q=80&w=3862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        'bg1': 'url(./images/bg1.webp)',
        'smile': 'url(./images/review_bg.png)',
        'pr1': "url(./images/pr1.svg)",
        'pr2': "url(./images/pr4.svg)",
        'pr3': "url(./images/pr2.svg)",
        'pr4': "url(./images/pr5.svg)",
      },
      colors:{
        "blue_gray": "#30526D",
        "bg-blue": "#ddf2ee",
        "star-blue": "#14c37e",
        "bg-orange": "#FF822E",
        "bg-gray": "#f5f5f5",
        "bg-dark": "#012f33"
      },
      fontFamily:{
        "head": ["Cormorant Garamond", "serif"],
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
  plugins: []
}