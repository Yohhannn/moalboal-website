import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";

const PopularRestoSlider = () => {
  const moalboalResto = [
    {
      name: "Ven'z Kitchen",
      link: "/cuisine-resto1",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/c8/10/0f/with-rita-and-sven.jpg?w=800&h=400&s=1",
      description:
        "Known for its home-cooked Filipino meals and warm hospitality, Ven'z Kitchen is a favorite spot for locals and tourists alike.",
    },
    {
      name: "Lantaw Restaurant",
      link: "/cuisine-resto2",
      image: "https://www.phtourguide.com/wp-content/uploads/2012/11/Lantaw-Floating-Native-Restaurant.jpg",
      description:
        "Enjoy stunning ocean views paired with a variety of Filipino and seafood dishes at this scenic restaurant.",
    },
    {
      name: "The Three Bears",
      link: "/cuisine-resto3",
      image: "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL01VREgySzlyUkZtQ2tCR25PbFU2c0EiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0=",
      description:
        "A family-friendly café offering hearty breakfast options, pastries, and coffee to kickstart your Moalboal adventure.",
    },
    {
      name: "Blue Abyss Dive Resort Restaurant",
      link: "/cuisine-resto4",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/0d/9a/9d/the-blue-abyss-dive-resort.jpg?w=700&h=-1&s=1",
      description:
        "Perfect for divers, this spot serves a range of dishes with a focus on fresh, local ingredients and a relaxing vibe.",
    },
    {
      name: "The Pleasure Principle Resto-Bar",
      link: "/cuisine-resto5",
      image: "https://cebutrip.net/files/becf099243979b0fca369a059fd0a1bf.jpg",
      description:
        "A cozy spot offering a mix of international and local dishes, along with refreshing cocktails and beachside ambiance.",
    },
    {
      name: "Hungry Monkeys Restaurant",
      link: "/cuisine-resto6",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/50/49/58/your-view-upstairs.jpg?w=900&h=500&s=1",
      description:
        "A quirky bar and grill serving delicious barbecue and signature cocktails, making it a must-visit for food and fun.",
    },
    {
      name: "Kugita Seafood & Charcoal Grill",
      link: "/cuisine-resto7",
      image: "https://www.nopostcode.com/wp-content/uploads/2021/01/Kugita-Moalboal-4-1024x682.jpg",
      description:
        "A seafood lover's paradise, Kugita specializes in freshly grilled fish, prawns, and other local delicacies.",
    },
    {
      name: "Shaka",
      link: "/cuisine-resto8",
      image: "https://images.happycow.net/venues/1024/15/17/hcmp151750_2307523.jpeg",
      description:
        "A tropical haven offering fresh, healthy bowls, smoothies, and signature dishes with a laid-back island vibe.",
    },
    {
      name: "Besty's Grill and Resto Bar",
      link: "/cuisine-resto9",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/02/16/d4/dining-area.jpg",
      description:
        "A cozy beachfront restaurant offering a mix of flavorful Filipino dishes and international favorites.",
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
              slidesPerView: 1,
              spaceBetween: 12,
            },
            1000: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={isMobile}
          modules={[FreeMode]}
        >
          {moalboalResto.map((place, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 mb-10 md:mb-12">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-96 object-cover px-6 py-5"  
                />

                <div className="p-6"> {/* Increased padding */}
                  <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                  <p className="text-gray-600 text-sm">{place.description}</p>
                  <a
                    href={place.link}
                    className="bg-gray-700 text-white px-4 py-4 rounded-lg w-full hover:bg-gray-100 hover:text-black transition duration-200 mt-4 inline-block text-center"
                  >
                    View More.
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularRestoSlider;
