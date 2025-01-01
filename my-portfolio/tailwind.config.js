/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mor: "#4731D3", // Özel renginizi burada tanımlayın
        acikmor: "#ede9fe",
        crengi: "#8b5cf6",
        griyazi: "#6B7280",
      },
      fontFamily: {
        yazi: ["Inter", "sans-serif"], // Inter fontunu buraya ekleyin
      },
    },
  },
  plugins: [],
};
