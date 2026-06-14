"use client";
import Image from "next/image";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaBehance } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="relative w-full  text-white py-12 px-6 md:px-16 overflow-hidden  isolate">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Birthstone&display=swap');

        .font-main { 
          font-family: 'Archivo Black', sans-serif; 
          text-transform: uppercase;
          line-height: 0.75;
          letter-spacing: -0.06em;
          display: inline-block;
          transform: scaleY(1.35); 
          transform-origin: center;
        }

        /* Smaller transparent part: Solid until 80%, then fades quickly */
        .fade-bottom-subtle {
          -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }

        .handwritten-designs {
          font-family: 'Birthstone', cursive;
          color: #e21c61;
        }

        .line-glow {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }
        
        .neon-dot {
          width: 6px;
          height: 6px;
          background: #e21c61;
          border-radius: 50%;
          box-shadow: 0 0 15px #e21c61;
        }

        .bg-texture {
          background-color: #1a1a1a; /* Very dark grey base */
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .bg-texture::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, #1a1a1a 0%, #000000 100%);
          mix-blend-mode: multiply;
          z-index: -1;
          pointer-events: none;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-around items-center lg:items-end gap-12 lg:gap-8"> 
               
        {/* FIXED: Glowing Line Container positioned neatly on top with clear structural margins */}
        <div className="absolute top-2 right-0 w-1/3  hidden lg:flex flex-col items-center justify-end">
          {/* Tagline sits cleanly stacked on top with a controlled bottom margin */}
          <p className="handwritten text-xl text-center  select-none">
            <span className="text-[#e21c61] uppercase">D</span>esigning ideas into <span className="text-[#e21c61]">V</span>isuals
          </p>
          {/* Glowing element bar underneath text structure */}
          <div className="line-glow relative w-full bg-texture">
            <div className="neon-dot absolute -left-1 -top-[2.5px]" />
          </div>
        </div>

        {/* LEFT COLUMN (Image & Identity) */}
        <div className="w-full lg:w-auto flex flex-col items-center lg:items-start mt-16 lg:mt-0">
          <div className="relative w-full aspect-[4/5] max-w-[300px] mb-4">
            <Image 
              src="/non.jpeg" 
              alt="nouran"
              fill
              priority
              className="object-cover rounded-sm shadow-xl"
            />
          </div>
          <div className="text-center lg:text-left w-full overflow-visible">
            <h2 className="text-6xl md:text-7xl font-compact-heavy gradient-text mb-0">
              Nouran
            </h2>
            <p className="text-5xl text-white opacity-95 arabic-modern ml-35  lg:mt-[-25px] lg:ml-45">
              نوران طه
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN (Bio & Detailed Overview) */}
        <div className="w-full lg:max-w-2xl space-y-8 pt-4 flex flex-col items-center lg:items-start">
          
          {/* Header Block */}
          <div className="relative flex flex-col w-full">
            
            {/* Mobile Fallback: Tagline shows here on small screen configurations, hides gracefully on desktops */}
            {/* <div className="flex lg:hidden flex-col items-center text-center w-full mb-6 mt-2">
              <p className="handwritten text-xl mb-2">
                <span className="text-[#e21c61] uppercase">D</span>esigning ideas into <span className="text-[#e21c61]">V</span>isuals
              </p>
              <div className="line-glow relative w-1/2 mx-auto">
                <div className="neon-dot absolute -left-1 -top-[2.5px]" />
              </div>
            </div> */}

            {/* Hello Header */}
            <div className="flex justify-center lg:justify-start overflow-visible mt-2">
               <h3 className="text-7xl md:text-8xl font-compact-heavy gradient-text">
                 Hello!
               </h3>
            </div>

            <p className="text-base md:text-lg text-gray-400 leading-snug font-light max-w-xl mt-4 text-center lg:text-left mx-auto lg:mx-0">
              I have a strong passion for continuous self-development and iam always open to learning new skills in this field.
              <br/>
              <span className="block text-base md:text-lg text-gray-400 leading-snug font-light mt-4">
                I use AI tools in my work to generate ideas and maximize creative efficiency.
              </span>
            </p>
          </div>

          {/* Details Grid Layer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 pt-4 w-full justify-between">
            
            {/* Experience Card */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left" >
              <div className="glass-pill-depth mb-2">
                <span className="gradient-text">Experience</span>
              </div>
              <div>
                <p className="text-base md:text-xl text-gray-400">2025 - Present</p>
                <p className="text-base md:text-xl text-gray-400">Graphic Designer</p>
              </div>
            </div>

            {/* Software Card */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="glass-pill-depth mb-2">
                <span className="gradient-text">Software</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-5 pl-1">
                <div className="w-12 h-12 bg-gray-400 font-bold text-2xl flex items-center justify-center rounded-lg text-black">Ps</div>
                <div className="w-12 h-12 bg-gray-400 font-bold text-2xl flex items-center justify-center rounded-lg text-black">Ai</div>
                <div className="w-12 h-12 bg-gray-400 font-bold text-2xl flex items-center justify-center rounded-lg text-black">Id</div>
                <div className="w-12 h-12 bg-gray-400 font-bold text-2xl flex items-center justify-center rounded-lg text-black">AE</div>

              </div>
            </div>

            {/* Languages Card */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="glass-pill-depth mb-2">
                <span className="gradient-text">Languages</span>
              </div>
              <ul className="text-xs space-y-2 text-center lg:text-left pl-1">
                <li>
                  <span className="text-base md:text-xl text-gray-400">Arabic - Native</span> 
                </li>
                <li>
                  <span className="text-base md:text-xl text-gray-400">English - Advanced</span> 
                </li>
              </ul>
            </div>

            {/* Contact Card */}
            <div className="flex flex-col items-center lg:items-start">
  <div className="glass-pill-depth mb-2">
    <span className="gradient-text">Contact</span>
  </div>
  <div className="flex flex-col items-center lg:items-start gap-3 pl-1 w-full">
    
    {/* WhatsApp */}
    <a 
      href="https://wa.me/201020368099" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-3 text-gray-400 hover:text-[#e21c61] transition"
    >
      <FaWhatsapp className="text-[#e21c61] text-lg" />
      <span className="text-base md:text-md">+20 102 036 8099</span>
    </a>

    {/* LinkedIn */}
    {/* <a 
      href="https://linkedin.com/in/your-profile-url" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-3 text-gray-400 hover:text-[#e21c61] transition"
    >
      <FaLinkedin className="text-[#e21c61] text-lg" />
      <span className="text-base md:text-md">LinkedIn Profile</span>
    </a> */}

    {/* Behance */}
    {/* <a 
      href="https://behance.net/your-profile-url" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-3 text-gray-400 hover:text-[#e21c61] transition"
    >
      <FaBehance className="text-[#e21c61] text-lg" />
      <span className="text-base md:text-md">Behance Portfolio</span>
    </a> */}

    {/* Email */}
    <a 
      href="mailto:norant910@gmail.com" 
      className="flex items-center gap-3 text-gray-400 hover:text-[#e21c61] transition"
    >
      <FaEnvelope className="text-[#e21c61] text-lg" />
      <span className="text-base md:text-md">norant910@gmail.com</span>
    </a>

  </div>
</div>





          </div>
        </div>

      </div>
    </section>
  );
}