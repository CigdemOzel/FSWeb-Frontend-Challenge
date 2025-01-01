import React from "react";

const Skills = () => {
  return (
    <div className="mt-36 px-28">
      {/* Skills Başlığı */}
      <div className="flex items-center mb-8">
        <h2 className="text-5xl text-gray-800 font-yazi">Skills</h2>
      </div>

      {/* Teknolojiler */}
      <div className="flex space-x-32">
        {/* JavaScript */}
        <div className="flex flex-col items-start">
          <h3 className="text-3xl text-mor font-yazi">Java Script</h3>
          <p className="text-griyazi mt-6 text-[12px] max-w-[270px] font-yazi">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* React.js */}
        <div className="flex flex-col items-start">
          <h3 className="text-3xl text-mor font-yazi">React.Js</h3>
          <p className="text-griyazi mt-6 text-[12px] max-w-[270px] font-yazi">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Node.js */}
        <div className="flex flex-col items-start">
          <h3 className="text-3xl text-mor font-yazi">Node.Js</h3>
          <p className="text-griyazi mt-6 text-[12px] max-w-[270px] font-yazi">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
