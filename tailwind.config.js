const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        container: {
          center: true,
          padding: {
            DEFAULT: "1rem",
            sm: "2rem",
          },
        },

        backgroundImage: {},
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      colors: {
        yellow: "#C9D42D",
        white: {
          500: "#FFFFFF",
          400: "#F5F5F5",
        },
        green: {
          500: "#0D281A",
          400: "#153323",
          300: "#17301D",
        },
        black: {
          500: "#1E1E1E",
          400: "#212021",
          300: "#3A3737",
        },
      },
    },
  },
  plugins: [],
};
