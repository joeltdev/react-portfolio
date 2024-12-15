import React from "react";
import MernStack from "../assets/mernstack.png";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind Css.png";
import Bootstrap from "../assets/Bootstrap.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/mongodb.svg";
import Express from "../assets/Express.png";
import NextJs from "../assets/NextJs.png";

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-gray-700 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-normal font-sans tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Joel Mathew
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto font-normal font-sans">
              A Full-Stack Developer with expertise in web development
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-normal font-sans text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600 font-light">
                  I began my web development journey with a passion for building
                  intuitive and scalable applications. Proficient in the MERN
                  stack (MongoDB, Express.js, React, Node.js) and Golang, I have
                  developed projects including a full-stack food ordering
                  website, a job portal, and a LinkedIn clone. These projects
                  showcase my ability to combine robust backend solutions with
                  sleek, user-friendly frontend designs.
                </p>
                <img src="" alt="" className="p-2 rounded-lg w-52 mt-4" />
              </div>
              <div className="border border-blue-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-blue-300">
                <h3 className="text-2xl font-normal font-sans text-blue-600">
                  Skills & Expertise
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-blue-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-400">
                    <img src={Html} alt="" className="w-10" />
                    <span className="font-normal font-sans">HTML</span>
                  </div>
                  <div className="border border-blue-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-400">
                    <img src={Css} alt="" className="w-8" />
                    <span className="font-normal font-sans">CSS</span>
                  </div>
                  <div className="border border-blue-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-400">
                    <img src={Javascript} alt="" className="w-10" />
                    <span className="font-normal font-sans">Javascript</span>
                  </div>
                  <div className="border border-blue-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-400">
                    <img src={ReactLogo} alt="" className="w-8 rounded-full" />
                    <span className="font-normal font-sans">React</span>
                  </div>
                  <div className="border border-blue-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-400">
                    <img src={Tailwind} alt="" className="w-8 rounded-full" />
                    <span className="font-normal font-sans">Tailwind Css</span>
                  </div>
                  <div className="border border-blue-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-400">
                    <img src={Bootstrap} alt="" className="w-10" />
                    <span className="font-normal font-sans">Bootstrap</span>
                  </div>
                  <div className="border border-blue-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-400">
                    <img src={NodeLogo} alt="" className="w-10" />
                    <span className="font-normal font-sans">Node Js</span>
                  </div>
                  <div className="border border-blue-400 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-blue-400">
                    <img src={Mongodb} alt="" className="w-10" />
                    <span className="font-normal font-sans">Mongodb</span>
                  </div>
                  <div className="border border-blue-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-400">
                    <img src={Express} alt="" className="w-10" />
                    <span className="font-normal font-sans">Express Js</span>
                  </div>
                  <div className="border border-blue-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-400">
                    <img src={NextJs} alt="" className="w-9" />
                    <span className="font-normal font-sans">Next Js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-normal font-sans text-gray-900">
              More About Me
            </h3>
            <p className="mt-6 text-lg text-gray-600 font-light">
              In addition to coding, I’m deeply passionate about learning new
              technologies and staying up-to-date with the latest trends in web
              development. I also run a YouTube channel where I share my
              knowledge on topics like JavaScript, MERN Stack development,
              WordPress, and digital marketing. Through my channel, I help
              others explore and dive deep into the world of programming and
              technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
