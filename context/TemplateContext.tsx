"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { TemplateType, TEMPLATES } from "@/lib/templates";

interface TemplateContextType {
  currentTemplate: TemplateType;
  setTemplate: (template: TemplateType) => void;
  templateConfig: typeof TEMPLATES[TemplateType];
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export function TemplateProvider({ children }: { children: React.ReactNode }) {
  const [currentTemplate, setCurrentTemplate] = useState<TemplateType>("ai-template-light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved template from localStorage
    const saved = localStorage.getItem("portfolio-template") as TemplateType;
    if (saved && TEMPLATES[saved]) {
      setCurrentTemplate(saved);
    }
  }, []);

  const setTemplate = (template: TemplateType) => {
    setCurrentTemplate(template);
    localStorage.setItem("portfolio-template", template);
    applyTemplateStyles(template);
  };

  const applyTemplateStyles = (template: TemplateType) => {
    if (typeof window === "undefined") return;
    
    console.log("Applying template styles:", template);
    
    const root = document.documentElement;
    const body = document.body;
    const main = document.querySelector("main");
    
    // Remove all template classes
    body.classList.remove("ai-template-full", "ai-template-bw", "ai-template-color");
    root.classList.remove("ai-template-full", "ai-template-bw", "ai-template-color");
    if (main) {
      main.classList.remove("ai-template-full", "ai-template-bw", "ai-template-color");
    }
    
    // Remove inline styles
    body.style.background = "";
    root.style.setProperty("--template-primary", "");
    root.style.setProperty("--template-secondary", "");
    root.style.setProperty("--template-accent", "");
    
    if (template === "ai-template-dark") {
      body.className = "ai-template-full ai-template-color";
      body.style.background = "oklch(0.05 0 0)";
      body.style.color = "oklch(0.98 0 0)";
      root.className = "ai-template-full ai-template-color";
      root.style.setProperty("--template-primary", "oklch(0.7 0.2 200)");
      root.style.setProperty("--template-secondary", "oklch(0.65 0.25 250)");
      root.style.setProperty("--template-accent", "oklch(0.65 0.25 300)");
      root.style.setProperty("--template-bg", "oklch(0.05 0 0)");
    } else if (template === "ai-template-light") {
      body.className = "ai-template-full ai-template-bw";
      body.style.background = "#ffffff";
      body.style.color = "#000000";
      root.className = "ai-template-full ai-template-bw";
      root.style.setProperty("--template-primary", "#3b82f6");
      root.style.setProperty("--template-secondary", "#8b5cf6");
      root.style.setProperty("--template-accent", "#a855f7");
      root.style.setProperty("--template-bg", "#ffffff");
    }
    
    // Force re-render by updating data attribute
    root.setAttribute("data-template", template);
    
    // Dispatch custom event for components to listen to
    window.dispatchEvent(new CustomEvent("template-changed", { detail: template }));
  };

  useEffect(() => {
    if (mounted) {
      applyTemplateStyles(currentTemplate);
    }
  }, [currentTemplate, mounted]);

  return (
    <TemplateContext.Provider
      value={{
        currentTemplate,
        setTemplate,
        templateConfig: TEMPLATES[currentTemplate],
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
}

export function useTemplate() {
  const context = useContext(TemplateContext);
  if (context === undefined) {
    throw new Error("useTemplate must be used within a TemplateProvider");
  }
  return context;
}
