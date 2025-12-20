"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Twitter, Send, Phone, MapPin, Globe, MessageCircle, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PERSONAL_INFO } from "@/lib/constants";
import { useTemplate } from "@/context/TemplateContext";

export function AIContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentTemplate } = useTemplate();
  const isBwMode = currentTemplate === "ai-template-light";

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    { icon: Phone, href: `tel:${PERSONAL_INFO.phone}`, label: "Call Me", value: PERSONAL_INFO.phone, color: "from-blue-500 to-cyan-500" },
    { icon: MapPin, href: "https://www.google.com/maps/dir//Surat,+Gujarat/@21.1592002,72.8222859,12z/data=!4m17!1m8!3m7!1s0x3be04e59411d1563:0xfe4558290938b042!2sSurat,+Gujarat!3b1!8m2!3d21.1702401!4d72.8310607!16zL20vMDFoMWhu!4m7!1m0!1m5!1m1!1s0x3be04e59411d1563:0xfe4558290938b042!2m2!1d72.8310607!2d21.1702401?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D", label: "Location", value: PERSONAL_INFO.city, color: "from-purple-500 to-pink-500" },
    { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email", value: PERSONAL_INFO.email, color: "from-orange-500 to-red-500" },
    { icon: Globe, href: PERSONAL_INFO.website, label: "Website", value: "Streamivus", color: "from-green-500 to-emerald-500" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    form.action = "https://formsubmit.co/bhavinondhiya0@gmail.com";
    form.method = "POST";
    form.submit();
  };

  function seededRandom(seed: number) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  return (
    <section id="contact" ref={ref} className={`relative py-32 overflow-hidden ${isBwMode ? 'bg-white' : ''}`}>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Enhanced Section Header with SVG */}
          <motion.div variants={fadeInUp} className="text-center mb-20 relative">
            <motion.div
              className="inline-flex items-center justify-center mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute"
              >
                <Sparkles className={`w-16 h-16 ${isBwMode ? 'text-blue-500' : 'text-[oklch(0.7_0.2_200)]'}`} />
              </motion.div>
              <MessageCircle className={`w-12 h-12 relative z-10 ${isBwMode ? 'text-purple-600' : 'text-white'}`} />
            </motion.div>
            <motion.h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${isBwMode ? 'text-black' : 'gradient-text'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              className={`text-xl md:text-2xl max-w-2xl mx-auto ${isBwMode ? 'text-black/70' : 'text-muted-foreground'}`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Let's work together on your next project
            </motion.p>
            
            {/* Decorative SVG Line */}
            <motion.svg
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-1"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.line
                x1="0"
                y1="0"
                x2="256"
                y2="0"
                stroke={isBwMode ? "url(#gradient-bw)" : "url(#gradient-contact)"}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ delay: 0.6, duration: 1 }}
              />
              <defs>
                {isBwMode ? (
                  <linearGradient id="gradient-bw" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                ) : (
                  <linearGradient id="gradient-contact" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="oklch(0.7 0.2 200)" />
                    <stop offset="50%" stopColor="oklch(0.65 0.25 250)" />
                    <stop offset="100%" stopColor="oklch(0.65 0.25 300)" />
                  </linearGradient>
                )}
              </defs>
            </motion.svg>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Enhanced Contact Form with SVG decoration */}
            <motion.div 
              variants={fadeInUp} 
              className={`${isBwMode ? 'bg-white/95 border-2 border-black/10' : 'glass'} rounded-2xl p-8 lg:p-10 relative overflow-hidden group`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated background decoration */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 opacity-10"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity },
                }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="form-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={isBwMode ? "#3b82f6" : "oklch(0.7 0.2 200)"} />
                      <stop offset="100%" stopColor={isBwMode ? "#a855f7" : "oklch(0.65 0.25 300)"} />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="80" fill="url(#form-gradient)" />
                </svg>
              </motion.div>
              
              <div className="relative z-10">
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <Mail className={`w-6 h-6 ${isBwMode ? 'text-blue-600' : 'gradient-text'}`} />
                  <h3 className={`text-2xl font-bold ${isBwMode ? 'text-black' : 'text-white'}`}>Send a Message</h3>
                </motion.div>
                <form action="https://formsubmit.co/bhavinondhiya0@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="name" className={`block text-sm font-semibold mb-2 ${isBwMode ? 'text-black' : 'text-foreground'}`}>
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 ${isBwMode ? 'bg-gray-50 border-2 border-black/20' : 'glass border border-border bg-background/50'} rounded-lg focus:outline-none focus:ring-2 ${isBwMode ? 'focus:ring-blue-500' : 'focus:ring-[oklch(0.7_0.2_200)]'} ${isBwMode ? 'text-black' : 'text-foreground'} placeholder:text-muted-foreground transition-all`}
                    required
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <label htmlFor="email" className={`block text-sm font-semibold mb-2 ${isBwMode ? 'text-black' : 'text-foreground'}`}>
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 ${isBwMode ? 'bg-gray-50 border-2 border-black/20' : 'glass border border-border bg-background/50'} rounded-lg focus:outline-none focus:ring-2 ${isBwMode ? 'focus:ring-blue-500' : 'focus:ring-[oklch(0.7_0.2_200)]'} ${isBwMode ? 'text-black' : 'text-foreground'} placeholder:text-muted-foreground transition-all`}
                    required
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  <label htmlFor="subject" className={`block text-sm font-semibold mb-2 ${isBwMode ? 'text-black' : 'text-foreground'}`}>
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    className={`w-full px-4 py-3 ${isBwMode ? 'bg-gray-50 border-2 border-black/20' : 'glass border border-border bg-background/50'} rounded-lg focus:outline-none focus:ring-2 ${isBwMode ? 'focus:ring-blue-500' : 'focus:ring-[oklch(0.7_0.2_200)]'} ${isBwMode ? 'text-black' : 'text-foreground'} placeholder:text-muted-foreground transition-all`}
                    required
                    placeholder="Subject"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.0 }}
                >
                  <label htmlFor="message" className={`block text-sm font-semibold mb-2 ${isBwMode ? 'text-black' : 'text-foreground'}`}>
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className={`w-full px-4 py-3 ${isBwMode ? 'bg-gray-50 border-2 border-black/20' : 'glass border border-border bg-background/50'} rounded-lg focus:outline-none focus:ring-2 ${isBwMode ? 'focus:ring-blue-500' : 'focus:ring-[oklch(0.7_0.2_200)]'} resize-none ${isBwMode ? 'text-black' : 'text-foreground'} placeholder:text-muted-foreground transition-all`}
                    required
                    placeholder="Your message"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 font-semibold rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 transition-all relative overflow-hidden group ${
                    isBwMode
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:shadow-blue-500/30'
                      : 'bg-gradient-to-r from-[oklch(0.7_0.2_200)] to-[oklch(0.65_0.25_250)] text-black hover:shadow-lg hover:shadow-[oklch(0.7_0.2_200)]/30'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Enhanced Social Links with SVG animations */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <motion.div 
                className={`${isBwMode ? 'bg-white/95 border-2 border-black/10' : 'glass'} rounded-2xl p-8 lg:p-10 relative overflow-hidden`}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                {/* Decorative SVG background */}
                <motion.svg
                  className="absolute top-0 right-0 w-32 h-32 opacity-5"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <circle cx="64" cy="64" r="50" fill="none" stroke={isBwMode ? "#3b82f6" : "oklch(0.7 0.2 200)"} strokeWidth="2" />
                  <circle cx="64" cy="64" r="30" fill="none" stroke={isBwMode ? "#8b5cf6" : "oklch(0.65 0.25 250)"} strokeWidth="1" />
                </motion.svg>
                
                <div className="relative z-10">
                  <motion.div
                    className="flex items-center gap-3 mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <MessageCircle className={`w-6 h-6 ${isBwMode ? 'text-blue-600' : 'gradient-text'}`} />
                    </motion.div>
                    <h3 className={`text-2xl font-bold ${isBwMode ? 'text-black' : 'text-foreground'}`}>Connect With Me</h3>
                  </motion.div>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={`flex items-center gap-4 p-5 ${isBwMode ? 'bg-gray-50 border-2 border-black/10' : 'glass border border-border'} rounded-xl transition-all group relative overflow-hidden`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ x: 8, scale: 1.02 }}
                      >
                        {/* Animated gradient background on hover */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                        />
                        
                        {/* Icon with animation */}
                        <motion.div
                          className={`p-3 rounded-lg bg-gradient-to-br ${social.color} relative z-10`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <social.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        <div className="flex-1 relative z-10">
                          <div className={`font-semibold mb-1 ${isBwMode ? 'text-black' : 'text-foreground'}`}>
                            {social.label}
                          </div>
                          <div className={`text-sm ${isBwMode ? 'text-black/70 group-hover:text-blue-600' : 'text-muted-foreground group-hover:gradient-text'} transition-colors`}>
                            {social.value}
                          </div>
                        </div>
                        
                        {/* Arrow indicator */}
                        <motion.div
                          className="relative z-10"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                        >
                          <Send className={`w-5 h-5 ${isBwMode ? 'text-black/30 group-hover:text-blue-600' : 'text-muted-foreground group-hover:text-[oklch(0.7_0.2_200)]'} transition-colors`} />
                        </motion.div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className={`${isBwMode ? 'bg-white/95 border-2 border-black/10' : 'glass'} rounded-2xl p-8 lg:p-10 relative overflow-hidden`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
              >
                {/* Animated SVG decoration */}
                <motion.svg
                  className="absolute bottom-0 right-0 w-24 h-24 opacity-5"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={isInView ? { scale: 1, rotate: 360 } : {}}
                  transition={{ delay: 1.3, duration: 2 }}
                >
                  <circle cx="48" cy="48" r="40" fill="none" stroke={isBwMode ? "#10b981" : "oklch(0.7 0.2 200)"} strokeWidth="2" strokeDasharray="5,5" />
                </motion.svg>
                
                <div className="relative z-10">
                  <motion.div
                    className="flex items-center gap-3 mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.4 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className={`w-4 h-4 rounded-full ${isBwMode ? 'bg-green-500' : 'bg-[oklch(0.7_0.2_200)]'}`} />
                    </motion.div>
                    <h3 className={`text-xl font-bold ${isBwMode ? 'text-black' : 'text-foreground'}`}>Availability</h3>
                  </motion.div>
                  
                  <motion.p 
                    className={`mb-6 ${isBwMode ? 'text-black/70' : 'text-muted-foreground'}`}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.5 }}
                  >
                    I'm currently available for freelance projects and consulting opportunities.
                  </motion.p>
                  
                  <motion.div 
                    className={`flex items-center gap-3 p-4 rounded-lg ${isBwMode ? 'bg-green-50 border-2 border-green-200' : 'bg-[oklch(0.7_0.2_200)]/10 border border-[oklch(0.7_0.2_200)]/20'}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className={`w-3 h-3 rounded-full ${isBwMode ? 'bg-green-500' : 'bg-[oklch(0.7_0.2_200)]'}`}
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className={`text-sm font-semibold ${isBwMode ? 'text-black' : 'text-foreground'}`}>
                      {PERSONAL_INFO.freelance} for new projects
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

