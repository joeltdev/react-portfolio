import React from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Full-Stack Developer & AI Content Creator",
      company: "Freelance & Video Creator",
      period: "2023 - Present",
      desc: "Architecting high-performance web products and integrating intelligent AI models. Producing video content teaching 10k+ developers how to build AI-powered applications, LLM workflows, and scalable full-stack systems.",
      skills: ["React", "Next.js", "Payload CMS", "AI Integration", "LLMs", "Node.js"],
    },
    {
      id: 2,
      role: "Full-Stack Engineer",
      company: "TechFlow Systems",
      period: "2022 - 2023",
      desc: "Developed scalable backend services using Payload CMS and built fluid, responsive frontends using Next.js. Optimized database querying and caching architectures to reduce API latencies by 30%.",
      skills: ["Payload CMS", "React", "Tailwind CSS", "Redis", "PostgreSQL"],
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Webelite Builders",
      period: "2021 - 2022",
      desc: "Collaborated on translating high-fidelity UI/UX mockups into pixel-perfect, accessible React components. Contributed to core internal design libraries and built responsive layouts.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
  ];

  return (
    <section id="experience" className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      
      {/* Grid & Ambient Glow Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-100/25 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '9s' }} />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-indigo-50/40 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

      {/* Background Decorative Text */}
      <div className="absolute top-10 left-0 pointer-events-none select-none overflow-hidden">
        <span className="text-[18rem] md:text-[22rem] font-black text-gray-200/35 leading-none tracking-tighter uppercase">
          Career
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 pb-8 border-b border-gray-100">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-blue-600 mb-4">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">My Journey</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-950 leading-[1.05]">
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Experience</span>
            </h2>
          </div>
          
          <div className="relative pl-4 border-l border-gray-200 py-1 max-w-sm">
            <p className="text-gray-500 text-base font-light leading-relaxed">
              A timeline of my professional work in software development, engineering, and tech education.
            </p>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-gray-200 -translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={exp.id} 
                  className={`relative flex flex-col md:flex-row items-start group/timeline ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Circle Node */}
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center -translate-x-1/2 z-10 transition-all duration-300 group-hover/timeline:scale-110 group-hover/timeline:border-blue-500 group-hover/timeline:shadow-lg group-hover/timeline:shadow-blue-500/20">
                    <Briefcase size={14} className="text-gray-500 group-hover/timeline:text-blue-600 transition-colors duration-300" />
                  </div>

                  {/* Left Side Spacer for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Container */}
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2rem)] ml-10 md:ml-0 bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-gray-100/80 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 hover:border-blue-100 hover:bg-white transition-all duration-500">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-3 border-b border-gray-50">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-blue-50/70 border border-blue-100/50 text-blue-600 uppercase tracking-wider">
                        <Calendar size={10} />
                        {exp.period}
                      </span>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        {exp.company}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-gray-950 mb-3 tracking-tight">
                      {exp.role}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                      {exp.desc}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-2.5 py-1 text-[10px] font-bold text-gray-500 bg-gray-50 border border-gray-100 rounded-lg hover:border-blue-100 hover:text-blue-600 hover:bg-blue-50/30 transition-all duration-200 uppercase tracking-wider"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
