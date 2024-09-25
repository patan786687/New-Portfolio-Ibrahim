import React, { useEffect, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'; // Importing some skill icons
import 'animate.css'; // Import animate.css for animations

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills-section');
      const rect = element.getBoundingClientRect();
      
      // Check if the element is in the viewport
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true); // Trigger animation when the section is fully in view
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <div
      id="skills-section"
      className={`p-8 my-10 ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="skill-card">
          <FaHtml5 className="text-6xl mx-auto mb-4 text-orange-500" />
          <h3 className="text-xl font-semibold">HTML5</h3>
        </div>
        <div className="skill-card">
          <FaCss3Alt className="text-6xl mx-auto mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold">CSS3</h3>
        </div>
        <div className="skill-card">
          <FaJs className="text-6xl mx-auto mb-4 text-yellow-500" />
          <h3 className="text-xl font-semibold">JavaScript</h3>
        </div>
        <div className="skill-card">
          <FaReact className="text-6xl mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold">React.js</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
