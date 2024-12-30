import React, { useState } from "react";

function ToggleSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode toggle fonksiyonu
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode); // Dark mode sınıfını ekleyip çıkarıyoruz
  };

  return (
    <div className="flex justify-end items-center space-x-4 p-4">
      {/* Dark Mode Toggle Switch */}
      <label
        htmlFor="toggle-dark-mode"
        className="flex items-center cursor-pointer"
      >
        {/* Metin */}

        <div className="relative">
          <input
            id="toggle-dark-mode"
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className="sr-only"
          />
          <div className="block bg-mor w-14 h-6 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 bg-yellow-300 w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${
              isDarkMode ? "transform translate-x-7" : ""
            }`}
          ></div>
        </div>
        <span className="ml-2 font-bold text-gray-400">
          {isDarkMode ? "DARK MODE" : "LIGHT MODE"}
        </span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
