import Image from "next/image";
import pic01 from "../app/PIC01.png";
import pic02 from "../app/PIC02.png";
import pic03 from "../app/PIC03.png";
import pic04 from "../app/PIC04.png";

const portfolioItems = [
  {
    image: pic01,
    title: "Shohoz Sales",
    category: "Front-end Development, UI Design",
  },
  {
    image: pic02,
    title: "Jayanta Biswas",
    category: "Web Design, UI Design",
  },
  {
    image: pic03,
    title: "Colosseum",
    category: "Branding, UI Design",
  },
  {
    image: pic04,
    title: "Shanghai Riders",
    category: "UX Design, Usability Test",
  },
];

export default function Works() {
  return (
    <section className="relative w-full py-24 border-t border-white/5 overflow-hidden">
      {/* Faint drafting grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="relative z-10 w-full max-w-[90%] mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="w-full max-w-5xl mb-16 flex flex-col md:flex-row items-baseline gap-4 text-left">
          <span className="text-xl md:text-2xl font-serif italic text-white/70">
            Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            My Beautiful
            <br />
            Works
          </h2>
        </div>

        {/* 2x2 Grid Section */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-[15rem] h-[20rem] relative overflow-hidden mb-6 bg-[#161616]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-white/50">
                {item.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
