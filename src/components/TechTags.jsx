import React, { useState } from 'react';
import {
  FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava,
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiMysql, SiTailwindcss, SiVite,
  SiNextdotjs, SiFirebase, SiDotnet,
} from 'react-icons/si';
import { PiFileCSharpBold } from "react-icons/pi";
import { TbBrandXamarin } from "react-icons/tb";

// Updated tag data with icons
const tagData = {
  'Front-end': [
    { name: 'HTML5', icon: <FaHtml5 />, level: 80 },
    { name: 'React', icon: <FaReact />, level: 85 },
    { name: 'CSS', icon: <FaCss3Alt />, level: 80 },
    { name: 'JavaScript', icon: <FaReact />, level: 88 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 80 },
    { name: 'Vite', icon: <SiVite />, level: 70 },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 75 },
  ],
  'Back-end': [
    { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
    { name: 'Express', icon: <SiExpress />, level: 75 },
    { name: 'MySQL', icon: <SiMysql />, level: 60 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 65 },
    { name: 'Firebase', icon: <SiFirebase />, level: 70 },
  ],
  'Web Development': [
    { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
    { name: 'React', icon: <FaReact />, level: 85 },
    { name: 'CSS', icon: <FaCss3Alt />, level: 80 },
    { name: 'JavaScript', icon: <FaReact />, level: 88 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 80 },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 75 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 65 },
    { name: 'Firebase', icon: <SiFirebase />, level: 70 },
  ],
  'Software Development': [
    { name: 'Python', icon: <FaPython />, level: 75 },
    { name: '.Net Framework', icon: <SiDotnet />, level: 65 },
    { name: 'WPF', icon: <SiDotnet />, level: 60 },
    { name: 'C#', icon: <PiFileCSharpBold />, level: 70 },
    { name: 'Xaml (Xamarin)', icon: <TbBrandXamarin />, level: 60 },
  ],
};

const TechTags = () => {
  const [selectedTag, setSelectedTag] = useState('Front-end');

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 pt-20">
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
            className="bg-[#12152b] rounded-lg shadow-md px-6 py-8 transition-all duration-300 text-white"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl text-[#a855f7]">{item.icon}</div>
              <span className="text-lg font-medium">{item.name}</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#5667f6] to-[#7634aa] rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${item.level}%` }}
              />
            </div>

            <div className="text-right text-sm text-purple-400 mt-1">
              {item.level}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTags;
