/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      "vsm" : "375px",
       "sm" : "640px",
       "md" :  "768px",
       "lg" : "1024px",
       "xl" :  "1280px"

    },
    extend: {
      boxShadow: {
        '3xl': '0 4px 20px 4px rgba(0, 0, 0, 0.12);',
      },
      keyframes: {
        'flower-open': {
          '0%': { transform: 'scale(0.2)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'flower-open': 'flower-open 2s ease-in-out',
      },

    },
  },
  plugins: [],
}

