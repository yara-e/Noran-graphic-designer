"use client";
import Image from "next/image";
import { FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";

interface ProjectItem {
  _id: string; // Mimicking Mongoose ID fields
  title: string;
  imageUrl: string;
}

interface VerticalProjectsProps {
  data: ProjectItem[];
}

export default function VerticalProjects({ data }: VerticalProjectsProps) {
  return (
    <section className="relative w-full py-8 px-6 md:px-16   isolate">
       
      <div className="max-w-fullmx-auto">
        {/* grid items-stretch ensures the card row heights stay matching */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-center justify-items-center">          
          {data?.map((project) => (
              <div

              key={project._id}

              className="card w-full max-w-[420px] flex flex-col group   rounded-[2.5rem] p-4 border border-white/(0.05) shadow-2xl"

            >
              {/* IMAGE HOUSING WINDOW */}
              <div className="relative w-full h-[540px] rounded-[2rem] overflow-hidden bg-black/40 flex items-center justify-center">
                
                <Image

                  src={project.imageUrl}

                  alt={project.title}
              

                  fill

                  

                  className="object-cover transition-transform duration-500 group-hover:scale-105"

                />
                {/* Layer 2: Main foreground crisp image - completely uncropped */}
                 
              </div>

              {/* INTERACTION BAR */}
              <div className="flex items-center justify-between px-4 pt-4 pb-2 text-gray-400">
                <div className="flex items-center gap-5 text-xl">
                  <button className=" text-[#e21c61]">
                    <FaRegHeart />
                  </button>
                  <button className="text-[#e21c61]">
                    <FaRegComment />
                  </button>
                  <button className="text-[#e21c61]">
                    <FaRegPaperPlane />
                  </button>
                </div>

                <button className="text-[#e21c61]">
                  <FaRegBookmark />
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}