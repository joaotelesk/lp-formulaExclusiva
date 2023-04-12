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
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },

      backgroundImage: {
        DeskBanner1: "url(/banner1-desk.png)",
        MobBanner1: "url(/banner1-mob.png)",
        DeskBanner2: "url(/banner2-desk.png)",
        MobBanner2: "url(/banner2-mob.png)",
      },
    },
    fontFamily: {
      sans: ["var(--font-montSerrat)", ...fontFamily.sans],
    },
    screens: {
      sm: "600px",
      md: "728px",
      lg: "998px",
      xl: "1140px",
    },
    colors: {
      yellow: "#C9D42D",
      white: {
        500: "#FFFFFF",
        400: "#F5F5F5",
        300: "#C4C4C4",
        200: "#E9E9E9",
      },
      green: {
        500: "#0D281A",
        400: "#153323",
        300: "#17301D",
      },
      black: {
        600: "#000000",
        500: "#1E1E1E",
        400: "#212021",
        300: "#3A3737",
        200: "#303030",
      },
      red: "#F32626",
      gray: "#6A6568",
    },
  },
  plugins: [],
};
