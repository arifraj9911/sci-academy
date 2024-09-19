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
        "gray-dark": "#212121",
        "primary-blue": "#3758f9",
        ebony_clay: "#1F2A37",
        pale_sky: "#637381",
        zircon: "#F6F9FF",
        boulder: "#767676",
        sky_blue: "#3758F91A",
        mystic: "#DFE4EA",
      },
      maxWidth: {
        "screen-mak": "1900px",
        "screen-desktop": "1440px",
      },
      minWidth: {
        "min-screen-desktop": "1440px",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/header-bg.svg')",
      },
      boxShadow: {
        "custom-lg": "0px 70px 70px 0px rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [require("daisyui")],
};
