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
        cizgirengi: "#BAB2E7",
        arkaplan: "#F9F9F9",
        footerenk: "#1F2937",
        mail: "#AF0C48",
        personal: "#0A0A14",
        github: "#00AB6B",
        linkedin: "#0077B5",
        dark: "#484148",
        toggledark: "#3A3A3A",
        yazidark: "#D9D9D9",
      },
      fontFamily: {
        yazi: ["Inter", "sans-serif"], // Inter fontunu buraya ekleyin
      },
    },
  },
  plugins: [],
};
