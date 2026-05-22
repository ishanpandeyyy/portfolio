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
      title: "Google Cloud Certified Professional Cloud Architect",
      issuer: "Google",
      instructor: "Google",
      date: "Mar 30 - May 20, 2025",
      courses: [
        "Designing and Planning Cloud Solution Architecture",
        "Managing and Provisioning Cloud Infrastructure",
        "Security and Compliance Architecture",
        "Analyzing and Optimizing Technical and Business Processes",
        "Managing Cloud Implementations and Operations",
        "Ensuring Solution and Operations Reliability",
      ],
      description:
        "Comprehensive study of cloud architecture and infrastructure design on Google Cloud Platform, including cloud solution architecture, security and compliance, networking, scalability, cost optimization, and system reliability.",
      verifyUrl: "https://www.skills.google/public_profiles/3d7b8079-935c-4e79-8a9f-fcb36f62a2b9/badges/24309323?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      color: "from-red-400 to-yellow-400",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "University of Washington",
      instructor: "University of Washington",
      date: "Feb 2 - May 18, 2025",
      courses: [
        "Machine Learning Foundations and Case Study Approaches",
        "Regression and Classification Algorithms",
        "Clustering and Unsupervised Learning",
        "Recommender Systems and Information Retrieval",
        "Deep Learning and Intelligent Applications",
        "Feature Engineering, Model Evaluation, and Predictive Analytics",
        "Practical Implementation of Machine Learning Models in Python",
      ],
      description:
        "Comprehensive study of machine learning concepts and real-world AI applications through practical case studies and hands-on projects from University of Washington. The specialization covered predictive modeling, classification, clustering, information retrieval, recommender systems, and deep learning techniques using Python.",
      verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/P4KWY17SAD2Y",
      color: "from-green-400 to-teal-400",
    },
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
      color: "from-blue-400 to-indigo-400",
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
      color: "from-cyan-400 to-blue-400",
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
      color: "from-purple-400 to-pink-400",
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
      color: "from-red-400 to-orange-400",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Certifications
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Professional certifications and specialized courses that demonstrate my commitment to continuous learning
            and expertise in various domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -10 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
              className="card p-6 group relative overflow-hidden"
            >
              {/* Animated border gradient on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 blur-lg"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    animate={{ boxShadow: ["0 0 0 0 rgba(139, 92, 246, 0.7)", "0 0 0 10px rgba(139, 92, 246, 0)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Award className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {cert.date}
                  </motion.div>
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
                      <motion.div
                        key={courseIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + courseIndex * 0.05 }}
                        className="text-sm text-gray-400 flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {course}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {cert.credits && <p className="text-sm text-gray-400 mb-2">Credits: {cert.credits}</p>}

                {cert.rollNo && <p className="text-sm text-gray-400 mb-4">Roll No: {cert.rollNo}</p>}

                {cert.verifyUrl && (
                  <motion.a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-sm font-medium"
                    data-cursor-hover
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify Certificate
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
