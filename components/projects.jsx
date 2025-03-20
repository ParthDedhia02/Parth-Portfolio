"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Droplets,
  FileText,
  BarChart3,
  ExternalLink,
  Github,
  Image,
  MessageSquare,
  ListTodo,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Potato Leaf Disease Detection",
      description:
        "A machine learning model to detect diseases in potato plant leaves using image classification techniques.",
      tags: ["Machine Learning", "Flask", "Python", "Image Processing"],
      icon: Leaf,
      color: "from-green-500 to-emerald-400",
      links: {
        demo: "#",
        github: "https://github.com/ParthDedhia02/Leaf-Disease-Detection",
      },
    },
    {
      title: "Smart Irrigation System",
      description:
        "IoT-based system that uses soil moisture sensors and weather data to optimize irrigation schedules.",
      tags: ["IoT", "Arduino", "ML", "Sensors"],
      icon: Droplets,
      color: "from-blue-500 to-cyan-400",
      links: {
        demo: "#",
        github:
          "https://github.com/ParthDedhia02/energy-efficient-smart-irrigation-system",
      },
    },
    {
      title: "Article Summary & Translator Tool",
      description:
        "NLP-powered web application that summarizes articles and translates them into multiple languages.",
      tags: ["NLP", "Flask", "Python", "API"],
      icon: FileText,
      color: "from-purple-500 to-pink-400",
      links: {
        demo: "https://news-nutshell.onrender.com/",
        github: "https://github.com/ParthDedhia02/News-Nutshell",
      },
    },
    {
      title: "BGMI Esports Data Analysis",
      description:
        "Comprehensive analysis of BGMI esports data to identify patterns and strategies in professional gameplay.",
      tags: ["SQL", "Power BI", "Python", "Data Analysis"],
      icon: BarChart3,
      color: "from-orange-500 to-red-400",
      links: {
        demo: "#",
        github: "https://github.com/ParthDedhia02/esports_data_analysis",
      },
    },
    {
      title: "ImageInsight",
      description:
        "AI-powered image analysis tool that extracts detailed information and context from uploaded images. Utilizes Google's Gemini model to provide comprehensive descriptions, identify objects, analyze scenes, and extract text from images with remarkable accuracy.",
      tags: ["Gemini", "Python", "Streamlit"],
      icon: Image,
      color: "from-indigo-500 to-blue-400",
      links: {
        demo: "https://imageinsight-p.streamlit.app/",
        github: "https://github.com/ParthDedhia02/ImageInsight",
      },
    },
    {
      title: "ChatBot",
      description:
        "Interactive conversational AI assistant built with Google's Gemini model. Features context-aware responses, memory of conversation history, and the ability to answer complex questions across various domains with natural, human-like interactions.",
      tags: ["Gemini", "Python", "Streamlit"],
      icon: MessageSquare,
      color: "from-pink-500 to-rose-400",
      links: {
        demo: "https://chat-application-p.streamlit.app/",
        github: "https://github.com/ParthDedhia02/CHAT-APPLICATION",
      },
    },
    {
      title: "ATS Resume Scorer",
      description:
        "An application that uses AI to score resumes based on their relevance to job descriptions, helping job seekers optimize their resumes for applicant tracking systems (ATS).",
      tags: ["Python", "HTML", "CSS", "LLM"],
      icon: ListTodo,
      color: "from-yellow-500 to-amber-400",
      links: {
        demo: "",
        github: "",
      },
    },
    {
      title: "RAG Based Document Buddy App",
      description:
        "A document management application that uses Retrieval-Augmented Generation (RAG) to provide intelligent document search and summarization capabilities.",
      tags: ["Python", "Streamlit", "Qdrant", "LLM"],
      icon: ListTodo,
      color: "from-yellow-500 to-amber-400",
      links: {
        demo: "",
        github: "",
      },
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,255,0.1),transparent_70%)]"></div>
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
              Projects
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of my projects showcasing my skills in AI, data
            science, and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setActiveProject(i)}
              onMouseLeave={() => setActiveProject(null)}
              className="relative"
            >
              <div
                className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 blur-sm z-[-1] transition-opacity duration-300 ${
                  activeProject === i ? "opacity-100" : ""
                }`}
              />

              <Card className="relative z-10 h-full bg-black/60 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${project.color}`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <Badge
                        key={j}
                        variant="outline"
                        className="bg-purple-950/30 text-purple-300 border-purple-500/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30"
                    onClick={() => window.open(project.links.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-400 hover:text-purple-300 hover:bg-purple-950/30"
                    onClick={() => window.open(project.links.demo, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
