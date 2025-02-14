import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen py-16 px-6 md:px-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">My Resume</h2>

      <div className="text-center mb-8">
        <a
          href="https://drive.google.com/file/d/1x_LiIWbZ-93IVt04mQIWke3WJhFWLKL9/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 bg-violet-500 text-white rounded-full font-semibold transition-transform transform hover:scale-105 hover:bg-violet-600"
        >
          View Resume
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="border border-violet-400 bg-opacity-60 backdrop-blur-lg p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <ul className="space-y-3">
            <li>🎓 <span className="font-semibold">B.Tech in Computer Science</span> - KIIT University (2022-2026)</li>
            <li>🎓 <span className="font-semibold">DAV Public School Hehal, Ranchi</span> - CBSE Board (2020-2022)</li>
            <li>🎓 <span className="font-semibold">S.T. Paul's School, Rampurhat, WB</span> - ICSE Board (2007-2020)</li>
          </ul>
        </div>

        <div className="border border-violet-400 bg-opacity-60 backdrop-blur-lg p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <ul className="space-y-2">
            <li>💻 Java, C++, C</li>
            <li>🛠 MERN Stack Development</li>
            <li>🌐 Web & App Development</li>
            <li>☁️ Cloud Computing</li>
            <li>🔐 Cybersecurity</li>
            <li>📊 Data Structures & Algorithms</li>
            <li>⚙️ AWS Lambda, API Gateway, DynamoDB</li>
          </ul>
        </div>

        <div className="border border-violet-400 bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-lg md:col-span-2">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <ul className="space-y-3">
            <li>💼 <span className="font-semibold">Runner-up at OMEGA-4 Hackathon</span> - Built an innovative solution.</li>
            <li>🏆 <span className="font-semibold">Winner at Spiral Slide Event (KIIT-Fest 7.0)</span></li>
            <li>🌍 <span className="font-semibold">Delegate at KIIT-MUN 2024 (HLPF - Maldives)</span></li>
            <li>🛠 <span className="font-semibold">Developing Serverless Function Load Balancer</span> (AWS Lambda + ACO Optimization)</li>
            <li>🚀 <span className="font-semibold">Building JourneyAwesome</span> - A tourism website</li>
          </ul>
        </div>

        <div className="border border-violet-400 bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-lg md:col-span-2">
          <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
          <ul className="space-y-3">
            <li>📜 <span className="font-semibold">Google Cloud Practitioner</span> - Hands-on experience with GCP services.</li>
            <li>🎓 <span className="font-semibold">AWS Certified Developer - Associate</span> (In Progress)</li>
            <li>🌐 <span className="font-semibold">Full-Stack Web Development</span> - MongoDB, Express, React, Node.js.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
