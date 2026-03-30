"use client";

import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

const interests = ["Web Design", "Native App", "Research"];

export default function Contact() {
  const [selectedInterest, setSelectedInterest] = useState<string>("");

  return (
    <section className="relative w-full py-14 sm:py-16 lg:py-18 bg-black border-t border-white/5">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 sm:gap-14 lg:gap-8 items-stretch">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between gap-10 lg:gap-0">
          {/* Heading */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-1">
              Got a project?
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#CAFF00]">
              Lets Talk!
            </h2>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center lg:items-start gap-5 sm:gap-6">
            <a
              href="mailto:t.r.s.kumar05v5@gmail.com"
              className="flex items-center gap-3 text-white hover:text-[#CAFF00] transition-colors group"
            >
              <Mail size={20} strokeWidth={1.5} />
              <span className="text-sm sm:text-base font-medium border-b border-white/30 group-hover:border-[#CAFF00] pb-1 transition-colors break-all">
                t.r.s.kumar05v5@gmail.com
              </span>
            </a>

            <a
              href="tel:+919949832634"
              className="flex items-center gap-3 text-white hover:text-[#CAFF00] transition-colors group"
            >
              <Phone size={20} strokeWidth={1.5} />
              <span className="text-sm sm:text-base font-medium border-b border-white/30 group-hover:border-[#CAFF00] pb-1 transition-colors">
                +91 9949832634
              </span>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="bg-[#0f1115] border border-white/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-md sm:max-w-lg shadow-2xl">
            <div className="flex flex-col gap-5 sm:gap-6">
              {/* Interests */}
              <div>
                <p className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                  I am interested in...
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => setSelectedInterest(interest)}
                      className={`px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full border transition-all duration-300 ${
                        selectedInterest === interest
                          ? "border-[#CAFF00] bg-[#CAFF00] text-black"
                          : "border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-white/20 rounded-md p-3 sm:p-4 text-sm sm:text-base text-white placeholder:text-white/40 focus:outline-none focus:border-[#CAFF00] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border border-white/20 rounded-md p-3 sm:p-4 text-sm sm:text-base text-white placeholder:text-white/40 focus:outline-none focus:border-[#CAFF00] transition-colors"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border border-white/20 rounded-md p-3 sm:p-4 text-sm sm:text-base text-white placeholder:text-white/40 focus:outline-none focus:border-[#CAFF00] transition-colors resize-none"
                />
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 mt-2">
                <button className="bg-white hover:bg-[#e0e0e0] text-black font-semibold text-sm px-6 sm:px-8 py-2.5 sm:py-3 rounded-md transition-colors w-full sm:w-auto">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
