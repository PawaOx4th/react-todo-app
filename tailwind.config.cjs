/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3CB35A',
        "secondary": "#03012C",
        "tertiary": "#635E79",
      }
    },
  },
  plugins: [],
}
