import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-purple-500">touch</span>
        </h2>

        <p className="text-gray-400 text-center mb-10">
          Feel free to get in touch with me
        </p>

        <div className="max-w-xl mx-auto bg-dark-300 border border-gray-800 rounded-2xl p-8">

          <div className="space-y-6">

            {/* Email */}
            <a
              href="mailto:your-email@gmail.com"
              className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition"
            >
              <FaEnvelope className="text-purple-500 text-xl" />
              <span>gvikramreddy7873@gmail.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+919XXXXXXXXX"
              className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition"
            >
              <FaPhone className="text-purple-500 text-xl" />
              <span>+91 7873801506</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/gvikram22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition"
            >
              <FaGithub className="text-purple-500 text-xl" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/g-vikram-4719473ab?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition"
            >
              <FaLinkedin className="text-purple-500 text-xl" />
              <span>LinkedIn</span>
            </a>

          </div>

        </div>

      </div>
    </motion.div>
  )
}

export default Contact