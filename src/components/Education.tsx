import React from "react";

const educationData = [
  {
    id: 1,
    period: "Nov 2021 — Present",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "SRKR Engineering College, Bhimavaram, AP",
    score: "GPA: 9.28",
  },
  {
    id: 2,
    period: "Nov 2021 — Present",
    degree: "Honours Degree in Data Science",
    institution: "SRKR Engineering College, Bhimavaram, AP",
    score: "GPA: 9.0",
  },
  {
    id: 3,
    period: "Jun 2019 — May 2021",
    degree: "Intermediate Education",
    institution: "Aditya Junior College, Mandapeta, AP",
    score: "Percentage: 93.5%",
  },
  {
    id: 4,
    period: "Jun 2018 — Mar 2019",
    degree: "Secondary School Education",
    institution: "Sri Siddhartha School, Alamuru, AP",
    score: "Percentage: 98%",
  },
];

export default function Education() {
  return (
    <section className="relative w-full py-14 sm:py-16 lg:py-18 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[600px] h-[250px] sm:h-[320px] lg:h-[400px] bg-[#CAFF00]/5 rounded-full blur-[100px] sm:blur-[110px] lg:blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header */}
        <div className="w-full mb-10 sm:mb-12 lg:mb-16 flex flex-col items-center md:items-start text-center md:text-left gap-2 sm:gap-3 md:gap-4">
          <span className="text-lg sm:text-xl md:text-2xl font-serif italic text-white/70">
            Background
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Education
          </h2>
        </div>

        {/* List */}
        <div className="w-full flex flex-col">
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={`group flex flex-col md:flex-row items-start md:items-center justify-between py-6 sm:py-8 md:py-10 border-b border-white/10 hover:border-white/30 transition-colors duration-500 ${
                index === 0 ? "border-t" : ""
              }`}
            >
              {/* Period */}
              <div className="w-full md:w-1/4 mb-2 sm:mb-3 md:mb-0">
                <span className="text-xs sm:text-sm font-mono tracking-widest text-[#CAFF00]/70 group-hover:text-[#CAFF00] transition-colors duration-500 uppercase">
                  {item.period}
                </span>
              </div>

              {/* Details */}
              <div className="w-full md:w-1/2 flex flex-col gap-1 sm:gap-2 md:pe-12 mb-3 sm:mb-4 md:mb-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:translate-x-2 transition-transform duration-500">
                  {item.degree}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-white/60 font-medium">
                  {item.institution}
                </p>
              </div>

              {/* Score */}
              <div className="w-full md:w-1/4 flex md:justify-end items-center">
                <div className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/10 bg-[#161616] group-hover:bg-[#CAFF00] group-hover:text-black group-hover:border-[#CAFF00] transition-all duration-500">
                  <span className="text-xs sm:text-sm font-bold tracking-wide">
                    {item.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
