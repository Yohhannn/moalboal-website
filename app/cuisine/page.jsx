"use client";

import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import PopularCuisineSlider from "./PopularCuisineSlider";
import PopularRestoSlider from "./PopularRestoSlider";

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

  const moalboalResto = [
    {
      name: "Ven'z Kitchen",
      link: "/cuisine-resto1",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/c8/10/0f/with-rita-and-sven.jpg?w=800&h=400&s=1",
      description:
        "Known for its home-cooked Filipino meals and warm hospitality, Ven'z Kitchen is a favorite spot for locals and tourists alike.",
    },
    {
      name: "Lantaw Restaurant",
      link: "/cuisine-resto2",
      image: "https://www.phtourguide.com/wp-content/uploads/2012/11/Lantaw-Floating-Native-Restaurant.jpg",
      description:
        "Enjoy stunning ocean views paired with a variety of Filipino and seafood dishes at this scenic restaurant.",
    },
    {
      name: "The Three Bears",
      link: "/cuisine-resto3",
      image: "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL01VREgySzlyUkZtQ2tCR25PbFU2c0EiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0=",
      description:
        "A family-friendly café offering hearty breakfast options, pastries, and coffee to kickstart your Moalboal adventure.",
    },
    {
      name: "Blue Abyss Dive Resort Restaurant",
      link: "/cuisine-resto4",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/0d/9a/9d/the-blue-abyss-dive-resort.jpg?w=700&h=-1&s=1",
      description:
        "Perfect for divers, this spot serves a range of dishes with a focus on fresh, local ingredients and a relaxing vibe.",
    },
    {
        name: "The Pleasure Principle Resto-Bar",
        link: "/cuisine-resto5",
        image: "https://cebutrip.net/files/becf099243979b0fca369a059fd0a1bf.jpg",
        description:
          "A cozy spot offering a mix of international and local dishes, along with refreshing cocktails and beachside ambiance.",
      },
    {
      name: "Hungry Monkeys Restaurant",
      link: "/cuisine-resto6",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/50/49/58/your-view-upstairs.jpg?w=900&h=500&s=1",
      description:
        "A quirky bar and grill serving delicious barbecue and signature cocktails, making it a must-visit for food and fun.",
    },
    {
        name: "Kugita Seafood & Charcoal Grill",
        link: "/cuisine-resto7",
        image: "https://www.nopostcode.com/wp-content/uploads/2021/01/Kugita-Moalboal-4-1024x682.jpg",
        description:
          "A seafood lover's paradise, Kugita specializes in freshly grilled fish, prawns, and other local delicacies. ",
      },
      {
        name: "Shaka",
        link: "/cuisine-resto8",
        image: "https://images.happycow.net/venues/1024/15/17/hcmp151750_2307523.jpeg",
        description:
          " A tropical haven offering fresh, healthy bowls, smoothies, and signature dishes with a laid-back island vibe.",
      },
        {
        name: "Besty's Grill and Resto Bar",
        link: "/cuisine-resto9",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/02/16/d4/dining-area.jpg",
        description:
          "A cozy beachfront restaurant offering a mix of flavorful Filipino dishes and international favorites. ",
      },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header
        className="bg-gray-700 text-white py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('cuisine_assets/cuisine_bg.png')" }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Food & Cuisine of Moalboal</h1>
          <p className="mt-4 text-lg">Savor the rich flavors and culinary delights of Moalboal!</p>
        </div>
      </header>

      <div className="max-w-8xl mx-auto 2xl:max-w-7xl bg-white shadow-lg rounded-lg p-6">

      {/* Food Moalboal Cuisine Grid */}
      <div className="mx-6 lg:mx-24 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Local Delicacies of Moalboal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {moalboalCuisines.map((cuisine, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
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
      <h2 className="text-3xl font-bold text-center mb-8 mt-10">Local Favorites</h2>
      <PopularCuisineSlider/>
      <h2 className="text-3xl font-bold text-center mb-8 mt-20">Popular Local Restaurants</h2>
      <PopularRestoSlider/>
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
