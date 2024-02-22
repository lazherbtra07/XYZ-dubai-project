/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary:"#010851",
        sicondary:"#9a7af1",
        tartiry:"#707070",
        pink: "#ee9aes",
      },
      boxShadow: {
        '3xl': '0 10 50px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}

