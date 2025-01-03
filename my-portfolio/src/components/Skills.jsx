import React, { useEffect, useState } from "react";

// Skill Component
const Skill = ({ title, description }) => (
  <div className="flex flex-col items-start">
    <h3 className="text-3xl text-mor font-yazi">{title}</h3>
    <p className="text-griyazi mt-6 text-[12px] max-w-[270px] font-yazi">
      {description}
    </p>
  </div>
);

const Skills = () => {
  const [skills, setSkills] = useState([]);

  // theme.json'dan verileri çekmek için useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/themes.json");
        const data = await response.json();
        setSkills(data.skills); // Veriyi state'e set ediyoruz
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-36 px-28">
      {/* Skills Başlığı */}
      <div className="flex items-center mb-8">
        <h2 className="text-5xl font-[600] text-gray-800 font-yazi">Skills</h2>
      </div>

      {/* Teknolojiler */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
