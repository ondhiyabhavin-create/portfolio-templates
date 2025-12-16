"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function AIProjects() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto"
          >
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
                Featured Projects
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Click on any project to view detailed information
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  className="group relative cursor-pointer"
                  whileHover={{ y: -8 }}
                  onClick={() => router.push(`/projects/${project.id}`)}
                >
                  <div className="glass-strong rounded-3xl overflow-hidden h-full transition-all duration-500 hover:border-[oklch(0.7_0.2_200)]/50 border border-white/10 hover:shadow-2xl hover:shadow-[oklch(0.7_0.2_200)]/20">
                    {/* Project Thumbnail - Portfolio Style */}
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[oklch(0.7_0.2_200)]/10 to-[oklch(0.65_0.25_300)]/10">
                      {/* Priority 1: Use screenshotUrls - show iframe preview */}
                      {project.screenshotUrls && project.screenshotUrls.length > 0 ? (
                        <div className="relative w-full h-full overflow-hidden bg-black">
                          <iframe
                            src={project.screenshotUrls[0]}
                            className="absolute top-0 left-0 border-0 pointer-events-none"
                            style={{
                              width: '400%',
                              height: '400%',
                              transform: 'scale(0.25)',
                              transformOrigin: 'top left',
                              maxWidth: 'none',
                              maxHeight: 'none',
                            }}
                            title={`${project.title} Preview`}
                            sandbox="allow-same-origin allow-scripts"
                            loading="lazy"
                            scrolling="no"
                          />
                          {/* Show image count badge if multiple screenshots */}
                          {project.screenshotUrls.length > 1 && (
                            <div className="absolute top-2 left-2 z-10 px-2 py-1 glass rounded-md border border-[oklch(0.7_0.2_200)]/30 text-[oklch(0.7_0.2_200)] text-xs font-semibold">
                              {project.screenshotUrls.length} pages
                            </div>
                          )}
                          {/* Professional Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none z-10" />
                          {/* Hover Overlay Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.7_0.2_200)]/0 to-[oklch(0.65_0.25_300)]/0 group-hover:from-[oklch(0.7_0.2_200)]/30 group-hover:to-[oklch(0.65_0.25_300)]/30 transition-all duration-500 pointer-events-none z-10" />
                        </div>
                      ) : project.images && project.images.length > 0 && project.images[0].startsWith("/") ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={project.images[0]}
                            alt={`${project.title} - Screenshot 1`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading="lazy"
                          />
                          {/* Show image count badge if multiple images */}
                          {project.images.length > 1 && (
                            <div className="absolute top-2 left-2 z-10 px-2 py-1 glass rounded-md border border-[oklch(0.7_0.2_200)]/30 text-[oklch(0.7_0.2_200)] text-xs font-semibold">
                              {project.images.length} images
                            </div>
                          )}
                          {/* Professional Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
                          {/* Hover Overlay Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.7_0.2_200)]/0 to-[oklch(0.65_0.25_300)]/0 group-hover:from-[oklch(0.7_0.2_200)]/30 group-hover:to-[oklch(0.65_0.25_300)]/30 transition-all duration-500 pointer-events-none" />
                        </div>
                      ) : project.image && project.image.startsWith("http") && project.image.length > 0 ? (
                        <div className="relative w-full h-full overflow-hidden bg-black">
                          {/* Show iframe preview for URL-based images */}
                          <iframe
                            src={project.image}
                            className="absolute top-0 left-0 border-0 pointer-events-none"
                            style={{
                              width: '400%',
                              height: '400%',
                              transform: 'scale(0.25)',
                              transformOrigin: 'top left',
                              maxWidth: 'none',
                              maxHeight: 'none',
                            }}
                            title={`${project.title} Preview`}
                            sandbox="allow-same-origin allow-scripts"
                            loading="lazy"
                            scrolling="no"
                          />
                          {/* Professional Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none z-10" />
                          {/* Hover Overlay Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.7_0.2_200)]/0 to-[oklch(0.65_0.25_300)]/0 group-hover:from-[oklch(0.7_0.2_200)]/30 group-hover:to-[oklch(0.65_0.25_300)]/30 transition-all duration-500 pointer-events-none z-10" />
                        </div>
                      ) : project.image && project.image.startsWith("/") && project.image.length > 0 ? (
                        <div className="relative w-full h-full">
                          {/* Use local images directly - don't try screenshot API */}
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading="lazy"
                            onError={(e) => {
                              // Fallback to gradient placeholder
                              const img = e.currentTarget as HTMLImageElement;
                              img.style.display = 'none';
                              const fallback = document.createElement('div');
                              fallback.className = 'absolute inset-0 bg-gradient-to-br from-[oklch(0.7_0.2_200)]/20 to-[oklch(0.65_0.25_300)]/20 flex items-center justify-center';
                              fallback.innerHTML = `<span class="text-6xl">${project.featured ? "⭐" : "💼"}</span>`;
                              img.parentElement!.appendChild(fallback);
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
                          {/* Hover Overlay Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.7_0.2_200)]/0 to-[oklch(0.65_0.25_300)]/0 group-hover:from-[oklch(0.7_0.2_200)]/30 group-hover:to-[oklch(0.65_0.25_300)]/30 transition-all duration-500 pointer-events-none" />
                        </div>
                      ) : (
                        <div className="relative h-full bg-gradient-to-br from-[oklch(0.7_0.2_200)]/20 to-[oklch(0.65_0.25_300)]/20 flex items-center justify-center">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-[oklch(0.7_0.2_200)]/10 via-[oklch(0.65_0.25_250)]/10 to-[oklch(0.65_0.25_300)]/10"
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
                      )}
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-4 py-1.5 text-xs font-semibold glass rounded-full border border-[oklch(0.7_0.2_200)]/30 text-[oklch(0.7_0.2_200)] backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                      
                    </div>

                    {/* Project Content - Portfolio Style */}
                    <div className="p-6 bg-gradient-to-b from-transparent to-black/20">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[oklch(0.7_0.2_200)] transition-colors">
                          {project.title}
                        </h3>
                        {project.date && (
                          <p className="text-xs text-white/50 mb-3">{project.date}</p>
                        )}
                      </div>

                      <p className="text-white/70 mb-6 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack - Better Styling */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-medium glass rounded-lg border border-white/10 text-white/90 hover:border-[oklch(0.7_0.2_200)]/30 hover:text-[oklch(0.7_0.2_200)] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 5 && (
                          <span className="px-3 py-1.5 text-xs font-medium glass rounded-lg border border-white/10 text-white/70">
                            +{project.tech.length - 5}
                          </span>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2 text-[oklch(0.7_0.2_200)] text-sm font-semibold group-hover:gap-3 transition-all">
                          <span>View Project</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                        {project.link && project.link !== "#" && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 glass rounded-lg hover:bg-[oklch(0.7_0.2_200)]/20 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 text-white/70 hover:text-[oklch(0.7_0.2_200)] transition-colors" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

