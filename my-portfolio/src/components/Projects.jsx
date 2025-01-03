import React, { useEffect, useState } from "react";

// Project Component
const Project = ({
  imageSrc,
  title,
  description,
  techTags,
  githubLink,
  siteLink,
}) => {
  return (
    <div className="flex flex-col items-start w-1/2">
      <img
        src={imageSrc}
        alt={title}
        className="object-cover border-[12px] border-cizgirengi rounded-md"
      />
      <h3 className="text-3xl text-mor mt-4 font-yazi">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      <div className="mt-4 w-full pt-4">
        <p className="text-mor text-sm">
          {techTags.map((tag, index) => (
            <span
              key={index}
              className="border p-1 px-3 mr-2 border-mor rounded-[4px]"
            >
              {tag}
            </span>
          ))}
        </p>
      </div>
      <div className="flex justify-between w-full mt-4">
        <a
          href={githubLink}
          className="text-mor underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href={siteLink}
          className="text-mor underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Site
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // theme.json'dan verileri çekmek için useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/themes.json"); // `public/data/theme.json` yolunu kullanıyoruz
        const data = await response.json();
        console.log("Fetched Projects Data:", data.projects); // Veriyi kontrol etmek için konsola yazdıralım
        setProjects(data.projects); // Veriyi state'e set ediyoruz
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-12 px-28">
      {/* Projects Başlığı */}
      <div className="border-t-2 border-cizgirengi w-full mb-8"></div>
      <div className="flex items-center mb-8">
        <h2 className="text-5xl font-[600] text-gray-800 font-yazi mt-4">
          Projects
        </h2>
      </div>

      {/* Projeler */}
      <div className="flex space-x-16">
        {projects.length > 0 ? (
          projects.map((project, index) => <Project key={index} {...project} />)
        ) : (
          <p>Veriler yükleniyor...</p> // Yükleme sırasında bir mesaj gösterelim
        )}
      </div>
    </div>
  );
};

export default Projects;
