"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, MapPin, Calendar, Briefcase, Code2, Rocket, Building2, Award, ExternalLink } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTemplate } from "@/context/TemplateContext";

export function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentTemplate } = useTemplate();
  const isBwMode = currentTemplate === "ai-template-light";

  const getRoleIcon = (role: string) => {
    if (role.toLowerCase().includes("junior") || role.toLowerCase().includes("developer")) {
      return Code2;
    }
    if (role.toLowerCase().includes("intern")) {
      return Rocket;
    }
    return Briefcase;
  };

  const calculateDuration = (period: string) => {
    const match = period.match(/(\w{3})\s(\d{4})\s-\s(?:(\w{3})\s(\d{4})|Present)/);
    if (!match) return "";
    
    const [, startMonth, startYear, endMonth, endYear] = match;
    const start = new Date(parseInt(startYear), ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(startMonth), 1);
    const end = endYear ? new Date(parseInt(endYear), ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(endMonth), 1) : new Date();
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    if (months < 12) return `${months} month${months !== 1 ? 's' : ''}`;
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (remainingMonths === 0) return `${years} year${years !== 1 ? 's' : ''}`;
    return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  };

  const getSectionClass = () => {
    if (currentTemplate === "brutalist-tech") return "brutalist-tech bg-white";
    if (currentTemplate === "soft-creative") return "soft-creative";
    return "";
  };

  const getTitleClass = () => {
    if (currentTemplate === "brutalist-tech") return "uppercase text-black font-black";
    if (currentTemplate === "soft-creative") return "font-light text-[#2d2d2d]";
    return "gradient-text";
  };

  const getCardClass = () => {
    if (currentTemplate === "brutalist-tech") return "brutal-card";
    if (currentTemplate === "soft-creative") return "soft-card";
    return "glass rounded-xl";
  };

  return (
    <section id="experience" ref={ref} className={`relative py-32 overflow-hidden ${getSectionClass()}`}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${getTitleClass()}`}>
              {currentTemplate === "brutalist-tech" ? "EXPERIENCE" : "Experience"}
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              currentTemplate === "brutalist-tech" ? "text-gray-700 font-mono" :
              currentTemplate === "soft-creative" ? "text-[#8b7355]" :
              "text-muted-foreground"
            }`}>
              My professional journey
            </p>
          </motion.div>

          {/* Enhanced Timeline */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div 
              className={`absolute left-8 md:left-12 top-0 bottom-0 w-1 ${
                currentTemplate === "ai-template-light" 
                  ? "bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" 
                  : "bg-gradient-to-b from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)]"
              }`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ transformOrigin: "top" }}
            />

            {/* Timeline Items */}
            <div className="space-y-6">
              {EXPERIENCE.map((exp, index) => {
                const RoleIcon = getRoleIcon(exp.role);
                const duration = calculateDuration(exp.period);
                const isExpanded = expandedId === exp.id;
                
                return (
                  <motion.div
                    key={exp.id}
                    variants={fadeInUp}
                    className="relative pl-16 md:pl-24"
                    initial={{ opacity: 0, x: -100, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                    transition={{ 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {/* Enhanced Timeline Dot with Icon */}
                    <motion.div 
                      className={`absolute left-4 md:left-8 top-4 w-12 h-12 rounded-full flex items-center justify-center ${
                        isBwMode
                          ? "bg-white border-4 border-blue-500 shadow-lg shadow-blue-500/30"
                          : "bg-[var(--accent-primary)] border-4 border-background shadow-lg shadow-[var(--accent-primary)]/50"
                      }`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: isBwMode
                          ? "0 0 20px rgba(59, 130, 246, 0.5)"
                          : "0 0 20px var(--accent-primary)"
                      }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          delay: index * 0.5
                        }}
                      >
                        <RoleIcon className={`w-5 h-5 ${
                          isBwMode ? "text-blue-600" : "text-white"
                        }`} />
                      </motion.div>
                    </motion.div>

                    {/* Enhanced Content Card */}
                    <motion.div
                      className={`${getCardClass()} p-6 md:p-8 cursor-pointer group relative overflow-hidden ${
                        isBwMode
                          ? "bg-white/95 border-2 border-black/10 hover:border-blue-500/30"
                          : "hover:border-[var(--accent-primary)]/50"
                      }`}
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                      initial={{ opacity: 0, y: 50 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ 
                        delay: index * 0.2 + 0.1,
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }}
                      whileHover={{ 
                        x: 12, 
                        scale: 1.03,
                        transition: { type: "spring", stiffness: 400, damping: 17 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Animated Gradient Background Effect */}
                      <motion.div 
                        className={`absolute inset-0 opacity-0 group-hover:opacity-10 ${
                          isBwMode
                            ? "bg-gradient-to-r from-blue-500 to-purple-500"
                            : "bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                        }`}
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{
                          backgroundSize: "200% 200%"
                        }}
                      />

                      <div className="relative z-10">
                        {/* Header Section */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <motion.div 
                              className="flex items-center gap-3 mb-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 + 0.2 }}
                            >
                              <motion.h3 
                                className={`text-2xl md:text-3xl font-bold ${
                                  isBwMode ? "text-black" : "text-white"
                                }`}
                                whileHover={{ 
                                  scale: 1.05,
                                  x: 5,
                                  transition: { type: "spring", stiffness: 400 }
                                }}
                              >
                                {exp.role}
                              </motion.h3>
                              {exp.mode && (
                                <motion.span 
                                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    isBwMode
                                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                                      : "bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]"
                                  }`}
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                                  transition={{ 
                                    delay: index * 0.2 + 0.4,
                                    type: "spring",
                                    stiffness: 200
                                  }}
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                  {exp.mode}
                                </motion.span>
                              )}
                            </motion.div>
                            
                            <motion.div 
                              className="flex flex-wrap items-center gap-4 mb-3"
                              initial={{ opacity: 0, y: 10 }}
                              animate={isInView ? { opacity: 1, y: 0 } : {}}
                              transition={{ delay: index * 0.2 + 0.3 }}
                            >
                              <motion.span 
                                className={`flex items-center gap-2 ${
                                  isBwMode ? "text-black/70" : "text-muted-foreground"
                                }`}
                                whileHover={{ x: 3, scale: 1.05 }}
                              >
                                <motion.div
                                  animate={{ rotate: [0, 10, -10, 0] }}
                                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                                >
                                  <Building2 className="w-4 h-4" />
                                </motion.div>
                                <span className="font-medium">{exp.company}</span>
                              </motion.span>
                              <motion.span 
                                className={`flex items-center gap-2 ${
                                  isBwMode ? "text-black/70" : "text-muted-foreground"
                                }`}
                                whileHover={{ x: 3, scale: 1.05 }}
                              >
                                <motion.div
                                  animate={{ rotate: [0, -10, 10, 0] }}
                                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, delay: 0.5 }}
                                >
                                  <MapPin className="w-4 h-4" />
                                </motion.div>
                                {exp.location}
                              </motion.span>
                            </motion.div>

                            {/* Duration and Period Badges */}
                            <motion.div 
                              className="flex flex-wrap items-center gap-3"
                              initial={{ opacity: 0, y: 10 }}
                              animate={isInView ? { opacity: 1, y: 0 } : {}}
                              transition={{ delay: index * 0.2 + 0.4 }}
                            >
                              <motion.span 
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium ${
                                  isBwMode
                                    ? "bg-purple-100 text-purple-700 border border-purple-300"
                                    : "bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)]"
                                }`}
                                initial={{ scale: 0, rotate: -90 }}
                                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                                transition={{ 
                                  delay: index * 0.2 + 0.5,
                                  type: "spring",
                                  stiffness: 200
                                }}
                                whileHover={{ scale: 1.1, rotate: 2 }}
                              >
                                <motion.div
                                  animate={{ rotate: [0, 15, -15, 0] }}
                                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                                >
                                  <Calendar className="w-4 h-4" />
                                </motion.div>
                                {exp.period}
                              </motion.span>
                              {duration && (
                                <motion.span 
                                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${
                                    isBwMode
                                      ? "bg-green-100 text-green-700 border border-green-300"
                                      : "bg-[var(--accent-tertiary)]/20 text-[var(--accent-tertiary)]"
                                  }`}
                                  initial={{ scale: 0, rotate: 90 }}
                                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                                  transition={{ 
                                    delay: index * 0.2 + 0.6,
                                    type: "spring",
                                    stiffness: 200
                                  }}
                                  whileHover={{ scale: 1.1, rotate: -2 }}
                                >
                                  <motion.div
                                    className="inline-block"
                                    animate={{ rotate: [0, -15, 15, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, delay: 0.5 }}
                                  >
                                    <Award className="w-4 h-4 inline mr-1" />
                                  </motion.div>
                                  {duration}
                                </motion.span>
                              )}
                            </motion.div>
                          </div>
                          
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`ml-4 ${
                              isBwMode ? "text-black/50" : "text-muted-foreground"
                            }`}
                          >
                            <ChevronDown className="w-6 h-6" />
                          </motion.div>
                        </div>

                        {/* Description */}
                        <motion.p 
                          className={`mb-4 leading-relaxed ${
                            isBwMode ? "text-black/80" : "text-muted-foreground"
                          }`}
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ delay: index * 0.2 + 0.5 }}
                        >
                          {exp.description}
                        </motion.p>

                        {/* Expandable Highlights */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className={`pt-4 mt-4 border-t ${
                                isBwMode 
                                  ? "border-black/20" 
                                  : "border-border/50"
                              }`}>
                                <h4 className={`text-sm font-semibold mb-3 ${
                                  isBwMode ? "text-black" : "text-white"
                                }`}>
                                  Key Achievements:
                                </h4>
                                <div className="space-y-3">
                                  {exp.highlights.map((highlight, idx) => (
                                    <motion.div
                                      key={idx}
                                      initial={{ x: -20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ delay: idx * 0.1 }}
                                      className="flex items-start gap-3"
                                    >
                                      <span className={`mt-1.5 ${
                                        isBwMode
                                          ? "text-blue-600"
                                          : "text-[var(--accent-primary)]"
                                      }`}>
                                        <Code2 className="w-4 h-4" />
                                      </span>
                                      <span className={`text-sm leading-relaxed ${
                                        isBwMode ? "text-black/70" : "text-muted-foreground"
                                      }`}>
                                        {highlight}
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

