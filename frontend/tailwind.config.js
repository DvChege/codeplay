/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",       // ✅ Next.js App Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // ✅ Your components
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",     // (optional) if you mix App + Pages
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // ✅ clean modern font
        mono: ["Fira Code", "monospace"], // ✅ great for code snippets
      },
      colors: {
        brand: {
          DEFAULT: "#3B82F6", // ✅ CodePlay brand blue
          dark: "#1E40AF",
          light: "#93C5FD",
        },
      },
    },
  },
  plugins: [],
};
