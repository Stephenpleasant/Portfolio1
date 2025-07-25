import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, onSectionClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    onSectionClick(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = ['hero', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-content">
          <div className="logo">
            Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <div className="nav-links">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-button ${activeSection === item ? 'active' : ''}`}
                >
                  {item === 'hero' ? 'Home' : item}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="mobile-nav-button"
              >
                {item === 'hero' ? 'Home' : item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;