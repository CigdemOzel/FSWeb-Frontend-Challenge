import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
  };

  return (
    <button className="font-bold text-gray-500" onClick={toggleLanguage}>
      {language === "en" ? (
        <>
          <span className="text-mor">TÜRKÇE</span>'YE GEÇ
        </>
      ) : (
        <>
          SWITCH TO <span className="text-mor">ENGLISH</span>
        </>
      )}
    </button>
  );
};

export default LanguageSwitcher;
