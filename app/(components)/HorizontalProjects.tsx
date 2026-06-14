"use client";
import { FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";

interface ProjectItem {
  _id: string;
  title: string;
  imageUrl: string;
}

interface HorizontalProjectsProps {
  data: ProjectItem[];
}

export default function HorizontalProjects({ data }: HorizontalProjectsProps) {
  return (
    <section className="relative w-full py-8 px-6 md:px-16 isolate">
    

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centers the shrink-wrapped cards on the screen */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-60 items-center justify-items-center">
            {data?.map((project) => (
            <div 
              key={project._id} 
              className="card flex flex-col  backdrop-blur-sm rounded-[2.5rem] p-4  shadow-2xl "
            >
              {/* IMAGE WRAPPER: Centers the image and has no rigid dimensions */}
              <div className="relative overflow-hidden rounded-[2rem] flex items-center justify-center">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  
                  className="max-w-full md:max-w-[820px] h-auto max-h-[460px] object-contain rounded-[2rem]"
                />
              </div>

              {/* ACTION TOOLBAR: Stretches perfectly to match whatever width the image natively takes up */}
              <div className="flex items-center justify-between px-4 pt-4 pb-1 text-gray-400">
                <div className="flex items-center gap-6 text-xl">
                  <button className="text-[#e21c61]"><FaRegHeart /></button>
                  <button className="text-[#e21c61]"><FaRegComment /></button>
                  <button className="text-[#e21c61]"><FaRegPaperPlane /></button>
                </div>
                <button className="text-[#e21c61]"><FaRegBookmark /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}