// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1D4ED8",        // blue (change to your brand color)
        "brand-dark": "#1E40AF", // darker shade (customize as needed)
      },
    },
  },
  plugins: [],
};
