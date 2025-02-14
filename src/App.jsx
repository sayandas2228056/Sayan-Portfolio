import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import bgimg from './Pics/img1.jpg';

const App = () => {
  return (
    <div 
  className="scroll-smooth min-h-screen bg-cover bg-center bg-black/20"
  style={{ 
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), black), url(${bgimg})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>

      <Header />

      <section id="portfolio" className="py-10">
        <a href='#portfolio'>
          <Hero />
        </a>
      </section>

      <section id="about" className="py-10">
        <a href='#about'>
          <About />
        </a>
      </section>

      <section id="projects" className="py-10">
        <a href='#projects'>
          <Projects />
        </a>
      </section>

      <section id="technologies" className="py-10">
        <a href='#technologies'>
          <Technologies />
        </a>
      </section>

      <section id="resume" className="py-10">
        <a href='#resume'>
          <Resume />
        </a>
      </section>

      <section id="contact" className="py-10">
        <a href='#contact'>
          <Contact />
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default App;
