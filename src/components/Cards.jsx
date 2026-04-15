import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Cards = ({ item }) => {
  return (
    <div className="group relative flex flex-col h-full bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay on hover (Optional, subtle) */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900 tracking-tight leading-none">
            {item.title}
          </h3>
          <div className="flex gap-3">
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
            )}
            {item.live && (
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Live Preview"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {item.desc}
        </p>

        {/* Action Button - More prominent on mobile */}
        <div className="mt-auto">
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
