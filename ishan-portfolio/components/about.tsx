"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Shield, TrendingUp, Terminal, Brain } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "C++", "JavaScript", "HTML/CSS", "React"],
      icon: Code,
      color: "from-purple-400 to-pink-400",
    },
    {
      category: "AI/ML",
      items: ["Machine Learning", "Deep Learning", "Natural Language Processing"],
      icon: Brain,
      color: "from-blue-400 to-cyan-400",
    },
    {
      category: "Systems",
      items: ["Linux (Ubuntu, Kali)", "Shell Scripting", "Bash", "Git"],
      icon: Terminal,
      color: "from-green-400 to-teal-400",
    },
    {
      category: "Security",
      items: ["Cybersecurity Fundamentals", "Ethical Hacking (Beginner)"],
      icon: Shield,
      color: "from-red-400 to-orange-400",
    },
    {
      category: "Trading & Automation",
      items: ["Pine Script", "Smart Money Concepts", "Algo Bot Development"],
      icon: TrendingUp,
      color: "from-yellow-400 to-orange-400",
    },
    {
      category: "Other",
      items: ["Web Scraping", "API Integration", "Chatbot Frameworks", "Digital Marketing and SEO"],
      icon: Database,
      color: "from-indigo-400 to-purple-400",
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Hi, I&apos;m Ishan Pandey — a Computer Science Engineer specializing in AI and Machine Learning, researcher, and tech enthusiast passionate about building intelligent systems that solve real-world problems. My interests span across artificial intelligence, machine learning, Linux systems, algorithmic trading, and modern software development.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              As a researcher, I&apos;ve also contributed to published research work in the field of technology and innovation, reflecting my passion for exploring advanced concepts and turning ideas into impactful solutions.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              I enjoy combining logic, creativity, and data to develop meaningful projects, from AI-powered applications to analytical trading systems. Beyond technology, I&apos;m deeply connected to music and creativity — whether analyzing market trends, experimenting with new ideas, or playing the electric guitar and piano, I&apos;m always driven by curiosity and continuous growth.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-6 group hover:shadow-lg"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-600 transition-colors duration-300">
                  {skill.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-blue-50 rounded-full text-sm text-blue-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-100 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
