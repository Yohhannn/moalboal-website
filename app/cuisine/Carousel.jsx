import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "/cuisine_assets/lechon baboy.jpg",
      title: "Lechon Baboy",
      description:
        "A Filipino roasted pig, crispy on the outside and tender on the inside.",
    },
    {
      src: "/cuisine_assets/lumpia.jpg",
      title: "Lumpia Shanghai",
      description:
        "Crispy and savory Filipino spring rolls filled with pork and vegetables.",
    },
    {
      src: "/cuisine_assets/grilled bangus.jpg",
      title: "Inihaw na Bangus",
      description:
        "Grilled milkfish, or Inihaw na Bangus, is a Filipino classic. A whole milkfish is grilled to perfection, often stuffed with a flavorful mixture of onions and tomatoes.",
    },
    {
      src: "/cuisine_assets/kinilaw.jpg",
      title: "Kinilaw",
      description:
        "A Filipino ceviche made with fresh fish marinated in vinegar and spices.",
    },
    {
      src: "/cuisine_assets/swaki.jpg",
      title: "Swaki",
      description:
        "Sea urchins served fresh, a delicacy from the Philippines' coastal regions.",
    },
    {
      src: "/cuisine_assets/sisig.jpg",
      title: "Sisig",
      description:
        "Filipino dish made from pork jowl and ears, pork belly, and chicken liver, which is usually seasoned with calamansi, onions, and chili peppers",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[280px] lg:h-[400px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Blurred Image */}
      <img
        src={images[currentIndex].src}
        alt={`Background ${currentIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover filter blur-lg scale-110"
      />
      <div className="absolute inset-0 bg-blue-500 opacity-25"></div>

      {/* Content Wrapper */}
      <div className="relative z-9 w-full max-w-6xl grid grid-cols-2 items-center jsutify-center ">
        {/* Left Content */}
        <div className="text-white space-y-4 text-justify pl-4 pr-6 lg:pr-14 ">
          <h1 className="text-[18px] lg:text-4xl font-bold">{images[currentIndex].title}</h1>
          <p className="text-[15px] lg:text-lg">{images[currentIndex].description}</p>
        </div>

        {/* Tilted Image on the Right */}
        <div className="relative w-[180px] h-[150px] lg:w-[500px] lg:h-[700px]">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transform lg:rotate-12"
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-2 lg:bottom-4 lg:right-8 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
