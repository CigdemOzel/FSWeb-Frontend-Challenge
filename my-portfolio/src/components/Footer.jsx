import React, { useState, useEffect } from "react";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  // Verileri fetch etmek için useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/themes.json"); // footerData.json dosyasının yolu
        const data = await response.json();
        setFooterData(data); // Veriyi state'e kaydediyoruz
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  // Veriler yüklenene kadar loading mesajı gösteriyoruz
  if (!footerData) {
    return <div>Loading...</div>;
  }

  return (
    <footer className="bg-arkaplan text-footerenk font-yazi py-12 mt-28 pb-32">
      <div className="container mx-auto px-20 flex justify-between items-center">
        {/* Sol Kısım - Büyük Yazı ve Mail */}
        <div className="w-[70%] mt-8">
          <h2 className="text-4xl font-bold leading-tight ">
            {footerData.slogan}
          </h2>
          <div className="text-[20px] font-medium mt-12 text-mail flex items-center">
            <span>👉</span>
            <p className="underline">{footerData.email}</p>
          </div>
        </div>

        {/* Sağ Kısım - Sosyal Linkler */}
        <div className="w-[50%] space-x-6 mt-[10.5rem]">
          {footerData.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg ${
                link.text === "Personal Blog"
                  ? "text-personal"
                  : link.text === "Github"
                  ? "text-github"
                  : "text-linkedin"
              }`}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
