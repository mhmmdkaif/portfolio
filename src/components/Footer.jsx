import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-6 text-center">
      {/* Icons - Top line */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.linkedin.com/in/muhammad-kaif-a-r-110288253/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-[#0077B5] hover:scale-110 transition-all"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/mhmmdkaif" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-[#333] hover:scale-110 transition-all"
        >
          <FaGithub />
        </a>
      </div>

      {/* Copyright - Bottom line */}
      <div className="text-sm">
        <p>© Muhammad Kaif AR - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
