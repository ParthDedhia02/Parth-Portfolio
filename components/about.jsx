"use client"

import { motion } from "framer-motion"
import { Code2, Brain, Gamepad2, Database } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,0,255,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">About Me</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              I'm a passionate data science and AI/ML enthusiast with a strong foundation in full-stack development. My
              journey in tech is driven by curiosity and a desire to create innovative solutions that make a difference.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              When I'm not coding or analyzing data, you'll find me immersed in gaming worlds or exploring new
              technologies. I believe in the power of data to transform industries and the potential of AI to solve
              complex problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-300"
            >
              My goal is to bridge the gap between data science and practical applications, creating solutions that are
              not just technically sound but also user-friendly and impactful.
            </motion.p>
          </div>

          <div className="order-1 md:order-2 grid grid-cols-2 gap-6">
            {[
              { icon: Brain, title: "AI & ML", color: "from-purple-500 to-pink-500" },
              { icon: Database, title: "Data Science", color: "from-cyan-400 to-blue-500" },
              { icon: Code2, title: "Development", color: "from-green-400 to-cyan-500" },
              { icon: Gamepad2, title: "Gaming", color: "from-pink-500 to-orange-500" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]"
              >
                <div
                  className={`w-16 h-16 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${item.color}`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

