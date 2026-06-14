"use client";
import Image from "next/image";

export default function SocialMedia() {
  return (
    <section className="relative w-full lg:min-h-screen flex flex-col items-center justify-center py-24 px-6 mt-20  ">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Birthstone&display=swap');
        .font-main { font-family: 'Archivo Black', sans-serif; }
        .handwritten-designs { font-family: 'Birthstone', cursive; }
      `}</style>

      {/* DECORATIVE LINES */}
      {/* <div className="absolute top-16 right-0 w-1/3 pr-12"><div className="w-full h-[2px] bg-gray-700 relative"><div className="absolute -left-1 -top-[3px] w-2 h-2 rounded-full bg-white" /></div></div>
      <div className="absolute bottom-16 left-0 w-1/3 pl-12"><div className="w-full h-[2px] bg-gray-700 relative"><div className="absolute -right-1 -top-[3px] w-2 h-2 rounded-full bg-white" /></div></div> */}

 <div className="absolute top-5 right-0 w-1/3 pr-12  bg-texture">
        <div className="line-glow relative w-full">
          <div className="neon-dot absolute -left-1 -top-[2.5px]" />
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="absolute bottom-16 left-0 w-1/3 pl-12 bg-texture">
        <div className="line-glow relative w-full">
          <div className="neon-dot absolute -right-1 -top-[2.5px]" />
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center select-none w-full">
        
        {/* SOCIAL ROW - Like attached to 'S' */}
        <div className="flex items-center ">
          <div className="relative w-20 h-20 md:w-80 md:h-80 -mr-15 -mt-15  md:-mr-50 md:-mt-50 -z-20 ">
            <Image src="/hand.png" alt="3D Like" fill className="object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.8)]" />
          </div>
          <h2 className="font-main text-[#e21c61] text-[60px] md:text-[210px] fade-bottom-subtle">Business</h2>
        </div>

        {/* MEDIA ROW - Heart attached to 'a' */}
        <div className="flex items-center -mt-4 ml-20 md:-mt-12 md:ml-100">
          <h2 className="font-main text-gray-400 text-[60px] md:text-[210px] opacity-95 fade-bottom-subtle">Card</h2>
          <div className="relative w-16 h-16 md:w-60 md:h-60 -ml-4 mt-5 md:mt-20 md:-ml-15 z-20">
            <Image src="/card (1).png" alt="3D Heart" fill className="object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.8)]" />
          </div>
        </div>

        {/* DESIGNS */}
        <div className="relative z-40 -mt-12 md:-mt-40">
          <span className="handwritten-designs text-[60px] md:text-[180px] block transform -rotate-3">
            Designs
          </span>
        </div>
      </div>
    </section>
  );
}