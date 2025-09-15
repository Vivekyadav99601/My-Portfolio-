import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact"; 
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Home from "../pages/Home";

const Hero = ()=>{
  return(
    <>
    <div className="scrollbar-hide scrollbar-hide">
      <Home/>
     <About />
     <Skills/>
     <Projects/>
     <Education/>
     <Contact/>
    </div>
   
    </>
  )
}

export default Hero;