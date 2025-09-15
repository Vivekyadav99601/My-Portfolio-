import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiBootstrap,
  SiFigma,
  SiMysql,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 w-12 h-12" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500 w-12 h-12" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-12 h-12" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600 w-12 h-12" /> },
  { name: "React", icon: <SiReact className="text-cyan-400 w-12 h-12" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500 w-12 h-12" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 w-12 h-12" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-12 h-12" /> },
  { name: "Java", icon: <DiJava className="text-red-500 w-12 h-12" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 w-12 h-12" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 w-12 h-12" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500 w-12 h-12" /> },
  
];

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="relative bg-black text-white min-h-[85vh] flex gap-12 flex-col justify-center items-center  overflow-hidden "
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-black to-purple-900 animate-pulse opacity-20"></div>

        {/* Heading */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-blue-400  z-10"
        >
         My Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-20 z-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col mx-10 h-30 w-30 items-center justify-center bg-gray-900 shadow-lg rounded-full  hover:scale-105 hover:shadow-blue-500/50 transition-transform duration-300"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-medium ">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
