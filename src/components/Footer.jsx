import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-100 to-white-100 border-t border-gray-300 h-24 flex items-center justify-between px-4 md:px-20">
      <div className="flex flex-col">
        <Link to="/contact" className="text-gray-600 hover:text-blue-500">
          Contact
        </Link>
        <p className="text-gray-500 text-sm mt-1">© 2024 Vikas. All Rights Reserved.</p>
      </div>
      <div className="flex space-x-4 text-gray-600">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/vikas-creates" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
