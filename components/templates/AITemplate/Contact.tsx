"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Twitter, Send, Phone, MapPin, Globe } from "lucide-react";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { templateConfig } = useTemplate();

  const socialLinks = [
    { icon: Phone, href: `tel:${PERSONAL_INFO.phone}`, label: "Call Us On", value: PERSONAL_INFO.phone },
    { icon: MapPin, href: "#", label: "Office", value: PERSONAL_INFO.city },
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
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.7_0.2_200)]/5 via-[oklch(0.65_0.25_300)]/3 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's work together on your next project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-8">
              <form action="https://formsubmit.co/bhavinondhiya0@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 glass border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.7_0.2_200)] bg-background/50 text-foreground placeholder:text-muted-foreground"
                    required
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 glass border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.7_0.2_200)] bg-background/50 text-foreground placeholder:text-muted-foreground"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 glass border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.7_0.2_200)] bg-background/50 text-foreground placeholder:text-muted-foreground"
                    required
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 glass border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.7_0.2_200)] bg-background/50 resize-none text-foreground placeholder:text-muted-foreground"
                    required
                    placeholder="Your message"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-[oklch(0.7_0.2_200)] to-[oklch(0.65_0.25_250)] text-black font-semibold rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 hover:shadow-lg hover:shadow-[oklch(0.7_0.2_200)]/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <motion.div
                      key={social.label}
                      className="flex flex-col gap-2 p-4 glass border border-border rounded-lg hover:border-[oklch(0.7_0.2_200)]/50 transition-all group hover:shadow-lg"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center gap-3">
                        <social.icon className="w-6 h-6 gradient-text group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-foreground">{social.label}</span>
                      </div>
                      <a href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-muted-foreground hover:gradient-text transition-colors">
                        {social.value}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">Availability</h3>
                <p className="text-muted-foreground mb-4">
                  I'm currently available for freelance projects and consulting opportunities.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full gradient-text animate-pulse" style={{ background: 'oklch(0.7 0.2 200)' }} />
                  <span className="text-sm text-foreground">{PERSONAL_INFO.freelance} for new projects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

