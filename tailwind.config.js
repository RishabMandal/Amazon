const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // extend: {
    screens: {
      xs: {'max': '639px'},
      ...defaultTheme.screens,
      // => @media (min-width: 92px) { ... }
    },
    // },
  },
  plugins: [],
};
