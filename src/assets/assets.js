import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaTools,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaRobot
} from 'react-icons/fa'

import profileImg from '../assets/profile.avif'

import projectImg1 from '../assets/project1.avif'
import projectImg2 from '../assets/project2.avif'
import projectImg3 from '../assets/project3.avif'
import projectImg4 from '../assets/project4.avif'
import projectImg5 from '../assets/project5.avif'
import projectImg6 from '../assets/project6.avif'


// Profile
export const assets = {
  profileImg,
}


// About
export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description:
      'I love creating practical solutions to problems using modern technologies.',
    color: 'text-purple'
  },

  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description:
      'I focus on creating clean, responsive, and user-friendly interfaces.',
    color: 'text-pink'
  },

  {
    icon: FaCode,
    title: 'Clean Code',
    description:
      'I aim to write readable, maintainable, and well-structured code.',
    color: 'text-blue'
  }
]


// Skills
export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description:
      'Building responsive and interactive user interfaces with modern frontend technologies.',
    tags: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
  },

  {
    title: 'Backend Development',
    icon: FaServer,
    description:
      'Developing server-side applications and working with REST APIs.',
    tags: ['Node.js', 'Express.js', 'Django']
  },

  {
    title: 'Database Management',
    icon: FaDatabase,
    description:
      'Working with relational and NoSQL databases and learning database design.',
    tags: ['SQL', 'PostgreSQL', 'MongoDB']
  },

  // {
  //   title: 'Data Science & AI',
  //   icon: FaRobot,
  //   description:
  //     'Exploring data analysis, machine learning, and AI technologies using Python.',
  //   tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn']
  // },

  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description:
      'Tools I use for development, version control, and deployment.',
    tags: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Vite']
  }
]


// Projects
export const projects = [
  {
    title: 'Hotel Booking System',
    description:
      'A responsive hotel booking web application with hotel listings, room details, booking interface, owner dashboard, and user authentication.',
    image: projectImg1,
    tech: ['React.js', 'Express js', 'Nodejs', 'Mongodb'],
    icons: [FaReact, FaCloud],
    demo: 'YOUR_HOTEL_BOOKING_VERCEL_LINK',
    code: 'https://github.com/gvikram22/hotel-booking.git'
  },

  {
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio website showcasing my skills, projects, education, experience, and development work.',
    image: projectImg2,
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    icons: [FaReact, FaCloud],
    demo: 'YOUR_PORTFOLIO_VERCEL_LINK',
    code: 'YOUR_PORTFOLIO_GITHUB_LINK'
  },

  {
  title: 'SmartAgro',
  description:
    'A smart agriculture web application designed to provide useful agricultural information and support better farming decisions through a simple, user-friendly interface.',
  image: projectImg3,
  tech: ['HTML', 'CSS', 'JavaScript'],
  // icons: [FaLeaf],
  demo: 'YOUR_SMARTAGRO_DEMO_LINK',
  code: 'https://github.com/gvikram22/smartagr.git'
},
{
  title: 'AI Text Summarizer',
  description:
    'An AI-powered web application that summarizes lengthy text into concise, meaningful summaries, helping users quickly understand key information.',
  image: projectImg4,
  tech: ['Html', 'JavaScript', 'AI API', ' CSS'],
  // icons: [FaRobot, FaReact],
  demo: 'YOUR_AI_SUMMARIZER_DEMO_LINK',
  code: 'https://github.com/gvikram22/textsummarizer.git'
},

  // {
  //   title: 'Quiz Application',
  //   description:
  //     'An interactive quiz application with multiple questions, answer selection, and score tracking.',
  //   image: projectImg5,
  //   tech: ['HTML', 'CSS', 'JavaScript'],
  //   icons: [FaCode],
  //   demo: 'YOUR_QUIZ_LIVE_LINK',
  //   code: 'YOUR_QUIZ_GITHUB_LINK'
  // },

  // {
  //   title: 'Calculator',
  //   description:
  //     'A responsive calculator application implementing basic arithmetic operations using JavaScript.',
  //   image: projectImg6,
  //   tech: ['HTML', 'CSS', 'JavaScript'],
  //   icons: [FaCode],
  //   demo: 'YOUR_CALCULATOR_LIVE_LINK',
  //   code: 'YOUR_CALCULATOR_GITHUB_LINK'
  // }
]


// Work Experience
export const workData = [
  {
    role: 'Full Stack Web Development Intern',
    company: 'Tetra Trion Technologies Pvt. Ltd.',
    duration: '6 Months',
    description:
      'Worked on web development tasks and contributed to the development of a Gym Management Website.',
    color: 'purple'
  },

  {
    role: 'Python AI/ML Intern',
    company: 'Ishvara Tech Consulting Pvt. Ltd.',
    duration: 'Aug 2026 - Sep 2026',
    description:
      'Worked with Python and explored fundamental concepts of data science and machine learning through practical tasks.',
    color: 'pink'
  }
]