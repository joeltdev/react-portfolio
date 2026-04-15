import React from "react";
import Portfolio from "../assets/portfolio.jpg";
import KCSubramanian from "../assets/kcsubramanian.png";
import Supercartwo from "../assets/Portfolio.png";
import PhysicianScreenshot from "../assets/screenshot .png";
import Medbay from "../assets/medidical.png";
import Gemini from "../assets/Gemini.jpeg";
import MarkNestImg from "../assets/MarkNest.png";
import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      id: 1,
      title: "Portfolio",
      desc: "Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.",
      image: Portfolio,
      live: "https://react-portfolio-git-main-joels-projects-a1cb82de.vercel.app/",
      github: "https://github.com/joeltdev/react-portfolio",
    },
    {
      id: 2,
      title: "Physician Website",
      desc: "Modern, mobile-optimized site for Dr. Sruthy Jose with a trust-focused light-blue design and a clear Book Appointment CTA.",
      image: PhysicianScreenshot,
      live: "https://dr-sruthy-website-offical.vercel.app/?_cb=1762081247684",
      github: "",
    },
    {
      id: 3,
      title: "K.C. Subramanian",
      desc: "A clean, modern, and professional website for K.C. Subramanian with a focus on seamless user experience and accessibility.",
      image: KCSubramanian,
      live: "https://www.kcsubramanian.in/",
      github: "",
    },
    {
      id: 4,
      title: "Gemini AI Clone",
      desc: "Google Gemini AI is a cutting-edge multimodal model that integrates text and images for versatile, next-generation AI solutions.",
      image: Gemini,
      live: "https://gemini-clone-jtm.vercel.app/",
      github: "https://github.com/joeltdev/gemini-clone",
    },
    {
      id: 5,
      title: "MedBay",
      desc: "A clean, modern medical ecommerce website for pharma needs.",
      image: Medbay,
      live: "https://preview--medbay-ecommerce-haven.lovable.app/",
      github: "",
    },
    {
      id: 6,
      title: "MarkNest",
      desc: "Save, organize, and revisit your favorite content in one encrypted, beautiful nest.",
      image: MarkNestImg,
      live: "https://preview--marknest-ui-haven.lovable.app/signin",
      github: "https://github.com/rohitsingh93300/supercars",
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Subtle Background Pattern/Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] aspect-square bg-blue-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] aspect-square bg-indigo-500 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-4">
              Featured Work
            </h2>
            <p className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Recent Projects
            </p>
          </div>
          <p className="text-gray-500 text-lg max-w-sm font-medium">
            Exploring the intersection of technology and user experience through digital products.
          </p>
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
