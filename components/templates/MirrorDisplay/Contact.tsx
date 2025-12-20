"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Send, Phone, MapPin, Globe } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PERSONAL_INFO } from "@/lib/constants";
import { MirrorSurface } from "./MirrorSurface";
import { CursorMirrorSurface } from "./CursorMirrorSurface";

export function MirrorContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.96, 1, 1, 0.98]);
  const blur = useTransform(scrollYProgress, [0, 0.2], [8, 0]);

  const socialLinks = [
    { icon: Phone, href: `tel:${PERSONAL_INFO.phone}`, label: "Call Us On", value: PERSONAL_INFO.phone },
    { icon: MapPin, href: "https://www.google.com/maps/dir//Surat,+Gujarat/@21.1592002,72.8222859,12z/data=!4m17!1m8!3m7!1s0x3be04e59411d1563:0xfe4558290938b042!2sSurat,+Gujarat!3b1!8m2!3d21.1702401!4d72.8310607!16zL20vMDFoMWhu!4m7!1m0!1m5!1m1!1s0x3be04e59411d1563:0xfe4558290938b042!2m2!1d72.8310607!2d21.1702401?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D", label: "Office", value: PERSONAL_INFO.city },
    { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email", value: PERSONAL_INFO.email },
    { icon: Globe, href: PERSONAL_INFO.website, label: "Website", value: "Visit Portfolio" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    form.action = "https://formsubmit.co/bhavinondhiya0@gmail.com";
    form.method = "POST";
    form.submit();
  };

  return (
    <section 
      ref={containerRef}
      id="contact" 
      className="relative min-h-screen flex items-center py-32 overflow-hidden mirror-display"
    >
      <motion.div
        ref={ref}
        style={{ 
          opacity,
          scale,
          filter: `blur(${blur}px)`,
        }}
        className="container mx-auto px-6 w-full"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-4 text-white/98 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-xl text-white/55 max-w-2xl mx-auto font-light mt-4">
              Let's work together on your next project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <CursorMirrorSurface 
                variant="frosted" 
                className="rounded-2xl p-8" 
                scrollTarget={containerRef}
                mouseX={mouseX}
                mouseY={mouseY}
              >
                <form action="https://formsubmit.co/bhavinondhiya0@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_captcha" value="false" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/90">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 mirror-edge rounded-lg focus:outline-none bg-transparent text-white/98 placeholder:text-white/35 font-light"
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/90">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 mirror-edge rounded-lg focus:outline-none bg-transparent text-white/98 placeholder:text-white/35 font-light"
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white/90">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 mirror-edge rounded-lg focus:outline-none bg-transparent text-white/98 placeholder:text-white/35 font-light"
                      required
                      placeholder="Subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/90">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 mirror-edge rounded-lg focus:outline-none bg-transparent resize-none text-white/98 placeholder:text-white/35 font-light"
                      required
                      placeholder="Your message"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 mirror-edge rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 font-medium text-white/95 mirror-hover-tilt"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white/70" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </CursorMirrorSurface>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <CursorMirrorSurface 
                variant="frosted" 
                className="rounded-2xl p-8" 
                scrollTarget={containerRef}
                mouseX={mouseX}
                mouseY={mouseY}
              >
                <h3 className="text-xl font-medium mb-6 text-white/95">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <motion.div
                      key={social.label}
                      className="flex flex-col gap-2 p-4 mirror-edge rounded-lg group mirror-hover-tilt"
                      whileHover={{ x: 2 }}
                    >
                      <div className="flex items-center gap-3">
                        <social.icon className="w-5 h-5 text-white/60" />
                        <span className="font-medium text-white/90 text-sm">{social.label}</span>
                      </div>
                      <a href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-white/55 hover:text-white/80 transition-colors text-sm font-light">
                        {social.value}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </CursorMirrorSurface>

              <CursorMirrorSurface 
                variant="frosted" 
                className="rounded-2xl p-8" 
                scrollTarget={containerRef}
                mouseX={mouseX}
                mouseY={mouseY}
              >
                <h3 className="text-lg font-medium mb-4 text-white/95">Availability</h3>
                <p className="text-white/55 mb-4 text-sm font-light leading-relaxed">
                  I'm currently available for freelance projects and consulting opportunities.
                </p>
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-white/50"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm text-white/60 font-light">{PERSONAL_INFO.freelance} for new projects</span>
                </div>
              </CursorMirrorSurface>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
