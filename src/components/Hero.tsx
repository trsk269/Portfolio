export default function Hero() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center gap-4 mt-12 mb-16">
      <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight">
        Hey, It's TRSK. <br /> Full stack Developer
      </h1>
      <p className="text-white/60 text-base max-w-md leading-relaxed mx-auto">
        I've been working as a full stack{" "}
        <strong className="text-white font-semibold">web developer</strong>
        <br />
        for 1 years. I am based on{" "}
        <strong className="text-white font-semibold">India.</strong>
      </p>
    </div>
  );
}
