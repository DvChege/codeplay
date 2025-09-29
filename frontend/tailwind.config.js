/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#4F46E5", // Indigo-600
        "brand-dark": "#3730A3", // Indigo-800
      },
    },
  },
  plugins: [],
};
