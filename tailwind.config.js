/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "BackgroundHome": "url('./src/Assets/Background.jpg')",
        "BackgroundRepos": "url('./src/Assets/BackgroundRepositores.jpg')"
      }
    },
  },
  plugins: [],
}