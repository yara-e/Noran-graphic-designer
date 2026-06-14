"use client";
import Image from "next/image";


export default function Hero() {
  const assetPath = "/Gemini_Generated_Image_mj4rbsmj4rbsmj4r (1).png";
  const svgViewBox = "0 0 1000 300";
  const svgStyle = { transform: "scaleY(1.8)" };
  const textClass = "antonio-upright";

  return (
    <section className="relative lg:min-h-screen w-full  flex flex-col items-center pt-60 overflow-hidden lg:justify-start sm:justify-center  sm:h-200">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Birthstone&display=swap');
        .antonio-upright { font-family: 'Antonio', sans-serif; font-weight: 700; }
        .handwritten { font-family: 'Birthstone', cursive; filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.5)); }
      `}</style>
      
      <div className="relative w-full max-w-[90vw] md:max-w-[80vw]">
        <svg 
          viewBox={svgViewBox} 
          className="w-full h-auto select-none mx-auto relative z-10"
          style={svgStyle}
        >
          <defs>
            {/* Vertical Gradient Definition */}
            <linearGradient id="heroVerticalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e21c61" />
              <stop offset="100%" stopColor="#780a3e" />
            </linearGradient>

            {/* FIRST O MASK */}
            <clipPath id="first-o-half-mask">
              <rect x="455" y="0" width="48" height="300" />
            </clipPath>

            {/* LAST O MASK */}
            <clipPath id="last-o-half-mask">
              <rect x="720" y="0" width="45" height="300" />
            </clipPath>
          </defs>

          {/* LAYER 1: BACKGROUND BASE LETTERS */}
          <g fill="url(#heroVerticalGradient)">
            <text x="50" y="200" fontSize="190" className={textClass} letterSpacing="-8">POR</text>
          </g>

          {/* Subtitles */}
          <text 
            x="50"           
            y="260"          
            fontSize="22"    
            fill="white"     
            className="antonio-upright"
            style={{ transform: 'scaleY(0.55)' }}
          >
            <tspan x="70" dy="160" fontSize="50" fill="#c6cdd1">Graphic </tspan>
            <tspan x="173" dy="43" fontSize="50" fill="#c6cdd1">designer</tspan>
          </text>

          <g fill="url(#heroVerticalGradient)">
            <text x="390" y="230" fontSize="190" className={textClass}>F</text>
            <text x="455" y="230" fontSize="190" className={textClass}>O</text>
            <text x="550" y="230" fontSize="190" className={textClass}>L</text>
            <text x="675" y="230" fontSize="190" className={textClass}>O</text>
          </g>

          {/* LAYER 2: THE 3D IMAGE */}
          <foreignObject x="320" y="37" width="600" height="250">
            <div style={{ transform: "scaleY(0.55)" }} className="w-full h-full flex items-center justify-center">
              <Image 
                src={assetPath} 
                alt="Chrome Element"
                width={800}
                height={500}
                priority
                className="object-contain brightness-125 contrast-110" 
              />
            </div>
          </foreignObject>

          {/* LAYER 3: THE 'T' (Moved back - like z-index: -1 compared to the bar) */}
          <g transform="translate(325, 0)">
             <text x="0" y="200" fontSize="190" fill="url(#heroVerticalGradient)" className={textClass}>T</text>
          </g>

          {/* LAYER 4: THE GRADIENT BAR (Moved forward - like z-index: 1 compared to the T) */}
          <rect x="310" y="37" width="600" height="22" fill="url(#heroVerticalGradient)" />

          {/* LAYER 5: SIGNATURE & TOP WEAVE LETTERS */}
          <g transform="translate(325, 0)">
             {/* Signature sits over the bar */}
             <text x="50" y="67" fontSize="85" fill="#c6cdd1" className="handwritten" style={{ transform: 'scaleY(0.55) scaleX(1.2)', letterSpacing: '2px' }}>Nouran Taha</text>
          </g>

          <g fill="url(#heroVerticalGradient)">
            {/* First half of first O */}
            <g clipPath="url(#first-o-half-mask)">
              <text x="455" y="230" fontSize="190" className={textClass}>O</text>
            </g>

            {/* The letter 'I' */}
            <text x="625" y="230" fontSize="190" className={textClass}>I</text>
            
            {/* First half of last O */}
            <g clipPath="url(#last-o-half-mask)">
              <text x="675" y="230" fontSize="190" className={textClass}>O</text>
            </g>
          </g>

          {/* LAYER 6: THE YEAR */}
          <text x="850" y="230" className={textClass} style={{ transform: 'scaleY(1)' }}>
            <tspan x="780" dy="-50" fontSize="50" fill="#c6cdd1">20</tspan>
            <tspan x="780" dy="50" fontSize="50" fill="#c6cdd1">26</tspan>
          </text>
        </svg>
      </div>
    </section>
  );
}