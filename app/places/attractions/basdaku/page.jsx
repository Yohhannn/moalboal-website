"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const AttractionInfo = () => {
  const images = [
    "/attractions_assets/basdaku/basdakuATT1.png",
    "/attractions_assets/basdaku/basdakuATT2.jpg",
    "/attractions_assets/basdaku/basdakuATT3.jpg",
    "/attractions_assets/basdaku/basdakuATT4.jpg",
    "/attractions_assets/basdaku/basdakuATT5.jpg",
    "/attractions_assets/basdaku/basdakuATT6.jpg",
  ];

  const reviews = [
    { name: "Joel ", text: "The view is stunning. The white sand beach and the water is very clear. The rooms are very affordable. People are friendly. Although it took us a couple of hours to reach the destination, it's all worth it.", date: "Nov 30, 2024", rating: 4.5 },
    { name: "Natasha ", text: "A gorgeous bounty beach. Nice for a swim and to work on your tan, some guys selling coconuts (warm🙊) Follow Sea turtle house on google maps (not white beach, then you get to a private beach)", date: "Dec 1, 2024", rating: 4 },
    { name: "Stanley ", text: "A real beautiful white Philippino beach. Lots of restaurants and shops beach front where the drinks and snacks are the same price. So don't worry about a cooler bag for the family.", date: "Dec 2, 2024", rating: 5 },
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
        "/attractions_assets/pescador/pescadorATT1.png",
        "/attractions_assets/pescador/pescadorATT2.jpg",
        "/attractions_assets/pescador/pescadorATT3.jpg",
      ],
      link: "/places/attractions/pescador",
    },
    {
      title: "Panagsama Beach",
      description:
        "Panagsama Beach offers stunning views, crystal-clear waters, and is a /gateway to exploring nearby dive spots and marine sanctuaries.",
      images: [
        "/attractions_assets/panagsama/panagsamaATT1.png",
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
        "/attractions_assets/tison/tisonATT1.png",
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
        "/attractions_assets/mushroom/mushroomATT1.png",
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
        "/attractions_assets/basdaku/basdakuATT1.png",
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

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Process the selected file (e.g., display the image, upload it, etc.)
      console.log("Selected photo:", file);
    }
  };
  

  return (
    <div
      className="min-h-screen p-4 sm:p-6 flex justify-center items-start"
      style={{
        backgroundImage: "url('/attractions_assets/underwater4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="min-h-screen  flex flex-col items-center">
        <div className="container mx-auto mt-1 max-w-[1200px] w-[90vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] "
          style={{ width: "90vw", maxWidth: "1200px", minHeight: "70vh" }}
        >
          {/* Title Section */}
          <div className="text-center mb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
              MOALBOAL | PESCADOR ISLAND
            </h1>
          </div>
          <hr className="w-48 sm:w-64 md:w-80 lg:w-96 border-t-2 border-gray-300 mx-auto my-4" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
            {/* Gallery Section */}
{/* Gallery Section */}
<div className="p-4 shadow-lg rounded-lg h-full flex flex-col bg-opacity-80 bg-gray-900 w-full   mx-auto">
  <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Gallery</h2>
  <div className="relative flex-grow">
    {/* Main Image */}
    <div className="w-full h-[400px] sm:h-[550px] mb-4">
      <img
        src={images[currentImageIndex]}
        alt={`Attraction ${currentImageIndex + 1}`}
        className="rounded-lg object-cover w-full h-full"
      />
    </div>
    {/* Thumbnails */}
    <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index + 1}`}
          className={`rounded-lg cursor-pointer w-16 h-16 object-cover ${
            index === currentImageIndex ? "border-2 border-blue-500" : ""
          }`}
          onClick={() => handleThumbnailClick(index)}
        />
      ))}
    </div>
  </div>
</div>


  
            {/* Reviews Section */}
            <div className="max-w-[500px] mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-blue-600 before:rounded-full before:-z-10 before:blur-3xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-2xl after:top-24 after:-right-12">
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-white">
                Reviews
              </h2>
  
              {/* Rating Indicator */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">{renderStars(4)}</div>
                <span className="text-white font-semibold">4/5</span>
              </div>
  
              {/* Reviews List */}
              <div className="space-y-4 w-full max-h-[450px] overflow-y-auto pr-2 mb-6">
                {reviews.map((review, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <p className="text-white font-bold">{review.name}</p>
                    <p className="text-white">"{review.text}"</p>
                    <p className="text-sm text-white">{review.date}</p>
                  </div>
                ))}
              </div>
  
              {/* Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-6">
  {/* Add Photo Button */}
  <label
    htmlFor="photo-picker"
    className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] flex items-center justify-center"
  >
    Add Photo
  </label>
  <input
    type="file"
    id="photo-picker"
    accept="image/*"
    className="hidden"
    onChange={handlePhotoChange}
  />

  {/* Add Review Button */}
  <button
    className="cursor-pointer transition-all bg-green-500 text-white px-6 py-2 rounded-lg border-green-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] flex items-center justify-center"
  >
    Add Review
  </button>
</div>

            </div>
          </div>
  
          {/* Attraction Cards */}
          <div className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white bg-cover bg-center bg-no-repeat">
            {/* Header */}
            <hr className="w-48 sm:w-64 md:w-80 lg:w-96 border-t-2 border-gray-300 mx-auto my-4" />
            <div className="text-center py-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                ATTRACTIONS
              </h1>
            </div>
            <hr className="w-48 sm:w-64 md:w-80 lg:w-96 border-t-2 border-gray-300 mx-auto my-4" />
  
            {/* Attractions Cards */}


{/* Attractions Cards */}
<div className="relative container mx-auto px-5 py-4">
  {rows.map((row, rowIndex) => (
    <div key={rowIndex} className={`flex flex-wrap justify-center gap-6 ${rowIndex > 0 ? "mt-6" : ""}`}>
      {row.map((attraction, index) => (
        <div
          key={index}
          className={`relative rounded-t-3xl shadow-xl w-full sm:w-96 md:w-80 lg:w-[400px] min-h-[400px] max-h-[500px] flex flex-col bg-gray-900
            transform transition-all duration-500 ease-in-out
            ${hoveredIndexes[rowIndex] === index ? "scale-105" : "scale-100"}
            ${expandedIndex === index ? "expanded" : ""} 
            hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400`}
          onMouseEnter={() => handleMouseEnter(rowIndex, index)}
          onMouseLeave={() => handleMouseLeave(rowIndex)}
        >
          {/* Image/Description Section */}
          <div className="w-full h-full min-h-[300px] max-h-[600px] overflow-hidden rounded-t-3xl pb-5">
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

          {/* Title and View More Button */}
          <div className="flex items-center justify-evenly p-2 text-white space-x-2 -my-1 bg-gray-900">
  <div>
    <h3 className="text-xl font-bold">{attraction.title}</h3>
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        {/* Repeat the SVG as required */}
        {/* <svg
          className="w-4 h-4 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg> */}
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
        5.0
      </span>
    </div>
  </div>
  <button
    className="btn glass text-white"
    onClick={() => toggleViewMore(rowIndex, index)}
  >
    {viewingMoreIndexes[rowIndex] === index ? "Hide" : "View More"}
  </button>
</div>

          {/* More Details Link */}
          <div className="flex justify-center p-3">
            <a
              href={attraction.link}
              className="btn btn-outline text-white w-full text-base"
            >
              More details about {attraction.title}
            </a>
          </div>
        </div>
      ))}
    </div>
  ))}

  {/* Show More / Show Less Button */}
  <div className="text-center mt-16 mb-20">
    <button
      className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-4 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
      onClick={() =>
        setRowsToShow((prevRows) =>
          prevRows * 3 >= attractions.length ? 1 : prevRows + 1
        )
      }
    >
      {rowsToShow * 3 >= attractions.length ? "SHOW LESS" : "SEE MORE ATTRACTIONS"}
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-10 bg-white/20"></div>
      </div>
    </button>
  </div>
</div>




          </div>






        </div>
      </div>
    </div>
  );
  
  
};

export default AttractionInfo;
