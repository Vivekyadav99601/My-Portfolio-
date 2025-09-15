import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink,  } from "lucide-react"; 
import { FaAnglesRight,FaAnglesLeft } from "react-icons/fa6";
import chatapp from "../assets/chatapp.png";
import currencyconvertor from "../assets/currencyconvertor.png";
import eventmanagement from "../assets/eventplanner.png";
import portfolio from "../assets/pf.png";
import weatherapp from "../assets/weatherapp.png";
import foodwagon from "../assets/foodwagon.png";
import calculator from "../assets/calculator.png";
import todo from "../assets/todo.png";
import wordgame from "../assets/wordgame.jpg";



const Projects = () => {
  const projects = [
     {
      title: "Chat App",
      description:
        "Real-time chat application using WebSocket and MERN stack with authentication.",
      tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
      github: "https://github.com/Vivekyadav99601/Chat-App",
      type:"Full stack Project",
      image: [chatapp],
    },
      {
      title: "Event Planner",
      description:
        "Full-stack MERN project for booking banquet halls with user & admin dashboards.",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      github: "https://github.com/yourgithub/wedding-system",
      type:"Full stack Project",
      image: [eventmanagement],
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React, Tailwind, and Framer Motion to showcase projects, skills, and achievements.",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      github: "",
      type:"Frontend Project",
      image: [portfolio],
    },
    // {
    //   title: "Job Finder",
    //   description:
    //     "A job search app that fetches listings using APIs and provides filters for location and role.",
    //   tech: ["React", "API", "TailwindCSS"],
    //   github: "https://github.com/Vivekyadav99601/JobPortal",
    //   live: "https://yourlivejobfinder.com",
    //   type:"Full stack Project",
    //   image: [],
    // },
    {
      title: "Calculator",
      description:
        "A simple and elegant calculator app with basic arithmetic operations.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Vivekyadav99601/Calculator",
      type:"Frontend Project",
      image: [calculator],
    },
    {
      title: "ToDo List",
      description:
        "A task management app to add, delete, and track daily tasks with local storage support.",
      tech: ["Html","Javascript","Bootstrap", "LocalStorage"],
      github: "https://github.com/yourgithub/todo",
      type:"Frontend Project",
      image: [todo],
    },
    {
      title: "Weather App",
      description:
        "A job search app that fetches listings using APIs and provides filters for location and role.",
      tech: ["Html", "API", "javascript","Javascript"],
      github: "https://github.com/yourgithub/jobfinder",
      type:"Frontend Project",
      image: [weatherapp],
    },
    
    {
      title: "Currency Converter",
      description:
        "Convert currencies in real-time using exchange rate APIs with responsive UI.",
      tech: ["Html","Bootstrap", "API", "javascript"],
      github: "https://github.com/yourgithub/currency-converter",
      type:"Frontend Project",
      image: [currencyconvertor],
    },
    {
      title: "Food Wagon",
      description:
        "A fun app that fetches random jokes using APIs with an interactive design.",
      tech: ["Html", "CSS"],
      github: "https://github.com/yourgithub/jokeapp",
      type:"Frontend Project",
      image: [foodwagon],
    },
    {
      title: "Word Guessing Game",
      description:
        "A word game to guess words by arranging given letters.",
      tech: ["Html", "Bootstrap","Javascript","API"],
      github: "https://github.com/yourgithub/jokeapp",
      type:"Frontend Project",
      image: [wordgame],
    },

   

  ];

  return (
    <>
      <section
        id="project"
        className="relative bg-black text-white min-h-[100vh] grid  gap-7 justify-center items-center px-8 py-16"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-black to-blue-900 opacity-20 animate-pulse"></div>

        {/* Heading */}
       <div className="grid justify-center  "> <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-5xl font-bold text-blue-400 z-10"
        >
          Projects
        </motion.h2></div>

        {/* Scrollable Row */}
       
         <div className="overflow-x-auto w-full  max-w-7xl grid   no-scrollbar">
          <div className="flex gap-8 h-120 justify-center relative z-22 ">
            {projects.map((project, index) => (
             
               <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 27 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="bg-gray-900/40    backdrop-blur-md rounded-2xl overflow-hidden  shadow-lg 
                           hover:shadow-blue-500/50 hover:scale-105 transition-transform duration-300 
flex flex-col content-center  h-110 min-w-[320px] max-w-[350px]"
              >
                {/* Project Image */}
                <div className="h-100 w-full   overflow-visible">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
              <div className=" h-100 rounded-2xl ">
                  <div className="  h-full grid row-span-4 justify-center content-center gap-3 ">
                  <h3 className="text-2xl font-bold text-blue-400 ">
                    {project.title}
                  </h3>
                  <p className="text-white mb-4 h-12 font-normal overflow-hidden flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3  mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm   text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-auto m-[20px]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-30 h-10 justify-center border items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-blue-600 transition"
                    >
                      <Github className="w-5 h-5 " /> View Code
                    </a>
                     <div className="w-35 bg-transparent flex justify-center  items-center border rounded-xl ">{project.type}</div>
                    {/* <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-blue-600 transition"
                    >
                      <ExternalLink className="w-5 h-5" /> Live
                    </a> */}

                  </div>
                </div>
              </div>
              </motion.div>
            ))}
          </div>
        </div>
      

        {/* Scroll Suggestion Icon */}
<div className="flex justify-center">
         <div className="absolute bottom-6 flex items-center gap-15 justify-center content-center">
         <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          
        >
          <FaAnglesLeft className="w-8 h-8 flex items-center text-blue-400" />
        </motion.div>
        <span className="h-8 text-3xl font-bold flex items-center text-blue-400">Scroll</span>
         <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          
        >
          <FaAnglesRight className="w-8 h-8 flex items-center text-blue-400" />
        </motion.div>
       </div>
</div>
      </section>
    </>
  );
};

export default Projects;
