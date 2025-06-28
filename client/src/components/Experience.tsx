import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const achievements = [
    "Spearheaded the development and implementation of an Investment Portfolio Management system for over 50 active users, resulting in a 30% increase in user engagement and enhancing overall user satisfaction.",
    "Engineered and implemented over 15 high-performance RESTful APIs, which reduced backend latency by 40% and significantly improved inter-module communication.",
    "Optimized cloud infrastructure utilizing Azure services, decreasing system downtime by 50% and increasing scalability to support a 10x user load.",
    "Facilitated Agile (Scrum) practices, leading sprint ceremonies and fostering collaboration to ensure the timely delivery of 5+ modules."
  ];

  return (
    <section id="experience" ref={elementRef} className={`section fade-in ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">Experience</h2>
      <div className="experience-card card">
        <div className="experience-content">
          <h3 className="company-title">Cognizant Technology Solutions</h3>
          <h4 className="role-title">Programmer Analyst Trainee</h4>
          <p className="duration">January - April 2025</p>
          <ul className="achievements">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
