import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";

const MoalboalAttractionsSlider = () => {
  const slides = [
    {
      image: 'https://www.makemytrip.com/travel-guide/media/dg_image/1200x900/Bluewater_Marina_Moalboal_1200x900.jpg',
      title: 'Kawasan Falls',
      subtitle: 'A famous waterfall for canyoneering.',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/White_Sand_Beach_Moalboal_2018.jpg',
      title: 'Panagsama Beach',
      subtitle: 'A beautiful beach for snorkeling and diving.',
    },
    {
      image: 'https://www.ourawesomeplanet.com/images/kawasan-falls.jpg',
      title: 'Osmeña Peak',
      subtitle: 'The highest point in Cebu with breathtaking views.',
    },
    {
      image: 'https://www.destinationmoalboal.com/wp-content/uploads/2021/02/moalboal-7.jpg',
      title: 'Pescador Island',
      subtitle: 'A renowned diving spot with rich marine life.',
    },
    {
      image: 'https://www.explorecebu.com/wp-content/uploads/2021/04/Thresher-sharks-Moalboal.jpg',
      title: 'Thresher Sharks',
      subtitle: 'Dive with thresher sharks in Malapascua.',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/White_beach_at_Moalboal.jpg',
      title: 'White Beach',
      subtitle: 'A perfect spot to relax and enjoy the sunset.',
    },
  ];

  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-8xl mx-auto 2xl:max-w-7xl bg-white shadow-lg rounded-lg p-6">
      <div className="relative w-full h-auto">
        <Swiper
          ref={swiperRef}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 4,
            },
            340: {
              slidesPerView: 1,
              spaceBetween: 6,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          freeMode={isMobile}
          modules={[FreeMode]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex-shrink-0 min-h-[150px] h-[300px] w-full md:h-[400px] bg-white rounded overflow-hidden shadow-lg lg:transform lg:transition-transform lg:duration-300 lg:hover:-translate-y-2 lg:hover:shadow-2xl mb-10 md:mb-12">
                <div
                  className="absolute inset-0 bg-cover bg-center shadow-lg overflow-hidden rounded-lg"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute rounded-lg inset-0 bg-black opacity-10 hover:opacity-50"></div>
                <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                  ❤️
                </button>
                <div className="relative flex flex-col text-white p-4">
                  <h1 className="font-bold text-xl lg:text-2xl">{slide.title}</h1>
                  <p className="font-semibold lg:text-lg">{slide.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MoalboalAttractionsSlider;
