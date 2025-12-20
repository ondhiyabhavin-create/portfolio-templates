"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Send, Phone, MapPin, Globe } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Animation - only in dark mode */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-transparent to-purple-500/8" />
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-xl max-w-2xl mx-auto contact-section-subtitle">
              Let's work together on your next project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="contact-form-container">
              <div className="contact-form-inner">
                <form action="https://formsubmit.co/bhavinondhiya0@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_captcha" value="false" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 contact-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all contact-input"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 contact-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all contact-input"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 contact-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all contact-input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 contact-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none resize-none transition-all contact-input"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 font-semibold rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 transition-all contact-button bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500"
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
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="contact-social-container">
                <div className="contact-social-inner">
                  <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                  <div className="space-y-4">
                    {socialLinks.map((social) => (
                      <motion.div
                        key={social.label}
                        className="flex flex-col gap-2 p-4 rounded-lg transition-all group hover:shadow-lg contact-social-item"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center gap-3">
                          <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform contact-social-icon" />
                          <span className="font-medium contact-social-text">{social.label}</span>
                        </div>
                        <a href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="transition-colors contact-link">
                          {social.value}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="contact-availability-container">
                <div className="contact-availability-inner">
                  <h3 className="text-xl font-bold mb-4">Availability</h3>
                  <p className="mb-4 contact-availability-text">
                    I'm currently available for freelance projects and consulting opportunities.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm contact-availability-status">{PERSONAL_INFO.freelance} for new projects</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
