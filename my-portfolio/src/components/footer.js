import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
        </a>
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} />
        </a>
        <a href="https://facebook.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={32} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;