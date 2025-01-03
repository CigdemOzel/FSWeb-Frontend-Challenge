import React, { useEffect, useState } from "react";

// Reusable Button Component
const Button = ({ label }) => {
  return (
    <button className="font-medium text-lg text-gray-500 bg-transparent border border-transparent hover:border-mor hover:text-mor px-7 py-2 rounded-md focus:outline-none focus:border-mor focus:text-mor">
      {label}
    </button>
  );
};

// Initial Letter Component
const InitialLetter = ({ letter }) => {
  return (
    <div className="w-14 h-14 rounded-full bg-acikmor text-crengi flex items-center justify-center text-2xl font-bold transform rotate-45 ml-24">
      {letter}
    </div>
  );
};

const Layout = () => {
  const [layoutData, setLayoutData] = useState(null);

  // theme.json'dan verileri çekmek için useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/themes.json"); // theme.json dosyasının yolu
        const data = await response.json();
        setLayoutData(data.layout); // Layout verilerini state'e set ediyoruz
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  // Veriler yüklenene kadar loading mesajı gösteriyoruz
  if (!layoutData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-6">
        {/* Sol tarafta yuvarlak, içinde ilk harf */}
        <InitialLetter letter={layoutData.initialLetter} />

        {/* Sağdaki butonlar */}
        <div className="space-x-6 mr-36">
          {layoutData.buttons.map((button, index) => (
            <Button key={index} label={button.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
