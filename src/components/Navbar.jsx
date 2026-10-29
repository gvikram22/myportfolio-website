
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm py-4 px-6 md:px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl md:text-3xl font-bold text-white flex items-center"
        >
          G
          <span className="text-purple-500 ml-2">
            Vikram
          </span>

          <div className="w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full ml-1"></div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">

          <a
            href="#home"
            className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#skills"
            className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#projects"
            className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
          >
            <span>Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#experience"
            className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
          >
            <span>Experience</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contact"
            className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-900/95 rounded-lg px-6 py-5">
          <div className="flex flex-col space-y-5">

            <a
              href="#home"
              onClick={closeMenu}
              className="text-white/80 hover:text-purple-500 transition duration-300"
            >
              Home
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="text-white/80 hover:text-purple-500 transition duration-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-white/80 hover:text-purple-500 transition duration-300"
            >
              Projects
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="text-white/80 hover:text-purple-500 transition duration-300"
            >
              Experience
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-white/80 hover:text-purple-500 transition duration-300"
            >
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

