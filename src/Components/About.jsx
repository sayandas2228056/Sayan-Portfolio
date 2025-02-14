import React from "react";

const About = () => {
  return (
    <section className="text-white py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center md:text-left space-y-6">
        
        <h2 className="text-4xl md:text-5xl font-bold text-violet-500">About Me</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          I am an <span className="text-white font-semibold">Aspiring Computer Engineer</span> currently pursuing my B.Tech in 
          <span className="text-white font-semibold"> Computer Science & Systems Engineering</span> at 
          <span className="text-white font-semibold"> KIIT University</span>. With a passion for problem-solving and innovation, 
          I constantly strive to build scalable, real-world solutions.
        </p>

        <h3 className="text-2xl font-semibold text-violet-400">Technical Skills</h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          <span className="text-white font-semibold">Languages:</span> Java, C, C++, Python, JavaScript, Kotlin  
          <br />
          <span className="text-white font-semibold">Libraries & Frameworks:</span> ReactJS, ExpressJS, C++ STL  
          <br />
          <span className="text-white font-semibold">Cloud & Databases:</span> AWS, MongoDB, SQL  
        </p>

        <h3 className="text-2xl font-semibold text-violet-400">Areas of Interest</h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          Full-Stack Web Development, Cloud Computing, App Development, Data Structures & Algorithms
        </p>

        <h3 className="text-2xl font-semibold text-violet-400">Soft Skills</h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          Problem-Solving, Public Speaking, Presentation Skills, Team Collaboration
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          I thrive in collaborative environments where I can contribute to dynamic projects and bring new ideas to life.  
          My dedication to continuous learning fuels my commitment to refining my skills and developing robust, innovative solutions.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          I’m eager to connect with professionals and teams who share my enthusiasm for technology & innovation.  
          <span className="text-white font-semibold"> Let's collaborate and build something amazing together</span>
        </p>

        <div className="mt-10">
          <h3 className="text-3xl font-semibold text-violet-400 text-center md:text-left mb-6">What I Do</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="border border-violet-400 bg-opacity-60 backdrop-blur-lg p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
              <h4 className="text-xl font-semibold text-violet-400 mb-3">DSA Problems</h4>
              <p className="text-gray-400 text-sm">
                Solving complex problems using Data Structures & Algorithms to improve efficiency and logic-building skills.
              </p>
            </div>

            <div className="border border-violet-400 bg-opacity-60 backdrop-blur-lg p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
              <h4 className="text-xl font-semibold text-violet-400 mb-3">Frontend Development</h4>
              <p className="text-gray-400 text-sm">
                Crafting responsive and interactive UI using ReactJS, Tailwind CSS, and modern web technologies.
              </p>
            </div>

            <div className="border border-violet-400 bg-opacity-60 backdrop-blur-lg p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
              <h4 className="text-xl font-semibold text-violet-400 mb-3">Backend Development</h4>
              <p className="text-gray-400 text-sm">
                Building scalable backend solutions with Node.js, Express.js, and MongoDB to support high-performance applications.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-start mt-8">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-violet-600 text-white text-lg font-semibold rounded-full transition-transform transform hover:scale-105 hover:bg-blue-400 shadow-lg"
          >
            Let's Connect 💡
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
