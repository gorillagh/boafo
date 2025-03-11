// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryGreen: {
          light: "#34C759",
          dark: "#28A745",
          hover: {
            light: "#2DB54F",
            dark: "#239B3E",
          },
        },
        secondaryGreen: {
          light: "#E6F5EA",
          dark: "#1A3C34",
        },
        textColor: {
          light: "#1A1A1A",
          dark: "#F5F5F5",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
        md: "6px",
      },
    },
  },
  plugins: [],
};
