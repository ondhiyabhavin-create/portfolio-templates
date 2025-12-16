"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { TemplateSwitcher } from "./TemplateSwitcher";
import { useTemplate } from "@/context/TemplateContext";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentTemplate } = useTemplate();
  const navRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // Track cursor position for mirror effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          mouseX.set(e.clientX);
          mouseY.set(e.clientY);
        }
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Calculate light position for mirror effect
  const lightX = useTransform(mouseX, (x) => {
    if (!navRef.current) return '50%';
    const rect = navRef.current.getBoundingClientRect();
    const percent = ((x - rect.left) / rect.width) * 100;
    return `${Math.max(0, Math.min(100, percent))}%`;
  });

  const lightY = useTransform(mouseY, (y) => {
    if (!navRef.current) return '0%';
    const rect = navRef.current.getBoundingClientRect();
    const percent = ((y - rect.top) / rect.height) * 100;
    return `${Math.max(0, Math.min(100, percent))}%`;
  });

  const lightAngle = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) => {
      if (!navRef.current) return 180;
      const rect = navRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = x - centerX;
      const deltaY = y - centerY;
      return (Math.atan2(deltaY, deltaX) * 180) / Math.PI + 90;
    }
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMirrorTemplate = currentTemplate === "mirror-display";

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 relative",
        scrolled
          ? isMirrorTemplate 
            ? "mirror-frosted border-b border-white/10 py-4"
            : "glass-strong border-b border-white/20 py-4"
          : isMirrorTemplate
            ? "bg-transparent py-6"
            : "bg-transparent py-6"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mirror reflection effect for mirror-display template */}
      {isMirrorTemplate && (
        <>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle 300px at ${lightX} ${lightY}, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`,
              opacity: isHovered ? 0.6 : 0.2,
            }}
          />
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(${lightAngle}deg, rgba(255, 255, 255, 0.08) 0%, transparent 50%)`,
              opacity: isHovered ? 0.5 : 0.2,
            }}
          />
        </>
      )}
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#hero"
          className={`text-2xl font-black ${
            currentTemplate === "ai-template-dark" || currentTemplate === "ai-template-light" ? "gradient-text" : 
            currentTemplate === "mirror-display" ? "gradient-text ai-glow" :
            currentTemplate === "brutalist-tech" ? "uppercase text-black font-mono" :
            currentTemplate === "soft-creative" ? "font-light text-[#2d2d2d]" :
            "gradient-text-2"
          }`}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          Bhavin
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item, index) => (
            <NavItemMirror
              key={item.name}
              item={item}
              index={index}
              mouseX={mouseX}
              mouseY={mouseY}
              isMirrorTemplate={isMirrorTemplate}
            />
          ))}
          <div className="flex items-center gap-3">
            <TemplateSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <TemplateSwitcher />
          <button
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/20"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-bold text-white hover:text-pink-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Nav Item with Mirror Effect
function NavItemMirror({ 
  item, 
  index, 
  mouseX, 
  mouseY, 
  isMirrorTemplate 
}: { 
  item: { name: string; href: string }; 
  index: number; 
  mouseX: ReturnType<typeof useMotionValue<number>>; 
  mouseY: ReturnType<typeof useMotionValue<number>>; 
  isMirrorTemplate: boolean;
}) {
  const itemRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const lightX = useTransform(mouseX, (x: number) => {
    if (!itemRef.current) return '50%';
    const rect = itemRef.current.getBoundingClientRect();
    const percent = ((x - rect.left) / rect.width) * 100;
    return `${Math.max(0, Math.min(100, percent))}%`;
  });

  const lightY = useTransform(mouseY, (y: number) => {
    if (!itemRef.current) return '50%';
    const rect = itemRef.current.getBoundingClientRect();
    const percent = ((y - rect.top) / rect.height) * 100;
    return `${Math.max(0, Math.min(100, percent))}%`;
  });

  const lightAngle = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) => {
      if (!itemRef.current) return 180;
      const rect = itemRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = x - centerX;
      const deltaY = y - centerY;
      return (Math.atan2(deltaY, deltaX) * 180) / Math.PI + 90;
    }
  );

  if (isMirrorTemplate) {
    return (
      <motion.a
        ref={itemRef}
        href={item.href}
        className="relative px-4 py-2 rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Mirror Surface Background */}
        <motion.div
          className="absolute inset-0 mirror-frosted rounded-lg"
          style={{
            opacity: isHovered ? 1 : 0,
          }}
        >
          {/* Cursor-driven radial light */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-lg"
            style={{
              background: `radial-gradient(circle 150px at ${lightX} ${lightY}, rgba(255, 255, 255, 0.15) 0%, transparent 70%)`,
              opacity: isHovered ? 0.6 : 0,
            }}
          />
          {/* Cursor-driven directional light */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-lg"
            style={{
              background: `linear-gradient(${lightAngle}deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
              opacity: isHovered ? 0.5 : 0,
            }}
          />
        </motion.div>
        {/* Text */}
        <span className="relative z-10 text-sm font-medium text-white/90">
          {item.name}
        </span>
      </motion.a>
    );
  }

  // Default behavior for other templates
  return (
    <motion.a
      key={item.name}
      href={item.href}
      className="text-sm font-bold text-white/90 hover:text-white transition-colors relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -2 }}
    >
      {item.name}
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}
