import React from 'react';

const Footer = ({ 
  text = "© 2025 Full-Stack Developer Portfolio. Built with React & CSS.",
  year = new Date().getFullYear()
}) => {
  return (
    <footer>
      <div className="footer-content">
        <p className="footer-text">
          {text.replace('2025', year)}
        </p>
      </div>
    </footer>
  );
};

export default Footer;