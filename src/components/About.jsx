import React from "react";
import MernStack from "../assets/mernstack.png";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import Tailwind from "../assets/Tailwind Css.png";
import MongoDb from "../assets/mongodb.svg";
import NodeLogo from "../assets/NodeLogo.png";
import Golang from "../assets/Go-Logo_Blue (1).svg";
import Express from "../assets/Express.png";
import NextJs from "../assets/NextJs.png";

const About = () => {
  const skills = [
    { name: "HTML", icon: Html },
    { name: "CSS", icon: Css },
    { name: "Javascript", icon: Javascript },
    { name: "React", icon: ReactLogo },
    { name: "Next.js", icon: NextJs },
    { name: "Tailwind", icon: Tailwind },
    { name: "MongoDB", icon: MongoDb },
    { name: "Node.js", icon: NodeLogo },
    { name: "Golang", icon: Golang },
    { name: "Express", icon: Express },
  ];

  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-10 right-0 pointer-events-none select-none overflow-hidden">
        <span className="text-[20rem] font-black text-gray-200/40 leading-none tracking-tighter">
          ABOUT
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-6">
              Who I Am
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
              Joel Mathew. <br />
              <span className="text-gray-400">Building Digital Worlds.</span>
            </h3>
            
            <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-normal max-w-2xl">
              <p>
                I engineer scalable digital products with a focus on high performance and accessibility. Specializing in the MERN stack and Golang, I transform complex requirements into clean, maintainable, and beautiful web applications.
              </p>
              <p className="font-light">
                From architecting the <span className="font-medium text-gray-900 underline decoration-gray-300 underline-offset-4">MedBay</span> e-commerce system to developing interactive AI clones, I thrive on solving technical challenges with precision and impact.
              </p>
              <div className="pt-8 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-gray-900">3+</span>
                  <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">Years Coding</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-gray-900">15+</span>
                  <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">Projects Built</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-gray-900">24/7</span>
                  <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">Learning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills & Expertise */}
          <div className="lg:col-span-5 bg-white p-10 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50">
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-10 border-b border-gray-100 pb-4">
              Core Expertise
            </h4>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-6 h-6 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                  <span className="text-sm font-bold tracking-wider text-gray-500 uppercase group-hover:text-gray-900 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-16 p-6 bg-gray-900 rounded-xl text-white">
              <h5 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
                YouTube Channel
              </h5>
              <p className="text-sm font-medium leading-relaxed opacity-90">
                I share my knowledge with over <span className="text-blue-400">10k+</span> learners, teaching JavaScript, MERN Stack, and web development trends.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
