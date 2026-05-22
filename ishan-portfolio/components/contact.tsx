"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Github, Linkedin, BookOpen } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactLinks = [
    {
      icon: Mail,
      name: "Email",
      href: "mailto:ishanpandey2803@gmail.com",
      color: "from-red-400 to-pink-400",
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/ishanpandeyyy",
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ishanpandeyy/",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: BookOpen,
      name: "Google Scholar",
      href: "https://scholar.google.com/citations?user=PhyCKsMAAAAJ&hl=en",
      color: "from-purple-400 to-indigo-400",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, and innovations in technology.
          </p>
        </motion.div>

        {/* Contact buttons grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {contactLinks.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 flex flex-col items-center text-center group hover:shadow-lg transition-all"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${contact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {contact.name}
                </h3>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Call to action section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 text-lg mb-6">
            Choose any platform above to connect with me or start a conversation
          </p>
          <motion.a
            href="mailto:ishanpandey2803@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Mail className="w-5 h-5" />
            Contact Me Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
