import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <Navbar/>
    <section id="about" className="min-h-screen flex items-center bg-white dark:bg-gray-900 dark:text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative">
            <img
              src="image.png" // Replace with your image path
              alt="Himanshu Profile"
              className="w-72 h-72 rounded-lg object-cover shadow-xl transform rotate-1 hover:rotate-0 transition duration-500"
            />
            <div className="absolute -inset-4 border-2 border-indigo-100 rounded-lg -z-10"></div>
            <div className="absolute -bottom-6 -right-0 bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg">
              <span className="font-medium">Frontend Developer</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-gray-900">
            About <span className="text-red-700">Me</span>
          </h2>
          
          <div className="border-l-4 border-red-500 pl-4">
            <p className="text-gray-700 text-lg leading-relaxed dark:text-white">
              Hi, I'm <span className="font-semibold text-gray-900">Himanshu</span> — a passionate frontend engineer dedicated to crafting exceptional digital experiences that blend aesthetics with functionality.
            </p>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              With expertise in <span className="font-medium text-gray-900">React.js</span>, <span className="font-medium text-gray-900">TypeScript</span>, and modern CSS frameworks like <span className="font-medium text-gray-900">Tailwind</span>, I build performant, accessible web applications that drive business results.
            </p>
            
            <p className="text-lg leading-relaxed">
              My approach combines technical precision with design sensibility, ensuring every pixel serves a purpose. I stay at the forefront of web technologies while maintaining a strong foundation in core principles.
            </p>
            
            <p className="text-lg leading-relaxed">
              Currently expanding my expertise in full-stack development with the <span className="font-medium text-gray-900">MERN stack</span> and exploring innovative applications of AI in frontend development.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-red-700 text-white font-medium rounded-lg shadow hover:bg-red-800 transition duration-300 hover:-translate-y-1"
            >
              Let's Connect
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 dark:text-white font-medium rounded-lg shadow-sm hover:bg-gray-50 transition duration-300 hover:-translate-y-1"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default About;