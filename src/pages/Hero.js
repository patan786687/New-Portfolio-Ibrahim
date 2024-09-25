import React from 'react';
import { Link } from 'react-router-dom';
import Ibrahim_Profile_Pic from './Ibrahim_Profile_Pic.png'; // Replace with the actual profile image path

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white py-12 lg:py-40 overflow-hidden">
      <style>{`
        .blinking-text {
          animation: blinkText 2s infinite;
        }
        @keyframes blinkText {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:flex lg:items-center lg:justify-between space-y-10 lg:space-y-0">
        
        {/* Introduction */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left mt-8">
          <h1 className="blinking-text text-3xl md:text-4xl lg:text-6xl font-bold leading-snug">
            Hi, I'm Ibrahim a Front-End Developer.
          </h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed mt-4 md:mt-6 lg:mt-8">
            I specialize in creating responsive web applications using modern technologies like React.js and Tailwind CSS.
          </p>

          {/* CTA Buttons */}
          <div className="space-x-0 md:space-x-4 mt-6 flex flex-col md:flex-row items-center justify-center lg:justify-start">
            <Link to="/resume" className="bg-white text-gray-900 py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition-all w-full md:w-auto text-center">
              Download Resume
            </Link>
            <Link to="/contact" className="mt-4 md:mt-0 bg-transparent border-2 border-white py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all w-full md:w-auto text-center">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Ibrahim_Profile_Pic}
            alt="Ibrahim Profile"
            className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full shadow-lg border-4 border-white"
          />
        </div>
      </div>

      {/* Background Pattern Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-white to-transparent opacity-20 rounded-full blur-3xl absolute top-10 left-10 animate-pulse"></div>
        <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-white to-transparent opacity-20 rounded-full blur-3xl absolute bottom-10 right-10 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
