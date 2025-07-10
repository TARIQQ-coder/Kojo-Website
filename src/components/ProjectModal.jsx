import React from 'react';
import { FaTimes, FaPlay } from 'react-icons/fa';

const ProjectModal = ({ isOpen, onClose, image, title, description, tech, demoLink }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center px-4">
      <div className="bg-[#1e1e1e] rounded-lg max-w-lg w-full p-6 relative text-white shadow-lg">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-white hover:text-gray-400 text-xl">
          <FaTimes />
        </button>

        {/* Image */}
        <img src={image} alt={title} className="w-[80] h-56 object-cover rounded-md mb-6 mx-auto" />

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#5667f6] to-[#7634aa] bg-clip-text text-transparent">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-200 mb-6 text-[15px] leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((tool, idx) => (
            <span key={idx} className="bg-white/40 text-white px-3 py-1 rounded-md text-sm font-medium">
              {tool}
            </span>
          ))}
        </div>

        {/* Demo Button */}
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded shadow"
        >
          <FaPlay />
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;
