"use client";
import Image from "next/image";

export default function Logo() {
  return (
    <section className="relative w-full lg:min-h-screen flex items-center justify-center overflow-hidden py-24 px-6 isolate mt-20 lg:justify-center sm:justify-center sm:h-200">
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
        
        <div className="absolute -bottom-0 -right-15 sm:-bottom-0 sm:-right-25 z-30 pointer-events-none md:-right-40 md:-bottom-10 w-50 h-50 md:w-100 md:h-100">
                  <Image 
                    src="/logo-symbol.png" 
                    alt="3D Heart" 
                    fill 
                    className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
                  />
                </div>

        
        <div className="mb-5 md:mb-5">
          <h2 className="font-main text-[#e21c61] fade-bottom-subtle text-[110px] md:text-[210px]">
            Logo
          </h2>
        </div>
<div className="relative -mt-20 md:-mt-20 z-40">
          <span className="handwritten-designs text-[120px] md:text-[180px] block transform -rotate-3">
            Designs
          </span>
        </div>
         

      

         
      </div>
     
    </section>
  );
}