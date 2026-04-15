import React, { useState } from "react";
import { Send, Github, Linkedin, Instagram, MessageSquare } from "lucide-react";
import Swal from "sweetalert2";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        event.target.reset();
        Swal.fire({
          title: "Message Sent!",
          text: "I'll get back to you as soon as possible.",
          icon: "success",
          confirmButtonColor: "#000000",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Editorial Contact Info */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-12">
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-4">
                Available for projects
              </h2>
              <h3 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tighter">
                Get in <br /> touch<span className="text-gray-300">.</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-sm">
                Have a vision? Let&rsquo;s turn it into a digital reality. Reach out via the form or through my social channels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Email Me</p>
                <a href="mailto:joelmathew@example.com" className="text-lg font-bold text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-1">
                  joelmathew@example.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Socials</p>
                <div className="flex gap-4">
                  <a href="https://github.com/joeltdev" target="_blank" rel="noreferrer" className="text-gray-900 hover:text-gray-400 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-900 hover:text-gray-400 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-900 hover:text-gray-400 transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-between group cursor-default">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <MessageSquare size={18} className="text-gray-900" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Response Time</p>
                  <p className="text-sm font-bold text-gray-900 uppercase tracking-tighter">Within 24 Hours</p>
                </div>
              </div>
              <div className="px-3 py-1 bg-blue-100 text-blue-600 text-[10px] font-bold rounded-full uppercase tracking-widest">
                Fast Reply
              </div>
            </div>
          </div>

          {/* Right Side: High-Contrast Form Card */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.08)] relative"
            >
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600 ml-1">Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Jane Doe"
                      className="w-full px-6 py-5 bg-gray-50 border border-transparent rounded-2xl text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-gray-200 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600 ml-1">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="jane@example.com"
                      className="w-full px-6 py-5 bg-gray-50 border border-transparent rounded-2xl text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-gray-200 focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600 ml-1">Message</label>
                  <textarea
                    required
                    name="message"
                    rows="4"
                    placeholder="Tell me about your project or just say hi..."
                    className="w-full px-6 py-5 bg-gray-50 border border-transparent rounded-2xl text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-gray-200 focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full py-6 bg-gray-900 text-white rounded-2xl font-bold tracking-[0.2em] uppercase text-xs hover:bg-black transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] shadow-lg shadow-gray-200"
                >
                  {isSubmitting ? "Processing..." : (
                    <>
                      Send Message
                      <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
