"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import LightHero from "../components/light-hero"
import About from "../components/about"
import LightSkills from "../components/light-skills"
import Certifications from "../components/certifications"
import LightProjects from "../components/light-projects"
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
    <div className="relative bg-slate-950 text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 z-50 origin-left"
        style={{ scaleX }}
      />

      <Navigation />

      <main className="relative z-10">
        <LightHero />
        <About />
        <LightSkills />
        <Certifications />
        <LightProjects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
