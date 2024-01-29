/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },

      colors: {
        brand: {
          white: "hsl(0, 0%, 100%)",
          "light-grey": "hsl(217, 12%, 63%)",
          "medium-grey": "hsl(216, 12%, 54%)",
          "dark-blue": "hsl(213, 19%, 18%)",
          "very-dark-blue": "hsl(216, 12%, 8%)",
          primary: "hsl(25, 97%, 53%)",
        },
      },
    },
  },
  plugins: [],
};
