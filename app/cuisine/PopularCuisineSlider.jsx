import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";

const PopularCuisineSlider = () => {
  const slides = [
    {
      image: 'https://www.nopostcode.com/wp-content/uploads/2021/02/Shaka-Cafe-Moalboal-17-1024x576.jpg',
      title: 'Smoothie',
      subtitle: 'Shaka',
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c7/47/68/ultimate-cheese-burger.jpg',
      title: 'Cheesy Burger',
      subtitle: 'Three Bears Restaurant',
    },
    {
      image: 'https://i.pinimg.com/1200x/1a/2a/ec/1a2aecfefa2222e7b9d013d0985e9312.jpg',
      title: 'Sizzling Pork Sisig',
      subtitle: "Ven's Kitchen",
    },
    {
      image: 'https://panlasangpinoy.com/wp-content/uploads/2019/12/filipino-pork-barbecue-scaled-jpg.webp',
      title: 'Street BBQ',
      subtitle: 'Street Food',
    },
    {
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/04/0c/63/c6/lantaw-restaurant.jpg',
      title: 'Pork Guisado',
      subtitle: 'Tan-aw Restaurant',
    },
    {
      image: 'https://media.istockphoto.com/id/2161115810/photo/baby-back-ribs-on-wooden-board.jpg?s=612x612&w=0&k=20&c=sC_U1eiJ6fIxKX4X0csueiqmH_Oo4yWzgycCtv_ugo4=',
      title: "Betsy's Grill",
      subtitle: "Betsy's Grill and Restobar",
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

export default PopularCuisineSlider;