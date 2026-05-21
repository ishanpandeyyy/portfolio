"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Github, Linkedin, BookOpen } from "lucide-react"
import ContactForm from "./contact-form"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isFormOpen, setIsFormOpen] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ishanpandey2803@gmail.com",
      href: "mailto:ishanpandey2803@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ishanpandeyyy",
      href: "https://github.com/ishanpandeyyy",
      color: "from-gray-500 to-gray-700",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ishanpandeyy",
      href: "https://www.linkedin.com/in/ishanpandeyy/",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: BookOpen,
      label: "Google Scholar",
      value: "scholar.google.com/citations",
      href: "https://scholar.google.com/citations?user=PhyCKsMAAAAJ&hl=en",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology and innovation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group text-center hover:transform hover:scale-105"
                  data-cursor-hover
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {contact.label}
                  </h3>

                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{contact.value}</p>
                </motion.a>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to collaborate?</h3>
              <p className="text-gray-300 mb-6">
                Whether you have a project in mind, want to discuss AI/ML solutions, or just want to connect, I'd love
                to hear from you.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                data-cursor-hover
              >
                <Mail className="w-5 h-5" />
                Send me an email
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  )
}
