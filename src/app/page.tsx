import Hero from "../components/Hero";
import InfoGrid from "../components/InfoGrid";
import Services from "../components/Services";
import Skills from "../components/Skills";
import ImageGallery from "../components/ImageGallery";
import Works from "../components/Works";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full h-full max-w-[90%] md:max-w-[75%] mx-auto">
        <div className="h-full w-full flex flex-col items-center justify-center text-center pt-10">
          {/* Header */}
          <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
            {/* Left Section */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              {/* Menu Button */}
              <button
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 flex flex-col items-center justify-center gap-[4px] shrink-0"
                aria-label="Menu"
              >
                <span className="block w-4 h-[1.5px] bg-white" />
                <span className="block w-4 h-[1.5px] bg-white" />
              </button>

              {/* Name */}
              <span className="text-[11px] sm:text-xs md:text-sm font-semibold leading-tight uppercase text-left break-words">
                thotakura <br />
                raghavendra sai kumar
              </span>
            </div>

            {/* Hire Me Button */}
            <button className="bg-[#CAFF00] text-black font-semibold text-[10px] sm:text-sm px-4 sm:px-6 md:px-7 py-2 sm:py-3 hover:bg-[#b8f000] transition-colors whitespace-nowrap">
              Hire me
            </button>
          </div>

          <Hero />
          <InfoGrid />
        </div>
      </div>
      {/* <Services /> */}
      <Skills />
      <Works />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
      <ImageGallery />
      <Footer />
    </main>
  );
}
