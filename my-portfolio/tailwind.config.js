/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mor: "rgba(55, 48, 163, 1)", // Özel renginizi burada tanımlayın
      },
    },
  },
  plugins: [],
};
