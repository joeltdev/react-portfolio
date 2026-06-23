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
    <section id="contact" className="pt-16 pb-32 px-6 bg-gray-50 relative overflow-hidden">
      {/* Grid & Ambient Glow Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-100/25 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/10 w-[30rem] h-[30rem] bg-indigo-50/40 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '11s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Editorial Contact Info */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-blue-600 mb-6 self-start">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Available for projects</span>
              </div>
              
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 mb-6 tracking-tighter leading-[1.1]">
                Get in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800">
                  touch.
                </span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-sm font-light">
                Have a vision? Let&rsquo;s turn it into a digital reality. Reach out via the form or through my social channels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Email Me</p>
                <a href="mailto:joelmathew857@gmail.com" className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-1">
                  joelmathew857@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Socials</p>
                <div className="flex gap-4">
                  {[
                    { icon: Github, url: "https://github.com/joeltdev" },
                    { icon: Linkedin, url: "https://linkedin.com" },
                    { icon: Instagram, url: "https://instagram.com" }
                  ].map(({ icon: Icon, url }, i) => (
                    <a 
                      key={i}
                      href={url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="w-12 h-12 flex items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-500 hover:text-blue-600 hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: High-Contrast Form Card */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="bg-white/80 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative"
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
                      className="w-full px-6 py-5 bg-white border border-gray-100 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 shadow-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600 ml-1">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="jane@example.com"
                      className="w-full px-6 py-5 bg-white border border-gray-100 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 shadow-sm"
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
                    className="w-full px-6 py-5 bg-white border border-gray-100 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 resize-none shadow-sm"
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  className="group/btn relative overflow-hidden w-full py-6 bg-gray-950 text-white rounded-2xl font-bold tracking-[0.2em] uppercase text-xs transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] shadow-lg shadow-gray-200/50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? "Processing..." : "Send Message"}
                    {!isSubmitting && <Send size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-305 -z-0" />
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
