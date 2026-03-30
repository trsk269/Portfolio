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
              <span className="text-sm font-semibold leading-tight text-left uppercase">
                thotakura
                <br />
                raghavendra sai kumar
              </span>
            </div>

            {/* Hire Me Button */}
            <button className="bg-[#CAFF00] text-black font-semibold text-sm px-7 py-3 hover:bg-[#b8f000] transition-colors">
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
