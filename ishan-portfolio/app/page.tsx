"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import AnimatedCursor from "../components/animated-cursor"
import { FuturisticHero } from "../components/futuristic-hero"
import { FuturisticBackground } from "../components/futuristic-background"
import About from "../components/about"
import Certifications from "../components/certifications"
import Publications from "../components/publications"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Navigation from "../components/navigation"

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
    <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      <FuturisticBackground />
      <AnimatedCursor />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-50 origin-left"
        style={{ scaleX }}
      />

      <Navigation />

      <main className="relative z-10">
        <FuturisticHero />
        <About />
        <Certifications />
        <Publications />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
