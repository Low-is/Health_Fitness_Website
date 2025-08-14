/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#E67E22',
        'orange-hover': '#f04e30',
        'bg-blue': '#6495ED',
        'nav-bg': '#444444',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        russo: ['Russo One', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 3s ease-out forwards',
      },
    },
  },
  plugins: [],
}