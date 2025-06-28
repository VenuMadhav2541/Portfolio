import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering (AI & ML)",
      institution: "RVR & JC College of Engineering",
      duration: "2021 – 2025",
      grade: "CGPA: 9.04"
    },
    {
      degree: "Honor Degree in Full Stack Web Development",
      institution: "RVR & JC College of Engineering",
      duration: "2022 – 2025",
      grade: "CGPA: 8.0"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      duration: "2019 – 2021",
      grade: "Percentage: 95.6%"
    },
    {
      degree: "10th Grade (SSC)",
      institution: "Vasavi High School",
      duration: "2019",
      grade: "CGPA: 9.8"
    }
  ];

  return (
    <section id="education" ref={elementRef} className={`section fade-in ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        <div className="timeline-line"></div>
        
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="degree-title">{item.degree}</h3>
              <p className="institution">{item.institution}</p>
              <p className="duration">{item.duration}</p>
              <span className="cgpa">{item.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
