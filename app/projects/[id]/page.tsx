"use client";

import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Calendar, Tag, CheckCircle2, ChevronLeft, ChevronRight, X, Code, Rocket, Target, Lightbulb, Github, Globe } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";
import { useTemplate } from "@/context/TemplateContext";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = parseInt(params.id as string);
  const project = PROJECTS.find((p) => p.id === projectId);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const { currentTemplate } = useTemplate();
  const isBwMode = currentTemplate === "ai-template-light";

  // Get all images: prioritize screenshotUrls (URLs for iframe), then images array, then image field
  const allImages = project?.screenshotUrls && project.screenshotUrls.length > 0
    ? project.screenshotUrls // Use URLs directly for iframe previews
    : project?.images && project.images.length > 0 
      ? project.images 
      : project?.image && project.image.startsWith("/") 
        ? [project.image] 
        : project?.image && project.image.startsWith("http")
          ? [project.image] // Use URL directly for iframe
          : [];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => router.push("/#projects")}
            className="px-6 py-3 bg-gradient-to-r from-[oklch(0.7_0.2_200)] to-[oklch(0.65_0.25_300)] rounded-lg text-white font-semibold"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen pt-24 pb-20 ${isBwMode ? 'bg-white' : 'bg-[oklch(0.05_0_0)]'}`}>
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className={`flex items-center gap-2 mb-8 transition-colors group ${isBwMode ? 'text-black/80 hover:text-black' : 'text-white/80 hover:text-white'}`}
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </motion.button>

        {/* Project Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
                {project.title}
              </h1>
              <div className={`flex items-center gap-4 text-sm mb-6 flex-wrap ${isBwMode ? 'text-black/60' : 'text-white/60'}`}>
                {project.date && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity ${isBwMode ? 'bg-black text-white' : 'bg-gradient-to-r from-[oklch(0.7_0.2_200)] to-[oklch(0.65_0.25_300)] text-white'}`}
              >
                <ExternalLink className="w-5 h-5" />
                View Live Project
              </a>
            )}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`px-4 py-2 text-sm glass rounded-lg border font-medium ${isBwMode ? 'border-black/20 text-black' : 'border-[oklch(0.7_0.2_200)]/30 text-[oklch(0.7_0.2_200)]'}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Project Images Gallery */}
        {allImages.length > 0 ? (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            {/* Main Image Display */}
            <div className={`rounded-3xl overflow-hidden glass-strong border shadow-2xl mb-4 ${isBwMode ? 'border-black/20' : 'border-white/20'}`}>
              <div className={`relative w-full aspect-video overflow-hidden ${isBwMode ? 'bg-gray-50' : 'bg-black'}`}>
                {allImages[0].startsWith("http") ? (
                  <iframe
                    src={allImages[0]}
                    className={`w-full h-full cursor-pointer ${isBwMode ? 'border-2 border-black/15' : 'border-0'}`}
                    title={`${project.title} - Preview`}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    loading="eager"
                    onClick={() => setSelectedImageIndex(0)}
                    style={{ 
                      minHeight: '100%', 
                      minWidth: '100%',
                      ...(isBwMode ? {
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                        background: '#ffffff'
                      } : {})
                    }}
                  />
                ) : (
                  <Image
                    src={allImages[0]}
                    alt={`${project.title} - Screenshot 1`}
                    fill
                    className={`object-contain cursor-pointer ${isBwMode ? 'p-2' : ''}`}
                    sizes="100vw"
                    priority
                    onClick={() => setSelectedImageIndex(0)}
                    style={isBwMode ? { 
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '0.75rem',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    } : {}}
                  />
                )}
                {/* Elegant overlay gradient - Only in dark mode */}
                {!isBwMode && (
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[oklch(0.05_0_0)]/20" />
                )}
                
                {/* Image counter */}
                {allImages.length > 1 && (
                  <div className={`absolute top-4 right-4 px-4 py-2 glass-strong rounded-lg border text-sm font-semibold ${isBwMode ? 'border-black/30 text-black' : 'border-[oklch(0.7_0.2_200)]/30 text-[oklch(0.7_0.2_200)]'}`}>
                    {allImages.length} {project.screenshotUrls ? 'pages' : 'images'}
                  </div>
                )}
                
                {/* Live site button if available */}
                {project.link && project.link.startsWith("http") && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute bottom-6 right-6 flex items-center gap-2 px-6 py-3 rounded-xl border transition-all group z-10 ${isBwMode ? 'bg-black text-white border-black/50 hover:bg-black/90' : 'glass-strong border-[oklch(0.7_0.2_200)]/30 hover:bg-[oklch(0.7_0.2_200)]/20'}`}
                    aria-label={`Open ${project.title} in new tab`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className={`w-5 h-5 group-hover:scale-110 transition-transform ${isBwMode ? 'text-white' : 'text-[oklch(0.7_0.2_200)]'}`} />
                    <span className={`font-semibold text-sm ${isBwMode ? 'text-white' : 'text-white'}`}>Open Live Site</span>
                  </a>
                )}
              </div>
            </div>

            {/* Thumbnail Gallery (if multiple images) */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {allImages.slice(1).map((image, index) => (
                  <motion.div
                    key={index + 1}
                    className={`relative aspect-video rounded-xl overflow-hidden glass-strong border cursor-pointer transition-all ${isBwMode ? 'bg-gray-50 border-black/10 hover:border-black/30' : 'bg-black border-white/10 hover:border-[oklch(0.7_0.2_200)]/50'}`}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImageIndex(index + 1)}
                  >
                    {image.startsWith("http") ? (
                      <iframe
                        src={image}
                        className={`absolute top-0 left-0 pointer-events-none ${isBwMode ? 'border-2 border-black/15' : 'border-0'}`}
                        style={{
                          width: '400%',
                          height: '400%',
                          transform: 'scale(0.25)',
                          transformOrigin: 'top left',
                          maxWidth: 'none',
                          maxHeight: 'none',
                          ...(isBwMode ? {
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                            background: '#ffffff'
                          } : {})
                        }}
                        title={`${project.title} - Preview ${index + 2}`}
                        sandbox="allow-same-origin allow-scripts"
                        loading="lazy"
                        scrolling="no"
                      />
                    ) : (
                      <Image
                        src={image}
                        alt={`${project.title} - Screenshot ${index + 2}`}
                        fill
                        className={`object-cover ${isBwMode ? 'p-1' : ''}`}
                        sizes="(max-width: 768px) 50vw, 25vw"
                        loading="lazy"
                        style={isBwMode ? { 
                          border: '1px solid rgba(0, 0, 0, 0.1)',
                          borderRadius: '0.5rem',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                        } : {}}
                      />
                    )}
                    {!isBwMode && (
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none z-10" />
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ) : project.image && project.image.startsWith("http") ? (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className={`mb-12 rounded-3xl overflow-hidden glass-strong border shadow-2xl ${isBwMode ? 'border-black/20' : 'border-white/20'}`}
          >
            <div className={`relative w-full aspect-video rounded-3xl overflow-hidden ${isBwMode ? 'bg-gray-50' : 'bg-black/80'}`}>
              <iframe
                src={project.image}
                className={`w-full h-full ${isBwMode ? 'border-2 border-black/15' : 'border-0'}`}
                title={`${project.title} Preview`}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                loading="eager"
                style={isBwMode ? {
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                  background: '#ffffff'
                } : {}}
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[oklch(0.05_0_0)]/20" />
              <a
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
                  className={`absolute bottom-6 right-6 flex items-center gap-2 px-6 py-3 rounded-xl border transition-all group z-10 ${isBwMode ? 'bg-black text-white border-black/50 hover:bg-black/90' : 'glass-strong border-[oklch(0.7_0.2_200)]/30 hover:bg-[oklch(0.7_0.2_200)]/20'}`}
              >
                <ExternalLink className={`w-5 h-5 group-hover:scale-110 transition-transform ${isBwMode ? 'text-white' : 'text-[oklch(0.7_0.2_200)]'}`} />
                <span className={`font-semibold text-sm ${isBwMode ? 'text-white' : 'text-white'}`}>Open Live Site</span>
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-12 w-full aspect-video bg-gradient-to-br from-[oklch(0.7_0.2_200)]/20 to-[oklch(0.65_0.25_300)]/20 flex items-center justify-center rounded-3xl"
          >
            <span className="text-8xl">{project.featured ? "⭐" : "💼"}</span>
          </motion.div>
        )}

        {/* Full-screen Image Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isBwMode ? 'bg-white/95' : 'bg-black/95'}`}
              onClick={() => setSelectedImageIndex(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-7xl max-h-[90vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {allImages[selectedImageIndex].startsWith("http") ? (
                  <iframe
                    src={allImages[selectedImageIndex]}
                    className={`w-full h-full ${isBwMode ? 'border-2 border-black/20 bg-white' : 'border-0 bg-black'}`}
                    style={isBwMode ? {
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
                    } : {}}
                    title={`${project.title} - Screenshot ${selectedImageIndex + 1}`}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    loading="eager"
                  />
                ) : (
                  <Image
                    src={allImages[selectedImageIndex]}
                    alt={`${project.title} - Screenshot ${selectedImageIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                )}
                
                {/* Close button */}
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className={`absolute top-4 right-4 p-2 glass-strong rounded-lg border transition-all ${isBwMode ? 'border-black/20 hover:border-black/50' : 'border-white/20 hover:border-[oklch(0.7_0.2_200)]/50'}`}
                  aria-label="Close image"
                >
                  <X className={`w-6 h-6 ${isBwMode ? 'text-black' : 'text-white'}`} />
                </button>

                {/* Navigation arrows */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex((selectedImageIndex - 1 + allImages.length) % allImages.length);
                      }}
                      className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 glass-strong rounded-lg border transition-all ${isBwMode ? 'border-black/20 hover:border-black/50' : 'border-white/20 hover:border-[oklch(0.7_0.2_200)]/50'}`}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className={`w-6 h-6 ${isBwMode ? 'text-black' : 'text-white'}`} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex((selectedImageIndex + 1) % allImages.length);
                      }}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 glass-strong rounded-lg border transition-all ${isBwMode ? 'border-black/20 hover:border-black/50' : 'border-white/20 hover:border-[oklch(0.7_0.2_200)]/50'}`}
                      aria-label="Next image"
                    >
                      <ChevronRight className={`w-6 h-6 ${isBwMode ? 'text-black' : 'text-white'}`} />
                    </button>
                  </>
                )}

                {/* Image counter */}
                <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 glass-strong rounded-lg border text-sm ${isBwMode ? 'border-black/20 text-black' : 'border-white/20 text-white'}`}>
                  {selectedImageIndex + 1} / {allImages.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Description */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <p className={`text-xl leading-relaxed ${isBwMode ? 'text-black/80' : 'text-white/80'}`}>
            {project.description}
          </p>
        </motion.div>

        {/* Detailed Information */}
        {project.details && (
          <div className="space-y-12">
            {/* Overview */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Overview
              </h2>
              <p className={`text-lg leading-relaxed ${isBwMode ? 'text-black/80' : 'text-white/80'}`}>
                {project.details.overview}
              </p>
            </motion.div>

            {/* Key Features */}
            {project.details.features && (
              <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {project.details.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`flex items-start gap-4 text-lg ${isBwMode ? 'text-black/80' : 'text-white/80'}`}
                    >
                      <CheckCircle2 className="w-6 h-6 text-[oklch(0.7_0.2_200)] mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Challenges */}
            {project.details.challenges && (
              <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                  Challenges & Solutions
                </h2>
                <p className={`text-lg leading-relaxed ${isBwMode ? 'text-black/80' : 'text-white/80'}`}>
                  {project.details.challenges}
                </p>
              </motion.div>
            )}

            {/* Impact */}
            {project.details.impact && (
              <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                  Impact
                </h2>
                <p className={`text-lg leading-relaxed ${isBwMode ? 'text-black/80' : 'text-white/80'}`}>
                  {project.details.impact}
                </p>
              </motion.div>
            )}

            {/* Technical Architecture */}
            {project.details.architecture && (
              <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-8 h-8 text-[oklch(0.7_0.2_200)]" />
                  <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                    Technical Architecture
                  </h2>
                </div>
                <p className={`text-lg leading-relaxed ${isBwMode ? 'text-black/80' : 'text-white/80'}`}>
                  {project.details.architecture}
                </p>
              </motion.div>
            )}

            {/* Technologies Used */}
            {project.details.technologies && project.details.technologies.length > 0 && (
              <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                <div className="flex items-center gap-3 mb-6">
                  <Tag className="w-8 h-8 text-[oklch(0.7_0.2_200)]" />
                  <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                    Technologies & Tools
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {project.details.technologies.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`px-4 py-3 glass rounded-lg border transition-all text-center ${isBwMode ? 'border-black/10 hover:border-black/30' : 'border-white/10 hover:border-[oklch(0.7_0.2_200)]/50'}`}
                    >
                      <span className={`text-sm font-medium ${isBwMode ? 'text-black/90' : 'text-white/90'}`}>{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Development Process */}
            {project.details.developmentProcess && (
              <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="w-8 h-8 text-[oklch(0.7_0.2_200)]" />
                  <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                    Development Process
                  </h2>
                </div>
                <p className={`text-lg leading-relaxed ${isBwMode ? 'text-black/80' : 'text-white/80'}`}>
                  {project.details.developmentProcess}
                </p>
              </motion.div>
            )}

            {/* Results & Achievements */}
            {project.details.results && project.details.results.length > 0 && (
              <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-[oklch(0.7_0.2_200)]" />
                  <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                    Results & Achievements
                  </h2>
                </div>
                <ul className="space-y-4">
                  {project.details.results.map((result, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`flex items-start gap-4 text-lg ${isBwMode ? 'text-black/80' : 'text-white/80'}`}
                    >
                      <CheckCircle2 className="w-6 h-6 text-[oklch(0.7_0.2_200)] mt-1 flex-shrink-0" />
                      <span>{result}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Lessons Learned */}
            {project.details.lessonsLearned && (
              <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-8 h-8 text-[oklch(0.7_0.2_200)]" />
                  <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                    Lessons Learned
                  </h2>
                </div>
                <p className={`text-lg leading-relaxed ${isBwMode ? 'text-black/80' : 'text-white/80'}`}>
                  {project.details.lessonsLearned}
                </p>
              </motion.div>
            )}

            {/* Future Improvements */}
            {project.details.futureImprovements && (
              <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                  Future Improvements
                </h2>
                <p className={`text-lg leading-relaxed ${isBwMode ? 'text-black/80' : 'text-white/80'}`}>
                  {project.details.futureImprovements}
                </p>
              </motion.div>
            )}

            {/* Links */}
            {(project.details.repository || project.details.demo) && (
              <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mt-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  Project Links
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.details.repository && (
                    <a
                      href={project.details.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-6 py-4 glass-strong rounded-xl border transition-all group ${isBwMode ? 'border-black/20 hover:border-black/40' : 'border-white/20 hover:border-[oklch(0.7_0.2_200)]/50'}`}
                    >
                      <Github className={`w-6 h-6 group-hover:scale-110 transition-transform ${isBwMode ? 'text-black' : 'text-[oklch(0.7_0.2_200)]'}`} />
                      <span className={`font-semibold ${isBwMode ? 'text-black' : 'text-white'}`}>View Repository</span>
                      <ExternalLink className={`w-5 h-5 ${isBwMode ? 'text-black/60' : 'text-white/60'}`} />
                    </a>
                  )}
                  {project.details.demo && (
                    <a
                      href={project.details.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-6 py-4 glass-strong rounded-xl border transition-all group ${isBwMode ? 'border-black/20 hover:border-black/40' : 'border-white/20 hover:border-[oklch(0.7_0.2_200)]/50'}`}
                    >
                      <Globe className={`w-6 h-6 group-hover:scale-110 transition-transform ${isBwMode ? 'text-black' : 'text-[oklch(0.7_0.2_200)]'}`} />
                      <span className={`font-semibold ${isBwMode ? 'text-black' : 'text-white'}`}>Live Demo</span>
                      <ExternalLink className={`w-5 h-5 ${isBwMode ? 'text-black/60' : 'text-white/60'}`} />
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

