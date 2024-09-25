import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Dynamic project data with image thumbnails
const projectsData = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my work, skills, and experience.',
    thumbnail: 'https://yourportfolio.com/thumbnail.jpg',
    liveLink: 'https://yourportfolio.com',
    githubLink: 'https://github.com/yourrepo/portfolio',
  },
  {
    title: 'E-commerce App',
    description: 'An e-commerce application with product listings, filters, and a shopping cart.',
    thumbnail: '/images/ecommerce-thumbnail.jpg',
    liveLink: 'https://ecommerce.com',
    githubLink: 'https://github.com/yourrepo/ecommerce',
  },
  {
    title: 'Task Manager',
    description: 'A task management app to organize daily tasks and track progress.',
    thumbnail: 'https://taskmanager-demo.com/thumbnail.jpg',
    liveLink: 'https://taskmanager-demo.com',
    githubLink: 'https://github.com/your-taskmanager',
  },
  // Add more projects here dynamically with image thumbnails
];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState('All');

  // Filter projects based on selected technology
  const filteredProjects = projectsData;

  // Framer Motion animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Animation when card is out of view
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animation when card comes into view
  };

  const hoverVariants = {
    hover: { scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)' },
  };

  // Initialize animations and in-view detection for scroll effects
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is in view
    triggerOnce: false, // Trigger multiple times on scroll
  });

  // Trigger animation when inView changes
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <section
      className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white py-20 lg:py-40 overflow-hidden"
    >
      <div className="container mx-auto px-8">
        {/* Section Title */}
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          className="text-4xl font-bold text-center mb-10 font-poppins"
        >
          My Projects
        </motion.h2>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          ref={ref}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-900 p-6 rounded-lg shadow-lg relative hover:bg-opacity-90 transition-transform duration-300"
              style={{
                backgroundColor: index % 2 === 0 ? '#FFECB3' : '#B3E5FC',
              }}
              variants={cardVariants}
              whileHover={hoverVariants.hover}
              whileTap={{ scale: 0.95 }}
            >
              {/* Project Thumbnail */}
              <img
                src={project.thumbnail}
                alt={`${project.title} Thumbnail`}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              {/* Project Title and Description */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>

              {/* Links for Live Demo and GitHub */}
              <div className="flex justify-between items-center">
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline"
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline"
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
