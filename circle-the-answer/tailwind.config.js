/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "node_modules/tv-*/dist/tv-*.umd.min.js"
  ],
  theme: {
    extend: {
      colors: {
          "base-violet": "#4A2D89",
          "base-violet-light": "#8D72E1",
          "base-blue": "#8D9EFF",
          "base-aqua": "#B9E0FF",
          "base-red": "#FF5656",
          "base-yellow": "#FF7A2F"
      } 
    }
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ],
}

