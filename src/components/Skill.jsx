import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Skill = () => {
    const images = [
        '/html-5.png',
        '/css-3.png',
        '/sass.png',
        '/js.png',
        '/node-js.png',
        'atom.png',
        '/database.png',
        '/java.png',
        '/python.png',
        
      ];

  // Double the array for seamless looping
  const sliderImages = [...images, ...images];
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: ['0%', '-100%'],
        transition: {
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }
      });
    }
  }, [controls, isInView]);

  return (
    <div className="py-16  overflow-hidden lg:px-8" ref={ref}>
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        My Tech Stack
      </h2>

      <div className="relative h-32">
        {/* Gradient fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-0 to-transparent z-10 " />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-0 to-transparent z-10 " />

        {/* Slider track */}
        <motion.div
          className="absolute flex gap-16" // Adjust gap as needed
          animate={controls}
        >
          {sliderImages.map((img, index) => (
            <div key={`${index}-${img}`} className="flex-shrink-0">
              <img
                src={img}
                alt="Technology logo"
                className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity hover:scale-110 dark:invert-[0.2]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;