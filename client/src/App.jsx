import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Hero from "./components/Hero";
import Home from "./pages/Home";


const App = ()=>{
  return(
    <>
  <BrowserRouter >
 <Navbar />
  <Hero/>
  <Routes>
    <Route path="/home" element={<Home/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/education" element={<Education/>} />
<Route path="/about" element={<About/>} />
<Route path="/projects" element={<Projects/>} />
<Route path="/skills" element={<Skills/>} />
  </Routes>
  
  </BrowserRouter>
    </>
  )
}

export default App;
