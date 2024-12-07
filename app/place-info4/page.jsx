"use client";

import React, { useState } from "react";

const TongoPointAttractions = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/75/87/3f/coral-garden-of-tongo.jpg"
  );

  const images = [
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/75/87/3f/coral-garden-of-tongo.jpg",
    "https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/f9/27/f927c5422ba4a22489ba31a8e9441eef.webp",
    "https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/07/d2/07d27b8c7564db7868000fdc23d1e1dc.webp",
    "https://d2p1cf6997m1ir.cloudfront.net/media/photos/7f/a2/10/5f4d/2270084.jpg",
    "https://d2p1cf6997m1ir.cloudfront.net/media/photos/8d/27/8e/1d72/c83opt-4c-86-4c86adf4d50035bdc8ae0379af90d81f.jpg",
    "https://www.action-philippines.com/wp-content/uploads/2017/10/tongo_corals_800x600.jpg",
    "https://cebufundivers.com/wp-content/uploads/2023/06/diving_moalboal_cebufundivers_0022.jpg",
    "https://www.action-philippines.com/wp-content/uploads/2017/10/coral2000x1500.jpg",
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <a href="/places">
          <div className="btn mb-5 bg-gray-700 text-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300">
            Return ➤
          </div>
        </a>
        <div className="w-auto h-[500px] mx-auto overflow-hidden rounded-lg">
          <img
            src={selectedImage}
            alt="tongo_point_img"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Tongo Point</h2>
        <p className="text-gray-600 mt-2">Location: Moalboal, Cebu, Philippines</p>
        <p className="text-gray-700 mt-4">
          Tongo Point is a popular diving and snorkeling destination in Moalboal, Cebu. Known for its stunning coral reefs, vibrant marine life, and crystal-clear waters, it offers an unforgettable experience for underwater enthusiasts. Visitors can explore the diverse ecosystem, swim with sea turtles, and enjoy peaceful, serene surroundings.
        </p>
      </div>

      <div className="mt-8 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-gray-800 mb-4">View More Images</h3>
        <div className="flex overflow-x-auto space-x-4">
          {images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`Gallery Image ${idx + 1}`}
              className={`flex-shrink-0 w-[150px] h-[100px] object-cover rounded-lg shadow-lg cursor-pointer ${
                selectedImage === image
                  ? "ring-4 ring-blue-500"
                  : "ring-2 ring-gray-300"
              }`}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TongoPointAttractions;
