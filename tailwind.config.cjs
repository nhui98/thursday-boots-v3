/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xll: "1500px",
    },
    extend: {
      colors: {
        offwhite: "#f2f2f2",
        lightgrey: "#f8f8f8",
        green: "#243a3e",
        blue: "#2374ab",
      },
    },
  },
  plugins: [],
};
