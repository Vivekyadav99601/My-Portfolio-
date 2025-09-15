import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin,  } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import image from "../assets/profile.png";
//import image from "../assets/pp2.webp"; // apni image ka path daalna
 import resume from "../assets/resume.pdf"
 

export default function Home() {
  return (
    <>
   
      <div
      id="home"
      className="relative bg-black min-h-[100vh] flex justify-center items-center m-2 overflow-hidden gap-10"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-black to-purple-900 animate-pulse opacity-20"></div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex justify-center"
      >
        <div className="w-78 h-80 rounded-full border-4 border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.6)] overflow-hidden hover:scale-105 transition-transform duration-200">
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-blue-400 space-y-6 lg:ml-20 md:ml-12 sm:ml-8 ml-6 z-10 grid gap-5"
      >
        <div className="grid ">
          <h1 className="text-3xl font-bold ">Hi! I'm Vivek.. 👋</h1>
        <h1 className="text-4xl font-extrabold ">Full Stack Developer 💻</h1>
</div>

        {/* Typewriter Effect */}
       <div >
         <TypeAnimation
          sequence={[
            "MERN Stack Developer",
            2000,
            "Java Programmer ☕",
            2000,
            "Problem Solver ⚡",
            2000,
            "Tech Explorer 🚀",
            2000,
           
          ]}
          speed={50}
          className="text-5xl md:text-5xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          repeat={Infinity}
        />
       </div>

       <div className="">
         <p className="text-gray-300 max-w-xl text-lg ">
        Motivated ECE student passionate about web development, skilled in MERN stack, aiming to build innovative and responsive applications.🌟

        </p>
       </div>

        {/* Social Icons */}
        <div className="flex gap-8 mt-6 mb-">
          <motion.a
            href="https://github.com/Vivekyadav99601"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className=" bg-transparent rounded-lg  hover:bg-blue-600 transition shadow-md"
          >
            <Github className="w-7 h-7 text-white" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/vivek-yadav-b3a564292/ "
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="bg-transparent rounded-lg hover:bg-blue-600 transition shadow-md"
          >
            <Linkedin className="w-7 h-7 text-white" />
          </motion.a>

          <motion.a
            href="https://leetcode.com/u/Vivek_7566/"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="bg-transparent rounded-lg hover:bg-blue-600 transition shadow-md"
          >
            <SiLeetcode className="w-7 h-7 text-white"/>
            
          </motion.a>

        </div>

        {/* Resume Button */}
        {/* <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
         
          className=" w-1/5  bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-2xl shadow-lg hover:opacity-90 transition"
        >
          My Resume
        </motion.button> */}
        <motion.div 
         className=" w-1/5 flex justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-2xl shadow-lg hover:opacity-90 transition"
          >
            <a href={resume}
             target="_blank"
            >View Resume</a>
        </motion.div>
 <div className="flex gap-6  ">
          <span className=" bg-gray-900 text-white w-[90px]  text-center font-medium rounded-2xl shadow-lg hover:opacity-90">MongoDB</span>
          <span className=" bg-gray-900 text-white w-[90px] text-center font-medium rounded-2xl shadow-lg hover:opacity-90">Express.js</span>
          <span className=" bg-gray-900 text-white w-[90px] text-center font-medium rounded-2xl shadow-lg hover:opacity-90">React.js</span>
          <span className=" bg-gray-900 text-white w-[90px] text-center font-medium rounded-2xl shadow-lg hover:opacity-90">Next.js</span>
          <span className=" bg-gray-900 text-white w-[90px] text-center font-medium rounded-2xl shadow-lg hover:opacity-90">Javascript</span>
          <span className=" bg-gray-900 text-white w-[100px] text-center font-medium rounded-2xl shadow-lg hover:opacity-90">TailwindCSS</span>
        </div>
        
      </motion.div>
      
    </div>
  
    </>
  );
}
