import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Projects() {
  const projects = [
    {
      title:'Research Publication & Journal',
      description:'Research Publilction frontend ',
      image:'jrp.png',
      github:'https://github.com/himanshu6388/Research-Publication',
      demo: "https://researchpublication.netlify.app/",
      tech: ["HTML","css","React", "Tailwind", "JavaScript"],
    },
    {
      title:'Animated Web Project',
      description:'Modern animated website',
      image:'animated-web.png',
      github:'https://github.com/himanshu6388/animated-web-project',
      demo: "https://aniweb110.netlify.app/",
      tech: ["html", "css", "JavaScript","gsap"],
    },
    {
      title:'Firebase Porfolio Project',
      description:'Made with google firebase',
      image:'firebase.png',
      github:'https://github.com/himanshu6388/Project-Portfolio',
      demo: "https://projectportfoli.netlify.app/",
      tech: ["Firebase"],
    }
  ]
  return (
    <>
      <Navbar/>
      <div>
        <h1 className='text-2xl font-bold md:text-3xl text-center pt-8 '>My Work</h1>
        <p className='text-sm text-center md:text-lg text-gray-600'>Short line about what you’ve built.</p>
        <div className='md:flex shrink-0 p-8 gap-10 md:flex-wrap overflow-hidden'>
        {
          // project cards
          projects.map((project, index)=>(
            <div key={index} className='bg-white rounded-xl shadow-md  hover:scale-105 transition-transform cursor-pointer  overflow-hidden md:w-1/4  mb-14'>
              {/* image */}
              <div className=' w-full md:w-full h-52'>
              <img src={project.image} alt={project.title} className='h-full w-full' />
              </div>
              {/* about */}
              <div className='p-2'>
                <h1 className='text-lg font-semibold md:text-2xl'>{project.title}</h1>
                <p className='text-sm text-gray-600 md:text-sm'>{project.description}</p>
                <p className='flex md:flex gap-6 m-4 mt-0 ml-0'>
                  {project.tech.map((tech, index)=>(
                   
                      <span key={index} className='text-sm'>{tech}</span>
                    
                  ))}
                </p>
                {/* github link */}
                <div className="flex gap-10">
                  <a href={project.github} target="_blank" className="text-red-700 hover:underline">GitHub</a>
                  <a href={project.demo} target="_blank" className="text-red-700 hover:underline">Live Demo</a>
                </div>
              </div>
            </div>
          )) }
        </div>
      </div>

      {/* footer */}
      <Footer/>
    </>
  )
}

export default Projects