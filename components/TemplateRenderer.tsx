"use client";

import { useTemplate } from "@/context/TemplateContext";
import { Navigation } from "./Navigation";

// AI Template components
import { AIHero } from "./templates/AITemplate/Hero";
import { AIAbout } from "./templates/AITemplate/About";
import { Skills } from "./Skills";
import { AIProjects } from "./templates/AITemplate/Projects";
import { Experience } from "./Experience";
import { AIInteraction } from "./AIInteraction";
import { AIContact } from "./templates/AITemplate/Contact";

export function TemplateRenderer() {
  return (
    <>
      <Navigation />
      <AIHero />
      <AIInteraction />
      <AIAbout />
      <Skills />
      <AIProjects />
      <Experience />
      <AIContact />
    </>
  );
}

