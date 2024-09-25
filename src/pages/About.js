import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-8 md:py-10 relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white py-20 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:justify-between">
        
        {/* Introduction */}
        <motion.div
          className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg lg:text-xl mb-4">
            Hi, I'm Ibrahim, a passionate frontend developer with extensive experience in creating dynamic and responsive web applications. With a strong background in HTML, CSS, JavaScript, React.js, and Tailwind CSS, I specialize in building user-friendly interfaces and engaging user experiences. Here’s a glimpse of my journey and skills.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-2">Skills & Technologies</h3>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 p-3">
              <motion.li
                className="bg-black dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                HTML5
              </motion.li>
              <motion.li
                className="bg-black dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                CSS3 / Tailwind CSS
              </motion.li>
              <motion.li
                className="bg-black dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                JavaScript
              </motion.li>
              <motion.li
                className="bg-black dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                React.js
              </motion.li>
              <motion.li
                className="bg-black dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Responsive Design
              </motion.li>
              <motion.li
                className="bg-black dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: true }}
              >
                Git & Version Control
              </motion.li>
              <motion.li
                className="bg-black dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
              >
                API Integration
              </motion.li>
              <motion.li
                className="bg-black dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                viewport={{ once: true }}
              >
                Web Performance Optimization
              </motion.li>
            </ul>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="lg:w-1/2 mt-10 ml-5 lg:mt-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">Timeline</h3>
          <div className="relative border-l-2 border-white dark:border-gray-600">
            <div className="absolute -left-2 w-4 h-4 bg-blue-500 rounded-full dark:bg-blue-400"></div>
            <div className="ml-6 space-y-8">
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold">Frontend Developer</h4>
                <p className="text-gray-200 dark:text-gray-400">Company A, 2022 - Present</p>
                <p className="mt-2">Worked on various projects, enhancing user interfaces and optimizing web applications.</p>
              </motion.div>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold">Web Developer Intern</h4>
                <p className="text-gray-200 dark:text-gray-400">Company B, 2021 - 2022</p>
                <p className="mt-2">Assisted in developing and maintaining web applications, focusing on frontend technologies.</p>
              </motion.div>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold">Frontend Developer</h4>
                <p className="text-gray-200 dark:text-gray-400">Company c, 2022 - Present</p>
                <p className="mt-2">Worked on various projects, enhancing user interfaces and optimizing web applications.</p>
              </motion.div>
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold">Frontend Developer</h4>
                <p className="text-gray-200 dark:text-gray-400">Company D, 2022 - Present</p>
                <p className="mt-2">Worked on various projects, enhancing user interfaces and optimizing web applications.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certifications */}
      <motion.div
        className="bg-gray-800 py-12 lg:py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-2">Certification Name</h4>
              <p className="text-gray-400">Issued by Organization, 2023</p>
            </motion.div>
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-2">Certification Name</h4>
              <p className="text-gray-400">Issued by Organization, 2022</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Background Pattern Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-80 h-80 bg-gradient-to-r from-white to-transparent opacity-20 rounded-full blur-3xl absolute top-10 left-10 animate-pulse"></div>
        <div className="w-80 h-80 bg-gradient-to-r from-white to-transparent opacity-20 rounded-full blur-3xl absolute bottom-10 right-10 animate-pulse"></div>
      </div>
    </section>
  );
};

export default About;
