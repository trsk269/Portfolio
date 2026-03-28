"use client";

import React, { useState } from "react";
import { Mail, Phone, Paperclip } from "lucide-react";

const interests = ["Web Design", "Native App", "Research"];

export default function Contact() {
  const [selectedInterest, setSelectedInterest] = useState<string>("");

  return (
    <section className="relative w-full py-24 md:py-32 bg-black border-t border-white/5">
      <div className="w-full max-w-[75%] mx-auto max-w-6xl flex flex-col lg:flex-row gap-16 lg:gap-8 items-stretch pt-8">
        {/* Left Side: Headlines & Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between pt-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">
              Got a project?
            </h2>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#CAFF00]">
              Lets Talk!
            </h2>
          </div>

          <div className="flex flex-col gap-6 mt-16 lg:mt-0">
            <a
              href="mailto:t.r.s.kumar05v5@gmail.com"
              className="flex items-center gap-3 text-white hover:text-[#CAFF00] transition-colors group w-max"
            >
              <Mail size={22} strokeWidth={1.5} />
              <span className="font-medium border-b border-white/30 group-hover:border-[#CAFF00] pb-1 transition-colors">
                t.r.s.kumar05v5@gmail.com
              </span>
            </a>

            <a
              href="tel:+919949832634"
              className="flex items-center gap-3 text-white hover:text-[#CAFF00] transition-colors group w-max"
            >
              <Phone size={22} strokeWidth={1.5} />
              <span className="font-medium border-b border-white/30 group-hover:border-[#CAFF00] pb-1 transition-colors">
                +91 9949832634
              </span>
            </a>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#0f1115] border border-white/5 rounded-2xl p-8 md:p-12 w-full max-w-xl shadow-2xl">
            <div className="flex flex-col gap-6">
              {/* Interests Header */}
              <div>
                <p className="text-lg font-semibold text-white mb-4">
                  I am interested in...
                </p>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => setSelectedInterest(interest)}
                      className={`px-5 py-2 text-xs md:text-sm font-medium rounded-full border transition-all duration-300 ${
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

              {/* Form Inputs */}
              <div className="flex flex-col gap-4 mt-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-white/20 rounded-md p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#CAFF00] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border border-white/20 rounded-md p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#CAFF00] transition-colors"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border border-white/20 rounded-md p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#CAFF00] transition-colors resize-none"
                />
              </div>

              {/* Form Footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-2">
                {/* <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
                  <Paperclip size={18} />
                  <span className="font-medium text-sm border-b border-white/30 group-hover:border-white pb-[2px] transition-colors">
                    Attach Files
                  </span>
                </button> */}

                <button className="bg-white hover:bg-[#e0e0e0] text-black font-semibold text-sm px-8 py-3 rounded-md transition-colors w-full sm:w-auto">
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
