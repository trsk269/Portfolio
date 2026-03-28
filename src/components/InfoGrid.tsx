import Image from "next/image";
import profilepic from "../app/profilepic.png";

export default function InfoGrid() {
  return (
    <div className="w-full flex gap-0 items-stretch justify-center border border-white/10 mt-10 mb-20">
      {/* sub01 — Left Info */}
      <div className="h-full w-full flex flex-col gap-8 py-10 px-8 justify-center text-left border-r border-white/10 hidden md:flex">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
            Lives In
          </span>
          <span className="text-[15px] xl:text-lg font-semibold leading-snug">
            Rajahmundry,
            <br />
            Andhra Pradesh, India
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
            Hobbies
          </span>
          <span className="text-[15px] xl:text-lg font-semibold leading-snug">
            Cricket,
            <br />
            Traveling
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
            Education
          </span>
          <span className="text-[14px] xl:text-[16px] font-semibold leading-snug">
            B.Tech in Computer
            <br />
            Science & Engineering (9.28)
            <br />
            Honours in Data Science (9.0)
          </span>
        </div>
      </div>

      {/* sub02 — Profile Picture */}
      <div className="h-full w-full flex flex-col gap-4 items-center justify-center py-10 px-8 md:border-r border-white/10">
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
      <div className="h-full w-full flex flex-col gap-8 py-10 px-8 justify-center text-right hidden md:flex">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
            Experience
          </span>
          <span className="text-[15px] xl:text-lg font-semibold leading-snug">
            Around 1 year of
            <br />
            experience as a full-stack
            <br />
            developer.
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
            Projects Done
          </span>
          <span className="text-[15px] xl:text-lg font-semibold leading-snug">
            Crafted around 15 projects
            <br />
            across various domains
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
            Awards
          </span>
          <span className="text-[14px] xl:text-[15px] font-semibold leading-snug">
            3rd Place in Academics
            <br />
            1st Prize - Web-Wizards
            <br />
            Best Solution - Hackathon
          </span>
        </div>
      </div>
    </div>
  );
}
