import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Weather App",
    description: "A simple weather application that provides current weather information based on user location.",
    technologies: "HTML, CSS, JavaScript, ReactJS",
    status: "Completed",
    repo: "https://github.com/sayandas2228056/Weather-Forcasting",
  },
  {
    title: "Guessing Number Game",
    description: "A simple number guessing game where players try to guess the correct number.",
    technologies: "Python",
    status: "Completed",
    repo: "https://github.com/sayandas2228056/GuessingNumber",
  },
  {
    title: "AWS Load Balancing Model",
    description: "A serverless function load balancer using AWS Lambda, API Gateway, DynamoDB, and a weighted routing algorithm.",
    technologies: "AWS Lambda, API Gateway, DynamoDB, Python, Node.js",
    status: "Work in Progress",
    repo: "https://github.com/sayandas2228056/AWS-LoadBalancing-Model",
  },
  {
    title: "JourneyAwesome - AI-based Trip Planner",
    description: "A web app that uses AI to search the best possible trip plan based on user requirements.",
    technologies: "HTML, CSS, JavaScript, Tailwind CSS, ReactJS, Node.js, Firebase, Gemini",
    status: "Work in Progress",
  },
  {
    title: "Expense Tracker App",
    description: "A responsive expense tracker with Google Login and real-time expense tracking.",
    technologies: "HTML, CSS, JavaScript, Tailwind CSS, ReactJS, Node.js, MongoDB",
    status: "Work in Progress",
  },
  {
    title: "Real-time Chat Application",
    description: "A real-time messaging app with Login and WebSocket-based communication.",
    technologies: "HTML, CSS, JavaScript, Tailwind CSS, ReactJS, Node.js, MongoDB, Socket.io",
    status: "Work in Progress",
  },
];

const Projects = () => {
  return (
    <section className="border-b pb-24 px-6 md:px-20 text-white">
      <h1 className="my-20 text-violet-500 text-6xl text-center font-extrabold">Projects</h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-opacity-60 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-violet-400 mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <p className="text-gray-400">
              <span className="text-white font-semibold">Technologies:</span> {project.technologies}
            </p>
            <p className="text-gray-400 mt-2">
              <span className="text-white font-semibold">Status:</span>{" "}
              <span className={project.status === "Completed" ? "text-green-400" : "text-yellow-400"}>
                {project.status}
              </span>
            </p>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-violet-400 hover:text-violet-300 mt-3"
              >
                <FaGithub className="text-2xl" /> View Repository
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
