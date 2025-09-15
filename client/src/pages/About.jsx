import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Variants for container (stagger animation)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // 0.4s delay between children
      },
    },
  };

  // Variants for each text block
  const itemVariants = {
    hidden: { x: 100, opacity: 0 },   // right se aayega
    visible: { x: 0, opacity: 1 },    // apni jagah par
  };

  return (
    <>
      <section
        id="about"
        className="relative bg-black text-white min-h-[50vh] w-full grid justify-center items-center content-center gap-3.5 overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-black to-blue-900 opacity-20 animate-pulse"></div>

        {/* Heading */}
      <div className="">
          <motion.span
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-3xl font-medium text-blue-400 z-10 p-8 text-start"
        >
          About Me 
        </motion.span>
      </div>
<hr />
        {/* Content with stagger animation */}
      <div className="">
          <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="z-10 w-full max-w-5xl text-gray-300 text-lg leading-relaxed 
                     bg-transparent rounded-2xl shadow-lg backdrop-blur-md 
                     p-6 ml-6"
        >
       <motion.p variants={itemVariants} transition={{ duration: 0.8 }}>
  I am a Passionate and motivated student with a strong interest in{" "}
  <span className="text-blue-400 font-semibold">Web Development</span>, skilled in HTML, CSS, JavaScript, React, Node.js, MongoDB, and Java.
</motion.p>

<motion.p variants={itemVariants} transition={{ duration: 0.8 }}>
  I enjoy problem-solving, exploring new technologies, and building{" "}
  <span className="text-green-400 font-semibold">real-world projects</span> that make an impact. Focused on continuous learning, collaboration, and communication.
</motion.p>

<motion.p variants={itemVariants} transition={{ duration: 0.8 }}>
  My goal is to grow as a software professional and contribute to innovative, challenging projects.
</motion.p>

        </motion.div>
      </div>
      </section>
    </>
  );
};

export default About;
