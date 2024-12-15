import React, { useState } from "react";
// import facebook from "../assets/facebook.png";
// import instagram from "../assets/instagram.png";
// import linkedin from "../assets/linkedin.png";
import Lottie from "lottie-react";
import contact from "../assets/Contact.json";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setName("");
      setEmail("");
      setMessage("");
      Swal.fire({
        title: "Sucess!",
        text: "Message sent succesfully",
        icon: "success",
      });
    }
  };

  return (
    <section
      id="contact"
      className="z-50 bg-gray-900 relative py-10 px-5 md:px-0"
    >
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2
              className="text-3xl font-thin font-sans
             mb-3 text-blue-400"
            >
              Get in Touch
            </h2>
            <p className="mb-4 text-white/85 font-light text-2xl">
              I'm always open to new opportunities and collaboration. <br />
              Feel free to reach out!
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={facebook} alt="" className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={instagram} alt="" className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={linkedin} alt="" className="h-6 w-6" />
              </a>
            </div> */}
            <Lottie
              animationData={contact}
              className="w-[350px] mx-auto lg:w-[500px]"
            />
          </div>
          <form
            onSubmit={onSubmit}
            className="w-full md:w-1/2 bg-gray-300 rounded-lg border border-blue-300 shadow-lg shadow-blue-300 p-10"
          >
            <h1 className="text-gray-900 text-4xl  mb-7 font-normal font-sans">
              Contact Me
            </h1>
            <div className="mb-4 ">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Full Name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                id="message"
                name="message"
                value={message}
                placeholder="Enter Your Message"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button className="bg-gray-800 text-white px-3 py-2 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
