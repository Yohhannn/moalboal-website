"use client";

import React, { useState } from "react";

const PescadorIslandAttractions = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://gttp.images.tshiftcdn.com/198522/x/0/pescador-island.jpg"
  );

  const images = [
    "https://gttp.images.tshiftcdn.com/198522/x/0/pescador-island.jpg",
    "https://www.southshoretours.ph/wp-content/uploads/2013/10/34776561_10209357440693079_7604438682187071488_o.jpg",
    "https://pinaywise.com/wp-content/uploads/2024/01/Pescador-Island-Moalboal-cebu-philippines-2.jpg",
    "https://www.islandtrektours.com/wp-content/uploads/elementor/thumbs/pescador-island-pp39isqbegpqnjoeo121qtpknq3qj0j4r4ueidg7m0.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/87/f9/19/island-hopping-at-moalboal.jpg?w=1400&h=1400&s=1",
    "https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/429765187_824276863047368_5750448273095729527_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGRuzU9k-aLLTRnOD8TQCT6ieuvNrEb5U6J6682sRvlTkEcR6_f8B2Ec48MKuh4clrIVni5ZH1ci2riAAWj9z6m&_nc_ohc=xRhQaF5GaakQ7kNvgEe249n&_nc_zt=23&_nc_ht=scontent.fmnl9-1.fna&_nc_gid=AD6k8EkHBpz48sjngDQlbWs&oh=00_AYBz6udhVNY1M1pvOrh6d7FzRfIk9A9wPVtjbuPs6O8BBg&oe=675A2EC4",
    "https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/294881295_442059984602393_3110480246648750402_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH7RFlOTS4EloU6it5GwmCDIXutuxwqmw8he627HCqbD6ejw5ZQOXAbL_KxCUpTNHuSI7-r-2Gpqxo0fUkQZIih&_nc_ohc=9l5eDXzON6QQ7kNvgGxRsKB&_nc_zt=23&_nc_ht=scontent.fmnl9-1.fna&_nc_gid=AOkIRLvBp57u79oX0x2bAVd&oh=00_AYDdAnfb5L4v9-uE7GtYOhvM8-IdGwHzLNWb9OMHWAPB8A&oe=675A2484",
    "https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.6435-9/38292740_1993238060740531_5121859770197737472_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFB_FZd6D2LZVWL83AYFpI52ElYzWU5I1vYSVjNZTkjW2RZTfX5zqo3m7CfDfpCmDO0CPQoJg2RtdHMHiRftjz4&_nc_ohc=WwMF0veC9D0Q7kNvgGSMetF&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=AT88hG08bocSFmYKuK80OGY&oh=00_AYB0jSNCKTlNiXM-RqZWHcDVU9YZlknhhj4704U1l24bXw&oe=677BC7CB",
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
            alt="pescador_island_img"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Pescador Island</h2>
        <p className="text-gray-600 mt-2">Location: Moalboal, Cebu, Philippines</p>
        <p className="text-gray-700 mt-4">
          Pescador Island is a world-renowned diving and snorkeling destination located off the coast of Moalboal, Cebu. Known for its vibrant marine life, stunning coral reefs, and the famous "Sardine Run," it is a paradise for underwater explorers. Visitors can experience diverse marine ecosystems, encounter sea turtles, and enjoy breathtaking views above and below the water.
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

export default PescadorIslandAttractions;
