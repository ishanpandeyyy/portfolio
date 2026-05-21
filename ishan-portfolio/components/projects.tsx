"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Brain, TrendingUp, Music, BarChart3, Stethoscope } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Health AI – Intelligent Healthcare Chatbot",
      description:
        "Developed an AI-powered healthcare assistant capable of providing symptom-based guidance, health-related responses, and intelligent conversational support using Natural Language Processing and Machine Learning techniques. Implemented a responsive web interface with scalable backend integration for real-time user interaction.",
      icon: Stethoscope,
      color: "from-red-500 to-pink-500",
      tech: ["Python", "NLP", "Machine Learning", "Flask", "API Integration", "AI Chatbot Development"],
      github: "https://github.com/ishanpandeyyy/capstone/tree/main/health-ai-chatbot-main",
      demo: "https://health-ai-chatbot-rose.vercel.app/",
    },
    {
      title: "Olympics Data Analysis Platform",
      description:
        "Built an interactive data analytics dashboard to explore historical Olympic datasets, visualize medal trends, athlete performance, country-wise statistics, and sports analytics. Developed using Python and deployed with Streamlit for real-time interactive analysis and dynamic visualizations.",
      icon: BarChart3,
      color: "from-amber-500 to-orange-500",
      tech: ["Python", "Pandas", "Plotly", "Streamlit", "Data Visualization", "EDA"],
      github: "https://github.com/ishanpandeyyy/olympic_data_analysis",
      demo: "https://olympicsdataanaylsis.streamlit.app/",
    },
    {
      title: "Vox Studios – AI-Powered Music Production Platform",
      description:
        "Built a full-stack music production and studio management platform with features for audio uploading, real-time collaboration, track management, and artist workflow optimization. Integrated cloud storage, responsive UI/UX, and scalable backend architecture for seamless studio operations.",
      icon: Music,
      color: "from-purple-500 to-indigo-500",
      tech: ["Full-Stack Development", "Cloud Integration", "Audio Processing", "Database Management", "Real-Time Collaboration"],
      github: "https://github.com/ishanpandeyyy/voxstudios",
      demo: "https://voxstudios.in",
    },
    {
      title: "ASRA AI Mental Health Chatbot",
      description:
        "Trained on 50,000+ labeled conversations, this chatbot handles misspellings and predicts a user's emotional state using NLP and multi-label classification.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            const isLastItemAlone = projects.length % 3 === 2 && index === projects.length - 1
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -10 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)" }}
                className={`w-full max-w-sm bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group relative overflow-hidden ${isLastItemAlone ? "lg:col-span-2 lg:max-w-sm xl:col-span-1 xl:col-start-2" : ""}`}
                data-cursor-hover
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + techIndex * 0.05 }}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600 group-hover:border-purple-500/50 group-hover:bg-gray-700/80 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm font-medium"
                      data-cursor-hover
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-sm font-medium"
                        data-cursor-hover
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
