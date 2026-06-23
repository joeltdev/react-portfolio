import React from "react";
import { Github, ArrowUpRight } from "lucide-react";

const Cards = ({ item }) => {
  return (
    <div className="group relative flex flex-col h-full bg-white rounded-[2.5rem] border border-gray-100/80 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 transition-all duration-500 ease-out overflow-hidden">
      
      {/* Framed Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-100/50">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
        {/* Soft color overlay on hover */}
        <div className="absolute inset-0 bg-gray-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow pt-6 px-3 pb-2">
        
        {/* Header Row */}
        <div className="flex justify-between items-start mb-4 gap-4">
          <h3 className="text-2xl font-black text-gray-950 tracking-tight leading-tight group-hover:text-black transition-colors">
            {item.title}
          </h3>
          <div className="flex gap-2.5">
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 bg-gray-50/50 hover:bg-white hover:text-blue-600 hover:border-blue-100 hover:shadow-md transition-all duration-300"
                aria-label="GitHub Repository"
              >
                <Github size={17} />
              </a>
            )}
            {item.live && (
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 bg-gray-50/50 hover:bg-white hover:text-blue-600 hover:border-blue-100 hover:shadow-md transition-all duration-300"
                aria-label="Live Preview"
              >
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        </div>

        {/* Narrative Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light line-clamp-3">
          {item.desc}
        </p>

        {/* Dynamic CTA Capsule Button */}
        <div className="mt-auto">
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-xs font-bold uppercase tracking-widest text-white bg-gray-950 rounded-2xl transition-all duration-300 active:scale-[0.98] shadow-lg shadow-gray-200/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Project
              <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-305 -z-0" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Cards;
