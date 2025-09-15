import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";


const Education = () => {
  const education = [
   {
      title: "B-Tech in Electronics and Communication",
      school:"Bansal Institute of Research and Technology",
      place: "RGPV University, Bhopal",
      year: "2022 - 2026",
      icon: <FaGraduationCap className="w-22 h-22 text-purple-400" />,
      desc: "CGPA: 6.5+"
    },
    {
      title: "Higher Secondary School (12th)",
      school:"Vershana higher secondary school",
      place: "MP Board",
      year: "2022",
      icon: <FaUniversity className="w-22 h-22 text-green-400" />,
      desc: "Percentage: 76%"
    },
    
     {
      title: "High School (10th)",
      school:"Sapient pupil's high school",
      place: "MP Board",
      year: "2020",
      icon: <FaSchool className="w-22 h-22 text-blue-400" />,
      desc: "Percentage: 82%"
    },
  ];

  return (
    <>
    <section
      id="education"
      className="relative bg-black text-white min-h-[90vh] flex flex-col gap-10 justify-center items-center px-8 py-16 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-black to-blue-900 opacity-20 animate-pulse"></div>

      {/* Heading */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl flex gap-2  font-bold text-purple-400 mb-12 z-10"
      >
      <FaUserGraduate className="text-6xl " /> Education
      </motion.h2>

      {/* Education Timeline / Cards */}
      <div className="grid h-[300px]  grid-cols-1 md:grid-cols-3 gap-20 z-10 max-w-6xl">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col justify-center items-center text-center gap-2  bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition-transform duration-300"
          >
            {/* Icon */}
            <div className="mb-4 animate-bounce pt-5">{edu.icon}</div>
            {/* Title */}
            <h3 className="text-xl font-semibold text-blue-300 ">{edu.title}</h3>
            <p className="text-gray-400 text-sm">{edu.school} </p>
            {/* Place + Year */}
            <p className="text-gray-400 text-sm">{edu.place} </p>
            <p className="text-gray-400 text-sm"> {edu.year}</p>
            {/* Description */}
            <p className="mt-3 text-gray-300 text-center">{edu.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Education;
