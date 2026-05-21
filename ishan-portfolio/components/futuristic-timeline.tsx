'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, BookOpen, CheckCircle2, Zap, Trophy, Star } from 'lucide-react'

interface TimelineEvent {
  date: string
  title: string
  description: string
  type: 'achievement' | 'certification' | 'publication'
  icon: React.ReactNode
  color: string
  details: string[]
  xp: number
}

export default function FuturisticTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const timeline: TimelineEvent[] = [
    {
      date: 'May 2025',
      title: 'Machine Learning Specialization',
      description: 'Completed comprehensive ML course from University of Washington',
      type: 'certification',
      icon: <Award className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      details: ['7 modules', 'Advanced algorithms', 'Python implementation'],
      xp: 350,
    },
    {
      date: 'May 2025',
      title: 'Google Cloud Professional Architect',
      description: 'Earned prestigious cloud architecture certification',
      type: 'certification',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500',
      details: ['Cloud infrastructure', 'Security compliance', 'Cost optimization'],
      xp: 400,
    },
    {
      date: 'Mar 2025',
      title: 'Research Published - AIJFR',
      description: 'Research paper accepted in Advanced International Journal for Research',
      type: 'publication',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      details: ['AI/ML applications', 'NLP techniques', 'Real-world solutions'],
      xp: 500,
    },
    {
      date: 'Dec 2024',
      title: 'NPTEL Cloud Computing',
      description: 'Completed 12-week cloud computing fundamentals course',
      type: 'certification',
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500',
      details: ['Cloud architecture', 'Services & deployment', 'Best practices'],
      xp: 300,
    },
    {
      date: 'Nov 2023',
      title: 'Advanced Algorithms Mastery',
      description: 'Completed Stanford algorithms course on divide & conquer strategies',
      type: 'achievement',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      details: ['Divide and conquer', 'Sorting algorithms', 'Randomized techniques'],
      xp: 280,
    },
    {
      date: 'Feb 2024',
      title: 'C++ Object-Oriented Programming',
      description: 'Mastered advanced C++ programming with OOP principles',
      type: 'certification',
      icon: <Star className="w-6 h-6" />,
      color: 'from-purple-500 to-indigo-500',
      details: ['OOP design', 'Memory management', 'Advanced structures'],
      xp: 250,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-300 text-sm font-semibold">MISSION TIMELINE</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Journey & Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Milestones in research, certifications, and technical mastery
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {timeline.map((event, index) => (
            <motion.div
              key={event.title}
              variants={itemVariants}
              className="relative"
            >
              <div className="flex gap-8">
                {/* Timeline marker */}
                <div className="flex flex-col items-center gap-2">
                  <motion.div
                    className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${event.color} p-0.5 shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      boxShadow: [
                        `0 0 20px rgba(0, 217, 255, 0.3)`,
                        `0 0 40px rgba(0, 217, 255, 0.6)`,
                        `0 0 20px rgba(0, 217, 255, 0.3)`,
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                        className="text-white"
                      >
                        {event.icon}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Connecting line */}
                  {index !== timeline.length - 1 && (
                    <motion.div
                      className="w-1 h-24 bg-gradient-to-b from-cyan-500 to-transparent"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  )}
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex-1 pt-2 group"
                >
                  <div className="glass glass-hover rounded-2xl p-6 border border-cyan-500/20 h-full relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
                      {/* Top accent line */}
                      <motion.div
                        className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${event.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      />

                      <div className="pt-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                              {event.date}
                            </p>
                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {event.title}
                            </h3>
                          </div>
                          <motion.div
                            className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-xs font-bold text-cyan-300 whitespace-nowrap"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: index * 0.15 + 0.2 }}
                          >
                            +{event.xp}XP
                          </motion.div>
                        </div>

                        <p className="text-gray-300 mb-4">{event.description}</p>

                        {/* Details pills */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {event.details.map((detail, detailIndex) => (
                            <motion.span
                              key={detailIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + detailIndex * 0.05 }}
                              className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium"
                            >
                              {detail}
                            </motion.span>
                          ))}
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 mb-4" />

                        {/* Badge */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">Achievement Type</span>
                          <span className="px-2 py-1 rounded-full bg-gray-800 border border-gray-700 text-xs font-semibold text-gray-300 capitalize">
                            {event.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass glass-hover rounded-2xl p-6 border border-cyan-500/20 text-center">
            <p className="text-4xl font-bold text-cyan-400 mb-2">6</p>
            <p className="text-gray-300">Major Achievements</p>
          </div>
          <div className="glass glass-hover rounded-2xl p-6 border border-cyan-500/20 text-center">
            <p className="text-4xl font-bold text-cyan-400 mb-2">2080</p>
            <p className="text-gray-300">Total XP Earned</p>
          </div>
          <div className="glass glass-hover rounded-2xl p-6 border border-cyan-500/20 text-center">
            <p className="text-4xl font-bold text-cyan-400 mb-2">12</p>
            <p className="text-gray-300">Continuous Growth</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
