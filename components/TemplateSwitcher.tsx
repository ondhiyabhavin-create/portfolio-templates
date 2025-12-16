"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Palette } from "lucide-react";
import { useTemplate } from "@/context/TemplateContext";
import { TEMPLATES, TemplateType } from "@/lib/templates";

export function TemplateSwitcher() {
  const { currentTemplate, setTemplate } = useTemplate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Debug: Log all available templates
  useEffect(() => {
    console.log("Available templates:", Object.keys(TEMPLATES));
    console.log("Current template:", currentTemplate);
  }, [currentTemplate]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentConfig = TEMPLATES[currentTemplate] || TEMPLATES["ai-template"];

  // Get button styling based on template
  const getButtonClass = () => {
    if (currentTemplate === "brutalist-tech") {
      return "flex items-center gap-2 px-4 py-2 bg-black text-white border-2 border-black font-bold hover:bg-red-600 transition-all";
    }
    if (currentTemplate === "soft-creative") {
      return "flex items-center gap-2 px-4 py-2 bg-white/80 text-[#2d2d2d] rounded-full font-medium hover:bg-white transition-all border border-[#d4a574]/30";
    }
    return "flex items-center gap-2 px-4 py-2 glass-strong rounded-lg text-white font-semibold hover:bg-white/20 transition-all";
  };

  return (
    <div className="relative z-[100]" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={getButtonClass()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette className="w-4 h-4" />
        <span className="hidden sm:inline">{currentConfig?.name || "Template"}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full right-0 mt-2 w-72 rounded-xl p-2 shadow-2xl z-[100] max-h-96 overflow-y-auto ${
              currentTemplate === "brutalist-tech" 
                ? "bg-white border-4 border-black" 
                : currentTemplate === "soft-creative"
                ? "bg-white/95 backdrop-blur-sm border border-[#d4a574]/30"
                : "glass-strong"
            }`}
          >
            <div className={`text-xs font-bold px-3 py-2 uppercase tracking-wider sticky top-0 backdrop-blur-sm rounded-t-lg ${
              currentTemplate === "brutalist-tech"
                ? "bg-black text-white"
                : currentTemplate === "soft-creative"
                ? "bg-[#f5e6d3]/50 text-[#2d2d2d]"
                : "text-white/60 bg-black/20"
            }`}>
              Choose Template ({Object.keys(TEMPLATES).length} available)
            </div>
            <div className="space-y-1 mt-2">
            {Object.values(TEMPLATES).map((template) => (
              <motion.button
                key={template.id}
                onClick={() => {
                  setTemplate(template.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  currentTemplate === "brutalist-tech"
                    ? currentTemplate === template.id
                      ? "bg-black text-white border-2 border-black font-bold"
                      : "bg-white text-black border-2 border-black hover:bg-red-600 hover:text-white font-mono"
                    : currentTemplate === "soft-creative"
                    ? currentTemplate === template.id
                      ? "bg-[#d4a574]/20 text-[#2d2d2d] border border-[#d4a574]/30"
                      : "hover:bg-[#f5e6d3]/50 text-[#5a5a5a]"
                    : currentTemplate === template.id
                    ? "bg-gradient-to-r from-pink-500/30 to-purple-600/30 border border-white/30 text-white"
                    : "hover:bg-white/10 text-white"
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`font-bold text-sm ${
                      currentTemplate === "brutalist-tech"
                        ? "text-black"
                        : currentTemplate === "soft-creative"
                        ? "text-[#2d2d2d]"
                        : "text-white"
                    }`}>{template.name}</div>
                    <div className={`text-xs mt-1 ${
                      currentTemplate === "brutalist-tech"
                        ? "text-gray-700 font-mono"
                        : currentTemplate === "soft-creative"
                        ? "text-[#8b7355]"
                        : "text-white/70"
                    }`}>{template.description}</div>
                  </div>
                  {currentTemplate === template.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`w-2 h-2 rounded-full ${
                        currentTemplate === "brutalist-tech"
                          ? "bg-red-600"
                          : currentTemplate === "soft-creative"
                          ? "bg-[#d4a574]"
                          : "bg-gradient-to-r from-pink-500 to-purple-600"
                      }`}
                    />
                  )}
                </div>
              </motion.button>
            ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

