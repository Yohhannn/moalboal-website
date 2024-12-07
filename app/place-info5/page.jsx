"use client";

import React, { useState } from "react";

const TumalogFallsAttractions = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://w5x6j5c9.delivery.rocketcdn.me/wp-content/uploads/2024/08/tumalog-falls.jpg"
  );

  const images = [
    "https://w5x6j5c9.delivery.rocketcdn.me/wp-content/uploads/2024/08/tumalog-falls.jpg",
    "https://www.cebutours.ph/wp-content/uploads/2021/11/Tumalog-Falls-in-Oslob-Cebu-Cebu-Tours.jpg",
    "https://somethingoffreedom.com/wp-content/uploads/2018/09/Tumalog-falls.jpg",
    "https://farm2.staticflickr.com/1684/24326532454_6566ff6064_z.jpg",
    "https://www.highlandadventuresph.com/wp-content/uploads/2022/11/tumalog-falls3.jpg",
    "https://www.travel-palawan.com/wp-content/uploads/2020/03/olsob-cebu-tumalog-falls.jpeg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/37/16/3e/20190119-113431-largejpg.jpg?w=900&h=-1&s=1",
    "https://www.islandtrektours.com/wp-content/uploads/2022/04/tumalog-falls-oslob-2022-scaled.jpg",
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
            alt="tumalog_falls_img"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Tumalog Falls</h2>
        <p className="text-gray-600 mt-2">Location: Moalboal, Cebu, Philippines</p>
        <p className="text-gray-700 mt-4">
          Tumalog Falls is a majestic natural wonder located in Moalboal, Cebu. Its cascading waters create a serene curtain-like effect, making it a stunning spot for nature lovers and adventure seekers. Surrounded by lush vegetation, it offers a refreshing escape where visitors can swim, relax, and enjoy breathtaking views.
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

export default TumalogFallsAttractions;
