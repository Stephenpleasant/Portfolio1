import React from 'react';

const SkillCard = ({ title, skills, cardClass, titleClass }) => (
  <div className={`skill-card ${cardClass}`}>
    <h3 className={titleClass}>{title}</h3>
    <div className="skills-list">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-header">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <div
              className={`skill-progress ${skill.color}`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = ({ 
  title = "Skills & Technologies",
  frontendSkills = [
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
    { name: 'Bootstrap', level: 85, color: 'bg-purple-500' }
  ],
  backendSkills = [
    { name: 'Node.js', level: 75, color: 'bg-green-500' },
    { name: 'Express.js', level: 70, color: 'bg-gray-600' },
    { name: 'APIs', level: 80, color: 'bg-indigo-500' },
    { name: 'Databases', level: 65, color: 'bg-red-500' }
  ]
}) => {
  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">
          <span className="gradient-text">
            {title}
          </span>
        </h2>
        <div className="skills-grid">
          <SkillCard
            title="Frontend (Expert)"
            skills={frontendSkills}
            cardClass="frontend-card"
            titleClass="frontend-title"
          />
          <SkillCard
            title="Backend (Learning)"
            skills={backendSkills}
            cardClass="backend-card"
            titleClass="backend-title"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;