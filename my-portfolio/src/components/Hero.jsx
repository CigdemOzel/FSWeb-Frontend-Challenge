import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-between p-6 min-h-screen">
      {/* Sol Kısım - Kendiniz Hakkında Yazı */}
      <div className="w-1/2">
        <h1 className="text-4xl font-bold text-gray-800">Hi, I'm Almıla</h1>
        <p className="mt-4 text-lg text-gray-600">
          Creative thinker, Minimalism lover. I'm a full-stack developer. If you
          are looking for a developer who can craft solid and scalable frontend
          products with great user experiences, let's shake hands.
        </p>
      </div>

      {/* Sağ Kısım - Fotoğraf */}
      <div className="w-1/2">
        <img
          src="path-to-your-photo.jpg"
          alt="Almıla's photo"
          className="rounded-full w-48 h-48 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
