"use client";
import { FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";

// 1. Updated interface to match your database field "videoUrl"
interface ProjectItem {
  _id: string;
  title: string;
  imageUrl: string;
  videoUrl: string; // Ensure this matches your database schema
}

interface HorizontalProjectsProps {
  data: ProjectItem[];
}

export default function MotionGraphicProjects({ data }: HorizontalProjectsProps) {
  return (
    <section className="relative w-full py-8 px-6 md:px-16 isolate">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-y-10 gap-x-60 items-center justify-items-center">
          {data?.map((project) => (
            <div 
              key={project._id} 
              className="card flex flex-col backdrop-blur-sm rounded-[2.5rem] p-4 shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-[2rem] flex items-center justify-center">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  
                  className="max-w-full md:max-w-[820px] h-auto max-h-[460px] object-contain rounded-[2rem]"
                />
              </div>

              {/* 2. Button wrapped in an anchor tag for redirection */}
              <div className="flex items-center justify-center pt-4 pb-1 text-gray-400">
                {project.videoUrl ? (
                  <a 
                    href={project.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#e21c61] text-white px-8 py-3 rounded-full font-bold hover:bg-[#d61a5a] transition-all transform hover:scale-105"
                  >
                    Watch Video
                  </a>
                ) : (
                  <span className="text-gray-600 italic">No video link provided</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}