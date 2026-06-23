import React from "react";
import MernStack from "../assets/mernstack.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import Tailwind from "../assets/Tailwind Css.png";
import MongoDb from "../assets/mongodb.svg";
import NodeLogo from "../assets/NodeLogo.png";
import PayloadLogo from "../assets/payload.png";
import Express from "../assets/Express.png";
import NextJs from "../assets/NextJs.png";
import SwiftLogo from "../assets/swift.svg";
import FlutterLogo from "../assets/flutter.svg";
import { Video } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Javascript", icon: Javascript },
    { name: "React", icon: ReactLogo },
    { name: "Next.js", icon: NextJs },
    { name: "Tailwind", icon: Tailwind },
    { name: "MongoDB", icon: MongoDb },
    { name: "Node.js", icon: NodeLogo },
    { name: "Payload CMS", icon: PayloadLogo },
    { name: "Express", icon: Express },
    { name: "Swift", icon: SwiftLogo },
    { name: "Flutter", icon: FlutterLogo },
  ];

  return (
    <section id="about" className="relative pt-32 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden scroll-mt-28">
      {/* Background Decorative Text & Glows */}
      <div className="absolute top-10 right-0 pointer-events-none select-none overflow-hidden">
        <span className="text-[20rem] font-black text-gray-200/40 leading-none tracking-tighter">
          ABOUT
        </span>
      </div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-50/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/85 text-blue-600 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase">Who I Am</span>
            </div>
            
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-950 leading-[1.05] mb-8">
              Joel Mathew.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800">
                Building Digital Worlds.
              </span>
            </h3>
            
            <div className="max-w-2xl">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light mb-8">
                I engineer scalable digital products with a focus on high performance and accessibility. Specializing in the <span className="text-gray-900 font-medium">MERN stack</span> and <span className="text-gray-900 font-medium">Payload CMS</span>, I transform complex requirements into clean, maintainable, and beautiful web applications.
              </p>
              
              <div className="relative pl-6 py-1 border-l-2 border-transparent my-8">
                <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-blue-500 to-indigo-600" />
                <p className="text-base text-gray-500 leading-relaxed font-light">
                  From architecting the <span className="font-semibold text-gray-900 underline decoration-blue-500/30 decoration-2 underline-offset-4">iNELS</span> smart automation system to developing interactive AI tools, I thrive on solving technical challenges with precision and impact.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-8 mt-10">
                <div className="group/stat bg-white/60 backdrop-blur-sm border border-gray-100/80 rounded-2xl p-4 hover:border-gray-200/85 hover:bg-white hover:shadow-lg hover:shadow-gray-200/30 transition-all duration-300">
                  <span className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight block group-hover/stat:-translate-y-0.5 transition-transform duration-300">3+</span>
                  <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-bold mt-1 block">Years Coding</span>
                </div>
                <div className="group/stat bg-white/60 backdrop-blur-sm border border-gray-100/80 rounded-2xl p-4 hover:border-gray-200/85 hover:bg-white hover:shadow-lg hover:shadow-gray-200/30 transition-all duration-300">
                  <span className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight block group-hover/stat:-translate-y-0.5 transition-transform duration-300">15+</span>
                  <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-bold mt-1 block">Projects Built</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills & Expertise */}
          <div className="lg:col-span-5 bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden">
            
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
              <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-gray-900">
                Core Expertise
              </h4>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Skills
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex items-center gap-3 p-3 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300 shrink-0">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-5 h-5 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                  <span className="text-xs font-bold tracking-wider text-gray-600 uppercase group-hover:text-gray-900 transition-colors truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-gray-950 to-gray-900 rounded-2xl text-white relative overflow-hidden border border-gray-800 shadow-xl shadow-gray-950/20 group/video">
              {/* Background decorative glow */}
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover/video:bg-blue-600/20 transition-all duration-500" />
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-blue-400 group-hover/video:scale-105 transition-transform duration-300">
                  <Video size={16} />
                </div>
                <h5 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300">
                  Video Creation
                </h5>
              </div>
              <p className="text-sm font-light leading-relaxed text-gray-400">
                I produce and edit high-quality technical video content, handling everything from recording and scripting to professional video editing and motion graphics.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
