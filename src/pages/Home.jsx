import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Skill from '../components/Skill';

function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24 gap-8">
          {/* Image & Intro Text */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Himanshu Verma
            </h1>
            <p className="text-2xl md:text-2xl text-red-600 dark:text-red-700  mt-2 font-bold">
              Web Developer
            </p>
            <p className="mt-4 text-gray-900 dark:text-gray-800 max-w-lg leading-relaxed">
              Hi, I'm Himanshu — a <span className="text-red-700 dark:text-red-700 font-bold">web developer</span> who loves turning ideas into clean, interactive websites. I blend design with code to create fast, responsive, and user-friendly experiences.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-block mt-8 px-6 py-3 bg-red-700 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-red-100 dark:border-red-700 shadow-lg md:mr-20">
            <img 
              src="./image.jpg" 
              alt="Himanshu Verma" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-300 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-red-500">💡</span> Creative Version
              </h3>
              <p className="text-gray-900 dark:text-gray-900">
                Hey, I'm Himanshu – the guy who turns coffee into code and ideas into websites. I build smooth, responsive, and visually appealing web experiences. Let's make something amazing together.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-300 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-red-500">💼</span> Freelance-Focused
              </h3>
              <p className="text-gray-900 dark:text-gray-900">
                Hi, I'm Himanshu – a freelance web developer helping businesses build strong online presence through clean code and intuitive design. I focus on performance, responsiveness, and great user experience.
              </p>
            </div>

            <div className=" bg-gray-300 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-red-500">🔧</span> Technical Skills
              </h3>
              <p className="text-gray-900 ">
                React, Tailwind CSS, JavaScript, Node.js, MongoDB. Passionate about modern web technologies and best practices in frontend development.
              </p>
            </div>
          </div>
        </section>
        {/* Skill Section */}
        <section className='py-12 md:py-20'>
            <Skill/>
        </section>
        {/* Projects Section */}
        <section className="py-12 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project Preview</span>
              </div>
              <div className="p-6">
                <a 
                  href="https://github.com/himanshu6388/SoulSync" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-gray-800  hover:text-red-600 dark:hover:text-red-600 transition-colors"
                >
                  SoulSync - Music Therapy Platform
                </a>
                <p className="mt-2 text-gray-600 ">
                  A platform for music-based mental wellness.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-100 dark:bg-gray-400 flex items-center justify-center">
                {/* <span className="text-gray-500 dark:text-gray-400">Project Preview</span> */}
                <img src="jrp.png" alt="" className='w-full h-full' />
              </div>
              <div className="p-6">
                <a href='https://github.com/himanshu6388/Research-Publication' className="text-xl hover:text-red-600 cursor-pointer font-semibold text-gray-800 ">
                  Research Publications & Journal
                </a>
                <p className="mt-2 text-gray-600 ">
                  Academic research documentation system.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 ">Project Preview</span>
              </div>
              <div className="p-6">
                <a href='' className="text-xl hover:text-red-600 font-semibold text-gray-800 ">
                  Netflix Clone Landing Page
                </a>
                <p className="mt-2 text-gray-600 ">
                  Responsive UI clone with modern design.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;