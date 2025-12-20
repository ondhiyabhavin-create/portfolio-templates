"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, textReveal } from "@/lib/animations";
import { PERSONAL_INFO, ABOUT_TEXT, SERVICES } from "@/lib/constants";
import { useTemplate } from "@/context/TemplateContext";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentTemplate } = useTemplate();

  const values = SERVICES;

  const getSectionBg = () => {
    if (currentTemplate === "ai-template-dark" || currentTemplate === "ai-template-light") {
      return "bg-gradient-to-b from-cyan-950/30 via-purple-950/30 to-transparent";
    }
    return "bg-gradient-to-b from-cyan-950/30 via-purple-950/30 to-transparent";
  };

  const getGradientText = () => {
    return "gradient-text";
  };

  return (
    <section
      id="about"
      ref={ref}
      className={`relative py-32 overflow-hidden ${getSectionBg()}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <motion.h2
              variants={textReveal}
              className={`text-5xl md:text-6xl lg:text-7xl font-black mb-4 ${getGradientText()}`}
            >
              About Me
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              A passionate developer who bridges the gap between design and technology
            </motion.p>
          </motion.div>

          {/* Split Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content */}
            <motion.div variants={slideInLeft} className="space-y-6">
              <h3 className={`text-3xl md:text-4xl font-black mb-4 text-white`}>
                I'm {PERSONAL_INFO.name} <span className={getGradientText()}>||</span> a Software Developer
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                {ABOUT_TEXT}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { label: "Birthday", value: PERSONAL_INFO.birthday },
                  { label: "Age", value: PERSONAL_INFO.age },
                  { label: "Email", value: PERSONAL_INFO.email },
                  { label: "Phone", value: PERSONAL_INFO.phone },
                  { label: "City", value: PERSONAL_INFO.city },
                  { label: "Freelance", value: PERSONAL_INFO.freelance },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: idx * 0.1 }}
                    className="glass rounded-lg p-4 hover-lift"
                  >
                    <span className="text-sm text-white/70">{item.label}:</span>
                    <p className="font-bold text-white">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Template-Specific Animated Illustration */}
            <motion.div variants={slideInRight} className="relative">
              <div className="glass-strong rounded-3xl p-8 aspect-square flex items-center justify-center overflow-hidden">
                {null}
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                variants={fadeInUp}
                className="glass rounded-2xl p-6 group hover-lift cursor-pointer"
                whileHover={{ y: -10, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-white/80 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Vibrant Animated Template Illustration
function VibrantIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="vibrant-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="50%" stopColor="#4ecdc4" />
          <stop offset="100%" stopColor="#ffe66d" />
        </linearGradient>
        <linearGradient id="vibrant-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
      
      {/* Animated circles */}
      {[...Array(5)].map((_, i) => (
        <motion.circle
          key={i}
          cx={200}
          cy={200}
          r={60 + i * 25}
          fill="none"
          stroke={`url(#vibrant-grad-${i % 2 === 0 ? '1' : '2'})`}
          strokeWidth="2"
          opacity={0.3 - i * 0.05}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "200px 200px" }}
        />
      ))}
      
      {/* Floating shapes */}
      {[
        { x: 100, y: 100, color: "#ff6b6b" },
        { x: 300, y: 120, color: "#4ecdc4" },
        { x: 150, y: 280, color: "#ffe66d" },
        { x: 250, y: 300, color: "#667eea" },
      ].map((shape, i) => (
        <motion.circle
          key={i}
          cx={shape.x}
          cy={shape.y}
          r="15"
          fill={shape.color}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [shape.y, shape.y - 40, shape.y],
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
        points="200,120 250,150 250,200 200,230 150,200 150,150"
        fill="url(#vibrant-grad-1)"
        opacity="0.6"
        initial={{ rotate: 0, scale: 0 }}
        animate={{ rotate: 360, scale: [0, 1, 1] }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 1 },
        }}
        style={{ transformOrigin: "200px 175px" }}
      />
      
      {/* Animated lines */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <motion.line
          key={i}
          x1="200"
          y1="200"
          x2={200 + Math.cos((angle * Math.PI) / 180) * 80}
          y2={200 + Math.sin((angle * Math.PI) / 180) * 80}
          stroke="url(#vibrant-grad-1)"
          strokeWidth="2"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </svg>
  );
}

// Warm Professional Template Illustration
function WarmIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="warm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff8c42" />
          <stop offset="50%" stopColor="#ffb347" />
          <stop offset="100%" stopColor="#ffd700" />
        </linearGradient>
        <linearGradient id="warm-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ecdc4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#44a08d" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      {/* Geometric grid background */}
      <motion.g opacity="0.2">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.rect
            key={i}
            x={80 + i * 60}
            y={80 + i * 60}
            width="60"
            height="60"
            fill="none"
            stroke="url(#warm-grad)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.g>
      
      {/* Central diamond */}
      <motion.polygon
        points="200,100 280,200 200,300 120,200"
        fill="none"
        stroke="url(#warm-grad)"
        strokeWidth="3"
        initial={{ pathLength: 0, rotate: 0 }}
        animate={{
          pathLength: 1,
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          pathLength: { duration: 2 },
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
        }}
        style={{ transformOrigin: "200px 200px" }}
      />
      
      {/* Inner shapes */}
      <motion.circle
        cx="200"
        cy="200"
        r="60"
        fill="url(#warm-grad-2)"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.1, 1] }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      
      {/* Corner accents */}
      {[
        { x: 100, y: 100 },
        { x: 300, y: 100 },
        { x: 100, y: 300 },
        { x: 300, y: 300 },
      ].map((corner, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={corner.x}
            cy={corner.y}
            r="20"
            fill="url(#warm-grad)"
            opacity="0.6"
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              opacity: [0, 0.8, 0.6],
            }}
            transition={{
              duration: 1,
              delay: 0.8 + i * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2,
            }}
          />
          <motion.line
            x1={corner.x}
            y1={corner.y}
            x2="200"
            y2="200"
            stroke="url(#warm-grad)"
            strokeWidth="1"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        </motion.g>
      ))}
      
      {/* Professional lines */}
      <motion.g>
        <motion.rect
          x="150"
          y="180"
          width="100"
          height="2"
          rx="1"
          fill="url(#warm-grad)"
          initial={{ width: 0 }}
          animate={{ width: [0, 100, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.rect
          x="150"
          y="200"
          width="80"
          height="2"
          rx="1"
          fill="url(#warm-grad)"
          initial={{ width: 0 }}
          animate={{ width: [0, 80, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.3 }}
        />
        <motion.rect
          x="150"
          y="220"
          width="90"
          height="2"
          rx="1"
          fill="url(#warm-grad)"
          initial={{ width: 0 }}
          animate={{ width: [0, 90, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.6 }}
        />
      </motion.g>
    </svg>
  );
}
