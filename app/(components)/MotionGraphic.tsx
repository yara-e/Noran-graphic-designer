"use client";
import Image from "next/image";

export default function MotionGraphic() {
  return (
    <section className="relative w-full lg:min-h-screen flex items-center justify-center overflow-hidden py-24 px-6 isolate mt-20 lg:justify-center sm:justify-center  sm:h-200">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Birthstone&display=swap');

        
      `}</style>

      {/* TOP LINE */}
      <div className="absolute top-16 right-0 w-1/3 pr-12 mb-30 bg-texture">
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

      <div className="relative z-10 flex flex-col items-center select-none mt-20">
        
        {/* FIXED: LIKE ASSET - w-10 h-10 (40px) on mobile, md:w-16 md:h-16 (64px) on desktop */}
        {/* <div className="absolute lg:-top-45 lg:-left-35 sm:-top-25 sm:-left-20 z-30 pointer-events-none  md:-left-30 md:-top-50 sm:w-40 sm:h-40 md:w-80 md:h-80   ">
          <Image 
            src="/like (1).png" 
            alt="3D Like" 
            fill 
            className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
          />
        </div> */}

        {/* SOCIAL */}
        <div className="mb-5 md:mb-5">
          <h2 className="font-main text-[#e21c61] fade-bottom-subtle text-[120px] md:text-[210px] lg:text-[210px] ">
            Motion
          </h2>
        </div>

        {/* MEDIA */}
        <div className="mb-4 md:ml-50">
          <h2 className="font-main text-gray-400 fade-bottom-subtle text-[120px] md:text-[210px] md:text-[210px] opacity-95">
            Graphic
          </h2>
        </div>

        {/* FIXED: HEART ASSET - w-10 h-10 (40px) on mobile, md:w-16 md:h-16 (64px) on desktop */}
        {/* <div className="absolute -bottom-0 -right-15 z-30 pointer-events-none md:-right-50 md:bottom-5 w-30 h-30 md:w-80 md:h-80 sm:w-40 sm:h-40 sm:-right-20">
          <Image 
            src="/love (1).png" 
            alt="3D Heart" 
            fill 
            className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
          />
        </div> */}

        {/* DESIGNS */}
        <div className="relative -mt-25 md:-mt-20 z-40">
          <span className="handwritten-designs text-[120px] md:text-[180px] block transform -rotate-3">
            Videos
          </span>
        </div>
      </div>
     
    </section>
  );
}