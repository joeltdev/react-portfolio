import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Logo/Name Branding */}
        <div className="flex items-center gap-1 mb-6">
          <span className="text-gray-900 font-bold tracking-tighter text-lg uppercase">Joel Mathew</span>
          <span className="text-gray-300 font-light text-lg">/</span>
        </div>
        
        {/* Copyright Text */}
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
        
        {/* Optional: Design Credit or Tagline (Subtle) */}
        <div className="mt-8 flex gap-4">
          <div className="w-1 h-1 rounded-full bg-gray-200"></div>
          <div className="w-1 h-1 rounded-full bg-gray-200"></div>
          <div className="w-1 h-1 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
