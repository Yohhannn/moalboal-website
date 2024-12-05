"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const AttractionInfo = () => {
  const images = [
    "/attractions_assets/pescador/pescadorATT1.jpg",
    "/attractions_assets/pescador/pescadorATT2.jpg",
    "/attractions_assets/pescador/pescadorATT3.jpg",
    "/attractions_assets/pescador/pescadorATT4.jpg",
    "/attractions_assets/pescador/pescadorATT5.jpg",
    "/attractions_assets/pescador/pescadorATT6.jpg",
    "/attractions_assets/pescador/pescadorATT7.jpg",
  ];

  const reviews = [
    { name: "John Doe", text: "The place is amazing! Definitely worth a visit.", date: "Nov 30, 2024", rating: 4.5 },
    { name: "Jane Smith", text: "Loved the vibe, but it was a bit crowded.", date: "Dec 1, 2024", rating: 4 },
    { name: "Alice Brown", text: "A serene experience with beautiful views!", date: "Dec 2, 2024", rating: 5 },
    { name: "Mark Wilson", text: "Fantastic place to relax, will definitely come back.", date: "Dec 3, 2024", rating: 4.8 },
    { name: "Sophia Green", text: "Stunning views, but the service could be better.", date: "Dec 4, 2024", rating: 3.5 },
    { name: "Michael King", text: "An unforgettable experience. Highly recommended.", date: "Dec 5, 2024", rating: 5 },
    { name: "Emma White", text: "Nice place but too expensive for what it offers.", date: "Dec 6, 2024", rating: 3.8 },
    { name: "Oliver Scott", text: "Perfect for a weekend getaway. Beautiful and peaceful.", date: "Dec 7, 2024", rating: 4.2 },
    { name: "Lily Adams", text: "A hidden gem! The best place to relax and unwind.", date: "Dec 8, 2024", rating: 4.9 },
    { name: "Lucas Mitchell", text: "Great place, but it gets too crowded on weekends.", date: "Dec 9, 2024", rating: 4.1 },
    { name: "Amelia Lewis", text: "The landscape is breathtaking. A must-see!", date: "Dec 10, 2024", rating: 5 },
    { name: "James Martinez", text: "Very peaceful. The perfect escape from the city.", date: "Dec 11, 2024", rating: 4.7 },
    { name: "Chloe Harris", text: "The staff was super friendly and the location was great!", date: "Dec 12, 2024", rating: 4.6 },
    { name: "William Carter", text: "Beautiful, but some parts need maintenance.", date: "Dec 13, 2024", rating: 3.9 },
    { name: "Isabella Lee", text: "Absolutely loved it! Worth every penny.", date: "Dec 14, 2024", rating: 5 },
    { name: "Benjamin Allen", text: "A little overrated for the price, but the scenery is gorgeous.", date: "Dec 15, 2024", rating: 3.7 },
  ];

  const [rowsToShow, setRowsToShow] = useState(1);
  const [viewingMoreIndexes, setViewingMoreIndexes] = useState([]);
  const [hoveredIndexes, setHoveredIndexes] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

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
      link: "/places/attractions/pescador",
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
      link: "/places/attractions/panagsama",
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
      link: "/places/attractions/tison",
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
      link: "/places/attractions/mushroom",
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
      link: "/places/attractions/basdaku",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (direction) => {
    if (direction === "next") {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const totalStars = 5;
  
    let stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="text-yellow-500 text-4xl">
          &#9733; {/* Full star */}
        </span>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-500 text-4xl relative">
          <span className="absolute inset-0 overflow-hidden w-1/2">
            &#9733; {/* Half-filled star */}
          </span>
          <span className="text-gray-300">&#9733;</span> {/* Empty star as background */}
        </span>
      );
    }
    for (let i = filledStars + (hasHalfStar ? 1 : 0); i < totalStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300 text-4xl">
          &#9733; {/* Empty star */}
        </span>
      );
    }
    return stars;
  };
    const rows = [];
  for (let i = 0; i < rowsToShow * 3 && i < attractions.length; i += 3) {
    rows.push(attractions.slice(i, i + 3));
  }

  const handleMouseEnter = (rowIndex, index) => {
    setHoveredIndexes((prev) => {
      const newHovered = [...prev];
      newHovered[rowIndex] = index;
      return newHovered;
    });
  };

  const handleMouseLeave = (rowIndex) => {
    setHoveredIndexes((prev) => {
      const newHovered = [...prev];
      newHovered[rowIndex] = null;
      return newHovered;
    });
  };

  const toggleViewMore = (rowIndex, index) => {
    setViewingMoreIndexes((prev) => {
      const newIndexes = [...prev];
      if (newIndexes[rowIndex] === index) {
        newIndexes[rowIndex] = null;
      } else {
        newIndexes[rowIndex] = index;
      }
      return newIndexes;
    });

    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    setHoveredIndexes([]);
    setViewingMoreIndexes([]);
  }, [rowsToShow]);


  return (
    <div
      className="min-h-screen p-6 flex justify-center items-start"
      style={{
        backgroundImage: "url('/attractions_assets/underwater4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto mt-4 " style={{ width: "60vw", minHeight: "70vh" }}>
        
        {/* Title Section */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">MOALBOAL | PESCADOR ISLAND</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          {/* Gallery Section */}
          <div
              className="p-4 shadow-lg rounded-lg h-full flex flex-col"
              style={{ backgroundColor: "#0c2436" }}
            >
            <h2 className="text-xl font-bold text-white mb-4">Gallery</h2>
            <div className="relative w-full h-full flex-grow">
              {/* Main Image */}
              <img
                src={images[currentImageIndex]}
                alt={`Attraction ${currentImageIndex + 1}`}
                className="rounded-lg object-cover w-full h-full mb-4"
                style={{
                  height: "500px", // Fixed height for the main image
                  width: "100%",   // Full width of the container
                }}
              />

              {/* Thumbnails for Preview */}
              <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`rounded-lg cursor-pointer w-20 h-20 object-cover ${index === currentImageIndex ? 'border-4 border-blue-500' : ''}`}
                    onClick={() => handleThumbnailClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col justify-start items-start h-full">
            <h2 className="text-xl font-bold mb-4">Reviews</h2>

            {/* Rating Indicator */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">{renderStars(4.5)}</div>
              <span className="text-gray-800 font-semibold">4.5/5</span>
            </div>

            {/* Reviews List */}
            <div className="space-y-4 w-full max-h-[30rem] overflow-y-auto pr-2 mb-6">
              {reviews.map((review, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <p className="text-gray-800 font-bold">{review.name}</p>
                  <p className="text-gray-800">"{review.text}"</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              ))}
            </div>

            {/* Add Photo & Add Review Buttons */}
            <div className="flex justify-center space-x-4 mt-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Photo</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Add Review</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 py-4">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex justify-center gap-6 mb-6 ${
              rowIndex > 0 ? "mt-6" : ""
            }`}
          >
            {row.map((attraction, index) => (
              <div
                key={index}
                className={`relative rounded-lg shadow-xl w-64 flex flex-col transform transition-transform duration-500 ${
                  hoveredIndexes[rowIndex] === index ? "scale-105" : "scale-100"
                } ${expandedIndex === index ? "expanded" : ""}`}
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
                      key={`sub-swiper-${index}`}
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
                  className="flex items-center justify-between p-3 text-white space-x-2"
                  style={{ backgroundColor: "#0c2436" }}
                >
                  <h3 className="text-sm font-bold">{attraction.title}</h3>
                  <button
                    className="btn glass text-white"
                    onClick={() => toggleViewMore(rowIndex, index)}
                  >
                    {viewingMoreIndexes[rowIndex] === index
                      ? "Hide"
                      : "View more"}
                  </button>
                </div>
                <div className="flex justify-center p-3">
                  <a
                    href={attraction.link}
                    className="btn btn-accent text-white w-full mt-4"
                  >
                    More details about {attraction.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}

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

export default AttractionInfo;
