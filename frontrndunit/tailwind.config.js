/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["var(--font-geist)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
        libreBodoni: ["var(--font-libre-bodoni)", "serif"],
      },
    },
  },
  plugins: [],
};