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
          DEFAULT: "#3b82f6", // blue-500
          dark: "#1e40af",    // blue-900
        },
      },
    },
  },
  plugins: [],
};
