import React, { useState, useEffect } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("en");
  const [languageData, setLanguageData] = useState(null);

  // Dil verilerini theme.json'dan çekmek için useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/themes.json"); // theme.json dosyasının yolu
        const data = await response.json();
        setLanguageData(data.languages); // Dil verilerini state'e set ediyoruz
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  // Veriler yüklenene kadar loading mesajı gösteriyoruz
  if (!languageData) {
    return <div>Loading...</div>;
  }

  // Dil değiştirme fonksiyonu
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
  };

  return (
    <button className="font-bold text-gray-500" onClick={toggleLanguage}>
      {language === "en" ? (
        <>
          <span className="text-mor">{languageData.en.language}</span>{" "}
          {languageData.en.switchTo}
        </>
      ) : (
        <>
          <span className="text-mor">{languageData.tr.language}</span>{" "}
          <span className="text-gray-500">{languageData.tr.switchTo}</span>
        </>
      )}
    </button>
  );
};

export default LanguageSwitcher;
