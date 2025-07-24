"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-400">© 2024 Ishan Pandey. Built with Next.js, Tailwind CSS, and Framer Motion.</p>
          <p className="text-gray-500 text-sm mt-2">Designed with passion for innovation and clean code.</p>
        </motion.div>
      </div>
    </footer>
  )
}
