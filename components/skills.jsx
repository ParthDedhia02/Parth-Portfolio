"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    "Python",
    "SQL",
    "Machine Learning",
    "Data Analysis",
    "Power BI",
    "Flask",
    "React",
    "Next.js",
    "TensorFlow",
    "NLP",
    "Computer Vision",
    "IoT",
    "Arduino",
    "Git",
    "Excel",
    "Data Visualization",
  ]

  const certifications = [
    {
      title: "AWS cloud Practitioner",
      issuer: "AWS",
      date: "2023",
    },
    {
      title: "Google CLoud Digital Leader",
      issuer: "Google",
      date: "2023",
    },
    {
      title: "Python for Data Science",
      issuer: "IIT Bombay",
      date: "2022",
    },
  ]

  const skillCategories = [
    {
      name: "Programming",
      skills: ["Python", "JavaScript", "SQL", "HTML/CSS","Java"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Data Science",
      skills: ["Machine Learning", "Data Analysis", "Statistics", "Data Visualization"],
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Tools",
      skills: ["Power BI", "Excel", "TensorFlow", "Git"],
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Skills & Certifications
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="h-[400px] w-full flex items-center justify-center bg-black/30 rounded-xl border border-gray-800">
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <div className="absolute inset-0 flex flex-wrap justify-center items-center p-8">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.05,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        repeatDelay: Math.random() * 5,
                      }}
                      className="m-2"
                    >
                      <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Skill Categories</h3>
            <div className="space-y-6">
              {skillCategories.map((category, i) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex items-center mb-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-2`}></div>
                    <h4 className="text-lg font-medium text-white">{category.name}</h4>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, j) => (
                        <span key={j} className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]"
              >
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-purple-500">
                  <span className="text-xl font-bold text-white">{cert.title.charAt(0)}</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-gray-400">{cert.issuer}</p>
                <p className="text-cyan-400 text-sm mt-2">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

