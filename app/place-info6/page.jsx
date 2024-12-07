"use client";

import React, { useState } from "react";

const OsmenaPeakAttractions = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://digitaltravelcouple.com/wp-content/uploads/2022/02/Osmena-peak-drone-1024x576.jpg"
  );

  const images = [
    "https://digitaltravelcouple.com/wp-content/uploads/2022/02/Osmena-peak-drone-1024x576.jpg",
    "https://gretastravels.com/wp-content/uploads/2019/05/DSC_0469.jpg.webp",
    "https://www.action-philippines.com/wp-content/uploads/2017/07/trekking_banner.jpg",
    "https://www.moalboalecolodge.com/uploads/7/1/0/0/71000831/img20201210114432-00_orig.jpg",
    "https://gretastravels.com/wp-content/uploads/2019/05/DSC_0425.jpg.webp",
    "https://www.journeyera.com/wp-content/uploads/2016/10/osmena-peak-cebu-03227.jpg",
    "https://www.action-philippines.com/wp-content/uploads/2017/07/trekking_hike_2000x1000_1.jpg",
    "https://images.squarespace-cdn.com/content/v1/5a4134b618b27d418cc25681/1574702941402-38OX6DLTTLJKRVWE6OT6/Osmena+Peak+hike",
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
            alt="osmena_peak_img"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Osmeña Peak</h2>
        <p className="text-gray-600 mt-2">Location: Dalaguete, Cebu, Philippines</p>
        <p className="text-gray-700 mt-4">
          Osmeña Peak is the highest point in Cebu, offering panoramic views of jagged hills and the coastline. It is a favorite trekking destination due to its cool climate and scenic trails. Visitors can experience breathtaking sunrises, sunsets, and a sea of clouds on clear days, making Osmeña Peak a must-visit adventure spot.
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

export default OsmenaPeakAttractions;
