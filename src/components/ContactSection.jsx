import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = ({ 
  title = "Let's Connect",
  description = "I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about web development, feel free to reach out!",
  emailHref = "mailto:stephenpleasant1@gmail.com",
  linkedinHref = "https://www.linkedin.com/in/stephen-pleasant-40a428269",
  githubHref = "https://github.com/Stephenpleasant"
}) => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="section-title">
          <span className="gradient-text">
            {title}
          </span>
        </h2>
        <div className="contact-content">
          <p className="contact-description">
            {description}
          </p>
          <div className="contact-links">
            <a href={emailHref} className="contact-card">
              <Mail size={32} className="contact-icon" />
              <span className="contact-label">Email Me</span>
            </a>
            <a href={linkedinHref} className="contact-card">
              <Linkedin size={32} className="contact-icon" />
              <span className="contact-label">LinkedIn</span>
            </a>
            <a href={githubHref} className="contact-card">
              <Github size={32} className="contact-icon" />
              <span className="contact-label">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;