import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Product Manager, TechFlow",
      rating: 5,
      text: "Joel's expertise in React and Payload CMS helped us launch our platform ahead of schedule. His attention to performance and clean code is outstanding.",
    },
    {
      id: 2,
      name: "David Chen",
      role: "Founder, MedBay",
      rating: 5,
      text: "We hired Joel to build our e-commerce portal, and the results exceeded expectations. The integration was seamless, and the site speed is incredible.",
    },
    {
      id: 3,
      name: "Alisha Patel",
      role: "CTO, DevNest",
      rating: 5,
      text: "Working with Joel was a breeze. He took our design specs and transformed them into a fully optimized, responsive web application with zero friction.",
    },
    {
      id: 4,
      name: "Marcus Thompson",
      role: "Director of Engineering, LogiSolve",
      rating: 5,
      text: "Joel's understanding of API design and backend services in Go made our platform highly scalable. He is a phenomenal communicator and collaborator.",
    },
    {
      id: 5,
      name: "Emily Vance",
      role: "Marketing Director, Jose Health",
      rating: 5,
      text: "Our practice saw a significant increase in online bookings after Joel's redesign. The mobile optimization is absolutely flawless.",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-0 pointer-events-none select-none overflow-hidden">
        <span className="text-[20rem] font-black text-gray-200/35 leading-none tracking-tighter">
          REVIEWS
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-4">
              Client Feedback
            </h2>
            <p className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              What People Say
            </p>
          </div>
          <p className="text-gray-500 text-lg max-w-sm font-medium">
            Read experiences from founders, product managers, and engineers who have worked with me.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-1">
          <Swiper
            style={{
              "--swiper-pagination-color": "#111827",
              "--swiper-pagination-bullet-inactive-color": "#d1d5db",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            modules={[Pagination, Autoplay]}
            loop={true}
            speed={600}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
            }}
            className="mySwiper !pb-14"
          >
            {testimonials.map((item) => {
              return (
                <SwiperSlide key={item.id} className="h-auto">
                  <div className="flex flex-col h-full bg-white rounded-xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-all duration-300 relative justify-between">
                    <div>
                      {/* Star Ratings */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < item.rating
                                ? "text-amber-400 fill-amber-400"
                                : "text-gray-200"
                            }
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-600 text-base leading-relaxed mb-6 font-light">
                        "{item.text}"
                      </p>
                    </div>

                    {/* Client Info */}
                    <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-50">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-base">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1 uppercase font-bold tracking-wider">
                          {item.role}
                        </p>
                      </div>
                      <Quote size={28} className="text-gray-100 fill-gray-50" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="swiper-pagination !bottom-0 mt-8 flex justify-center gap-1 w-full"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
