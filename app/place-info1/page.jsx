"use client";

import React, { useState } from "react";

const KawasanFallsAttractions = () => {
  // State to track the currently selected image
  const [selectedImage, setSelectedImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/Kawasan_Falls%2C_Cebu%2C_Philippines1.jpg"
  );

  // Gallery images (related to Kawasan Falls)
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/Kawasan_Falls%2C_Cebu%2C_Philippines1.jpg",
    "https://gttp.images.tshiftcdn.com/321522/x/0/drone-shot-of-kawasan-falls.jpg?ar=1.91%3A1&w=1200&fit=crop",
    "https://www.kawasanfalls.net/wp-content/uploads/2011/04/pana-falls2.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b5/40/7c/amazing-waterfalls.jpg?w=600&h=400&s=1",

    "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/d6/39/1c/kawasan-falls.jpg?w=600&h=-1&s=1",
    "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/knomeu1agf73xcpyfzk8/BadianCanyoneeringAdventureandKawasanWaterfallsPrivateTour-KlookPhilippines.jpg",
    "https://myspoonful.com/wp-content/uploads/2023/12/Kawasan-Falls.jpg",
    "https://www.stokedtotravel.com/wp-content/uploads/2017/03/IMG_1286-1.jpg",
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="p-8 bg-gray-100">
      {/* First Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <a href="/places">
          <div className="btn mb-5 bg-gray-700 text-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300">
            Return ➤
          </div>
        </a>
        {/* Main Image */}
        <div className="w-auto h-[500px] mx-auto overflow-hidden rounded-lg">
          <img
            src={selectedImage}
            alt="kawasan_falls_img"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Kawasan Falls</h2>
        <p className="text-gray-600 mt-2">Location: Moalboal, Cebu, Philippines</p>
        <p className="text-gray-700 mt-4">
          Kawasan Falls is a tropical paradise nestled in the heart of Moalboal, Cebu. Known for its turquoise blue waters and lush green surroundings, this enchanting waterfall offers a serene escape for nature lovers and adventure seekers. Activities such as canyoneering, swimming, and bamboo rafting make Kawasan Falls a must-visit destination.
        </p>
      </div>

      {/* Second Section */}
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

export default KawasanFallsAttractions;
