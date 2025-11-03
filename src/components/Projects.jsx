import React from "react";
import Portfolio from "../assets/portfolio.jpg";
import Youtube from "../assets/Youtube.png";
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
      title: "Netflix Clone",
      desc: "Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.",
      image: Youtube,
      live: "https://netflix-clone-jtm.vercel.app",
      github: "https://github.com/joeltdev/netflix-clone",
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
    <section id="projects" className="relative py-16 px-4 bg-gradient-to-br from-sky-100 via-indigo-50 to-rose-100">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-thin font-sans mb-8 text-gray-800 border-b border-gray-300 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
