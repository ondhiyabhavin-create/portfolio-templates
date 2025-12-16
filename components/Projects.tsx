"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { useTemplate } from "@/context/TemplateContext";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
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
    return "glass rounded-2xl";
  };

  return (
    <section id="projects" ref={ref} className={`relative py-32 overflow-hidden ${getSectionClass()}`}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${getTitleClass()}`}>
              {currentTemplate === "brutalist-tech" ? "FEATURED PROJECTS" : "Featured Projects"}
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              currentTemplate === "brutalist-tech" ? "text-gray-700 font-mono" :
              currentTemplate === "soft-creative" ? "text-[#8b7355]" :
              "text-muted-foreground"
            }`}>
              A selection of my recent work
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="group relative"
                whileHover={{ y: -5 }}
              >
                <div className={`${getCardClass()} overflow-hidden h-full`}>
                  {/* Project Image Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-tertiary)]/10 flex items-center justify-center overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 via-[var(--accent-secondary)]/5 to-[var(--accent-tertiary)]/5"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                    <span className="text-6xl relative z-10">{project.featured ? "⭐" : "💼"}</span>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <div className="flex gap-2">
                        <motion.a
                          href={project.link}
                          className="p-2 glass rounded-lg hover:bg-[var(--accent-primary)]/10 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs glass rounded-full border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="glass rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal content would go here */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

