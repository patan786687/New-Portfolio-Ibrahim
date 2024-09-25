// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`w-full p-5 fixed top-0 z-50 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-all`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <Link to="/" className="text-2xl font-bold">Ibrahim</Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-500 transition-all">Home</Link>
          <Link to="/about" className="hover:text-blue-500 transition-all">About</Link>
          <Link to="/projects" className="hover:text-blue-500 transition-all">Projects</Link>
          <Link to="/skills" className="hover:text-blue-500 transition-all">Skills</Link>
          <Link to="/contact" className="hover:text-blue-500 transition-all">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleNav} className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="ml-5">
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m-7.071-7.071h2M3 12h2m14 0h2m-2.071-7.071h-2M16 16l1.414 1.414M6 6L4.586 4.586m12.828 0L16 6m-9.414 9.414L6 16" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8V4m0 16v-4m-8-8H4m16 0h-4M5.635 5.636l1.414 1.414M16.95 16.95l-1.414-1.414M5.635 18.364l1.414-1.414m9.9-9.9l-1.414 1.414" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link to="/" onClick={toggleNav} className="block hover:text-blue-500">Home</Link>
          <Link to="/about" onClick={toggleNav} className="block hover:text-blue-500">About</Link>
          <Link to="/projects" onClick={toggleNav} className="block hover:text-blue-500">Projects</Link>
          <Link to="/skills" onClick={toggleNav} className="block hover:text-blue-500">Skills</Link>
          <Link to="/contact" onClick={toggleNav} className="block hover:text-blue-500">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
