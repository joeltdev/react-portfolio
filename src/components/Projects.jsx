import React from "react";
import Portfolio from "../assets/Screenshot 2024-12-15 at 1.34.14 PM.jpeg";
import Supercartwo from "../assets/Portfolio.png";
import SpicyBites from "../assets/SpicyBites.png";
import Youtube from "../assets/Screenshot 2024-12-14 at 7.56.15 PM.jpeg";
import Gemini from "../assets/Gemini.jpeg";
import Supercar from "../assets/Supercar.png";
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
      title: "Spicy Bites",
      desc: "The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!",
      image: SpicyBites,
      live: "https://spicybites.netlify.app/",
      github: "https://github.com/rohitsingh93300/YtSpicyBites",
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
      title: "Google gemini",
      desc: "Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.",
      image: Gemini,
      live: "https://supercar123.netlify.app/",
      github: "https://github.com/rohitsingh93300/supercars",
    },
    {
      id: 6,
      title: "Super Car",
      desc: "Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.",
      image: Supercar,
      live: "https://supercar123.netlify.app/",
      github: "https://github.com/rohitsingh93300/supercars",
    },
  ];

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto ">
        <h2 className="text-3xl font-thin font-sans mb-8 text-gray-200 border-b  border-gray-400 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((item, index) => {
            return <Cards key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
