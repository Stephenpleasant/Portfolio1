import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './index.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroData = {
    title: "Full-Stack Developer",
    subtitle: "Frontend expert diving into backend development. Building modern web applications with React, Node.js, and cutting-edge technologies."
  };

  const aboutData = {
    title: "About Me",
    paragraphs: [
      "I'm a passionate developer with strong expertise in frontend technologies like React, JavaScript, HTML, CSS, and Bootstrap. I create responsive, user-friendly interfaces that provide exceptional user experiences.",
      "Currently expanding my skillset into backend development with Node.js, I've successfully built a full-stack movie application that demonstrates my ability to work across the entire web development stack.",
      "I'm excited about the endless possibilities that come with full-stack development and am continuously learning new technologies to stay at the forefront of web development."
    ]
  };

  const skillsData = {
    frontendSkills: [
      { name: 'React', level: 90, color: 'bg-blue-500' },
      { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
      { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
      { name: 'Bootstrap', level: 85, color: 'bg-purple-500' }
    ],
    backendSkills: [
      { name: 'Node.js', level: 75, color: 'bg-green-500' },
      { name: 'Express.js', level: 70, color: 'bg-gray-600' },
      { name: 'APIs', level: 80, color: 'bg-indigo-500' },
      { name: 'Databases', level: 65, color: 'bg-red-500' }
    ]
  };

  const projectsData = [
    {
      id: 1,
      title: 'Movie Database App',
      description: 'Full-stack movie application with Node.js backend, featuring user authentication, movie search, ratings, and personal watchlists.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
      image: '/App.png',
      github: 'https://github.com/Stephenpleasant/Fullstack',
      live: 'https://fullstack-zhg6.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'E-commerce Frontend',
      description: 'Responsive e-commerce interface built with React and Bootstrap, featuring product catalogs, cart functionality, and checkout flow.',
      tech: ['React', 'Bootstrap', 'JavaScript', 'CSS'],
      image: '/E-commerce.png',
      github: 'https://github.com/Stephenpleasant/E-commerce',
      live: 'https://ecommerce-blush-seven-80.vercel.app/'
    },
    {
      id: 3,
      title: 'Compounding Calculator',
      description: 'Interactive task management application with drag-and-drop functionality, built using React hooks and modern JavaScript.',
      tech: ['React', 'JavaScript', 'CSS3', 'LocalStorage API'],
      image: '/compounding-calculator.png',
       github: 'https://github.com/Stephenpleasant/Compounding-Calculator',
      live: 'https://compounding-calculator-w6np.vercel.app/'
    },
    {
      id: 4,
      title: 'Weather API Integration',
      description: 'Weather application consuming external APIs, showcasing API integration skills and responsive design principles.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      image: 'gradient-blue-cyan',
      github: '#',
      live: '#'
    }
  ];

  const contactData = {
    title: "Let's Connect",
    description: "I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about web development, feel free to reach out!",
    contactLinks: [
      { href: "mailto:your.email@example.com", label: "Email Me" },
      { href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
      { href: "https://github.com/yourusername", label: "GitHub" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation 
        activeSection={activeSection} 
        onSectionClick={scrollToSection} 
      />
      
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        onViewWork={() => scrollToSection('projects')}
        onGetInTouch={() => scrollToSection('contact')}
      />
      
      <AboutSection
        title={aboutData.title}
        paragraphs={aboutData.paragraphs}
      />
      
      <SkillsSection
        frontendSkills={skillsData.frontendSkills}
        backendSkills={skillsData.backendSkills}
      />
      
      <ProjectsSection
        projects={projectsData}
      />
      
      <ContactSection
        title={contactData.title}
        description={contactData.description}
        contactLinks={contactData.contactLinks}
      />
      
      <Footer />
    </div>
  );
};

export default Portfolio;