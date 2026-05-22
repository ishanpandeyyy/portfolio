'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Brain, TrendingUp, Music, BarChart3, Stethoscope } from 'lucide-react'

export default function LightProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Health AI – Intelligent Healthcare Chatbot',
      description:
        'Developed an AI-powered healthcare assistant capable of providing symptom-based guidance and intelligent conversational support using Natural Language Processing.',
      icon: Stethoscope,
      badgeColor: 'badge-red',
      color: 'from-red-400 to-pink-400',
      tech: ['Python', 'NLP', 'Machine Learning', 'Flask'],
      github: 'https://github.com/ishanpandeyyy/capstone/tree/main/health-ai-chatbot-main',
      demo: 'https://health-ai-chatbot-rose.vercel.app/',
      difficulty: 'Advanced',
    },
    {
      title: 'Olympics Data Analysis Platform',
      description:
        'Interactive data analytics dashboard to explore historical Olympic datasets, visualize medal trends, athlete performance, and sports analytics.',
      icon: BarChart3,
      badgeColor: 'badge-yellow',
      color: 'from-amber-400 to-orange-400',
      tech: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
      github: 'https://github.com/ishanpandeyyy/olympic_data_analysis',
      demo: 'https://olympicsdataanaylsis.streamlit.app/',
      difficulty: 'Intermediate',
    },
    {
      title: 'Vox Studios – AI-Powered Music Production Platform',
      description:
        'Full-stack music production and studio management platform with audio uploading, real-time collaboration, and track management.',
      icon: Music,
      badgeColor: 'badge-purple',
      color: 'from-purple-400 to-indigo-400',
      tech: ['Full-Stack Dev', 'Cloud Integration', 'Audio Processing'],
      github: 'https://github.com/ishanpandeyyy/voxstudios',
      demo: 'https://voxstudios.in',
      difficulty: 'Advanced',
    },
    {
      title: 'ASRA AI Mental Health Chatbot',
      description:
        'NLP-powered chatbot trained on 50,000+ conversations to predict emotional states and provide supportive responses.',
      icon: Brain,
      badgeColor: 'badge-blue',
      color: 'from-blue-400 to-cyan-400',
      tech: ['Python', 'NLP', 'Multi-label Classification'],
      github: 'https://github.com/ishanpandeyyy/ASARA-GPT',
      demo: 'https://aasara-gptt.vercel.app/',
      difficulty: 'Intermediate',
    },
    {
      title: 'PrimoxTradingCo Website',
      description:
        'Responsive and SEO-optimized company website for an agro-export business with clean UI/UX for global audience.',
      icon: TrendingUp,
      badgeColor: 'badge-green',
      color: 'from-green-400 to-emerald-400',
      tech: ['HTML', 'CSS', 'JavaScript', 'SEO'],
      github: 'https://github.com/ishanpandeyyy/primoxtradingco',
      demo: 'https://primoxtradingco.com',
      difficulty: 'Beginner',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of my best work showcasing AI/ML development, data analytics, and full-stack engineering
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.slice(0, 3).map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="card group overflow-hidden hover:shadow-xl"
              >
                {/* Header with icon and difficulty */}
                <div className="p-6 pb-4 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <span className={`badge ${project.badgeColor} text-xs`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-gray-600">Completion</span>
                      <span className="text-xs font-bold text-blue-600">100%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Footer with CTA */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom two projects centered */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-8"
        >
          {projects.slice(3, 5).map((project) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="card group overflow-hidden hover:shadow-xl"
              >
                {/* Header with icon and difficulty */}
                <div className="p-6 pb-4 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <span className={`badge ${project.badgeColor} text-xs`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-gray-600">Completion</span>
                      <span className="text-xs font-bold text-blue-600">100%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Footer with CTA */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
