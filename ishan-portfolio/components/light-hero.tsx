'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Sparkles, Award, Code2 } from 'lucide-react'

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

  const floatingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4 },
    },
  }

  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Floating background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-40 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left content */}
          <div className="space-y-6">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-300">
                <Sparkles className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-semibold text-yellow-800">Welcome to my portfolio</span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-gray-900">ISHAN PANDEY</span>
              <br />
              <span className="text-gradient">AI/ML Engineer</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-lg leading-relaxed"
            >
              Researcher • Developer • Cloud & Trading Systems Enthusiast
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-700 text-lg max-w-lg leading-relaxed"
            >
              Passionate about building intelligent systems, conducting AI research, and solving complex problems through elegant code and innovative thinking.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center justify-center gap-2"
              >
                Explore Projects
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-300"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">5+</p>
                <p className="text-sm text-gray-600 mt-1">Major Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">6+</p>
                <p className="text-sm text-gray-600 mt-1">Certifications</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-600">15+</p>
                <p className="text-sm text-gray-600 mt-1">Tech Skills</p>
              </div>
            </motion.div>
          </div>

          {/* Right side visual - Dashboard card */}
          <motion.div
            variants={floatingVariants}
            className="hidden lg:block"
          >
            <div className="card p-8 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Mission Dashboard</h3>
                <Award className="w-6 h-6 text-yellow-500" />
              </div>

              {/* Achievement items */}
              <div className="space-y-4">
                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200"
                >
                  <Code2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Full-Stack Developer</p>
                    <p className="text-sm text-gray-600">Expert in modern web & ML stacks</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200"
                >
                  <Award className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Certified Researcher</p>
                    <p className="text-sm text-gray-600">Published AI/ML research</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200"
                >
                  <Sparkles className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Problem Solver</p>
                    <p className="text-sm text-gray-600">Building intelligent solutions</p>
                  </div>
                </motion.div>
              </div>

              {/* Progress bar */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-3">Career Progress</p>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
