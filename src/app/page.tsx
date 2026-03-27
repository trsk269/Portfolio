import Image from "next/image";
import profilePic from "./profilepic.png";

/* ── Types ── */
interface InfoCardProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  animDelay?: string;
}

/* ── Components ── */
function InfoCard({
  label,
  children,
  className = "",
  animDelay = "",
}: InfoCardProps) {
  return (
    <div
      className={`flex flex-col gap-2 opacity-0 animate-fade-in ${animDelay} ${className}`}
    >
      <span
        className="text-[11px] font-medium tracking-[0.15em] uppercase"
        style={{ color: "#6b6b4e" }}
      >
        {label}
      </span>
      <p className="text-sm leading-relaxed text-white/90">{children}</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ border: "1px solid #c8ff00" }}
      >
        <span
          className="block w-4 h-[2px] rounded-full"
          style={{ backgroundColor: "#c8ff00" }}
        />
      </div>
      <span className="text-sm font-semibold leading-tight text-white">
        Jayanta
        <br />
        Biswas.
      </span>
    </div>
  );
}

function HireButton() {
  return (
    <button
      className="px-6 py-3 rounded-lg text-sm font-semibold text-black
                 transition-all duration-300 hover:brightness-110 hover:scale-105
                 cursor-pointer"
      style={{ backgroundColor: "#c8ff00" }}
    >
      Hire me
    </button>
  );
}

/* ── Page ── */
export default function Home() {
  return (
    <section className="relative min-h-screen w-full grid-bg overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
        <Logo />
        <HireButton />
      </header>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-start pt-28 pb-12 px-6 md:pt-32 lg:pt-28 min-h-screen">
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-white">
            Hey, It&apos;s Jayanta Biswas.
            <br />
            Full stack Developer
          </h1>
          <p className="mt-5 text-sm md:text-base text-white/60 leading-relaxed max-w-lg mx-auto">
            I&apos;ve been working as a full stack{" "}
            <span className="font-semibold text-white">web developer</span> for
            10 years.
            <br />I am based on{" "}
            <span className="font-semibold text-white">Bangladesh</span>.
          </p>
        </div>

        {/* Info Grid + Profile Image */}
        <div className="relative w-full max-w-5xl mx-auto mt-10 md:mt-14 flex-1 flex items-start">
          {/* Left Info Column (Desktop) */}
          <div className="hidden lg:flex flex-col gap-10 flex-1 pt-4">
            <InfoCard label="Lives in" animDelay="animate-delay-1">
              27/2 Ram Babu RD,
              <br />
              Mymensingh, Bangladesh
            </InfoCard>
            <InfoCard label="Hobbies" animDelay="animate-delay-2">
              Hiking, Camping, Drawing,
              <br />
              Cooking, Gaming
            </InfoCard>
            <InfoCard label="Education" animDelay="animate-delay-3">
              Master in Fine Arts,
              <br />
              Bachelor in Graphics
              <br />
              Design, Minor in human
              <br />
              computer interaction
            </InfoCard>
          </div>

          {/* Center Profile Image */}
          <div className="flex-shrink-0 mx-auto lg:mx-8 xl:mx-14 flex items-start justify-center">
            <div
              className="relative w-64 h-80 md:w-72 md:h-[360px] lg:w-80 lg:h-[400px]
                          rounded-[50%] overflow-hidden
                          profile-glow opacity-0 animate-fade-in animate-delay-2"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <Image
                src={profilePic}
                alt="Jayanta Biswas – Full Stack Developer"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
              />
            </div>
          </div>

          {/* Right Info Column (Desktop) */}
          <div className="hidden lg:flex flex-col gap-10 flex-1 items-end text-right pt-4">
            <InfoCard
              label="Experience"
              className="items-end"
              animDelay="animate-delay-4"
            >
              I have 8 years
              <br />
              of experience as a web
              <br />
              developer.
            </InfoCard>
            <InfoCard
              label="Projects Done"
              className="items-end"
              animDelay="animate-delay-5"
            >
              I&apos;ve crafted 369 website
              <br />
              so far
            </InfoCard>
            <InfoCard
              label="Awards"
              className="items-end"
              animDelay="animate-delay-6"
            >
              2020 Webby award,
              <br />
              2023 FWA site of the day
            </InfoCard>
          </div>
        </div>

        {/* Mobile / Tablet Info Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 mt-10 w-full max-w-md lg:hidden px-2">
          <InfoCard label="Lives in" animDelay="animate-delay-1">
            27/2 Ram Babu RD,
            <br />
            Mymensingh, Bangladesh
          </InfoCard>
          <InfoCard
            label="Experience"
            className="text-right items-end"
            animDelay="animate-delay-2"
          >
            I have 8 years
            <br />
            of experience as a web developer.
          </InfoCard>
          <InfoCard label="Hobbies" animDelay="animate-delay-3">
            Hiking, Camping, Drawing,
            <br />
            Cooking, Gaming
          </InfoCard>
          <InfoCard
            label="Projects Done"
            className="text-right items-end"
            animDelay="animate-delay-4"
          >
            I&apos;ve crafted 369 website so far
          </InfoCard>
          <InfoCard label="Education" animDelay="animate-delay-5">
            Master in Fine Arts,
            <br />
            Bachelor in Graphics Design,
            <br />
            Minor in human computer interaction
          </InfoCard>
          <InfoCard
            label="Awards"
            className="text-right items-end"
            animDelay="animate-delay-6"
          >
            2020 Webby award,
            <br />
            2023 FWA site of the day
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
