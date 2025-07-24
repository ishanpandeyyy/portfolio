"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Brain, TrendingUp, Calculator } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "ASRA AI Mental Health Chatbot",
      description:
        "Trained on 50,000+ labeled conversations, this chatbot handles misspellings and predicts a user's emotional state using NLP and multi-label classification.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      tech: ["Python", "NLP", "Machine Learning", "Multi-label Classification"],
      github: "https://github.com/ishanpandeyyy/ASARA-GPT",
      demo: "https://aasara-gptt.vercel.app/",
    },
    {
      title: "PrimoxTradingCo Website",
      description:
        "Developed a responsive and SEO-optimized company website for PrimoxTradingCo, an agro-export business. Showcased agricultural products with clean UI/UX for global audience targeting and implemented contact forms for international buyers.",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      tech: ["HTML", "CSS", "JavaScript", "SEO Optimization", "Responsive Design"],
      github: "https://github.com/ishanpandeyyy/primoxtradingco",
      demo: "https://primoxtradingco.com",
    },
    {
      title: "Mall Customers Segmentation",
      description:
        "Created a customer segmentation model using Python to analyze shopping behavior based on age, gender, and purchase history. Applied clustering algorithms to categorize customers for targeted marketing strategies.",
      icon: Calculator,
      color: "from-cyan-500 to-blue-500",
      tech: ["Python", "Machine Learning", "Clustering Algorithms", "Data Analysis"],
      github: "https://github.com/ishanpandeyyy/Mall_Customer_Segmentation_Project_Cipher-Schools",
      demo: null,
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my expertise in AI/ML, algorithmic trading, and
            intelligent automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105"
                data-cursor-hover
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm font-medium"
                    data-cursor-hover
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-sm font-medium"
                      data-cursor-hover
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
