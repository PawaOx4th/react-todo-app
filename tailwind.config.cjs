/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#3CB35A",
        dark: "#03012C",
        mid: "#635E79",
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
