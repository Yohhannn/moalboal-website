"use client";

import React, { useState } from "react";

const BasdakuWhiteBeachAttractions = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/326359829_1106655963361676_1593013567255363893_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHI228Ztjo8hUCEKpjBSw5eXp8Ug2il1HdenxSDaKXUd71kMxDSmDckNFtwr1lhXwKxZst5FjNFP4uj19AS8kwp&_nc_ohc=KnH03L59LWQQ7kNvgGsyq5H&_nc_zt=23&_nc_ht=scontent.fmnl9-4.fna&_nc_gid=AD6Y6tqB0dKo-_TJYOslgYZ&oh=00_AYA0RomfG97Gf0C0yddA0ySDXUIabXvYtOhiZ8ZT7Gx9LA&oe=6759F036"
  );

  const images = [
    "https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/326359829_1106655963361676_1593013567255363893_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHI228Ztjo8hUCEKpjBSw5eXp8Ug2il1HdenxSDaKXUd71kMxDSmDckNFtwr1lhXwKxZst5FjNFP4uj19AS8kwp&_nc_ohc=KnH03L59LWQQ7kNvgGsyq5H&_nc_zt=23&_nc_ht=scontent.fmnl9-4.fna&_nc_gid=AD6Y6tqB0dKo-_TJYOslgYZ&oh=00_AYA0RomfG97Gf0C0yddA0ySDXUIabXvYtOhiZ8ZT7Gx9LA&oe=6759F036",
    "https://media-cdn.tripadvisor.com/media/photo-s/06/13/ea/f5/basdaku-beach.jpg",
    "https://beachatlas.s3.us-east-2.amazonaws.com/white-moalboal.jpg",
    "https://www.phbus.com/wp-content/uploads/2022/02/white-beach-moalboal-cebu.jpg",
    "https://sandee.com/_next/image?url=https%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPJSVStKpSZ6unWvqxnqBRYpC5MtfHavkK3XBgI%3Ds1600-k-no&w=3840&q=75",
    "https://sandee.com/_next/image?url=https%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOV2JCTq9hT_l2iehvxDnVUi34czutBrGiHS_TH%3Ds1600-k-no&w=3840&q=75",
    "https://www.nopostcode.com/wp-content/uploads/2022/01/White-Beach-Moalboal-Basdaku-4-1024x682.jpg",
    "https://thebackpackingfamily.com/wp-content/uploads/2024/03/The-backpacking-family-beach.jpg",
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
            alt="basdaku_white_beach_img"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Basdaku White Beach</h2>
        <p className="text-gray-600 mt-2">Location: Moalboal, Cebu, Philippines</p>
        <p className="text-gray-700 mt-4">
          Basdaku White Beach is a stunning seaside destination located in Moalboal, Cebu. Renowned for its long stretch of powdery white sand and crystal-clear waters, it is a haven for beach lovers and water sports enthusiasts. Activities such as snorkeling, beach camping, and sunset watching make Basdaku White Beach a perfect getaway.
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

export default BasdakuWhiteBeachAttractions;
