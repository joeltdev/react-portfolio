import React from "react";
import KCSubramanian from "../assets/kcsubramanian.png";
import PhysicianScreenshot from "../assets/screenshot .png";
import MarkNestImg from "../assets/MarkNest.png";
import InelsSmartHome from "../assets/inels_smart_home.png";
import IitConference from "../assets/iit_conference.png";
import SloCamera from "../assets/slo_camera.png";
import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      id: 1,
      title: "Physician Website",
      desc: "Modern, mobile-optimized site for Dr. Sruthy Jose with a trust-focused light-blue design and a clear Book Appointment CTA.",
      image: PhysicianScreenshot,
      live: "https://dr-sruthy-website-offical.vercel.app/?_cb=1762081247684",
      github: "",
    },
    {
      id: 2,
      title: "K.C. Subramanian",
      desc: "A clean, modern, and professional website for K.C. Subramanian with a focus on seamless user experience and accessibility.",
      image: KCSubramanian,
      live: "https://www.kcsubramanian.in/",
      github: "",
    },
    {
      id: 3,
      title: "MarkNest",
      desc: "Save, organize, and revisit your favorite content in one encrypted, beautiful nest.",
      image: MarkNestImg,
      live: "https://preview--marknest-ui-haven.lovable.app/signin",
      github: "https://github.com/rohitsingh93300/supercars",
    },
    {
      id: 4,
      title: "iNELS Automation",
      desc: "Wired and wireless smart building automation platform for managing lighting, HVAC, shading, and energy systems in homes and commercial properties.",
      image: InelsSmartHome,
      live: "https://new.inels.com/",
      github: "",
    },
    {
      id: 5,
      title: "IIT Bay Area Conference",
      desc: "The official platform for the West Coast's largest IIT networking event, bringing together founders, visionary investors, and engineering leaders.",
      image: IitConference,
      live: "https://iitbayconf.org/",
      github: "",
    },
    {
      id: 6,
      title: "Slo Camera",
      desc: "A mobile application that turns your phone into a film camera, letting you shoot a pack of frames and receive real printed photos by mail.",
      image: SloCamera,
      live: "https://getslo.cam/",
      github: "",
    },
  ];

  return (
    <section id="projects" className="relative pt-16 md:pt-32 pb-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      
      {/* Grid & Ambient Glow Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.35] pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[30rem] h-[30rem] bg-indigo-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-gray-100">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-blue-600 mb-4">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Featured Work</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-950 leading-[1.05]">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects</span>
            </h2>
          </div>
          
          <div className="relative pl-4 border-l border-gray-200 py-1 max-w-sm">
            <p className="text-gray-500 text-base font-light leading-relaxed">
              Exploring the intersection of technology and user experience through production-ready digital products.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {projectJson.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
