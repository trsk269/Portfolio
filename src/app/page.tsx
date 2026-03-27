import Image from "next/image";
import profilepic from "./profilepic.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="w-full h-full max-w-[90%] mx-auto">
        <div className="h-full w-full flex flex-col gap-10 items-center justify-center text-center py-10">
          {/* Header */}
          <div className="w-full flex items-center justify-between">
            {/* Logo / Name */}
            <div className="flex items-center gap-3">
              <button
                className="w-9 h-9 rounded-full border border-white/20 flex flex-col items-center justify-center gap-[5px]"
                aria-label="Menu"
              >
                <span className="block w-4 h-[1.5px] bg-white" />
                <span className="block w-4 h-[1.5px] bg-white" />
              </button>
              <span className="text-sm font-semibold leading-tight text-left">
                Jayanta
                <br />
                Biswas.
              </span>
            </div>

            {/* Hire Me Button */}
            <button className="bg-[#CAFF00] text-black font-semibold text-sm px-7 py-3 hover:bg-[#b8f000] transition-colors">
              Hire me
            </button>
          </div>

          {/* Box01 — Hero Text */}
          <div className="h-full w-full flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight">
              Hey, It's Jayanta Biswas. <br /> Full stack Developer
            </h1>
            <p className="text-white/60 text-base max-w-md leading-relaxed">
              I've been working as a full stack{" "}
              <strong className="text-white font-semibold">
                web developer
              </strong>{" "}
              for 10 years. I am based on{" "}
              <strong className="text-white font-semibold">Bangladesh.</strong>
            </p>
          </div>

          {/* Box02 — Info + Photo Grid */}
          <div className="h-full w-full flex gap-0 items-stretch justify-center border border-white/10">
            {/* sub01 — Left Info */}
            <div className="h-full w-full flex flex-col gap-8 py-10 px-8 justify-center text-left border-r border-white/10">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                  Lives In
                </span>
                <span className="text-lg font-semibold leading-snug">
                  27/2 Ram Babu RD,
                  <br />
                  Mymensingh, Bangladesh
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                  Hobbies
                </span>
                <span className="text-lg font-semibold leading-snug">
                  Hiking, Camping, Drawing,
                  <br />
                  Cooking, Gaming
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                  Education
                </span>
                <span className="text-lg font-semibold leading-snug">
                  Master in Fine Arts,
                  <br />
                  Bachelor in Graphics
                  <br />
                  Design, Minor in human
                  <br />
                  computer interaction
                </span>
              </div>
            </div>

            {/* sub02 — Profile Picture */}
            <div className="h-full w-full flex flex-col gap-4 items-center justify-center py-10 px-8 border-r border-white/10">
              <div className="rounded-full overflow-hidden border-[5px] border-white w-[280px] h-[280px] relative">
                <Image
                  src={profilepic}
                  alt="Profile picture"
                  fill
                  className="object-cover"
                  priority={true}
                />
              </div>
            </div>

            {/* sub03 — Right Info */}
            <div className="h-full w-full flex flex-col gap-8 py-10 px-8 justify-center text-right">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                  Experience
                </span>
                <span className="text-lg font-semibold leading-snug">
                  I have 8 years
                  <br />
                  of experience as a web
                  <br />
                  developer.
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                  Projects Done
                </span>
                <span className="text-lg font-semibold leading-snug">
                  I've crafted 369 website
                  <br />
                  so far
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                  Awards
                </span>
                <span className="text-lg font-semibold leading-snug">
                  2020 Webby award,
                  <br />
                  2023 FWA site of the day
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
