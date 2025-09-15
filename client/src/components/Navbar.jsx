import React from "react";

const Navbar = () => {
  return (
  
  <>
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-black via-blue-900 to-purple-900 shadow-lg">
      <div className="max-w-7xl h-15 mx-auto flex items-center  justify-between px-6 py-4">
        
        {/* Logo / Brand */}
        <h1 className="text-2xl   md:text-3xl font-bold text-blue-400">
          <a href="#home">My Portfolio</a>
        </h1>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <a
            href="#about"
            className="text-gray-300 hover:text-blue-400 relative after:block after:h-[2px] after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-blue-400 relative after:block after:h-[2px] after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            Skills
          </a>
          <a
            href="#project"
            className="text-gray-300 hover:text-blue-400 relative after:block after:h-[2px] after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            Projects
          </a>
          <a
            href="#education"
            className="text-gray-300 hover:text-blue-400 relative after:block after:h-[2px] after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-blue-400 relative after:block after:h-[2px] after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            Contact
          </a>
        </div>

       
      </div>
    </nav>
  </>
  );
};

export default Navbar;
