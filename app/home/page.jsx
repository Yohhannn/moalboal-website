"use client";

import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToSection = () => {
    const section = document.getElementById("why-visit-moalboal");
    section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  
  const activities = [
    {
      title: "Sardine Run",
      description: "Witness the breathtaking spectacle of millions of sardines swimming together.",
      image: "https://cebufundivers.com/wp-content/uploads/2023/06/sardines_moalboal_jaime01_1000.jpg",
    },
    {
      title: "Turtle Watching",
      description: "Snorkel alongside majestic sea turtles in Moalboal's crystal-clear waters.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEem0aLg9_96zX2RyZ9nobkN-9Js60SzEcnJktxK53bV6tKFd-PBmYbB49K_lYHt92Zw4LwqBPKAOHr2kKcyKGGoNcgns7EqDRo_FOBQ4yItEOP7Re27v2TzZqZPcK2WZW7SjvQowYSyS8/s1600/Moalboal+Sea+Turtle.jpg",
    },
    {
      title: "Pescador Island Hopping",
      description: "Explore the vibrant coral reefs and marine life around Pescador Island.",
      image: "https://www.cebutours.ph/wp-content/uploads/2021/11/Pescador-island-hopping-Moalboal.jpeg",
    },
    {
      title: "Kawasan Canyoneering",
      description: "Experience thrilling canyon jumps and natural water slides at Kawasan Falls.",
      image: "https://www.highlandadventuresph.com/wp-content/uploads/2022/11/kawasan-falls-canyoneering-24.jpg",
    },
  ];

  return (
    <>
      <div className="bg-gray-100">
        <Fade cascade triggerOnce>
          <div
            className="hero min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('home_assets/home_picbg.png')" }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-2xl">
                <Slide direction="down" duration={1000} triggerOnce>
                  <h1 className="mb-6 text-6xl md:text-8xl font-bold">Welcome to Moalboal</h1>
                </Slide>
                <Fade delay={500} triggerOnce>
                  <p className="mb-6 text-lg">
                    Experience pristine beaches, vibrant marine life, and breathtaking adventures. Discover your paradise in Moalboal!
                  </p>
                </Fade>
                <Zoom delay={800} triggerOnce>
                  <button
                    onClick={scrollToSection}
                    className="btn bg-gray-200 hover:bg-gray-800 hover:text-gray-100 px-8 py-3 text-md transition-all duration-300"
                  >
                    Learn More ↓
                  </button>
                </Zoom>
              </div>
            </div>
          </div>
        </Fade>

        <section id="why-visit-moalboal" className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <Fade cascade damping={0.2} triggerOnce>
              <h2 className="text-4xl font-bold mb-8">Why Visit Moalboal?</h2>
              <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-700">
                Moalboal is a tropical haven in Cebu, known for its pristine beaches, vibrant marine life, and thrilling adventures.
              </p>
            </Fade>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Bounce cascade damping={0.1} triggerOnce>
                <div className="card bg-white shadow-lg hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
                  <img
                    src="https://www.phbus.com/wp-content/uploads/2022/02/white-beach-moalboal-cebu.jpg"
                    alt="White Beach"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3">Pristine White Beaches</h3>
                    <p className="text-gray-700">
                      Relax on the soft white sands of White Beach or explore Panagsama Beach. Perfect for sunbathing and swimming.
                    </p>
                  </div>
                </div>

                <div className="card bg-white shadow-lg hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
                  <img
                    src="https://www.highlandadventuresph.com/wp-content/uploads/2022/11/Sardine-Run.jpg"
                    alt="Diving"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3">World-Class Diving</h3>
                    <p className="text-gray-700">
                      Explore coral reefs and swim with sea turtles. Don't miss the famous sardine run.
                    </p>
                  </div>
                </div>

                <div className="card bg-white shadow-lg hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b5/40/7c/amazing-waterfalls.jpg"
                    alt="Kawasan Falls"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3">Adventure & Nature</h3>
                    <p className="text-gray-700">
                      Go canyoneering at Kawasan Falls or hike to Osmeña Peak.
                    </p>
                  </div>
                </div>
              </Bounce>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Popular Activities</h2>
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              {activities.map((activity, index) => (
                <SwiperSlide key={index}>
                  <Zoom delay={index * 50} triggerOnce>
                    <div className="card bg-white shadow-md p-6 rounded-lg">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full aspect-square object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                      <p className="text-gray-600">{activity.description}</p>
                    </div>
                  </Zoom>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="py-16 bg-gray-700 text-white text-center">
          <div className="container mx-auto">
            <Fade cascade triggerOnce>
              <h2 className="text-3xl font-bold mb-4">Plan Your Trip</h2>
              <p className="text-lg mb-8">Get in touch with us to plan your dream vacation in Moalboal.</p>
              <a
                href="/contacts"
                className="bg-white text-black px-8 py-3 rounded-btn hover:bg-gray-800 hover:text-white transition duration-200"
              >
                Contact Us
              </a>
            </Fade>
          </div>
        </section>

              {/* Scroll-to-Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="z-10 fixed bottom-16 right-6 p-3 rounded-full bg-blue-600 text-white hover:bg-blue-800 shadow-md transition"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      )}

      </div>
    </>
  );
};

export default Home;
