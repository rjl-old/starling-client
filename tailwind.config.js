const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "card-1": colors.fuchsia,
        "card-2": colors.sky,
        "card-3": colors.indigo,
        "card-4": colors.red,
      },
    },
  },
  plugins: [],
};
