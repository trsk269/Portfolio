"use client";

import React, { useState, useRef } from "react";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const INTERESTS = [
  "Web Design",
  "Mobile App",
  "UI/UX Design",
  "Full-Stack Dev",
];

export default function Contact() {
  const container = useRef<HTMLElement>(null);
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [selectedInterest, setSelectedInterest] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  useGSAP(
    () => {
      // Very simple entrance for the whole section (Opacity is 1 by default for safety)
      gsap.from(".contact-info-item", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 95%",
        },
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        onComplete: () => {
          ScrollTrigger.refresh();
        },
      });
    },
    { scope: container },
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "a8353611-c9a4-4eb2-a3b0-cbb8a2b04daf");
    formData.append("interest", selectedInterest);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("success");
        if (formRef.current) formRef.current.reset();
        setSelectedInterest("");
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={container}
      className="relative w-full py-20 sm:py-24 lg:py-32 bg-black border-t border-white/5"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#CAFF00]/10 blur-[120px] rounded-full pointer-events-none opacity-20" />

      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 lg:gap-12 items-start relative z-10">
        {/* Left Side - Information */}
        <div className="contact-left w-full lg:w-1/2 flex flex-col gap-12">
          <div className="text-left">
            <h2 className="contact-info-item text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-2 leading-tight">
              Got a project?
            </h2>
            <h2 className="contact-info-item text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[#CAFF00] leading-none">
              Let's talk!
            </h2>
            <p className="contact-info-item text-white/50 mt-6 text-lg max-w-md leading-relaxed">
              Have a question or want to work together? Drop me a message or
              reach out through social platforms.
            </p>
          </div>

          {/* Quick Connect Tools */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="contact-info-item text-white/30 text-xs font-bold uppercase tracking-widest">
                Connect Directly
              </h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/919949832634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 hover:bg-[#CAFF00]/20 border border-white/10 px-6 py-3 rounded-full transition-all group"
                >
                  <MessageCircle size={18} className="text-[#CAFF00]" />
                  <span className="text-base font-semibold text-white">
                    WhatsApp
                  </span>
                </a>
                <a
                  href="https://linkedin.com/in/trskv5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 hover:bg-[#0077B5]/20 border border-white/10 px-6 py-3 rounded-full transition-all group"
                >
                  <MessageCircle size={18} className="text-[#0077B5]" />
                  <span className="text-base font-semibold text-white">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="contact-info-item text-white/30 text-xs font-bold uppercase tracking-widest">
                Contact Info
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:t.r.s.kumar05v5@gmail.com"
                  className="flex items-center gap-4 text-white hover:text-[#CAFF00] transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#CAFF00]/20 transition-all">
                    <Mail size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-lg font-medium">
                    t.r.s.kumar05v5@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+919949832634"
                  className="flex items-center gap-4 text-white hover:text-[#CAFF00] transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#CAFF00]/20 transition-all">
                    <Phone size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-lg font-medium">+91 9949832634</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-right w-full lg:w-1/2">
          <div className="bg-[#0f1115] border border-white/10 rounded-3xl p-8 sm:p-10 md:p-12 w-full shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-sm">
            {formStatus === "success" ? (
              <div className="flex flex-col items-center text-center py-10 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#CAFF00]/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-[#CAFF00]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-white/50 mb-8">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="text-[#CAFF00] font-semibold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-8"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-white/40 text-xs font-bold uppercase tracking-wider">
                    I'm interested in...
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {INTERESTS.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => setSelectedInterest(interest)}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                          selectedInterest === interest
                            ? "bg-[#CAFF00] text-black"
                            : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/5"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="relative group">
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full bg-white/5 border-b border-white/10 p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#CAFF00] transition-colors"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full bg-white/5 border-b border-white/10 p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#CAFF00] transition-colors"
                    />
                  </div>
                  <div className="relative group">
                    <textarea
                      required
                      name="message"
                      placeholder="Tell me about your project"
                      rows={4}
                      className="w-full bg-white/5 border-b border-white/10 p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#CAFF00] transition-colors resize-none"
                    />
                  </div>
                </div>

                <button
                  disabled={formStatus === "loading"}
                  type="submit"
                  className="relative group w-full bg-[#CAFF00] hover:bg-[#b8f000] disabled:bg-white/10 disabled:cursor-not-allowed text-black font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 overflow-hidden shadow-[0_10px_30px_rgba(202,255,0,0.2)]"
                >
                  {formStatus === "loading" ? (
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </>
                  )}
                </button>

                {formStatus === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
