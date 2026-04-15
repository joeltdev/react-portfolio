import React from "react";
import { Github, Linkedin, Instagram, Twitter, ArrowRight } from "lucide-react";
import hero from "../assets/a-realistic-cartoon-portrait-of-a-23-yea_ysAsbjWOSsSNA4hTWVix3g_ErxRV28sSyqTkSTdwUITAA-Photoroom.png";
import reactLogo from "../assets/React.png";
import nextLogo from "../assets/NextJs.png";
import tailwindLogo from "../assets/Tailwind Css.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 lg:px-8 bg-white overflow-hidden">
      
      {/* Background Decorative Text */}
      <div className="absolute top-20 left-0 pointer-events-none select-none overflow-hidden hidden lg:block">
        <span className="text-[25rem] font-black text-gray-50 leading-none tracking-tighter">
          JOEL
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col pt-12 lg:pt-0 text-center lg:text-left">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">
              Web Developer & Designer
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[0.9] mb-8">
              JOEL <br />
              <span className="text-gray-300">MATHEW.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Crafting high-performance digital experiences with <span className="text-gray-900 font-medium">React</span>, <span className="text-gray-900 font-medium">Next.js</span>, and <span className="text-gray-900 font-medium">Golang</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="group flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold tracking-wide hover:bg-black transition-all duration-300 shadow-xl shadow-gray-200"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex gap-6">
                <a href="https://github.com/joeltdev" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Github size={22} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Instagram size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image & Tech Bubbles */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gray-100 rounded-full blur-3xl -z-10 scale-90 opacity-50" />
              
              <img 
                src={hero} 
                alt="Joel Mathew" 
                className="h-[500px] md:h-[650px] lg:h-[800px] w-auto object-contain relative z-10 drop-shadow-2xl"
              />

              {/* Floating Tech Logos (Desktop Only) */}
              <div className="absolute top-1/4 -left-12 hidden lg:flex w-16 h-16 bg-white rounded-2xl shadow-xl shadow-gray-200 items-center justify-center p-3 animate-bounce transition-all duration-1000" style={{ animationDuration: '3s' }}>
                <img src={reactLogo} alt="React" className="w-full h-full object-contain" />
              </div>
              <div className="absolute bottom-1/4 -right-8 hidden lg:flex w-14 h-14 bg-white rounded-2xl shadow-xl shadow-gray-200 items-center justify-center p-3 animate-bounce transition-all duration-1000" style={{ animationDuration: '4s' }}>
                <img src={nextLogo} alt="Next.js" className="w-full h-full object-contain" />
              </div>
              <div className="absolute -bottom-4 left-1/4 hidden lg:flex w-14 h-14 bg-white rounded-2xl shadow-xl shadow-gray-200 items-center justify-center p-3 animate-bounce transition-all duration-1000" style={{ animationDuration: '5s' }}>
                <img src={tailwindLogo} alt="Tailwind" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
