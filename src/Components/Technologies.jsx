import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const techStack = [
  { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: "React.js", link: "https://react.dev/" },
  { icon: <SiMongodb className="text-7xl text-green-400" />, name: "MongoDB", link: "https://www.mongodb.com/" },
  { icon: <SiJavascript className="text-7xl text-yellow-400" />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { icon: <FaNodeJs className="text-7xl text-green-500" />, name: "Node.js", link: "https://nodejs.org/" },
  { icon: <SiHtml5 className="text-7xl text-orange-500" />, name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { icon: <SiCss3 className="text-7xl text-violet-500" />, name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
];

const Technologies = () => {
  return (
    <div>
      <h1 className="my-20 text-gray-200 text-center text-4xl">Technologies</h1>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="relative group rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center transition-transform transform hover:scale-110"
          >
            {tech.icon}
            <p className="text-gray-300 mt-2 text-sm">{tech.name}</p>

            <a
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm mt-3 px-4 py-2 bg-violet-500 text-white rounded-lg shadow-md hover:bg-violet-400"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
