/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        baltic: "#222f3e",
        "primary": {
          50: "#fef2f2",
          100: "#fde3e3",
          200: "#fccccc",
          300: "#f9a8a8",
          400: "#f37677",
          500: "#e94a4b",
          600: "#d63031",
          700: "#b32223",
          800: "#942021",
          900: "#7b2122",
          950: "#430c0c",
        },
      },
    },
  },
  plugins: [],
};
