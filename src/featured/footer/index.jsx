import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
          <Link to="/twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </Link>
          <Link to="/instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/phones">Phones</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="text-center mt-4">
        &copy; 2024 ThemeSphere. Designed by ThemeSphere.
      </div>
    </footer>
  );
};

export default Footer;
