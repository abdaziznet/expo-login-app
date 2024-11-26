/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: {
          DEFAULT: "#9e59aa",
          100: "#864c90",
          200: "#ba68c8",
        },
        third: {
          DEFAULT: "#d91c5e",
          100: "#d91c5e",
          200: "#d91c5e",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#7b7b8b",
        },
      },
      fontFamily: {
        pthin: ["FiraSans-Thin", "sans-serif"],
        pextralight: ["FiraSans-ExtraLight", "sans-serif"],
        plight: ["FiraSans-Light", "sans-serif"],
        pregular: ["FiraSans-Regular", "sans-serif"],
        pmedium: ["FiraSans-Medium", "sans-serif"],
        psemibold: ["FiraSans-SemiBold", "sans-serif"],
        pbold: ["FiraSans-Bold", "sans-serif"],
        pextrabold: ["FiraSans-ExtraBold", "sans-serif"],
        pblack: ["FiraSans-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
