import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = ({ 
  title = "Full-Stack Developer",
  subtitle = "Frontend expert diving into backend development. Building modern web applications with React, Node.js, and cutting-edge technologies.",
  onViewWork,
  onGetInTouch
}) => {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-gradient-text">
            {title}
          </span>
        </h1>
        <p className="hero-subtitle">
          {subtitle}
        </p>
        <div className="hero-buttons">
          <button
            onClick={onViewWork}
            className="btn-primary"
          >
            View My Work
          </button>
          <button
            onClick={onGetInTouch}
            className="btn-secondary"
          >
            Get In Touch
          </button>
        </div>
      </div>
      <div className="chevron-down">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;