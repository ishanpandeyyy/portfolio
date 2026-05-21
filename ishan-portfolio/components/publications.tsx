"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, ExternalLink } from "lucide-react"

export default function Publications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const publications = [
    {
      title: "Research Publication – Advanced International Journal for Research (AIJFR)",
      journal: "Advanced International Journal for Research (AIJFR)",
      description:
        "Published a research paper in Advanced International Journal for Research (AIJFR), an international peer-reviewed multidisciplinary journal focused on innovative research and technological advancements. The publication highlights practical applications of Artificial Intelligence, Machine Learning, and modern computational techniques in solving real-world problems.",
      areas: [
        "Artificial Intelligence & Machine Learning",
        "Natural Language Processing (NLP)",
        "Predictive Analytics & Data Processing",
        "Intelligent System Design",
        "Real-world AI Applications",
        "Research-driven Problem Solving",
      ],
      verifyUrl: "https://www.aijfr.com/research-paper.php?id=4013",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="publications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Research Publications
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Peer-reviewed research papers and publications showcasing my contributions to the field of AI and Machine
            Learning.
          </p>
        </motion.div>

        <div className="space-y-8">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -10 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 group relative overflow-hidden"
              data-cursor-hover
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-indigo-500/5 blur-xl"></div>
              </div>
              <div className="relative z-10 flex items-start gap-6">
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${publication.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  animate={{ boxShadow: ["0 0 0 0 rgba(99, 102, 241, 0.7)", "0 0 0 12px rgba(99, 102, 241, 0)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <BookOpen className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {publication.title}
                  </h3>

                  <p className="text-indigo-400 font-medium mb-4">{publication.journal}</p>

                  <p className="text-gray-300 mb-6 leading-relaxed">{publication.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Areas Covered:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {publication.areas.map((area, areaIndex) => (
                        <motion.div
                          key={areaIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + areaIndex * 0.05 }}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 flex-shrink-0"></span>
                          {area}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.a
                    href={publication.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-medium"
                    data-cursor-hover
                  >
                    <BookOpen className="w-4 h-4" />
                    Read Publication
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
