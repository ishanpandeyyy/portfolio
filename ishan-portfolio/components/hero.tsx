"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import ContactForm from "./contact-form"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const fullText = "AI/ML Developer | Linux Enthusiast | Python & C++ Programmer"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Ishan Pandey
            </span>
          </motion.h1>

          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-gray-300 font-mono">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                className="text-cyan-400"
              >
                |
              </motion.span>
            </p>
          </div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Passionate software developer specializing in AI/ML, with deep expertise in Linux systems, algorithmic
            trading, and intelligent automation. I solve real-world problems using cutting-edge technology and
            open-source solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              data-cursor-hover
            >
              Explore My Work
            </button>

            <button
              onClick={() => setIsFormOpen(true)}
              className="px-8 py-3 border-2 border-gray-600 rounded-full font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              data-cursor-hover
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </motion.div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  )
}
