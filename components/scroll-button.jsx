"use client"
import { motion } from "framer-motion"

// A reusable scroll button component
const ScrollButton = ({ targetId, children, className }) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400 }}
      onClick={scrollToSection}
      className={`cursor-pointer ${className || ""}`}
    >
      {children}
    </motion.div>
  )
}

export default ScrollButton

