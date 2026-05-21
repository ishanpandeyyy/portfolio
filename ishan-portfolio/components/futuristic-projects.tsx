'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Brain, TrendingUp, Music, BarChart3, Stethoscope, Zap, CheckCircle } from 'lucide-react'

export default function FuturisticProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Health AI – Intelligent Healthcare Chatbot',
      description:
        'Developed an AI-powered healthcare assistant capable of providing symptom-based guidance, health-related responses, and intelligent conversational support using Natural Language Processing and Machine Learning techniques. Implemented a responsive web interface with scalable backend integration for real-time user interaction.',
      icon: Stethoscope,
      color: 'from-red-500 to-pink-500',
      tech: ['Python', 'NLP', 'Machine Learning', 'Flask', 'API Integration', 'AI Chatbot Development'],
      github: 'https://github.com/ishanpandeyyy/capstone/tree/main/health-ai-chatbot-main',
      demo: 'https://health-ai-chatbot-rose.vercel.app/',
      xp: 350,
      status: 'Complete',
    },
    {
      title: 'Olympics Data Analysis Platform',
      description:
        'Built an interactive data analytics dashboard to explore historical Olympic datasets, visualize medal trends, athlete performance, country-wise statistics, and sports analytics. Developed using Python and deployed with Streamlit for real-time interactive analysis and dynamic visualizations.',
      icon: BarChart3,
      color: 'from-amber-500 to-orange-500',
      tech: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'Data Visualization', 'EDA'],
      github: 'https://github.com/ishanpandeyyy/olympic_data_analysis',
      demo: 'https://olympicsdataanaylsis.streamlit.app/',
      xp: 300,
      status: 'Complete',
    },
    {
      title: 'Vox Studios – AI-Powered Music Production Platform',
      description:
        'Built a full-stack music production and studio management platform with features for audio uploading, real-time collaboration, track management, and artist workflow optimization. Integrated cloud storage, responsive UI/UX, and scalable backend architecture for seamless studio operations.',
      icon: Music,
      color: 'from-purple-500 to-indigo-500',
      tech: ['Full-Stack Development', 'Cloud Integration', 'Audio Processing', 'Database Management', 'Real-Time Collaboration'],
      github: 'https://github.com/ishanpandeyyy/voxstudios',
      demo: 'https://voxstudios.in',
      xp: 400,
      status: 'Complete',
    },
    {
      title: 'ASRA AI Mental Health Chatbot',
      description:
        'Trained on 50,000+ labeled conversations, this chatbot handles misspellings and predicts a user\'s emotional state using NLP and multi-label classification.',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      tech: ['Python', 'NLP', 'Machine Learning', 'Multi-label Classification'],
      github: 'https://github.com/ishanpandeyyy/ASARA-GPT',
      demo: 'https://aasara-gptt.vercel.app/',
      xp: 280,
      status: 'Complete',
    },
    {
      title: 'PrimoxTradingCo Website',
      description:
        'Developed a responsive and SEO-optimized company website for PrimoxTradingCo, an agro-export business. Showcased agricultural products with clean UI/UX for global audience targeting and implemented contact forms for international buyers.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      tech: ['HTML', 'CSS', 'JavaScript', 'SEO Optimization', 'Responsive Design'],
      github: 'https://github.com/ishanpandeyyy/primoxtradingco',
      demo: 'https://primoxtradingco.com',
      xp: 200,
      status: 'Complete',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-300 text-sm font-semibold">ELITE PROJECTS</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elite AI/ML and full-stack projects showcasing real-world impact and technical excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
        >
          {projects.slice(0, 3).map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Glow background */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                <div className="relative glass glass-hover rounded-2xl p-6 border border-cyan-500/20 h-full overflow-hidden">
                  {/* Animated top border accent */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />

                  {/* Header section */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} p-0.5 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </motion.div>


                  </div>

                  {/* Title and status */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-semibold text-green-400">{project.status}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 line-clamp-3 h-20">
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium hover:border-cyan-400 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-800 border border-gray-700 text-gray-400">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 mb-6" />

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 hover:bg-gray-700/50 text-gray-200 text-sm font-semibold transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-sm font-semibold transition-all duration-300"
                      >
                        <Zap className="w-4 h-4" />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Two centered project cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {projects.slice(3, 5).map((project, index) => {
            const IconComponent = project.icon
            return (
        <motion.div
          key={project.title}
          variants={itemVariants}
          whileHover={{ y: -12, transition: { duration: 0.3 } }}
          className="group relative"
        >

          {/* Glow background */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

          <div className="relative glass glass-hover rounded-2xl p-6 border border-green-500/20 overflow-hidden">
            {/* Animated top border accent */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Header section */}
            <div className="flex items-start justify-between mb-4">
              <motion.div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} p-0.5 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
              </motion.div>


            </div>

            {/* Title and status */}
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
              {project.title}
            </h3>

            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-xs font-semibold text-green-400">{project.status}</span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-6 line-clamp-3 h-20">
              {project.description}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.slice(0, 3).map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + techIndex * 0.05 }}
                  className="px-2 py-1 text-xs rounded-full bg-green-500/10 border border-green-500/30 text-green-300 font-medium hover:border-green-400 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
              {project.tech.length > 3 && (
                <span className="px-2 py-1 text-xs rounded-full bg-gray-800 border border-gray-700 text-gray-400">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-green-500/0 via-green-500/30 to-green-500/0 mb-6" />

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-green-500/50 hover:bg-gray-700/50 text-gray-200 text-sm font-semibold transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                Code
              </motion.a>
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white text-sm font-semibold transition-all duration-300"
                >
                  <Zap className="w-4 h-4" />
                  Demo
                </motion.a>
              )}
            </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
