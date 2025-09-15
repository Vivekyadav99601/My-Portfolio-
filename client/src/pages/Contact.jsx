


import { motion } from "framer-motion";
import {  Mail } from "lucide-react";
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
  return (
   <>
    <section
      id="contact"
className="relative bg-black text-white min-h-[90vh] grid text-center justify-center "    >

      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-black to-purple-900 opacity-20 animate-pulse">  </div>


     

      {/* Heading */}
     <div className="">
       <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-blue-400 mb-7 z-10 "
      >
        Contact Me
      </motion.h2>
     </div>
 <div className=" bg-transparent  flex  justify-center text-center gap-10 h-100 w-[1200px]  ">
     
      <div className="grid  bg-black w-1/4 items-center text-center justify-center z-10">
      <div className=" w-full flex items-center  text-center">
       <div
          
          className="flex flex-col justify-center gap-6 space-y-6"
        >
          <h3 className="text-3xl font-bold text-blue-300">Get in Touch</h3>
          <p className="text-gray-300  ">
  <br />Let’s connect and build something amazing together. 
  
 
</p>


          {/* Social Icons */}
          <div className="grid justify-center  gap-4 mt-5">
            <a
              href="mailto:vy9008331@gmail.com"
              className="p-3 mt-2 rounded-md flex gap-3 w-auto "
            >
              <Mail className="w-6 h-6 text-blue-300" /> vy9008331@gmail.com
            </a>
            <a
              href="tel:+91 7566212414"
              rel="noopener noreferrer"
              className="p-3 rounded-md flex gap-3 w-auto "
            >
             <MdAddCall className="w-6 h-6 text-blue-300" /> +91 7566212414
            </a>
           
              <span className=" flex gap-3 w-auto "
>
<FaLocationDot className="w-6 h-auto p-2 text-blue-300" /> Bhopal, Madhya Pradesh

</span>
           
          </div>
        </div>
      </div>
    
      </div>
      <div className="w-1/2 bg-blue-900 grid items-center justify-center">
         <div className="h-100 w-100  items-center grid  bg-transparent">
          <h1 className="text-3xl font-bold text-blue-300">Send a message</h1>
 <form
 
  className=" rounded-2xl shadow-xl grid space-y-6 gap-6  backdrop-blur-lg"
>
  {/* Name */}
  <div className="flex flex-col  ">
   
    <input
      id="name"
      type="text"
      placeholder="Your name"
      className="p-3  bg-black border border-none h-10 rounded-lg
                 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 
                 outline-none text-white transition"
    />
  </div>

  {/* Email */}
  <div className="flex flex-col">
   
    <input
      id="email"
      type="email"
      placeholder="Your email"
      className="p-3  bg-black border border-gray-700 h-10 rounded-lg
                 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 
                 outline-none text-white transition"
    />
  </div>

  {/* Message */}
  <div className="flex flex-col">
   
    <textarea
      id="message"
      rows="5"
      placeholder="Type your message here..."
      className="p-3  bg-black border border-gray-700 rounded-lg
                 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 
                 outline-none text-white resize-none transition"
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="py-3 px-6 w-full h-10 rounded-lg justify-center bg-gradient-to-r 
               from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                text-white font-semibold shadow-lg 
               hover:scale-105 transition transform"
  >
    🚀 Send Message
  </button>
</form>
      </div>
      </div>
      </div>
    </section>
   </>
  );
};

export default Contact;
