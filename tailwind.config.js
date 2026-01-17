/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFC107", // Vibrant Yellow
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#EF4444", // Red
          foreground: "#FFFFFF",
        },
        background: "#000000",
        surface: "#1a1a1a", // Charcoal
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
