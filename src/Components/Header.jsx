import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); 

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  return (
    <header className="flex justify-between items-center px-10 py-3 bg-black/10 bg-opacity-80 backdrop-blur-lg text-violet-300 fixed w-full top-0 z-50">
      <h1 className="text-2xl font-semibold tracking-widest">SayanDas</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 text-lg font-medium">
        {["About", "Projects", "Resume", "Portfolio", "Contact"].map((item, index) => (
          <h2
            key={index}
            className={`cursor-pointer transition duration-200 ${
              activeSection === item.toLowerCase() ? "text-violet-700 underline" : "hover:text-gray-300"
            }`}
            onClick={() => scrollToSection(item.toLowerCase())}
          >
            {item}
          </h2>
        ))}
      </nav>

      <div className="flex gap-6 items-center">
        {[
          { icon: FaLinkedin, name: "LinkedIn", link: "https://www.linkedin.com/in/sayan-das-b99810213" },
          { icon: FaInstagram, name: "Instagram", link: "https://www.instagram.com/__sdx__007/" },
          { icon: FaGithub, name: "GitHub", link: "https://github.com/sayandas2228056" },
          { icon: FaFacebook, name: "Facebook", link: "https://www.facebook.com/offcsayantubecode" },
          { 
            icon: () => <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="LeetCode" className="w-6 h-6 transition-transform transform hover:-translate-y-1" />, 
            name: "LeetCode", 
            link: "https://leetcode.com/u/SayanDas2228056/" 
          },
        ].map(({ icon: Icon, name, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="relative group">
            <Icon className="hover:text-violet-600 transition-transform transform hover:scale-110" />
            <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {name}
            </span>
          </a>
        ))}

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/30 backdrop-blur-lg text-white flex flex-col items-center space-y-4 py-4 transition-all duration-300">
          {["About", "Projects", "Resume", "Portfolio", "Contact"].map((item, index) => (
            <h2
              key={index}
              className={`cursor-pointer transition duration-200 ${
                activeSection === item.toLowerCase() ? "text-blue-400 underline" : "hover:text-gray-300"
              }`}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </h2>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
