/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Share Tech Mono", "monospace"],
      },
      colors: {
        green: {
          50: "#d8f1cd",
          100: "#bee8ac",
          200: "#a3de8b",
          300: "#89d56a",
          400: "#6fcc48",
          500: "#5ab733",
          600: "#56af31",
          700: "#49952a",
          800: "#397421",
          900: "#295317",
          950: "#18320e",
        },
        //Cores custom
        custom: {
          gray: "#1C1B1F",
          salmon: "#FF545A",
          gold: "#FFD700",
          silver: "#C0C0C0",
          bronze: "#CD7F32",
        },
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};
