import React, { useState } from 'react';
import { Home, User, Package, Mail, Globe, Menu, X } from 'lucide-react';
import { FaCodeBranch,FaHome,FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdOutlinePostAdd } from "react-icons/md";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#010634] text-white py-2 border-b border-[#2E2E62] fixed top-0 w-full z-40">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <div className="text-xl font-bold">RIQ</div>
        <div className="md:flex hidden space-x-16 text-lg font-light">
          <a href="#home" className="text-[#A084CA]  flex items-center hover:bg-[#535379] hover:text-white p-2 rounded ">
            <FaHome className="mr-1" /> Home
          </a>
          <a href="#about" className="text-[#A084CA]  flex items-center hover:bg-[#535379] hover:text-white p-2 rounded ">
            <FaUser className="mr-1" /> About
          </a>
          <a href="#projects" className="text-[#A084CA] hover:bg-[#535379] hover:text-white p-2 rounded  flex items-center">
            <FaCodeBranch className="mr-1" /> Projects
          </a>
          <a href="#contact" className="text-[#A084CA] hover:bg-[#535379] hover:text-white p-2 rounded  flex items-center">
            <IoMail className="mr-1" /> Contact
          </a>
          <div className="relative group">
            <a href="#language" className="text-[#A084CA] hover:bg-[#535379] hover:text-white p-2 rounded  flex items-center">
              <MdOutlinePostAdd className="mr-1" /> Blog
            </a>
            {/* Placeholder for dropdown */}
          </div>
        </div>
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} strokeWidth={3}/> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4">
          <a href="#home" className="text-[#A084CA] hover:bg-[#535379] hover:text-white p-2 rounded w-fit flex items-center">
            <FaHome className="mr-1" /> Home
          </a>
          <a href="#about" className="text-[#A084CA] hover:bg-[#535379] hover:text-white p-2 rounded w-fit flex items-center">
            <FaUser className="mr-1" /> About
          </a>
          <a href="#projects" className="text-[#A084CA] hover:bg-[#535379] hover:text-white p-2 rounded w-fit flex items-center">
            <FaCodeBranch className="mr-1" /> Projects
          </a>
          <a href="#contact" className="text-[#A084CA] hover:bg-[#535379] hover:text-white p-2 rounded w-fit flex items-center">
            <IoMail className="mr-1" /> Contact
          </a>
          <a href="#language" className="text-[#A084CA] hover:bg-[#535379] hover:text-white p-2 rounded w-fit flex items-center">
            <MdOutlinePostAdd className="mr-1" /> Blog
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;