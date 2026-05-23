'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Zap, Award, Rocket } from 'lucide-react'

export default function LightHero() {
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Animated background - Dark arcade theme */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gold accent glow */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }} />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,188,5,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,188,5,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Gold accent badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-bold text-yellow-400">Arcade Developer Portfolio</span>
            </div>
          </motion.div>

          {/* Main heading with gold */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-xl font-semibold text-yellow-400 tracking-wider">ISHAN PANDEY</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient">AI/ML Engineer</span>
              <br />
              <span className="text-white">& Developer</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Researcher • Developer • Cloud Systems • Trading Algorithms • Linux Specialist
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Building intelligent systems that solve real-world problems. Passionate about AI research, elegant code, and continuous innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Explore Projects
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Get In Touch
              <Rocket className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Stats - No judgment metrics */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-yellow-500/20"
          >
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-yellow-400">5+</p>
              <p className="text-sm text-gray-400">Projects Built</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-yellow-400">6+</p>
              <p className="text-sm text-gray-400">Certifications</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-yellow-400">15+</p>
              <p className="text-sm text-gray-400">Tech Skills</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
