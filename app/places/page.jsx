"use client";

import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import PopularAttractionsSlider from "./PopularAttractionsSlider";

const MoalboalPage = () => {
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

  const moalboalAttractions = [
    {
      name: "Kawasan Falls",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Kawasan_Falls%2C_Cebu%2C_Philippines1.jpg",
      description: "A stunning multi-tiered waterfall, perfect for canyoneering and swimming.",
      link: '/place-info1'
    },
    {
      name: "Basdaku White Beach",
      image: "https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/326359829_1106655963361676_1593013567255363893_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHI228Ztjo8hUCEKpjBSw5eXp8Ug2il1HdenxSDaKXUd71kMxDSmDckNFtwr1lhXwKxZst5FjNFP4uj19AS8kwp&_nc_ohc=KnH03L59LWQQ7kNvgGsyq5H&_nc_zt=23&_nc_ht=scontent.fmnl9-4.fna&_nc_gid=AD6Y6tqB0dKo-_TJYOslgYZ&oh=00_AYA0RomfG97Gf0C0yddA0ySDXUIabXvYtOhiZ8ZT7Gx9LA&oe=6759F036",
      description: "A pristine beach offering crystal-clear waters, ideal for sunbathing and swimming.",
      link: '/place-info2'
    },
    {
      name: "Pescador Island",
      image: "https://gttp.images.tshiftcdn.com/198522/x/0/pescador-island.jpg",
      description: "A popular diving spot, home to diverse marine life and clear blue waters.",
      link: '/place-info3'
    },
    {
      name: "Tongo Point",
      image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/75/87/3f/coral-garden-of-tongo.jpg",
      description: "A great snorkeling spot with vibrant coral reefs and rich marine biodiversity.",
      link: '/place-info4'
    },
    {
      name: "Tumalog Falls",
      image: "https://w5x6j5c9.delivery.rocketcdn.me/wp-content/uploads/2024/08/tumalog-falls.jpg",
      description: "A breathtaking natural wonder featuring cascading waterfalls and a serene pool, surrounded by lush greenery.",
      link: '/place-info5'
    },
    {
      name: "Osmeña Peak",
      image: "https://digitaltravelcouple.com/wp-content/uploads/2022/02/Osmena-peak-drone-1024x576.jpg",
      description: "The highest point in Cebu, offering breathtaking panoramic views of the island.",
      link: '/place-info6'
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header
        className="bg-gray-700 text-white py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('place_assets/place_bg.png')" }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Attractions of Moalboal</h1>
          <p className="mt-4 text-lg">Discover the must-see sights and natural wonders of Moalboal!</p>
        </div>
      </header>

      <div className="max-w-8xl mx-auto 2xl:max-w-7xl bg-white shadow-lg rounded-lg p-6">

      {/* Moalboal Attractions Grid */}
      <div className="mx-6 lg:mx-24 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Top Attractions in Moalboal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {moalboalAttractions.map((attraction, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
                <p className="text-gray-600 text-sm">{attraction.description}</p>
                <a
                    href={attraction.link}
                    className="bg-gray-700 text-white px-4 py-4 rounded-lg w-full hover:bg-gray-100 hover:text-black transition duration-200 mt-4 inline-block text-center"
                  >
                    View More.
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <h2 className="text-3xl font-bold text-center mb-8 mt-10">Popular Attractions</h2>
      <PopularAttractionsSlider/> */}


      </div>

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
  );
};

export default MoalboalPage;
