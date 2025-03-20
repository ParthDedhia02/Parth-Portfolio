"use client"

import { motion } from "framer-motion"
import { BarChart3, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Business Analyst Intern",
      company: "Finlatics",
      period: "Nov 2023 – Jan 2024",
      description:
        "Worked with SQL, Excel, Power BI dashboards, and market research to analyze business data and create insightful visualizations.",
      skills: ["SQL", "Excel", "Power BI", "Market Research"],
      icon: BarChart3,
      color: "from-cyan-400 to-blue-500",
    },
  ]

  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Experience
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 left-0 md:left-auto md:right-0 w-8 h-8 rounded-full bg-black border-2 border-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.5)] z-10 md:transform md:translate-x-1/2">
                <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse"></div>
              </div>

              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"} p-6 bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${exp.color} mr-4`}
                  >
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-cyan-400">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4 text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{exp.period}</span>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-purple-950/50 text-purple-300 border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

