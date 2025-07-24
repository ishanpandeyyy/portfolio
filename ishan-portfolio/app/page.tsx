"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import AnimatedCursor from "../components/animated-cursor"
import Hero from "../components/hero"
import About from "../components/about"
import Certifications from "../components/certifications"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import ParticleBackground from "../components/particle-background"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <AnimatedCursor />
      <ParticleBackground />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 z-50 origin-left"
        style={{ scaleX }}
      />

      <Navigation />

      <main>
        <Hero />
        <About />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
