/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      textShadow:{
        'default': '0px 0px 12px rgb(64, 243, 17)' ,
      
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0px 0px 12px rgb(64, 243, 17)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

