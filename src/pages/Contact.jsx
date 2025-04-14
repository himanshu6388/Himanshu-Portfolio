import React from "react";
import { FiGithub, FiInstagram, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <section id="contact" className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg">
                    <FiMail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-500">EMAIL</h4>
                    <a href="mailto:your.email@example.com" className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition">
                      himanshu219181@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg">
                    <FiPhone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-500">PHONE</h4>
                    <a href="tel:+1234567890" className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition">
                      +91 6388746412
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg">
                    <FiMapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-500">LOCATION</h4>
                    <p className="text-lg font-medium text-gray-900">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/himanshu6388?tab=overview&from=2024-10-01&to=2024-10-01" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 transition flex items-center"
                >
                  <FiGithub className="h-6 w-6 text-gray-700" />
                  <span className="ml-2 text-gray-700 font-medium">GitHub</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/himasync?igsh=Z2NjZDQzaDhlNzJm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 transition flex items-center"
                >
                  <FiInstagram className="h-6 w-6 text-gray-700" />
                  <span className="ml-2 text-gray-700 font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (same as before) */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
            <form
              action="https://formspree.io/f/your_form_id"
              method="POST"
              className="space-y-6"
            >
              {/* Form fields remain the same */}
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Contact;