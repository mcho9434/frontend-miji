/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      keyframes: {
        "title-slide-down": {
          "0%": { transform: "translateY(-100vh)" },
          "100%": { transform: "translateY(0)" },
        },
        "title-slide-up": {
          "0%": { transform: "translateY(100vh)" },
          "100%": { transform: "translateY(0)" },
        },
        "title-slide-right": {
          "0%": { transform: "translateX(100vh)" },
          "100%": { transform: "translateX(0)" },
        },
        "title-slide-left": {
          "0%": { transform: "translateX(-100vh)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "title-slide-down-default": "title-slide-down 0.8s ease-out",
        "title-slide-up-default": "title-slide-up 0.8s ease-out",
        "title-slide-right-default": "title-slide-right 0.8s ease-out",
        "title-slide-left-default": "title-slide-left 0.8s ease-out",
        "title-slide-down": "title-slide-down",
        "title-slide-up": "title-slide-up",
        "title-slide-right": "title-slide-right",
        "title-slide-left": "title-slide-left",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      notion: ["Segoe UI", "sans-serif"],
    },
  },
  plugins: [],
};
