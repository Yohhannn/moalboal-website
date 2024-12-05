"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper"; 
import Link from "next/link";



const Slideshow = () => {
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
        "/attractions_assets/pescador/pescadorATT1.png",
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = attractions.map((attraction) => attraction.images[0]);
  const titles = attractions.map((attraction) => attraction.title);
  const descriptions = attractions.map((attraction) => attraction.description);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, [images.length]);

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
    <div className="relative bg-black">
      {/* Image Slides */}
      <div className="relative w-full overflow-hidden bg-black" style={{ height: "calc(100vh - 80px)" }}>
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 transform ${
              index === currentIndex ? "opacity-100 zoom-in" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover transition-transform duration-1000"
            />
            {/* Dark Filter */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
          </div>
        ))}

        {/* Title, Description, and Placeholder Button */}
        {attractions.map((attraction, index) => (
  <div
    key={index}
    className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center px-4 ${
      index === currentIndex ? "opacity-100" : "opacity-0"
    } transition-opacity duration-1000`}
  >
    <h1
      className={`font-bold mb-4 transition-transform duration-1000 ${
        index === currentIndex ? "slide-up-title" : ""
      } text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`}
    >
      {attraction.title}
    </h1>

    <p
      className={`text-lg transition-transform duration-1000 delay-500 ${
        index === currentIndex ? "slide-up-description" : ""
      }`}
    >
      {attraction.description}
    </p>

    <button
      className={`max-w-32 bg-transparent items-center justify-center flex border-2 border-gray-500 shadow-lg text-2xl text-nowrap text-white mt-12 px-24 p-4 hover:text-white duration-300 cursor-pointer active:scale-[0.98] ${
        index === currentIndex ? "slide-up-button" : "opacity-0"
      }`}
      onClick={() => window.location.href = attraction.link} // Correctly sets the link
    >
      Learn More
    </button>
  </div>
))}


        {/* Keyframe Animations */}
        <style jsx>{`
          @keyframes zoomIn {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.1);
            }
          }

          .zoom-in {
            animation: zoomIn 6s ease-in-out;
          }

          @keyframes slideUpTitle {
            0% {
              transform: translateY(40px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes slideUpDescription {
            0% {
              transform: translateY(40px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes slideUpButton {
            0% {
              transform: translateY(20px);
              opacity: 0.2;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .slide-up-title {
            animation: slideUpTitle 3s ease-in-out forwards;
          }

          .slide-up-description {
            animation: slideUpDescription 4.5s ease-in-out forwards;
          }

          .slide-up-button {
            animation: slideUpButton 4s ease-in-out forwards;
          }
        `}</style>
      </div>

      {/* Attraction Cards */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/attractions_assets/underwater4.jpg')" }}>

      {/* Header */}
      <div className="text-center py-8">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
    ATTRACTIONS
  </h1>
</div>
<hr className="w-48 sm:w-64 md:w-80 lg:w-96 border-t-2 border-gray-300 mx-auto my-4" />




{/* Attractions Cards */}
<div className="relative container mx-auto px-5 py-4">
  {rows.map((row, rowIndex) => (
    <div key={rowIndex} className={`flex flex-wrap justify-center gap-6  ${rowIndex > 0 ? "mt-6" : ""}`}>
      {row.map((attraction, index) => (
        <div
          key={index}
          className={`relative rounded-3xl shadow-xl w-full sm:w-96 md:w-80 lg:w-[400px] min-h-[400px] max-h-[500px] flex flex-col bg-gray-900
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


  );
  
  
  
};

export default Slideshow;
