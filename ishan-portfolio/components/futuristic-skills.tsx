'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Code2, Database, Cloud, Zap, Lock } from 'lucide-react'

interface Skill {
  name: string
  level: number
  category: string
  icon: React.ReactNode
  color: string
  glowColor: string
  description: string
}

export default function FuturisticSkills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills: Skill[] = [
    {
      name: 'AI & Machine Learning',
      level: 95,
      category: 'AI/ML',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      glowColor: 'rgba(236, 72, 153, 0.5)',
      description: 'Deep learning, NLP, computer vision, model optimization',
    },
    {
      name: 'Python & Backend',
      level: 94,
      category: 'Programming',
      icon: <Code2 className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'rgba(0, 217, 255, 0.5)',
      description: 'Python, FastAPI, Flask, async programming, optimization',
    },
    {
      name: 'Cloud & DevOps',
      level: 90,
      category: 'Infrastructure',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500',
      glowColor: 'rgba(255, 87, 34, 0.5)',
      description: 'Google Cloud, AWS, Docker, Kubernetes, CI/CD pipelines',
    },
    {
      name: 'Data Science & Analytics',
      level: 92,
      category: 'Data',
      icon: <Database className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      glowColor: 'rgba(16, 185, 129, 0.5)',
      description: 'Pandas, SQL, Streamlit, data visualization, EDA',
    },
    {
      name: 'Linux & Systems',
      level: 88,
      category: 'Systems',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-500 to-yellow-500',
      glowColor: 'rgba(251, 146, 60, 0.5)',
      description: 'Linux administration, bash scripting, system optimization',
    },
    {
      name: 'Security & Cryptography',
      level: 85,
      category: 'Security',
      icon: <Lock className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      glowColor: 'rgba(99, 102, 241, 0.5)',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-32 relative">
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
            <span className="text-cyan-300 text-sm font-semibold">CORE COMPETENCIES</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Technical Arsenal</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mastery across AI/ML, cloud systems, and full-stack development
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow background */}
              <div
                className="absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${skill.glowColor}, transparent)`,
                }}
              />

              <div className="relative glass glass-hover rounded-2xl p-8 border border-cyan-500/20 h-full overflow-hidden">
                {/* Animated top border */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />

                {/* Skill Icon Orb */}
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${skill.color} p-0.5 mb-6 shadow-lg`}
                  animate={{
                    boxShadow: [
                      `0 0 20px ${skill.glowColor}`,
                      `0 0 40px ${skill.glowColor}`,
                      `0 0 20px ${skill.glowColor}`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  whileHover={{ scale: 1.15, rotate: 15 }}
                >
                  <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    >
                      {skill.icon}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Skill Name and Category */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
                  {skill.category}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-300 mb-6">{skill.description}</p>



                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0" />

                {/* Level Badge */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-gray-400">Mastery Level</span>
                  <motion.div
                    className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-xs font-bold text-cyan-300"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass glass-hover rounded-2xl p-6 border border-cyan-500/20 text-center">
            <p className="text-4xl font-bold text-cyan-400 mb-2">15+</p>
            <p className="text-gray-300">Technology Stacks</p>
          </div>
          <div className="glass glass-hover rounded-2xl p-6 border border-cyan-500/20 text-center">
            <p className="text-4xl font-bold text-cyan-400 mb-2">6</p>
            <p className="text-gray-300">Core Competencies</p>
          </div>
          <div className="glass glass-hover rounded-2xl p-6 border border-cyan-500/20 text-center">
            <p className="text-4xl font-bold text-cyan-400 mb-2">90%</p>
            <p className="text-gray-300">Avg Mastery</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
