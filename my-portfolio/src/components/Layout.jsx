import React from "react";

const Layout = () => {
  return (
    <div className=" flex flex-col">
      <div className="flex items-center justify-between p-6">
        {/* Sol tarafta yuvarlak, içinde ilk harf */}
        <div className="w-14 h-14 rounded-full bg-acikmor text-crengi flex items-center justify-center text-2xl font-bold transform rotate-45 ml-24">
          Ç
        </div>

        {/* Sağdaki butonlar */}
        <div className="space-x-6 mr-36">
          <button className=" font-medium text-lg text-gray-500 bg-transparent border border-transparent hover:border-mor hover:text-mor px-8 py-2 rounded focus:outline-none focus:border-mor focus:text-mor ">
            Skills
          </button>
          <button className="font-medium text-lg text-gray-500 bg-transparent border border-transparent hover:border-mor hover:text-mor px-8 py-2 rounded focus:outline-none focus:border-mor focus:text-mor ">
            Projects
          </button>
          <button className="font-medium text-lg text-gray-500 bg-transparent border border-transparent hover:border-mor hover:text-mor px-8 py-2 rounded focus:outline-none focus:border-mor focus:text-mor ">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
