import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import hero from "../assets/a-realistic-cartoon-portrait-of-a-23-yea_ysAsbjWOSsSNA4hTWVix3g_ErxRV28sSyqTkSTdwUITAA.jpeg";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";

const Hero = () => {
  return (
    <section className="relative bg-[#FEFEFE]">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between ">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-6xl text-3xl font-extrabold lg:leading-tight font-serif text-gray-800">
              Hi There, <br />
              I'm <span className="text-black-500">JOEL</span>{" "}
              <span className="text-black-600">MATHEW</span>
            </h1>

            <p className="md:text-xl text-lg mb-6 text-gray-700 font-medium font-sans">
              Web Developer & Designer
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-600 font-light">
              I'm a passionate web developer with expertise in{" "}
              <span className="text-black-500 font-semibold">React</span>,
              <span className="text-black-500 font-semibold"> Next.js</span>,
              and modern web technologies. I love creating beautiful and
              functional websites that solve real-world problems.
            </p>

            <button className="bg-gray-600 text-white px-3 py-2 w-max rounded-xl">
              <a href="./text.txt" download="resume.txt" target="_blank">
                Download CV
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <div className="flex justify-center items-center relative">
              <img src={hero} alt="" className="lg:h-[90vh] h-96" />

              <img
                src={reactLogo}
                alt=""
                className="absolute w-12 top-36 left-0 rounded-full md:hidden"
              />
              <img
                src={reduxLogo}
                alt=""
                className="absolute w-12 top-0 right-5 md:hidden"
              />
              <img
                src={tailwind}
                alt=""
                className="absolute w-12 rounded-full right-0 bottom-36 md:hidden"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-52 right-10 hidden bg-[#FEFEFE] p-4 md:flex flex-col gap-8 rounded-full">
        <a href="https://github.com/joeltdev" target="blank">
          {" "}
          <FaGithub className="w-10 h-10 text-gray-900" />
        </a>
        <a href="https://www.instagram.com/" target="blank">
          {" "}
          <FaInstagram className="w-10 h-10 text-gray-900" />
        </a>
        <a href="https://x.com/" target="blank">
          <FaXTwitter className="w-10 h-10 text-gray-900" />
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/joel-thomas-mathew-18422b1b8/"
          target="blank"
        >
          {" "}
          <FaLinkedin className="w-10 h-10 text-gray-900" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
