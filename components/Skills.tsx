"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Database, Cloud, Brain, Sparkles, Globe, Zap, Palette } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { useTemplate } from "@/context/TemplateContext";

const serviceIcons: Record<string, any> = {
  "Development": Globe,
  "AI/ML": Brain,
  "Cloud": Cloud,
  "Backend": Server,
  "Database": Database,
  "Frontend": Palette,
};

const serviceColors: Record<string, { light: string; dark: string; bg: string; border: string }> = {
  "blue": { 
    light: "text-blue-600", 
    dark: "text-blue-400", 
    bg: "bg-blue-50 border-blue-200",
    border: "border-blue-100"
  },
  "purple": { 
    light: "text-purple-600", 
    dark: "text-purple-400", 
    bg: "bg-purple-50 border-purple-200",
    border: "border-purple-100"
  },
  "cyan": { 
    light: "text-cyan-600", 
    dark: "text-cyan-400", 
    bg: "bg-cyan-50 border-cyan-200",
    border: "border-cyan-100"
  },
  "green": { 
    light: "text-green-600", 
    dark: "text-green-400", 
    bg: "bg-green-50 border-green-200",
    border: "border-green-100"
  },
  "orange": { 
    light: "text-orange-600", 
    dark: "text-orange-400", 
    bg: "bg-orange-50 border-orange-200",
    border: "border-orange-100"
  },
  "pink": { 
    light: "text-pink-600", 
    dark: "text-pink-400", 
    bg: "bg-pink-50 border-pink-200",
    border: "border-pink-100"
  },
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentTemplate } = useTemplate();
  const isBwMode = currentTemplate === "ai-template-light";

  return (
    <section id="skills" ref={ref} className={`relative py-32 overflow-hidden ${isBwMode ? 'bg-gradient-to-b from-blue-50/30 via-white to-purple-50/30' : 'bg-gradient-to-b from-pink-900/50 via-purple-900/50 to-blue-900/50'}`}>
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
              <Zap className={`w-8 h-8 relative z-10 ${isBwMode ? 'text-purple-400' : 'text-white'}`} />
            </motion.div>
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${
              currentTemplate === "ai-template-dark" || currentTemplate === "ai-template-light" 
                ? isBwMode ? "text-black" : "gradient-text"
                : currentTemplate === "mirror-display"
                ? "gradient-text ai-glow"
                : currentTemplate === "brutalist-tech"
                ? "uppercase text-black"
                : currentTemplate === "soft-creative"
                ? "font-light text-[#2d2d2d]"
                : "gradient-text-2"
            }`}>
              Services
            </h2>
            <p className={`text-xl md:text-2xl max-w-2xl mx-auto ${isBwMode ? 'text-black/70' : 'text-white/80'}`}>
              What I can do for you
            </p>
          </motion.div>

          {/* Services Grid - Broader Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service, index) => {
              const Icon = serviceIcons[service.category] || Globe;
              const colors = serviceColors[service.color] || serviceColors.blue;
              
              // Map service colors to border colors matching About section
              const borderColorMap: Record<string, string> = {
                blue: 'border-blue-100',
                purple: 'border-purple-100',
                cyan: 'border-cyan-100',
                green: 'border-green-100',
                orange: 'border-orange-100',
                pink: 'border-pink-100',
              };
              
              const borderColor = borderColorMap[service.color] || 'border-blue-100';
              
              return (
                <motion.div
                  key={service.id}
                  variants={slideInLeft}
                  className={`${isBwMode ? `border-2 ${borderColor} shadow-lg` : 'glass'} rounded-2xl p-8 relative overflow-hidden group service-card`}
                  style={isBwMode ? { 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  } : {}}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {isBwMode && (
                    <div className={`absolute top-0 right-0 w-32 h-32 ${colors.bg} rounded-bl-full opacity-50`} />
                  )}
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex p-4 rounded-xl mb-6 ${
                        isBwMode ? colors.bg : 'bg-white/10'
                      }`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`w-8 h-8 ${isBwMode ? colors.light : colors.dark}`} />
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className={`text-2xl font-bold mb-4 ${isBwMode ? 'text-black' : 'text-white'}`}>
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className={`text-base leading-relaxed ${isBwMode ? 'text-black/70' : 'text-white/80'}`}>
                      {service.description}
                    </p>
                    
                    {/* Category Badge */}
                    <motion.div
                      className={`mt-6 inline-block px-4 py-2 rounded-lg text-sm font-semibold ${
                        isBwMode 
                          ? `${colors.bg} ${colors.light}`
                          : 'bg-white/10 text-white/80'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {service.category}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
