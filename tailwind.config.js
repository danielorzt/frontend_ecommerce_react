/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",  // <-- Agrega esto
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
        brandGreen: "#5cb85c",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        }
      }
    },
  },
  plugins: [],
};
