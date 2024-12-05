"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Attractions = () => {
  const [rowsToShow, setRowsToShow] = useState(1);
  const [viewingMoreIndexes, setViewingMoreIndexes] = useState([]); // Track which attractions are being viewed
  const [hoveredIndexes, setHoveredIndexes] = useState([]); // Track hover state for individual attractions
  const [expandedIndex, setExpandedIndex] = useState(null); // Track expanded container

  const attractions = [
    {
      title: "Pescador Island",
      description:
        "Pescador Island is known for its vibrant coral reefs and rich marine biodiversity, making it a favorite spot for snorkeling and diving.",
      images: [
        "/attractions_assets/pescador/pescadorATT1.jpg",
        "/attractions_assets/pescador/pescadorATT2.jpg",
        "/attractions_assets/pescador/pescadorATT3.jpg",
      ],
    },
    {
      title: "Panagsama Beach",
      description:
        "Panagsama Beach offers stunning views, crystal-clear waters, and is a gateway to exploring nearby dive spots and marine sanctuaries.",
      images: [
        "/attractions_assets/panagsama/panagsamaATT1.jpg",
        "/attractions_assets/panagsama/panagsamaATT2.jpg",
        "/attractions_assets/panagsama/panagsamaATT3.jpg",
      ],
    },
    {
      title: "Tison Canyon",
      description:
        "Tison Canyon is a breathtaking destination with towering cliffs, lush greenery, and serene hiking trails for nature enthusiasts.",
      images: [
        "/attractions_assets/tison/tisonATT1.jpg",
        "/attractions_assets/tison/tisonATT2.jpg",
        "/attractions_assets/tison/tisonATT3.jpg",
      ],
    },
    {
      title: "Mushroom Rocks",
      description:
        "The Mushroom Rocks are a geological wonder shaped by natural erosion, offering a unique sight for travelers.",
      images: [
        "/attractions_assets/mushroom/mushroomATT1.jpg",
        "/attractions_assets/mushroom/mushroomATT2.jpg",
        "/attractions_assets/mushroom/mushroomATT3.jpg",
      ],
    },
    {
      title: "Basdaku White Beach",
      description:
        "Basdaku White Beach is a perfect getaway with its long stretch of white sand and calm turquoise waters.",
      images: [
        "/attractions_assets/basdaku/basdakuATT1.jpg",
        "/attractions_assets/basdaku/basdakuATT2.jpg",
        "/attractions_assets/basdaku/basdakuATT3.jpg",
      ],
    },
  ];

  // Split attractions into rows of 3
  const rows = [];
  for (let i = 0; i < rowsToShow * 3 && i < attractions.length; i += 3) {
    rows.push(attractions.slice(i, i + 3));
  }

  // Handle hover state for individual carousel items
  const handleMouseEnter = (rowIndex, index) => {
    setHoveredIndexes((prev) => {
      const newHovered = [...prev];
      newHovered[rowIndex] = index; // Set hovered index for specific row
      return newHovered;
    });
  };

  const handleMouseLeave = (rowIndex) => {
    setHoveredIndexes((prev) => {
      const newHovered = [...prev];
      newHovered[rowIndex] = null; // Reset hovered state for specific row
      return newHovered;
    });
  };

  // Handle "View More" button toggle
  const toggleViewMore = (rowIndex, index) => {
    setViewingMoreIndexes((prev) => {
      const newIndexes = [...prev];
      if (newIndexes[rowIndex] === index) {
        newIndexes[rowIndex] = null; // Hide description if the same "View More" is clicked
      } else {
        newIndexes[rowIndex] = index; // Show description for the clicked item
      }
      return newIndexes;
    });

    setExpandedIndex(expandedIndex === index ? null : index); // Toggle expansion
  };

  // Reset hover and "viewing more" state when rowsToShow changes
  useEffect(() => {
    setHoveredIndexes([]); // Reset hover state when rowsToShow changes
    setViewingMoreIndexes([]); // Reset "view more" state when rowsToShow changes
  }, [rowsToShow]);

  return (
    <div
      className="bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/attractions_assets/underwater4.jpg')" }}
    >
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-5xl font-bold text-white">ATTRACTIONS</h1>
      </div>

      {/* Main Carousel */}
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <div
          className="rounded-3xl overflow-hidden"
          style={{ width: "58vw", height: "auto" }}
        >
          <Swiper slidesPerView={1} loop autoplay={{ delay: 3000 }}>
            {attractions.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-64 sm:h-96">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-4xl font-bold text-white">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Rows of Attractions */}
      <div className="container mx-auto px-5 py-4">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex justify-center gap-6 mb-6 ${rowIndex > 0 ? "mt-6" : ""}`}
          >
            {row.map((attraction, index) => (
              <div
                key={index}
                className={`relative rounded-lg shadow-xl w-64 flex flex-col transform transition-transform duration-500 ${hoveredIndexes[rowIndex] === index ? "scale-105" : "scale-100"} ${expandedIndex === index ? "expanded" : ""}`}
                style={{ backgroundColor: "#0c2436" }}
                onMouseEnter={() => handleMouseEnter(rowIndex, index)}
                onMouseLeave={() => handleMouseLeave(rowIndex)}
              >
                <div className="w-full h-48 overflow-hidden rounded-lg p-3">
                  {viewingMoreIndexes[rowIndex] === index ? (
                    <div className="text-white text-center flex items-center justify-center h-full">
                      <p>{attraction.description}</p>
                    </div>
                  ) : (
                    <Swiper
                      key={`sub-swiper-${index}`} // Ensure unique key for each swiper
                      slidesPerView={1}
                      loop
                      autoplay={{ delay: 3000 }}
                      className="w-full h-full"
                    >
                      {attraction.images.map((image, i) => (
                        <SwiperSlide key={i}>
                          <div className="w-full h-full">
                            <Image
                              src={image}
                              alt={attraction.title}
                              width={256}
                              height={192}
                              className="object-cover w-full h-full rounded-lg"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </div>
                <div
                  className="flex justify-between items-center p-3 text-white rounded-b-lg"
                  style={{ backgroundColor: "#0c2436" }}
                >
                  <h3 className="text-sm font-bold">{attraction.title}</h3>
                  <button
                    className="btn glass text-white"
                    onClick={() => toggleViewMore(rowIndex, index)}
                  >
                    {viewingMoreIndexes[rowIndex] === index ? "Hide" : "View more"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Show More / Show Less Button */}
        <div className="text-center mt-8">
          <button
            className="btn btn-outline btn-accent"
            onClick={() =>
              setRowsToShow((prevRows) =>
                prevRows * 3 >= attractions.length ? 1 : prevRows + 1
              )
            }
          >
            {rowsToShow * 3 >= attractions.length ? "SHOW LESS" : "SEE MORE ATTRACTIONS"}
          </button>
        </div>
      </div>


      
    </div>
  );
};

export default Attractions;
