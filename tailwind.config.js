/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', "sans-serif"],
        heading: ['"Hanken Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
};