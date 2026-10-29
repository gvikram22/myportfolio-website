import React from 'react'
import { motion } from 'framer-motion'

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="experience"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-black text-center mb-4">
          Work <span className="text-purple-500">Experience</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          My professional journey so far
        </p>

        <div className="max-w-4xl mx-auto space-y-8">

          {/* Mohs10 Technologies */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-dark-300 border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-5">

              <div>
                <h3 className="text-xl font-bold text-white">
                  Full Stack Web Development Intern
                </h3>

                <p className="text-purple-400 mt-1">
                  Mohs10 Technologies
                </p>
              </div>

              <span className="text-sm text-gray-400 bg-dark-400 px-4 py-2 rounded-full w-fit">
                [August] – Present
              </span>

            </div>

            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li>
                Working on web application development using the MERN stack.
              </li>

              <li>
                Developing responsive user interfaces using React.js.
              </li>

              <li>
                Gaining practical experience in backend development, APIs,
                and database integration.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-dark-400 text-gray-300 border border-gray-700 hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>


          {/* Tetra Trion */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-dark-300 border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-5">

              <div>
                <h3 className="text-xl font-bold text-white">
                  Full Stack Web Development Intern
                </h3>

                <p className="text-purple-400 mt-1">
                  Tetra Trion Technologies Pvt. Ltd.
                </p>
              </div>

              <span className="text-sm text-gray-400 bg-dark-400 px-4 py-2 rounded-full w-fit">
                6 Months
              </span>

            </div>

            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li>
                Worked on a Gym Management Website as an internship project.
              </li>

              <li>
                Developed responsive web application interfaces using React.js.
              </li>

              <li>
                Gained practical experience in full-stack web development
                and application development workflows.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-dark-400 text-gray-300 border border-gray-700 hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}

export default Work