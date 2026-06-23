import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-100 relative overflow-hidden">
      
      {/* Grid Backdrop Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
      
      {/* Top Border Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10">
        
        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10 text-xs font-bold uppercase tracking-wider text-gray-400">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>

        {/* Logo/Name & Copyright Branding */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-8 text-center sm:text-left">
          <span className="text-gray-950 font-black tracking-tighter text-lg uppercase hover:text-blue-600 transition-colors duration-300">
            Joel Mathew
          </span>
          <span className="hidden sm:block text-gray-300 font-light text-lg">/</span>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
        
        {/* Blinking Status Dots Indicator */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
