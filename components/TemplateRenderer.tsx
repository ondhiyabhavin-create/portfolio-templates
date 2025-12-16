"use client";

import { useTemplate } from "@/context/TemplateContext";
import { TemplateType } from "@/lib/templates";

// Import template-specific components
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import { AIInteraction } from "./AIInteraction";
import { Contact } from "./Contact";
import { Navigation } from "./Navigation";

// AI Template components (original dark modern)
import { AIHero } from "./templates/AITemplate/Hero";
import { AIAbout } from "./templates/AITemplate/About";
import { AIContact } from "./templates/AITemplate/Contact";

// Mirror Display Template components
import { MirrorHero } from "./templates/MirrorDisplay/MirrorHero";
import { MirrorAbout } from "./templates/MirrorDisplay/MirrorAbout";
import { MirrorContact } from "./templates/MirrorDisplay/Contact";

// Brutalist Tech Template components
import { BrutalistHero } from "./templates/BrutalistTech/Hero";
import { BrutalistAbout } from "./templates/BrutalistTech/About";
import { BrutalistContact } from "./templates/BrutalistTech/Contact";

// Soft Creative Template components
import { SoftCreativeHero } from "./templates/SoftCreative/Hero";
import { SoftCreativeAbout } from "./templates/SoftCreative/About";
import { SoftCreativeContact } from "./templates/SoftCreative/Contact";

export function TemplateRenderer() {
  const { currentTemplate } = useTemplate();

  // Render different component sets based on template
  if (currentTemplate === "ai-template") {
    return (
      <>
        <Navigation />
        <AIHero />
        <AIAbout />
        <Skills />
        <Projects />
        <Experience />
        <AIInteraction />
        <AIContact />
      </>
    );
  }

  if (currentTemplate === "mirror-display") {
    return (
      <>
        <Navigation />
        <MirrorHero />
        <MirrorAbout />
        <Skills />
        <Projects />
        <Experience />
        <AIInteraction />
        <MirrorContact />
      </>
    );
  }

  if (currentTemplate === "brutalist-tech") {
    return (
      <>
        <Navigation />
        <BrutalistHero />
        <BrutalistAbout />
        <Skills />
        <Projects />
        <Experience />
        <AIInteraction />
        <BrutalistContact />
      </>
    );
  }

  if (currentTemplate === "soft-creative") {
    return (
      <>
        <Navigation />
        <SoftCreativeHero />
        <SoftCreativeAbout />
        <Skills />
        <Projects />
        <Experience />
        <AIInteraction />
        <SoftCreativeContact />
      </>
    );
  }

  // Default templates (vibrant-animated, warm-professional)
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <AIInteraction />
      <Contact />
    </>
  );
}

