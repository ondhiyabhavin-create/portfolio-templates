"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, MapPin, Calendar } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTemplate } from "@/context/TemplateContext";

export function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentTemplate } = useTemplate();

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

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)]" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={fadeInUp}
                  className="relative pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-[var(--accent-primary)] border-4 border-background shadow-lg shadow-[var(--accent-primary)]/50" />

                  {/* Content Card */}
                  <motion.div
                    className={`${getCardClass()} p-6 cursor-pointer`}
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </motion.div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Expandable Highlights */}
                    <AnimatePresence>
                      {expandedId === exp.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-border/50 space-y-2">
                            {exp.highlights.map((highlight, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-2"
                              >
                                <span className="text-[var(--accent-primary)] mt-1">▹</span>
                                <span className="text-sm text-muted-foreground">
                                  {highlight}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

