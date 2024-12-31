/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        wac: {
          default: "#0a0a0a"
        },
        primary: {
          default: "#dc2626"
        }
      }
    },
  },
  plugins: [],
}

