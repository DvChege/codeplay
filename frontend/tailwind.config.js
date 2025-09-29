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
          DEFAULT: "#1d4ed8", // your main brand color (blue-600)
          dark: "#1e40af",    // darker shade (blue-800)
        },
      },
    },
  },
  plugins: [],
}
