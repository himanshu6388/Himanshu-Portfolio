// components/Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-black py-12 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        {/* Social Links + CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Call-to-Action (e.g., "Let's Connect") */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Let's Build Something Great</h3>
            <p className="text-gray-400">Reach out for collaborations or just say hello!</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a 
              href="https://github.com/himanshu6388" 
              target="_blank" 
              rel="noopener noreferrer"
              className=" hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/himanshu6388" 
              target="_blank" 
              rel="noopener noreferrer"
              className=" hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className=" hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a 
              href="mailto:you@example.com" 
              className=" hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className=" hover:text-white transition-colors duration-300"
              aria-label="Resume"
            >
              <FaFileAlt className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Copyright + Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} <span className="font-semibold">Himanshu Verma</span>. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms
            </a>
            <a href="#top" className="text-gray-400 hover:text-white text-sm transition-colors">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;