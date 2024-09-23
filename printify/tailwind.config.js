/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      vsm: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      boxShadow: {
        "3xl": "0 4px 20px 4px rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        "closeToOpen": {
          "0%": { transform: "scale(0.2)", opacity: "0" },
          "50%": { transform: "scale(1.1)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slideright": {
          "0%": {
            transform: "translateX(-100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "sliderleft": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "sliderBottom": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        closeToOpen: "closeToOpen 2s ease-in-out",
        slideright: "slideright 0.8s ease-in-out",
        sliderleft: " sliderleft 2s ease-in-out",
        sliderBottom: " sliderBottom 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
