import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full bg-white/75 backdrop-blur-lg border border-gray-100/80 rounded-3xl sm:rounded-full px-6 sm:px-8 py-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative transition-all duration-300">
        
        {/* Logo Branding */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-gray-950 font-black tracking-tighter text-lg uppercase transition-colors group-hover:text-blue-600">
            Joel Mathew
          </span>
          <span className="text-gray-300 font-light text-lg">/</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["About", "Projects", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gray-950 transition-colors py-2 px-1 group/navlink"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-600 group-hover/navlink:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2.5 text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full transition-all duration-300 border border-gray-100 active:scale-95 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[calc(100%+0.75rem)] left-0 right-0 bg-white/95 backdrop-blur-md border border-gray-100/80 shadow-2xl rounded-3xl py-6 px-6 z-40 transition-all duration-300">
            <div className="flex flex-col gap-5">
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-blue-600 transition-colors pb-2 border-b border-gray-50 last:border-0 last:pb-0 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
