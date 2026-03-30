export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 lg:mt-12 mb-12 sm:mb-0 lg:mb-8 gap-5">
      {/* Heading */}
      <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.15] tracking-tight max-w-3xl">
        Hey, It's TRSK. <br className="hidden sm:block" />
        Full stack Developer
      </h1>

      {/* Description */}
      <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl leading-[1.8]">
        I've been working as a full stack{" "}
        <strong className="text-white font-semibold">web developer</strong> for
        1 year.
        <br />I am based in{" "}
        <strong className="text-white font-semibold">India</strong>.
      </p>
    </div>
  );
}
