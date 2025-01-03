import React, { useState, useEffect } from "react";

const Hero = () => {
  const [heroData, setHeroData] = useState(null);

  // Verileri fetch etmek için useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/themes.json"); // theme.json dosyasının yolu
        const data = await response.json();
        setHeroData(data); // Veriyi state'e kaydediyoruz
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  // Veriler yüklenene kadar loading mesajı gösteriyoruz
  if (!heroData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-start justify-between ml-28 mr-28 mt-16">
      {/* Sol Kısım - Kendiniz Hakkında Yazı */}
      <div className="w-1/2">
        <p className="flex items-center text-mor font-semibold text-lg font-yazi">
          <span className="block border-t border-mor w-20 mr-2"></span>
          {heroData.name}
        </p>
        <h1 className="text-[52px] font-bold text-gray-800 mt-8 leading-[1] font-yazi">
          {heroData.slogan}
        </h1>
        <p className="mt-9 text-lg text-griyazi font-yazi">{heroData.bio}</p>
        <div className="mt-8 flex space-x-2">
          {/* Hire Me Butonu */}
          <a
            href="#hire-me"
            className="px-8 py-2 text-mor rounded-lg border-mor border-[1px] transition text-lg hover:text-white hover:bg-mor hover:border-white cursor-pointer group font-yazi"
          >
            {heroData.buttons.hireMe}
          </a>

          {/* GitHub Butonu */}
          <a
            href={heroData.socialLinks[0].url} // GitHub linki buraya gelecek
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-mor rounded-lg border-mor border-[1px] transition text-lg hover:text-white hover:bg-mor hover:border-white cursor-pointer group font-yazi"
          >
            <i className="fa-brands fa-github text-[#3730A3] text-2xl mr-2 group-hover:text-white"></i>
            {heroData.socialLinks[0].text} {/* GitHub yazısı */}
          </a>

          {/* LinkedIn Butonu */}
          <a
            href={heroData.socialLinks[1].url} // LinkedIn linki buraya gelecek
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-mor rounded-lg border-mor border-[1px] transition text-lg hover:text-white hover:bg-mor hover:border-white cursor-pointer group font-yazi"
          >
            <i className="fa-brands fa-linkedin-in text-[#3730A3] text-2xl mr-2 group-hover:text-white"></i>
            {heroData.socialLinks[1].text} {/* LinkedIn yazısı */}
          </a>
        </div>
      </div>

      {/* Sağ Kısım - Fotoğraf */}
      <div className="mr-16 flex justify-center">
        <img
          src={heroData.profileImage}
          className="w-80 h-80 object-cover"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Hero;
