import React from "react";
import { motion } from "framer-motion";
import MyImage from "../Pics/SayanImg.jpg";

const Hero = () => {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-between min-h-screen text-white px-6 md:px-20 pt-20 md:pt-0"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:w-1/3 flex justify-center order-1 md:order-2">
        <img
          src={MyImage}
          alt="Sayan Das"
          className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full shadow-lg transition-transform transform hover:scale-110 cursor-pointer"
        />
      </div>

      <div className="md:w-2/3 text-center md:text-left space-y-4 order-2 md:order-1">
        <h2 className="text-gray-300 text-2xl">Hello,</h2>
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide">I'm Sayan Das</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-violet-400">
          Aspiring Computer Engineer | MERN Stack Developer
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a passionate coder with intermediate proficiency in 
          <span className="text-white font-semibold"> Java, C++, and C</span>, backed by a strong foundation in 
          <span className="text-white font-semibold"> problem-solving</span>. 
          My enthusiasm extends to 
          <span className="text-white font-semibold"> Data Structures & Algorithms (DSA)</span>, 
          <span className="text-white font-semibold"> Web Development</span>, 
          <span className="text-white font-semibold"> App Development</span>, 
          <span className="text-white font-semibold"> Cloud Computing</span>, and 
          <span className="text-white font-semibold"> Cybersecurity</span>.
        </p>

        <section id="Contact">
          <a
            href="#contact"
            className="mt-4 inline-block px-6 py-3 bg-white text-black rounded-full font-semibold transition-transform transform hover:scale-105 hover:bg-violet-600"
          >
            Hire Me
          </a>
        </section>
      </div>
    </motion.section>
  );
};

export default Hero;
