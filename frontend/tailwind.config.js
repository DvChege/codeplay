/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#A78BFA",     // light purple
          DEFAULT: "#7C3AED",   // main brand purple
          dark: "#4C1D95",      // dark purple
        },
      },
    },
  },
  plugins: [],
}
