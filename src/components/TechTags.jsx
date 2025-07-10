import React, { useState } from 'react';
import {
  FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava,
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiMysql, SiTailwindcss, SiVite,
  SiNextdotjs, SiFirebase, SiDotnet,
} from 'react-icons/si';
import { PiFileCSharpFill } from "react-icons/pi";
import { TbBrandXamarin } from "react-icons/tb";

// Updated tag data with icons
const tagData = {
  'Front-end': [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaReact /> }, // Substitute with appropriate JS icon if desired
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
  ],
  'Back-end': [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Firebase', icon: <SiFirebase /> },
  ],
  'Web Development': [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaReact /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Firebase', icon: <SiFirebase /> },
  ],
  'Software Development': [
    { name: 'Python', icon: <FaPython /> },
    { name: '.Net Framework', icon: <SiDotnet /> },
    { name: 'WPF', icon: <SiDotnet /> },
    { name: 'C#', icon: <PiFileCSharpFill /> },
    { name: 'Xaml (Xamarin)', icon: <TbBrandXamarin /> },
  ],
};

const TechTags = () => {
  const [selectedTag, setSelectedTag] = useState('Front-end');

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="font-bold text-center mb-6 bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent text-3xl">
        Skills
      </h1>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center text-xl font-semibold">
        {Object.keys(tagData).map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
              selectedTag === tag
                ? 'bg-gradient-to-r from-[#5667f6] to-[#7634aa] text-white border border-white'
                : 'bg-[#12152b] bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent hover:text-white'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tagData[selectedTag].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-[#12152b] rounded-lg shadow-md py-12 pl-6 transition-all duration-300 text-white"
          >
            <div className="text-3xl text-[#a855f7]">{item.icon}</div>
            <span className="text-lg font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTags;
