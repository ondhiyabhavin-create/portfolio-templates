"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Sparkles, Heart, Rocket, Coffee, Code, Server, Brain, Cloud, Globe } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, textReveal } from "@/lib/animations";
import { PERSONAL_INFO, ABOUT_TEXT } from "@/lib/constants";
import { useTemplate } from "@/context/TemplateContext";

export function AIAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentTemplate } = useTemplate();
  const isBwMode = currentTemplate === "ai-template-light";

  const techStacks = {
    frontend: {
      icon: Code,
      title: "Frontend",
      technologies: ["React", "Next.js", "Vue.js", "JavaScript", "TypeScript"],
      color: isBwMode ? "blue" : "cyan",
    },
    backend: {
      icon: Server,
      title: "Backend",
      technologies: ["Node.js", "Express", "Python"],
      color: isBwMode ? "purple" : "purple",
    },
    ai: {
      icon: Brain,
      title: "AI/ML",
      technologies: ["Agentic AI", "RAG Pipeline", "Langflow", "Langchain"],
      color: isBwMode ? "pink" : "pink",
    },
    cloud: {
      icon: Cloud,
      title: "Cloud & Deployment",
      technologies: ["AWS", "Docker", "Vercel", "Hostinger"],
      color: isBwMode ? "green" : "emerald",
    },
  };

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Creating interfaces that are both functional and visually stunning.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing every aspect for speed and smooth user experiences.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`relative py-32 overflow-hidden ${isBwMode ? 'bg-gradient-to-b from-blue-50/30 via-white to-purple-50/30' : ''}`}
    >
      {/* Soothing background decoration for light mode */}
      {isBwMode && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(59, 130, 246, ${0.03 + Math.random() * 0.02}) 0%, transparent 70%)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Enhanced Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center justify-center mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute"
              >
                <Sparkles className={`w-12 h-12 ${isBwMode ? 'text-blue-400' : 'text-[oklch(0.7_0.2_200)]'}`} />
              </motion.div>
              <Heart className={`w-8 h-8 relative z-10 ${isBwMode ? 'text-pink-400' : 'text-white'}`} />
            </motion.div>
            <motion.h2
              variants={textReveal}
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${isBwMode ? 'text-black' : 'gradient-text'}`}
            >
              About Me
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className={`text-xl md:text-2xl max-w-2xl mx-auto ${isBwMode ? 'text-black/70' : 'text-muted-foreground'}`}
            >
              A passionate developer who bridges the gap between design and technology
            </motion.p>
          </motion.div>

          {/* Enhanced Split Layout */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start mb-20">
            {/* Left Side - Intro & Tech Stacks */}
            <motion.div variants={slideInLeft} className="space-y-6">
              {/* Introduction Card */}
              <motion.div
                className={`${isBwMode ? 'bg-white/80 backdrop-blur-sm border-2 border-blue-100 shadow-lg' : 'glass'} rounded-2xl p-8 relative overflow-hidden group`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                {isBwMode && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-bl-full opacity-50" />
                )}
                <div className="relative z-10">
                  <motion.div
                    className="flex items-center gap-3 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    <Rocket className={`w-6 h-6 ${isBwMode ? 'text-blue-600' : 'gradient-text'}`} />
                    <h3 className={`text-2xl md:text-3xl font-bold ${isBwMode ? 'text-black' : 'text-white'}`}>
                      I'm {PERSONAL_INFO.name.split(' ')[0]}
                    </h3>
                  </motion.div>
                  <motion.p
                    className={`text-lg leading-relaxed ${isBwMode ? 'text-black/80' : 'text-muted-foreground'}`}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    {ABOUT_TEXT}
                  </motion.p>
                </div>
              </motion.div>

              {/* Tech Stack Grid */}
              <motion.div
                className={`${isBwMode ? 'bg-white/80 backdrop-blur-sm border-2 border-purple-100 shadow-lg' : 'glass'} rounded-2xl p-8 relative overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                {isBwMode && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-bl-full opacity-50" />
                )}
                <div className="relative z-10">
                  <motion.div
                    className="flex items-center gap-3 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    <Code2 className={`w-6 h-6 ${isBwMode ? 'text-purple-600' : 'gradient-text'}`} />
                    <h4 className={`text-xl font-semibold ${isBwMode ? 'text-black' : 'text-white'}`}>Tech Stack</h4>
                  </motion.div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(techStacks).map(([key, stack], index) => {
                      const colorClasses = {
                        blue: isBwMode ? 'border-blue-200 bg-blue-50' : 'border-blue-500/30 bg-blue-500/10',
                        purple: isBwMode ? 'border-purple-200 bg-purple-50' : 'border-purple-500/30 bg-purple-500/10',
                        pink: isBwMode ? 'border-pink-200 bg-pink-50' : 'border-pink-500/30 bg-pink-500/10',
                        green: isBwMode ? 'border-green-200 bg-green-50' : 'border-green-500/30 bg-green-500/10',
                      };
                      
                      const iconColors = {
                        blue: isBwMode ? 'text-blue-600' : 'text-blue-400',
                        purple: isBwMode ? 'text-purple-600' : 'text-purple-400',
                        pink: isBwMode ? 'text-pink-600' : 'text-pink-400',
                        green: isBwMode ? 'text-green-600' : 'text-green-400',
                      };
                      
                      return (
                        <motion.div
                          key={key}
                          className={`rounded-xl p-4 border-2 ${colorClasses[stack.color as keyof typeof colorClasses]} transition-all hover:scale-105`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.8 + index * 0.1 }}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <stack.icon className={`w-5 h-5 ${iconColors[stack.color as keyof typeof iconColors]}`} />
                            <h5 className={`font-semibold text-sm ${isBwMode ? 'text-black' : 'text-white'}`}>
                              {stack.title}
                            </h5>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {stack.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                className={`px-2 py-1 rounded-md text-xs font-medium ${
                                  isBwMode
                                    ? stack.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                                      stack.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                                      stack.color === 'pink' ? 'bg-pink-100 text-pink-700' :
                                      'bg-green-100 text-green-700'
                                    : 'bg-white/10 text-white/80'
                                }`}
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.9 + index * 0.1 + techIndex * 0.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Animated Code/Developer Illustration */}
            <motion.div variants={slideInRight} className="relative">
              <motion.div
                className={`${isBwMode ? 'bg-white/90 backdrop-blur-sm border-2 border-blue-100 shadow-xl' : 'glass'} rounded-2xl p-8 aspect-square flex items-center justify-center overflow-hidden relative`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05 }}
              >
                {isBwMode && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 rounded-2xl" />
                )}
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full about-svg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {isBwMode ? (
                      <>
                        {/* Light mode gradients - use blue/purple colors for visibility */}
                        <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="50%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                        <linearGradient id="ai-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
                        </linearGradient>
                      </>
                    ) : (
                      <>
                        {/* Dark mode gradients - original oklch colors */}
                        <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="oklch(0.7 0.2 200)" />
                          <stop offset="50%" stopColor="oklch(0.65 0.25 250)" />
                          <stop offset="100%" stopColor="oklch(0.65 0.25 300)" />
                        </linearGradient>
                        <linearGradient id="ai-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="oklch(0.7 0.2 200)" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="oklch(0.65 0.25 300)" stopOpacity="0.1" />
                        </linearGradient>
                      </>
                    )}
                  </defs>
                  
                  {/* Background circles */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="150"
                    fill="url(#ai-gradient-2)"
                    initial={{ scale: 0.8, opacity: 0.3 }}
                    animate={{ scale: [0.8, 1, 0.8], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  {/* Code brackets */}
                  <motion.g
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <motion.path
                      d="M 120 150 L 100 200 L 120 250"
                      fill="none"
                      stroke="url(#ai-gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                    <motion.path
                      d="M 280 150 L 300 200 L 280 250"
                      fill="none"
                      stroke="url(#ai-gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                    />
                  </motion.g>
                  
                  {/* Code lines */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <motion.rect
                      x="140"
                      y="180"
                      width="80"
                      height="3"
                      rx="1.5"
                      fill="url(#ai-gradient)"
                      initial={{ width: 0 }}
                      animate={{ width: [0, 80, 80, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                    <motion.rect
                      x="140"
                      y="200"
                      width="60"
                      height="3"
                      rx="1.5"
                      fill="url(#ai-gradient)"
                      initial={{ width: 0 }}
                      animate={{ width: [0, 60, 60, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.3 }}
                    />
                    <motion.rect
                      x="140"
                      y="220"
                      width="100"
                      height="3"
                      rx="1.5"
                      fill="url(#ai-gradient)"
                      initial={{ width: 0 }}
                      animate={{ width: [0, 100, 100, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.6 }}
                    />
                  </motion.g>
                  
                  {/* Floating particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={150 + i * 20}
                      cy={120 + (i % 3) * 60}
                      r="4"
                      fill="url(#ai-gradient)"
                      initial={{ opacity: 0, y: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        y: [0, -30, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                  
                  {/* Central hexagon */}
                  <motion.polygon
                    points="200,100 250,125 250,175 200,200 150,175 150,125"
                    fill="none"
                    stroke="url(#ai-gradient)"
                    strokeWidth="3"
                    initial={{ rotate: 0, scale: 0 }}
                    animate={{ rotate: 360, scale: [0, 1, 1] }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 1, delay: 0.5 },
                    }}
                    style={{ transformOrigin: "200px 150px" }}
                  />
                  
                  {/* Connecting lines */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <motion.line
                      x1="200"
                      y1="150"
                      x2="120"
                      y2="200"
                      stroke="url(#ai-gradient)"
                      strokeWidth="2"
                      strokeOpacity="0.4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    />
                    <motion.line
                      x1="200"
                      y1="150"
                      x2="280"
                      y2="200"
                      stroke="url(#ai-gradient)"
                      strokeWidth="2"
                      strokeOpacity="0.4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.8 }}
                    />
                  </motion.g>
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Values Grid with Better Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className={`${isBwMode ? 'bg-white/90 backdrop-blur-sm border-2 shadow-lg' : 'glass'} rounded-2xl p-8 group relative overflow-hidden transition-all ${
                  isBwMode 
                    ? index === 0 ? 'border-blue-200 hover:border-blue-400' : index === 1 ? 'border-purple-200 hover:border-purple-400' : 'border-pink-200 hover:border-pink-400'
                    : 'hover:border-[oklch(0.7_0.2_200)]/50'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient background on hover for light mode */}
                {isBwMode && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity ${
                      index === 0 ? 'from-blue-100 to-cyan-100' : index === 1 ? 'from-purple-100 to-pink-100' : 'from-pink-100 to-orange-100'
                    }`}
                  />
                )}
                
                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-4 rounded-xl mb-4 ${
                      isBwMode
                        ? index === 0 ? 'bg-blue-50' : index === 1 ? 'bg-purple-50' : 'bg-pink-50'
                        : 'bg-gradient-to-br from-[oklch(0.7_0.2_200)]/20 to-[oklch(0.65_0.25_300)]/20'
                    }`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <value.icon className={`w-8 h-8 ${isBwMode ? index === 0 ? 'text-blue-600' : index === 1 ? 'text-purple-600' : 'text-pink-600' : 'gradient-text'}`} />
                  </motion.div>
                  <h3 className={`text-xl font-bold mb-3 ${isBwMode ? 'text-black' : 'gradient-text'}`}>
                    {value.title}
                  </h3>
                  <p className={`leading-relaxed ${isBwMode ? 'text-black/70' : 'text-muted-foreground'}`}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

