import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className='text-center text-5xl font-bold text-white mb-4'>
          My
          <span className="text-purple-500">Skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I Work with to bring ideas to life
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {
            skills.map((skill, index) => (
              <div 
    key={index} 
    className="bg-dark-300 rounded-2xl p-6 border border-transparent hover:-translate-y-2 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer"
  >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-12 h-12 text-purple-500 mr-6" />

                  <h3 className="text-xl font-semibold">
                    {skill.title}
                  </h3>
                </div>

                <p className="text-gray-400">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {skill.tags.map((tech) => (
                    <span
                    key={tech}
                    className="px-3 py-1 bg-dark-400 rounded-full text-sm hover:bg-purple-500 hover:text-white hover:shadow-md hover:shadow-purple-500/40 transition-all duration-300 cursor-pointer"
>
  {tech}
</span>
                  ))}
                </div>
              </div>
              
            ))
          }
        </div>
      </div>
    </motion.div>
  )
}

export default Skills