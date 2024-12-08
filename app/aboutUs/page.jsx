'use client'
import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import "animate.css";  // Import animate.css

const AboutMoalboal = () => {

  const [isVisible, setIsVisible] = useState(false);

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

  const facts = [
    {
      title: 'Origin of the Name',
      description:
        'The name "Moalboal" is believed to have come from the Cebuano words "bocal-bocal," referring to the bubbling springs found in the area. Over time, it evolved into "Moalboal."',
    },
    {
      title: 'Rich History',
      description:
        'Moalboal was established as a municipality in the late 19th century. It has grown into a vibrant community while preserving its cultural heritage.',
    },
    {
      title: 'Marine Biodiversity',
      description:
        'The town is renowned for its marine ecosystem, including the world-famous Sardine Run and the diverse coral reefs of Pescador Island.',
    },
  ];

  return (
    <div className="bg-gray-100 font-montserrat">
      {/* Hero Section */}
      <div
        className="bg-gradient-to-t from-blue-600 to-gray-800 text-white py-24 text-center bg-cover bg-center animate__animated animate__fadeIn"
        style={{ backgroundImage: "url('about_assets/municipal.png')" }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">About Moalboal</h1>
          <p className="text-lg max-w-3xl mx-auto animate__animated animate__fadeIn">
            Experience the natural beauty and rich culture of Moalboal!
          </p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto 2xl:max-w-7xl bg-white shadow-lg rounded-lg p-6">
        <section className="py-16 bg-white animate__animated animate__fadeIn">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">The Municipality of Moalboal</h2>
            <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-700">
              Nestled on the southwestern coast of Cebu, Moalboal is a haven for travelers seeking stunning landscapes and vibrant underwater life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card bg-white shadow-lg hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden animate__animated animate__fadeIn">
                <img
                  src="https://jonathanlee.org/media/Moalboal-statue.jpg"
                  alt="Origin"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Origin of the Name</h3>
                  <p className="text-gray-700">
                    The name "Moalboal" is believed to have come from the Cebuano words "bocal-bocal," referring to the bubbling springs found in the area.
                  </p>
                </div>
              </div>
              <div className="card bg-white shadow-lg hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden animate__animated animate__fadeIn">
                <img
                  src="https://wheretostayin.city/wp-content/uploads/2024/07/Moalboal1.jpg"
                  alt="heritage"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Rich History</h3>
                  <p className="text-gray-700">
                    Moalboal was established as a municipality in the late 19th century. It has grown into a vibrant community while preserving its cultural heritage.
                  </p>
                </div>
              </div>
              <div className="card bg-white shadow-lg hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden animate__animated animate__fadeIn">
                <img
                  src="https://media.istockphoto.com/id/539675480/photo/tropical-fish-and-turtle.jpg?s=612x612&w=0&k=20&c=Zzayvg3Gv9xGuenrKjxMkJ9XIKXcJLlvAgn_LPdFijc="
                  alt="biodiversity"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Marine Biodiversity</h3>
                  <p className="text-gray-700">
                    The town is renowned for its marine ecosystem, including the world-famous Sardine Run and the diverse coral reefs of Pescador Island.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="bg-gray-100 py-10 px-6 animate__animated animate__fadeIn animate__delay-1s">
          <div className="container mx-auto flex flex-col md:flex-row items-center bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            {/* Left: Image */}
            <div className="md:w-1/2">
              <img
                src="about_assets/municipal_moalboal.svg"
                alt="Moalboal Municipality Hall"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Right: Text and Logo */}
            <div className="md:w-1/2 p-6 md:p-10">
              <div className="flex items-center mb-4">
                <img
                  src="about_assets/logo_local_moalboal.png"
                  alt="Logo"
                  className="w-16 h-16 object-contain mr-4"
                />
                <h2 className="text-2xl md:text-4xl font-bold text-white">
                  Moalboal Municipality
                </h2>
              </div>
              <p className="text-white text-sm md:text-base leading-relaxed">
                The Moalboal Municipality Hall - LGU is a cornerstone of governance, dedicated to fostering growth, sustainability, and community development.
              </p>
            </div>
          </div>
        </section>

        {/* Cultural Heritage Section */}
        <section className="py-16 bg-gray-50 animate__animated animate__fadeIn">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Cultural Heritage</h2>
            <p className="text-gray-600 text-center text-base md:text-lg max-w-3xl mx-auto mb-10">
              Moalboal takes pride in its cultural heritage. From vibrant festivals like the Kagasangan Festival to traditional Cebuano practices, the town's culture is alive and thriving.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 animate__animated">
                <figure>
                  <img
                    src="about_assets/about_dance.png"
                    alt="Kagasangan Festival"
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="p-6">
                  <h3 className="text-lg font-bold">Kagasangan Festival</h3>
                  <p className="text-gray-600 mt-2">
                    Celebrated annually, this festival showcases Moalboal's rich history and the resilience of its people through dance, music, and cultural exhibits.
                  </p>
                </div>
              </div>

              <div className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 animate__animated animate__fadeIn">
                <figure>
                  <img
                    src="about_assets/community.png"
                    alt="Cebuano Traditions"
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="p-6">
                  <h3 className="text-lg font-bold">Cebuano Traditions</h3>
                  <p className="text-gray-600 mt-2">
                    The town is deeply rooted in Cebuano traditions, with a strong sense of community that emphasizes family, faith, and hospitality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-white animate__animated animate__fadeIn animate__delay-1s">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Location of Moalboal</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-6">
              Moalboal is located on the southwestern coast of Cebu Island in the Philippines. It is approximately 89 kilometers (55 miles) from Cebu City, accessible via a scenic drive.
            </p>
            <div className="shadow-lg rounded-lg overflow-hidden">
              <iframe
                title="Moalboal Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125758.15119702813!2d123.3389840597165!3d9.938765326425424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3f0!3m2!1i1024!2i768!4f13.1"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
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
    </div>
  );
};

export default AboutMoalboal;
