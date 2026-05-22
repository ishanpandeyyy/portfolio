'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Code2, Database, Cloud, Zap, Lock } from 'lucide-react'

interface Skill {
  name: string
  category: string
  icon: React.ReactNode
  badgeColor: string
  description: string
}

export default function LightSkills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills: Skill[] = [
    {
      name: 'AI & Machine Learning',
      category: 'AI/ML',
      icon: <Brain className="w-8 h-8" />,
      badgeColor: 'badge-purple',
      description: 'Deep learning, NLP, computer vision, model optimization',
    },
    {
      name: 'Python & Backend',
      category: 'Programming',
      icon: <Code2 className="w-8 h-8" />,
      badgeColor: 'badge-blue',
      description: 'Python, FastAPI, Flask, async programming, optimization',
    },
    {
      name: 'Cloud & DevOps',
      category: 'Infrastructure',
      icon: <Cloud className="w-8 h-8" />,
      badgeColor: 'badge-red',
      description: 'Google Cloud, AWS, Docker, Kubernetes, CI/CD pipelines',
    },
    {
      name: 'Data Science & Analytics',
      category: 'Data',
      icon: <Database className="w-8 h-8" />,
      badgeColor: 'badge-green',
      description: 'Pandas, SQL, Streamlit, data visualization, EDA',
    },
    {
      name: 'Linux & Systems',
      category: 'Systems',
      icon: <Zap className="w-8 h-8" />,
      badgeColor: 'badge-yellow',
      description: 'Linux administration, bash scripting, system optimization',
    },
    {
      name: 'Security & Cryptography',
      category: 'Security',
      icon: <Lock className="w-8 h-8" />,
      badgeColor: 'badge-purple',
      description: 'Ethical hacking, cryptography, security best practices',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technical skills spanning AI/ML, full-stack development, data science, and cloud infrastructure
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="card p-6 group hover:shadow-lg"
            >
              {/* Icon badge */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="text-blue-600">
                  {skill.icon}
                </div>
              </div>

              {/* Title and category */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {skill.name}
              </h3>
              <span className={`inline-block badge ${skill.badgeColor} mb-4`}>
                {skill.category}
              </span>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {skill.description}
              </p>

              {/* Collectible badge effect */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 font-semibold mb-2">MASTERY LEVEL</p>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 text-white text-xs font-bold flex items-center justify-center">
                    ⭐
                  </span>
                  <span className="text-sm font-semibold text-gray-900">Expert</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech stack summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 card bg-gradient-to-br from-blue-50 to-purple-50"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-3 uppercase">Programming Languages</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'C++', 'Bash'].map((tech) => (
                  <span key={tech} className="badge badge-blue text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-3 uppercase">AI/ML Frameworks</p>
              <div className="flex flex-wrap gap-2">
                {['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI'].map((tech) => (
                  <span key={tech} className="badge badge-purple text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-3 uppercase">Cloud & DevOps</p>
              <div className="flex flex-wrap gap-2">
                {['Google Cloud', 'AWS', 'Docker', 'Kubernetes'].map((tech) => (
                  <span key={tech} className="badge badge-green text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-3 uppercase">Databases & Tools</p>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MongoDB', 'Git', 'Linux'].map((tech) => (
                  <span key={tech} className="badge badge-yellow text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
