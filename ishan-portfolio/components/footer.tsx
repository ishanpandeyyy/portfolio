"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ishanpandeyyy", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/ishanpandey", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/ishanpandeyyy", label: "Twitter" },
    { icon: Mail, href: "mailto:ishanpandey.dev@gmail.com", label: "Email" },
  ]

  return (
    <footer className="relative py-16 border-t border-blue-500/20 mt-12">
      {/* Glow effect */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h3
            className="text-2xl font-bold text-white mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gradient">Connect & Collaborate</span>
          </motion.h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Ready to build something extraordinary? Reach out and let's create intelligent solutions together.
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="group relative w-12 h-12 rounded-full bg-white border border-blue-500/20 flex items-center justify-center hover:border-blue-500 transition-all duration-300"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <Icon className="w-5 h-5 text-cyan-400 relative z-10 group-hover:text-cyan-300 transition-colors" />
                </motion.a>
              )
            })}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-8" />

          {/* Footer text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <p className="text-gray-700">
              © 2025 Ishan Pandey. Built with <span className="text-cyan-400 font-semibold">Next.js</span>, <span className="text-cyan-400 font-semibold">Tailwind CSS</span>, and <span className="text-cyan-400 font-semibold">Framer Motion</span>.
            </p>
            <p className="text-gray-400 text-sm">
              Crafted with <span className="text-pink-500">♡</span> for innovation, clean code, and unforgettable user experiences.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-4 text-center pt-8 border-t border-blue-500/10"
        >
          <div>
            <p className="text-2xl font-bold text-cyan-400">12</p>
            <p className="text-xs text-gray-400 mt-1">Levels Achieved</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-cyan-400">15+</p>
            <p className="text-xs text-gray-400 mt-1">Projects Built</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-cyan-400">0%</p>
            <p className="text-xs text-gray-400 mt-1">Limitation</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
