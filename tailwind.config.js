/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-heading": "#2B2B2B",
        "primary-text": "#637381",
        "secondary-text": "#8899A8",
        "active-menu": "#111928",
      },
      maxWidth: {
        "screen-mak": "1900px",
        "screen-desktop": "1440px",
      },
      minWidth:{
        "min-screen-desktop":"1440px"
      }
    },
  },
  plugins: [require("daisyui")],
};
