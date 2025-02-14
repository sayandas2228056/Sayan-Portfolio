import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 text-white text-center px-6 md:px-20  rounded-lg">
      <motion.h1
        className="text-5xl font-bold mb-10 text-violet-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Feel free to reach out for collaborations or just a friendly chat.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          className="border border-violet-400 bg-opacity-20 backdrop-blur-md backdrop-brightness-125 p-6 rounded-lg shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaPhoneAlt className="text-3xl text-violet-400 mb-4" />
          <h3 className="text-xl font-semibold text-violet-300">Call Me</h3>
          <p 
            className="text-gray-300 cursor-pointer hover:text-violet-400 transition"
            onClick={() => window.location.href = "tel:+918918577218"}
          >
            +91 8918577218
          </p>
        </motion.div>

        <motion.div
          className="border border-violet-400 bg-opacity-20 backdrop-blur-md backdrop-brightness-125 p-6 rounded-lg shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope className="text-3xl text-violet-400 mb-4" />
          <h3 className="text-xl font-semibold text-violet-300">Email Me</h3>
          <p 
            className="text-gray-300 cursor-pointer hover:text-violet-400 transition"
            onClick={() => window.location.href = "mailto:sayandas010124@gmail.com"}
          >
            sayandas010124@gmail.com
          </p>
          <p 
            className="text-gray-300 cursor-pointer hover:text-violet-400 transition"
            onClick={() => window.location.href = "mailto:offcsayantubecode@gmail.com"}
          >
            offcsayantubecode@gmail.com
          </p>
        </motion.div>

        <motion.div
          className="border border-violet-400 bg-opacity-20 backdrop-blur-md backdrop-brightness-125 p-6 rounded-lg shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaMapMarkerAlt className="text-3xl text-violet-400 mb-4" />
          <h3 className="text-xl font-semibold text-violet-300">Location</h3>
          <p className="text-gray-300">KIIT University, Bhubaneshwar-751024, India</p>
        </motion.div>
      </div>

      <motion.div 
        className="mt-10 flex justify-center gap-6 flex-wrap border border-violet-400 p-6 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a 
          href="https://wa.me/918918577218" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-green-400 text-4xl hover:text-green-500 transition"
        >
          <FaWhatsapp />
        </a>

        <a 
          href="https://www.instagram.com/__sdx__007/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-pink-500 text-4xl hover:text-pink-600 transition"
        >
          <FaInstagram />
        </a>
        
        <a 
          href="https://www.facebook.com/offcsayantubecode" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 text-4xl hover:text-blue-700 transition"
        >
          <FaFacebook />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
