import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Skill from '../components/Skill';
import LandingPage from '../components/LandingPage';

function Home() {
  return (
    <>
      <Navbar />
      <main className=" mx-auto dark:bg-gray-900">
        {/* Hero Section */}
        <section className="">
         <LandingPage/>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-20 lg:px-8 px-4">
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
        <section className="py-12 md:py-20 lg:px-8 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
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
                <a href='https://researchpublication.netlify.app/' className="text-xl hover:text-red-600 cursor-pointer font-semibold text-gray-800 ">
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
                {/* <span className="text-gray-500 ">Project Preview</span> */}
                <img src="netflix.png" alt="" />
              </div>
              <div className="p-6">
                <a href='https://wondrous-boba-5ff7d7.netlify.app/' className="text-xl hover:text-red-600 font-semibold text-gray-800 ">
                  Netflix Clone Landing Page
                </a>
                <p className="mt-2 text-gray-600 ">
                  Created with the help of  AI 
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-12 md:py-20 px-6'>
          <div>
            <h1 className='text-2xl font-bold md:text-3xl md:font-bold text-center md:text-center mb-10 dark:text-white'>About us</h1>
            {/* About card */}
            <div className='shadow-lg h-auto   rounded md:h-52 md:flex transform transition duration-300 hover:scale-105 hover:shadow-lg'>
                <div className="image  h-1/2 md:h-full md:shadow-2xl w-full overflow-hidden">
                  <img src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='rounded w-full h-full object-cover object-center'/>
                </div>
                <p className='px-4 py-4 dark:text-white'>Hi, I’m Himanshu — a passionate Frontend Web Developer with a love for clean design and responsive UI. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
                </p>
            </div>
          </div>
          <div className='mt-20'>
            <h2 className='py-10 text-2xl md:text-3xl font-bold text-center dark:text-white'>How I Use Skill</h2>
          {/* Skill Card */}
          <div className='shadow-lg h-auto   rounded md:h-52 md:flex transform transition duration-300 hover:scale-105 hover:shadow-lg'>
                <div className="image  h-1/2 md:h-full md:shadow-2xl w-full overflow-hidden">
                  <img src="https://images.pexels.com/photos/16129724/pexels-photo-16129724/free-photo-of-man-working-on-computers-coding.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='rounded w-full h-full object-cover object-center'/>
                </div>
                <p className='px-4 py-4 dark:text-white'>
                I specialize in building modern, fast, and accessible websites using React.js, Tailwind CSS, and JavaScript. I'm also comfortable working with Git, Figma, and Firebase to streamline development and collaboration.

                </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;