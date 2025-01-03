import React, { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  // theme.json'dan verileri çekmek için useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/themes.json"); // theme.json dosyasının yolu
        const data = await response.json();
        setProfile(data.profile); // Profil verilerini state'e set ediyoruz
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  // Profil verisi yüklenene kadar loading mesajı gösteriyoruz
  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-20 px-28">
      {/* Profile Başlığı */}
      <div className="border-t-2 border-cizgirengi w-full mb-8"></div>
      <div className="flex items-center mb-8">
        <h2 className="text-5xl text-gray-800 font-yazi">Profile</h2>
      </div>

      {/* Sağ ve Sol Bölüm */}
      <div className="flex space-x-14">
        {/* Sol Bölüm */}
        <div>
          <h3 className="text-3xl text-mor mb-4 font-yazi">Profile</h3>
          <ul className="text-black space-y-2">
            <li className="grid grid-cols-[200px,1fr] gap-x-4 items-start">
              <span className="font-bold font-yazi text-base">
                Date of birth
              </span>
              <span className="text-lg">{profile.dob}</span>
            </li>
            <li className="grid grid-cols-[200px,1fr] gap-x-4 items-start">
              <span className="font-bold font-yazi text-base">
                City of residence
              </span>
              <span className="text-lg">{profile.city}</span>
            </li>
            <li className="grid grid-cols-[200px,1fr] gap-x-4 items-start">
              <span className="font-bold font-yazi text-base">
                Education status
              </span>
              <span className="break-words max-w-[180px] text-lg">
                {profile.education}
              </span>
            </li>
            <li className="grid grid-cols-[200px,1fr] gap-x-4 items-start">
              <span className="font-bold font-yazi text-base">
                Preferred role
              </span>
              <span className="text-lg">{profile.preferredRole}</span>
            </li>
          </ul>
        </div>

        {/* Sağ Bölüm */}
        <div className="w-1/2 font-yazi">
          <h3 className="text-3xl text-mor mb-4">About Me</h3>
          <p className="text-griyazi text-lg leading-relaxed">
            {profile.aboutMe}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
