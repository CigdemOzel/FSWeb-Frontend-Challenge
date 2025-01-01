import React from "react";
import profilePhoto from "../assets/images/profile-photo.jpeg"; // Fotoğrafının doğru yolunu buraya yaz

const Hero = () => {
  return (
    <div className="flex items-start justify-between ml-28 mr-28 mt-16">
      {/* Sol Kısım - Kendiniz Hakkında Yazı */}

      <div className="w-1/2">
        <p className="flex items-center text-mor  font-semibold text-lg font-yazi">
          <span className="block border-t border-mor w-20 mr-2"></span>Çiğdem
          Özel
        </p>
        <h1 className="text-[52px] font-bold text-gray-800 mt-8 leading-[1] font-yazi">
          Simple, Stylish, and User-Friendly Designs
        </h1>
        <p className="mt-9 text-lg text-griyazi font-yazi">
          Hi, I'm Çiğdem. I'm a frontend developer with a keen eye for detail.
          I'm passionate about creating user-friendly, responsive, and
          aesthetically pleasing web designs. I focus on quality and
          functionality at every step of the coding process, aiming to craft
          great user experiences.
        </p>
        <div className="mt-8 flex space-x-2">
          {/* Hire Me Butonu */}
          <a
            href="#hire-me"
            className="px-8 py-2 text-mor  rounded-lg border-mor border-[1px] transition text-lg hover:text-white hover:bg-mor hover:border-white group font-yazi"
          >
            Hire me
          </a>

          {/* GitHub Butonu */}
          <a
            href="https://github.com/CigdemOzel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-mor rounded-lg border-mor border-[1px] transition text-lg hover:text-white hover:bg-mor hover:border-white group font-yazi"
          >
            <i className="fa-brands fa-github text-[#3730A3] text-2xl mr-2 group-hover:text-white"></i>
            Github
          </a>

          {/* LinkedIn Butonu */}
          <a
            href="https://www.linkedin.com/in/ciggdemozel/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-mor rounded-lg border-mor border-[1px] transition text-lg hover:text-white hover:bg-mor hover:border-white group font-yazi"
          >
            <i className="fa-brands fa-linkedin-in text-[#3730A3] text-2xl mr-2 group-hover:text-white"></i>
            Linkedin
          </a>
        </div>
      </div>

      {/* Sağ Kısım - Fotoğraf */}
      <div className="mr-16 flex justify-center">
        <img src={profilePhoto} className="w-80 h-80 object-cover" />
      </div>
    </div>
  );
};

export default Hero;
