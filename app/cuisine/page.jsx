"use client";

import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import PopularCuisineSlider from "./PopularCuisineSlider";
import PopularRestoSlider from "./PopularRestoSlider";
import "animate.css";  // Import animate.css

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

  const moalboalCuisines = [
    {
      name: "Grilled Tuna Belly",
      image: "https://i0.wp.com/www.angsarap.net/wp-content/uploads/2021/09/Inihaw-na-Tuna-Belly-Wide.jpg?ssl=1",
      description: "Freshly caught tuna belly grilled to perfection, a local delicacy.",
    },
    {
      name: "Smoothie Bowl",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/8f/be/40/the-bowl-spread.jpg?w=1200&h=-1&s=1",
      description: "A tropical smoothie bowl topped with granola and coconut flakes",
    },
    {
      name: "Sizzling Pork Sisig",
      image: "https://media.istockphoto.com/id/623516426/photo/sizzling-pork-sisig-filipino-cuisine.jpg?s=612x612&w=0&k=20&c=YBzuT9vYE840ernm8cQjL3ulmMWmYbrno9w-nCNowOw=",
      description: "A sizzling hot plate of pork sisig, a Filipino favorite.",
    },
    {
      name: "Puto Maya",
      image: "https://www.vozzog.com/images/resto/l_e65bd_puto_maya.jpg",
      description: "A traditional sticky rice snack served with ripe mangoes and cocoa.",
    },
    {
      name: "Moalboal BBQ",
      image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2024/07/29/filipino_pork_barbecue_H_f.jpg.rend.hgtvcom.616.462.suffix/1722282926501.webp",
      description: "Succulent grilled meats served on sticks, a popular street food.",
    },
    {
      name: "Pancit Canton",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pancit_Ilonggo_Style_-_12110747826.jpg/1100px-Pancit_Ilonggo_Style_-_12110747826.jpg",
      description: "Stir-fried noodles with vegetables, meat, and seafood.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header
        className="bg-gray-700 text-white py-24 bg-cover bg-center animate__animated animate__fadeIn"
        style={{ backgroundImage: "url('cuisine_assets/cuisine_bg.png')" }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Food & Cuisine of Moalboal</h1>
          <p className="mt-4 text-lg">Savor the rich flavors and culinary delights of Moalboal!</p>
        </div>
      </header>

      <div className="max-w-8xl mx-auto 2xl:max-w-7xl bg-white shadow-lg rounded-lg p-6">

      {/* Food Moalboal Cuisine Grid */}
      <h2 className="text-2xl md:text-3xl font-bold text-center border-gray-200 border-b-2 pb-6 mb-6 pt-12">Local Delicacies of Moalboal</h2>
      <div className="mx-6 lg:mx-24 pb-10 lg:pb-16 animate__animated animate__fadeIn">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {moalboalCuisines.map((cuisine, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform md:hover:scale-105 animate__animated animate__fadeIn"
            >
              <img
                src={cuisine.image}
                alt={cuisine.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{cuisine.name}</h3>
                <p className="text-gray-600 text-sm">{cuisine.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-center mt-10 border-gray-200 border-b-2 pb-6 animate__animated animate__fadeIn">Local Favorites</h2>
      <PopularCuisineSlider/>
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-10 border-gray-200 border-b-2 pb-6 animate__animated animate__fadeIn">Popular Local Restaurants</h2>
      <PopularRestoSlider/>
      </div>

      {/* Scroll-to-Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="z-10 fixed bottom-12 lg:bottom-16 right-3 md:right-6 p-2 md:p-3 rounded-full bg-blue-600 text-white hover:bg-blue-800 shadow-md transition"
        >
          <ChevronUpIcon className="h-4 w-4 lg:h-6 lg:w-6" />
        </button>
      )}
    </div>
  );
};

export default MoalboalPage;
