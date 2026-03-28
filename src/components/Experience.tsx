import React from "react";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Memoa (US-based Startup)",
    date: "Jan 2025 — Present",
    points: [
      "Spearheaded the development of core scalable features, including complex gamified streak mechanisms.",
      "Maintained strict performance and clean code standards across both frontend and backend architectures.",
    ],
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Redux",
      "Git",
    ],
  },
  {
    id: 2,
    role: "AI-ML-DS Intern",
    company: "Blackbucks Engineers (Remote)",
    date: "Jul 2024",
    points: [
      "Engineered an end-to-end weather prediction model achieving 82% accuracy utilizing Naive Bayes algorithms.",
      "Elevated data analysis and evaluation pipelines leveraging Python (sklearn, NumPy, Pandas, Matplotlib).",
    ],
    tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
  },
  {
    id: 3,
    role: "Java Developer Intern",
    company: "Henotic Technology",
    date: "Jul 2023",
    points: [
      "Developed responsive interactive desktop applications leveraging robust Java Swing architectures.",
      "Built a functional 2D game simulation within a collaborative, fast-paced team environment.",
    ],
    tech: ["Java", "Swing", "OOP", "Teamwork"],
  },
];

export default function Experience() {
  return (
    <section className="relative w-full py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Background aesthetic glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#CAFF00]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[90%] mx-auto flex flex-col items-center gap-16 relative z-10">
        {/* Header */}
        <div className="w-full max-w-5xl mb-16 flex flex-col md:flex-row items-baseline gap-4 text-left">
          <span className="text-xl md:text-2xl font-serif italic text-white/70">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            My Professional
            <br />
            Experience
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="w-full max-w-4xl flex flex-col gap-12 relative">
          {/* Timeline Line */}
          <div className="absolute left-[27px] md:left-1/2 top-2 bottom-2 w-[1px] bg-white/10 hidden md:block" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row justify-between items-start md:items-center w-full group ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="hidden md:absolute md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#161616] border-[3px] border-[#CAFF00]/50 group-hover:border-[#CAFF00] group-hover:shadow-[0_0_15px_rgba(202,255,0,0.5)] transition-all duration-500 z-10 md:flex" />

                {/* Content Box */}
                <div
                  className={`w-full md:w-[45%] flex flex-col gap-4 p-8 rounded-2xl bg-[#111111] border border-white/5 group-hover:bg-[#161616] group-hover:border-white/10 transition-colors duration-500`}
                >
                  {/* Title & Date */}
                  <div className="flex flex-col gap-1">
                    <span className="text-[#CAFF00] text-sm font-mono tracking-widest uppercase mb-2">
                      {exp.date}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {exp.role}
                    </h3>
                    <p className="text-white/50 font-medium">{exp.company}</p>
                  </div>

                  {/* Crisp Points */}
                  <ul className="flex flex-col gap-3 mt-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm md:text-base text-white/70 leading-relaxed flex items-start gap-3"
                      >
                        <span className="text-[#CAFF00] mt-[6px]">▹</span>
                        <span className="flex-1">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 text-white/60 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
