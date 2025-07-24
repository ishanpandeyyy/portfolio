"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Calendar, ExternalLink } from "lucide-react"

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      instructor: "Andrew Ng",
      date: "May 11, 2025",
      courses: [
        "Supervised Machine Learning: Regression and Classification",
        "Advanced Learning Algorithms",
        "Unsupervised Learning, Recommenders, Reinforcement Learning",
      ],
      description:
        "Comprehensive study of modern machine learning concepts including supervised learning, unsupervised learning, recommender systems, and reinforcement learning.",
      verifyUrl: "https://coursera.org/verify/specialization/U2EX7QP8J918",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      instructor: "NPTEL",
      date: "Jul-Oct 2024",
      courses: ["12 week comprehensive course"],
      description: "In-depth study of cloud computing concepts, architectures, and practical implementations.",
      credits: "3-4 credits recommended",
      rollNo: "30816",
      verifyUrl: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS118S157020117304431181",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Programming in C++: A Hands-on Introduction",
      issuer: "Codio",
      instructor: "Anh Le, Elise Deitrick, Kevin Noelsaint",
      date: "Feb 1, 2024",
      courses: [
        "C++ Basics: Selection and Iteration",
        "C++ Basic Structures: Vectors, Pointers, Strings, and Files",
        "C++ Object Basics: Functions, Recursion, and Objects",
        "Object-Oriented C++: Inheritance and Encapsulation",
      ],
      description: "Comprehensive C++ programming specialization covering fundamentals to object-oriented design.",
      verifyUrl: "https://coursera.org/verify/specialization/5SX55VZ8AE6K",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
      issuer: "Stanford University",
      instructor: "Tim Roughgarden",
      date: "Nov 27, 2023",
      courses: ["Advanced Algorithms Course"],
      description:
        "Advanced study of algorithmic techniques including divide and conquer, sorting, searching, and randomized algorithms.",
      verifyUrl: "https://coursera.org/verify/52MSMGDNMCJZ",
      color: "from-red-500 to-orange-500",
    },
  ]

  return (
    <section id="certifications" className="py-20 relative">
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
              Certifications
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Professional certifications and specialized courses that demonstrate my commitment to continuous learning
            and expertise in various domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
              data-cursor-hover
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar className="w-4 h-4 mr-1" />
                  {cert.date}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {cert.title}
              </h3>

              <div className="mb-3">
                <p className="text-cyan-400 font-medium">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">Instructor: {cert.instructor}</p>
              </div>

              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{cert.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Course Content:</h4>
                <div className="space-y-1">
                  {cert.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="text-sm text-gray-400 flex items-start">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {course}
                    </div>
                  ))}
                </div>
              </div>

              {cert.credits && <p className="text-sm text-gray-400 mb-2">Credits: {cert.credits}</p>}

              {cert.rollNo && <p className="text-sm text-gray-400 mb-4">Roll No: {cert.rollNo}</p>}

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-sm font-medium"
                  data-cursor-hover
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
