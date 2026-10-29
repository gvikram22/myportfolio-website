import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const roles = [
  'Frontend Developer',
  'React Developer',
  'Problem Solver',
  'MERN Developer'
]

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]

    let speed = isDeleting ? 50 : 100

    if (!isDeleting && text === currentRole) {
      speed = 1500
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text === currentRole) {
          setIsDeleting(true)
        } else {
          setText(currentRole.substring(0, text.length + 1))
        }
      } else {
        if (text === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        } else {
          setText(currentRole.substring(0, text.length - 1))
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, roleIndex])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi, I'm{' '}
            <span className="text-purple-500">
              G Vikram
            </span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-purple-500">
            {text}
            <span className="border-r-2 border-purple-500 ml-1 animate-pulse">
              &nbsp;
            </span>
          </h2>

          <p className="text-white/80 text-lg mb-8">
            I create stunning web experiences with modern technologies
            and innovative design.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">

            <a
              href="#projects"
              className="px-6 py-3 bg-purple-500 rounded-lg font-medium text-white hover:bg-purple-700 transition duration-300"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-purple-500 rounded-lg font-medium text-white hover:bg-purple-500/20 transition duration-300"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">

          <div className="relative w-64 h-64 md:w-80 md:h-80">

            {/* Gradient Circle */}
            {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse opacity-70">
            </div> */}

            {/* Profile Image */}
      

          </div>

        </div>

      </div>
    </motion.div>
  )
}

export default Hero