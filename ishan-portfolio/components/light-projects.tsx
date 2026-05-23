'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Brain, TrendingUp, Music, BarChart3, Stethoscope, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function LightProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const projects = [
    {
      title: 'Health AI – Intelligent Healthcare Chatbot',
      description: 'AI-powered healthcare assistant leveraging Natural Language Processing to provide symptom-based guidance and medical information.',
      icon: Stethoscope,
      color: 'from-red-500 to-pink-500',
      tech: ['Python', 'NLP', 'Machine Learning', 'Flask', 'Neural Networks'],
      github: 'https://github.com/ishanpandeyyy/capstone/tree/main/health-ai-chatbot-main',
      demo: 'https://health-ai-chatbot-rose.vercel.app/',
      details: [
        'Developed an AI chatbot using advanced NLP techniques for healthcare assistance',
        'Implemented symptom-based guidance system with medical knowledge integration',
        'Trained on diverse healthcare datasets to improve accuracy and reliability',
        'Built responsive web interface using Flask backend and modern frontend',
        'Integrated text processing pipelines for understanding patient queries',
        'Optimized model performance for real-time healthcare recommendations'
      ]
    },
    {
      title: 'Olympics Data Analysis Platform',
      description: 'Interactive analytics dashboard analyzing Olympic datasets with medal trends, athlete performance metrics, and historical insights.',
      icon: BarChart3,
      color: 'from-amber-500 to-orange-500',
      tech: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'Data Visualization'],
      github: 'https://github.com/ishanpandeyyy/olympic_data_analysis',
      demo: 'https://olympicsdataanaylsis.streamlit.app/',
      details: [
        'Analyzed 120+ years of Olympic Games data with 13,000+ athlete records',
        'Created interactive visualizations showing medal distributions and trends',
        'Built country performance comparison tools with statistical analysis',
        'Implemented athlete search and filtering with detailed statistics',
        'Designed data cleaning pipelines to handle inconsistencies and missing data',
        'Deployed Streamlit app for public access and real-time data exploration'
      ]
    },
    {
      title: 'Vox Studios – Music Production Platform',
      description: 'Full-stack music production platform enabling studio management, artist collaboration, and audio processing in the cloud.',
      icon: Music,
      color: 'from-purple-500 to-indigo-500',
      tech: ['Full-Stack Development', 'Cloud Integration', 'Audio Processing', 'React', 'Node.js'],
      github: 'https://github.com/ishanpandeyyy/voxstudios',
      demo: 'https://voxstudios.in',
      details: [
        'Engineered full-stack platform for music studios and audio professionals',
        'Integrated cloud storage for secure audio file management and backup',
        'Implemented real-time collaboration features for remote music production',
        'Built audio processing pipeline with effects and mixing capabilities',
        'Created scheduling system for studio bookings and session management',
        'Deployed scalable infrastructure handling 1000+ monthly active users'
      ]
    },
    {
      title: 'ASRA AI Mental Health Chatbot',
      description: 'Advanced NLP chatbot trained on 50,000+ conversations to predict emotional states and provide mental health support.',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      tech: ['Python', 'NLP', 'Multi-label Classification', 'TensorFlow', 'BERT'],
      github: 'https://github.com/ishanpandeyyy/ASARA-GPT',
      demo: 'https://aasara-gptt.vercel.app/',
      details: [
        'Trained transformer-based model on 50,000+ mental health conversations',
        'Implemented multi-label emotion classification with 90%+ accuracy',
        'Developed context-aware conversational AI for supportive interactions',
        'Integrated sentiment analysis for real-time emotional state detection',
        'Built privacy-preserving chatbot ensuring user confidentiality',
        'Deployed production system with load balancing for 500+ concurrent users'
      ]
    },
    {
      title: 'PrimoxTradingCo Website',
      description: 'Responsive, SEO-optimized corporate website for international agro-export business with content management.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      tech: ['HTML/CSS', 'JavaScript', 'SEO Optimization', 'Responsive Design', 'CMS Integration'],
      github: 'https://github.com/ishanpandeyyy/primoxtradingco',
      demo: 'https://primoxtradingco.com',
      details: [
        'Built fully responsive website for international agro-export company',
        'Optimized for search engines achieving top rankings for 20+ keywords',
        'Implemented SEO best practices including meta tags, structured data, and sitemap',
        'Created mobile-first design with 98+ Lighthouse performance score',
        'Developed content management system for easy product and blog updates',
        'Integrated contact forms and analytics tracking for business insights'
      ]
    }
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
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-gradient">Featured Projects</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Showcase of innovative projects in AI/ML, full-stack development, and data analytics
          </p>
        </motion.div>

        {/* First 3 projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {projects.slice(0, 3).map((project) => {
            const IconComponent = project.icon
            const isExpanded = expandedProject === project.title
            return (
              <motion.div 
                key={project.title} 
                variants={itemVariants} 
                className="card group overflow-hidden hover:border-yellow-500/50 transition-all"
              >
                <div className="p-6 space-y-4">
                  {/* Icon and title */}
                  <div className="mb-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full border border-yellow-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Details expandable */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-700 space-y-2">
                      {project.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA and expand button */}
                  <div className="flex gap-2 pt-4 border-t border-gray-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-lg border border-yellow-500/30 hover:bg-yellow-500/20 transition-all text-sm font-semibold"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-lg border border-yellow-500/30 hover:bg-yellow-500/20 transition-all text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                    <button
                      onClick={() => setExpandedProject(isExpanded ? null : project.title)}
                      className="px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-lg border border-yellow-500/30 hover:bg-yellow-500/20 transition-all text-sm font-semibold"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
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
            const isExpanded = expandedProject === project.title
            return (
              <motion.div 
                key={project.title} 
                variants={itemVariants} 
                className="card group overflow-hidden hover:border-yellow-500/50 transition-all"
              >
                <div className="p-6 space-y-4">
                  {/* Icon and title */}
                  <div className="mb-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full border border-yellow-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Details expandable */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-700 space-y-2">
                      {project.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA and expand button */}
                  <div className="flex gap-2 pt-4 border-t border-gray-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-lg border border-yellow-500/30 hover:bg-yellow-500/20 transition-all text-sm font-semibold"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-lg border border-yellow-500/30 hover:bg-yellow-500/20 transition-all text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                    <button
                      onClick={() => setExpandedProject(isExpanded ? null : project.title)}
                      className="px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-lg border border-yellow-500/30 hover:bg-yellow-500/20 transition-all text-sm font-semibold"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
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
