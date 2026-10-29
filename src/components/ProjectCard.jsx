
import React from 'react'

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <div className="group bg-dark-300 rounded-2xl overflow-hidden border border-gray-800 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col">

      {/* Project Image */}
      <div className="overflow-hidden">
        {/* <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        /> */}
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-1">

        <h3 className="text-xl font-semibold mb-3">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-6 mb-5">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-400 rounded-full text-xs text-gray-300 border border-gray-700 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">

          {/* <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium transition-all duration-300 hover:scale-105"
          >
            Live Demo
          </a> */}

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-lg border border-gray-600 hover:border-purple-500 hover:text-purple-400 text-gray-300 text-sm font-medium transition-all duration-300 hover:scale-105"
          >
            GitHub
          </a>

        </div>

      </div>
    </div>
  )
}

export default ProjectCard


