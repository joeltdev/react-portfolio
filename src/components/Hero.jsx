import React from "react";
import { Github, Linkedin, Instagram, Twitter, ArrowRight } from "lucide-react";
import hero from "../assets/mufh.png";
import reactLogo from "../assets/React.png";
import nextLogo from "../assets/NextJs.png";
import tailwindLogo from "../assets/Tailwind Css.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 md:pt-40 pb-16 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Grid Backdrop Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-50/40 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />

      {/* Background Decorative Text */}
      <div className="absolute top-20 left-0 pointer-events-none select-none overflow-hidden hidden lg:block">
        <span className="text-[25rem] font-black text-gray-100/30 leading-none tracking-tighter">
          JOEL
        </span>
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col pt-12 lg:pt-0 text-center lg:text-left items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-100 text-gray-800 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-500">Web Developer & Designer</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gray-950 tracking-tighter leading-[0.9] mb-8">
              JOEL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-blue-600">
                MATHEW.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Crafting high-performance digital experiences with <span className="text-gray-950 font-medium">React</span>, <span className="text-gray-950 font-medium">Next.js</span>, and <span className="text-gray-950 font-medium">Payload CMS</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start w-full sm:w-auto">
              <a 
                href="#projects" 
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-950 text-white rounded-2xl font-bold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-505 -z-0" />
              </a>
              
              <div className="flex gap-4">
                {[
                  { icon: Github, url: "https://github.com/joeltdev" },
                  { icon: Linkedin, url: "https://linkedin.com" },
                  { icon: Instagram, url: "https://instagram.com" }
                ].map(({ icon: Icon, url }, i) => (
                  <a 
                    key={i}
                    href={url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-12 h-12 flex items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-400 hover:text-gray-900 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image & Tech Bubbles */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-center">
            <div className="relative group/image">
              {/* Outer soft gradient halo ring */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-[2.8rem] blur-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Subtle Outer Frame Layer */}
              <div className="absolute inset-0 border border-gray-100 rounded-[2.5rem] scale-[1.03] pointer-events-none transition-transform duration-500 group-hover/image:scale-[1.04]" />
              
              {/* Framed Image Container */}
              <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-3 shadow-xl hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] z-10 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-[3/4] mx-auto lg:ml-auto lg:mr-0 transition-all duration-500 group-hover/image:scale-[1.01] group-hover/image:border-blue-200/50">
                <img 
                  src={hero} 
                  alt="Joel Mathew" 
                  className="w-full h-full object-cover rounded-[1.8rem] contrast-[1.03] saturate-[1.06] brightness-[0.99] grayscale-[10%] group-hover/image:grayscale-0 transition-all duration-700 ease-out"
                />
              </div>

              {/* Chic Interactive Overlay Badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md text-gray-950 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2.5 rounded-2xl border border-gray-100 shadow-md z-20 flex items-center gap-2 transition-all duration-500 group-hover/image:translate-y-[-2px] pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                Joel Mathew
              </div>

              {/* Floating Tech Logos (Desktop Only) */}
              <div className="absolute top-1/4 -left-12 hidden lg:flex w-16 h-16 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-gray-200/80 items-center justify-center p-3 animate-bounce hover:scale-110 transition-transform duration-300 z-20" style={{ animationDuration: '3s' }}>
                <img src={reactLogo} alt="React" className="w-10 h-10 object-contain" />
              </div>
              <div className="absolute bottom-1/4 -right-8 hidden lg:flex w-14 h-14 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-gray-200/80 items-center justify-center p-3 animate-bounce hover:scale-110 transition-transform duration-300 z-20" style={{ animationDuration: '4s' }}>
                <img src={nextLogo} alt="Next.js" className="w-8 h-8 object-contain" />
              </div>
              <div className="absolute -bottom-4 left-1/4 hidden lg:flex w-14 h-14 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-gray-200/80 items-center justify-center p-3 animate-bounce hover:scale-110 transition-transform duration-300 z-20" style={{ animationDuration: '5s' }}>
                <img src={tailwindLogo} alt="Tailwind" className="w-8 h-8 object-contain" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
