"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, BarChart, PieChart, LineChart, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Image from 'next/image'

export default function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  
  const [typewriterText] = useTypewriter({
    words: [
      'AI & Data Science Enthusiast',
      'Full Stack Developer',
      'Machine Learning Engineer',
      'Gamer & Developer'
    ],
    loop: true,
    delaySpeed: 2000
  })


  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,255,0.15),transparent_70%)]"></div>
        
        {/* Animated grid with data science elements */}
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="relative overflow-hidden"
            >
              {i % 7 === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.1, scale: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 flex items-center justify-center text-cyan-400"
                >
                  {i % 21 === 0 ? (
                    <BarChart className="w-8 h-8" />
                  ) : i % 14 === 0 ? (
                    <Network className="w-8 h-8" />
                  ) : (
                    <LineChart className="w-8 h-8" />
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </div>


        {/* Additional geometric patterns */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(0,200,255,0.1),transparent_70%)]"></div>
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(120,0,255,0.1),transparent_70%)]"></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-6 inline-block"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-cyan-400 p-1 shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_20px_rgba(0,255,255,0.7)] hover:border-cyan-300 transition-all duration-300">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 overflow-hidden relative group cursor-pointer">
              <Image 
                src="/passport pic.jpeg" 
                alt="Parth Dedhia" 
                width={128} 
                height={128} 
                className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                priority
                quality={95}
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
        >
          Parth Satish Dedhia
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-cyan-300 font-light transition-all duration-300 hover:text-cyan-100 hover:shadow-[0_0_15px_rgba(103,232,249,0.5)]"
        >
          <span>{typewriterText}</span>
          <Cursor cursorColor='#67e8f9' />
        </motion.h2>

        
        
      </div>
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        title="Scroll to About section"
      >
        <div className="w-6 h-10 rounded-full border-2 border-cyan-400 flex justify-center p-1 transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

