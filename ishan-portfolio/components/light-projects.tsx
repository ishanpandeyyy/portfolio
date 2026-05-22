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
      description: 'AI-powered healthcare assistant with symptom-based guidance using NLP.',
      icon: Stethoscope,
      color: 'from-red-400 to-pink-400',
      tech: ['Python', 'NLP', 'Machine Learning', 'Flask'],
      github: 'https://github.com/ishanpandeyyy/capstone/tree/main/health-ai-chatbot-main',
      demo: 'https://health-ai-chatbot-rose.vercel.app/',
    },
    {
      title: 'Olympics Data Analysis Platform',
      description: 'Interactive dashboard for Olympic datasets with medal trends and athlete performance analytics.',
      icon: BarChart3,
      color: 'from-amber-400 to-orange-400',
      tech: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
      github: 'https://github.com/ishanpandeyyy/olympic_data_analysis',
      demo: 'https://olympicsdataanaylsis.streamlit.app/',
    },
    {
      title: 'Vox Studios – Music Production Platform',
      description: 'Full-stack music production and studio management platform with real-time collaboration.',
      icon: Music,
      color: 'from-purple-400 to-indigo-400',
      tech: ['Full-Stack Dev', 'Cloud Integration', 'Audio Processing'],
      github: 'https://github.com/ishanpandeyyy/voxstudios',
      demo: 'https://voxstudios.in',
    },
    {
      title: 'ASRA AI Mental Health Chatbot',
      description: 'NLP chatbot trained on 50,000+ conversations to predict emotional states.',
      icon: Brain,
      color: 'from-blue-400 to-cyan-400',
      tech: ['Python', 'NLP', 'Multi-label Classification'],
      github: 'https://github.com/ishanpandeyyy/ASARA-GPT',
      demo: 'https://aasara-gptt.vercel.app/',
    },
    {
      title: 'PrimoxTradingCo Website',
      description: 'Responsive SEO-optimized company website for agro-export business.',
      icon: TrendingUp,
      color: 'from-green-400 to-emerald-400',
      tech: ['HTML', 'CSS', 'JavaScript', 'SEO'],
      github: 'https://github.com/ishanpandeyyy/primoxtradingco',
      demo: 'https://primoxtradingco.com',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcase of my best work in AI/ML development, data analytics, and full-stack engineering
          </p>
        </motion.div>

        {/* First 3 projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
        >
          {projects.slice(0, 3).map((project) => {
            const IconComponent = project.icon
            return (
              <motion.div key={project.title} variants={itemVariants} className="card group overflow-hidden hover:shadow-xl">
                <div className="p-6">
                  <div className="mb-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" 
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 transition-all">
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg transition-all">
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom 2 projects centered */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
        >
          {projects.slice(3, 5).map((project) => {
            const IconComponent = project.icon
            return (
              <motion.div key={project.title} variants={itemVariants} className="card group overflow-hidden hover:shadow-xl">
                <div className="p-6">
                  <div className="mb-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 transition-all">
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg transition-all">
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
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
