import React from 'react';
import { NavLink } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
              My Name is <span className="text-red-600 dark:text-red-500">Himanshu Verma</span>
            </h1>
            
            {/* Subtitle */}
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              I'm a passionate Web Developer specializing in creating responsive, modern, and animated websites with clean code.
            </p>
            
            {/* Download Button */}
            <div className="mt-8 md:mt-10">
              <NavLink
                to="/resume.pdf"
                target="_blank"
                download
                className="inline-flex items-center px-8 py-3.5 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/20"
              >
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </NavLink>
            </div>
            
            {/* Skills Buttons */}
            <div className="mt-12 md:mt-14 flex flex-wrap gap-3">
              {[
                { name: 'Java', bg: 'bg-red-400 hover:bg-red-500' },
                { name: 'React', bg: 'bg-red-600 hover:bg-red-700' },
                { name: 'JavaScript', bg: 'bg-gray-900 hover:bg-black dark:bg-gray-700 dark:hover:bg-gray-800' },
                { name: 'Python', bg: 'bg-gray-600 hover:bg-gray-700' },
                { name: 'HTML/CSS', bg: 'bg-blue-600 hover:bg-blue-700' },
                { name: 'Tailwind', bg: 'bg-cyan-500 hover:bg-cyan-600' }
              ].map((skill, index) => (
                <button 
                  key={index}
                  className={`${skill.bg} px-5 py-2.5 text-white font-medium rounded-full text-sm md:text-base transition-colors duration-300`}
                >
                  {skill.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md xl:max-w-lg">
              {/* Image with subtle shadow and rounded corners */}
              <img
                src="/image.png"
                alt="Himanshu Verma"
                className="w-full h-auto rounded-2xl shadow-xl dark:shadow-gray-800/50 object-cover lg:h-[30rem]"
              />
              
              {/* Fresher Badge with animation */}
              <div className="absolute -bottom-5 left-1/ transform -translate-x-1/2 lg:left-auto lg:right-45 right-12 lg:translate-x-0 bg-gray-900 dark:bg-gray-800 text-white font-semibold text-lg px-6 py-2 rounded-full shadow-lg animate-bounce">
                <span className="relative flex h-3 w-3 mr-2  inline-block">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                Fresher
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;