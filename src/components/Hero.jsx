import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import hero from "../assets/hero.png";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";

const Hero = () => {
  return (
    <section className="relative ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between ">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm JOEL <span className="text-blue-400">MATHEW</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Web Developer & Designer</p>
            <p className="mb-4">
              I'm a passionate web developer with expertise in React, Next.js,
              and modern web technologies. I love creating beautiful and
              functional websites that solve real-world problems.
            </p>
            <button className="bg-gray-700 text-white px-3 py-2 w-max rounded-md">
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
      <div className="absolute top-52 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-8 rounded-full">
        <FaFacebook className="w-10 h-10 text-blue-600" />
        <FaInstagram className="w-10 h-10 text-red-500" />
        <FaXTwitter className="w-10 h-10 text-black" />
        {/* <FaTwitter className="w-10 h-10 text-blue-700" /> */}
        <FaLinkedin className="w-10 h-10 text-blue-500" />
      </div>
    </section>
  );
};

export default Hero;
