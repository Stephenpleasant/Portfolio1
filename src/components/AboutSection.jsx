import React from 'react';
import { Globe, Server, Database, Code } from 'lucide-react';

const AboutSection = ({ 
  title = "About Me",
  paragraphs = [
    "I'm a passionate developer with strong expertise in frontend technologies like React, JavaScript, HTML, CSS, and Bootstrap. I create responsive, user-friendly interfaces that provide exceptional user experiences.",
    "Currently expanding my skillset into backend development with Node.js, I've successfully built a full-stack movie application that demonstrates my ability to work across the entire web development stack.",
    "I'm excited about the endless possibilities that come with full-stack development and am continuously learning new technologies to stay at the forefront of web development."
  ],
  journeyItems = [
    { icon: Globe, text: "Frontend Development Expert", colorClass: "icon-blue" },
    { icon: Server, text: "Learning Backend with Node.js", colorClass: "icon-green" },
    { icon: Database, text: "Database Integration", colorClass: "icon-purple" },
    { icon: Code, text: "Full-Stack Applications", colorClass: "icon-pink" }
  ]
}) => {
  return (
    <section id="about" className="bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">
          <span className="gradient-text">
            {title}
          </span>
        </h2>
        <div className="about-grid">
          <div className="about-text">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="about-card">
            <h3>My Journey</h3>
            <div className="journey-items">
              {journeyItems.map((item, index) => (
                <div key={index} className="journey-item">
                  <item.icon className={`journey-icon ${item.colorClass}`} size={24} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;