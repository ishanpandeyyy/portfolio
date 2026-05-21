'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Code2, Brain, Zap } from 'lucide-react'

export function FuturisticHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const statsData = [
    { label: 'Projects Built', value: '15+', icon: Code2 },
    { label: 'Research Published', value: '1', icon: Brain },
    { label: 'AI Models', value: '8+', icon: Zap },
    { label: 'Cloud Labs', value: '50+', icon: Code2 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-24">
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          {/* Name */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <p className="text-lg md:text-2xl font-bold text-cyan-300 tracking-widest">ISHAN PANDEY</p>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-gradient">I Build Intelligent Systems</span>
            <br />
            <span className="text-white">&</span>
            <br />
            <span className="text-gradient">Futuristic AI Experiences</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            AI/ML Engineer | Researcher | Developer | Cloud & Trading Systems Enthusiast
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 rounded-lg font-semibold text-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:from-cyan-500 group-hover:to-blue-500 px-8 py-4 rounded-lg transition-all duration-300">
                Explore Projects
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <button 
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 rounded-lg font-semibold text-cyan-300 border border-cyan-500/50 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-300 hover:bg-cyan-500/10"
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass glass-hover rounded-xl p-4 border border-cyan-500/20 text-center"
              >
                <IconComponent className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-cyan-300">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>



        {/* Floating elements */}
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 0.9, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </section>
  )
}
