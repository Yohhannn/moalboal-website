"use client";

import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { ChevronUpIcon } from "@heroicons/react/24/solid";


const Food = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the scroll-to-top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-200">
    <div className='mx-12  pt-8 lg:mx-24 lg:pt-0 min-h-screen' >
      {/*wrapper*/}
      <div className='mb-16 pt-10'>
        <h1 className='pb-4 font-bold text-3xl'>FOOD|CULTURE</h1>
        <div> {/*carousel*/}
          <Carousel />
        </div>
      </div>
      <div> 
        <h2 className='pb-2 mt-12 border-b border-gray-300 font-bold text-2xl'>Popular Cuisines</h2>
        <div className='mt-8 grid lg:grid-cols-3 gap-8'>
          {/*cards*/}
          <div className='bg-white rounded overflow-hidden shadow-md  hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/pork_guisado.jpg" className='w-full h-48 sm:h-48 object-cover' alt="Pork Guisado" />
            <div className='p-4'>
              <span className='font-bold'>Pork Guisado</span>
              <span className='block'>Tan-aw Restaurant</span>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/smoothie.jpg" className='w-full h-40 sm:h-48 object-cover' alt="Smoothie" />
            <div className='p-4'>
              <span className='font-bold'>Bom Dia</span>
              <span className='block'>Shaka</span>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/cheesy_burger.jpg" className='w-full h-40 sm:h-48 object-cover' alt="Cheesy Burger" />
            <div className='p-4'>
              <span className='font-bold'>Name of the dish</span>
              <span className='block'>Restaurant</span>
            </div>
          </div> 
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/pork_sisig.jpg" className='w-full h-40 sm:h-48 object-cover' alt="Pork Sisig" />
            <div className='p-4'>
              <span className='font-bold'>Sizzling Pork Sisig</span>
              <span className='block'>Ven's Kitchen</span>
            </div>
          </div> 
          
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/bbq.jpg" className='w-full h-40 sm:h-48 object-cover' alt="BBQ" />
            <div className='p-4'>
              <span className='font-bold'>BBQ</span>
              <span className='block'>Street Food</span>
            </div>
          </div> 
        </div>
      </div>

      <div > 
        <h4 className='pb-2 mt-16 border-b border-gray-300 font-bold text-2xl'>Recommended Dining Spots</h4>
        <div className='mt-8 pb-8 grid lg:grid-cols-3 gap-8'>
          {/*cards*/}
          <div className='bg-white rounded overflow-hidden shadow-md  hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/Tan-aw Restaurant.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Tan-aw Restaurant" />
            <div className='p-4'>
              <span className='font-bold'>Tan-aw Restaurant</span>
              <a href="https://www.neptunediving.com/tan-aw-restaurant-moalboal/" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md  hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/Hungry Monkey Restaurant.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Hungry Monkeys Restaurant" />
            <div className='p-4'>
              <span className='font-bold'>Hungry Monkeys Restaurant</span>
              <a href="https://web.facebook.com/hungrymonkeysmoalboal/?_rdc=1&_rdr#" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/ven-z-kitchen.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Vin'z Kitchen" />
            <div className='p-4'>
              <span className='font-bold'>Vin'z Kitchen</span>
              <a href="https://web.facebook.com/venzkitchen/?_rdc=1&_rdr#" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/Daily Sweet.png" className='w-full h-52 sm:h-52 object-cover' alt="Daily Sweet Snow Ice Shop" />
            <div className='p-4'>
              <span className='font-bold'>Daily Sweet Snow Ice Shop</span>
              <a href="https://web.facebook.com/dailysweetmoalboal" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/Shaka.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Shaka" />
            <div className='p-4'>
              <span className='font-bold'>Shaka</span>
              <a href="https://web.facebook.com/shaka.cafes" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/Kugita.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Kugita Seafood & Charcoal Grill" />
            <div className='p-4'>
              <span className='font-bold'>Kugita Seafood & Charcoal Grill</span>
              <a href="https://web.facebook.com/kugitamoalboal" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/last-filling-station.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Last Filling Station" />
            <div className='p-4'>
              <span className='font-bold'>Last Filling Station</span>
              <a href="https://www.tipoloresort.com/restaurant/" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/siptea bar.jpg" className='w-full h-52 sm:h-52 object-cover' alt="SipTea Bar & Restaurant" />
            <div className='p-4'>
              <span className='font-bold'>SipTea Bar & Restaurant</span>
              <a href="https://web.facebook.com/SipTeaBar" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/el mercado de moalboal.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Moalboal Food Court" />
            <div className='p-4'>
              <span className='font-bold'>El Mercado de Moalboal</span>
              <a href="https://web.facebook.com/profile.php/?id=100094018757570&_rdc=1&_rdr" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 className="pb-2 mt-16 border-b border-gray-300 font-bold text-2xl">Local Eats</h5>
        <div className='mt-8 pb-8 grid lg:grid-cols-3 gap-8'>
          {/*cards*/}
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/Tan-aw Restaurant.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Tan-aw Restaurant" />
            <div className='p-4'>
              <span className='font-bold'>Tan-aw Restaurant</span>
              <a href="https://www.neptunediving.com/tan-aw-restaurant-moalboal/" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/Hungry Monkey Restaurant.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Hungry Monkeys Restaurant" />
            <div className='p-4'>
              <span className='font-bold'>Hungry Monkeys Restaurant</span>
              <a href="https://web.facebook.com/hungrymonkeysmoalboal/?_rdc=1&_rdr#" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/ven-z-kitchen.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Vin'z Kitchen" />
            <div className='p-4'>
              <span className='font-bold'>Vin'z Kitchen</span>
              <a href="https://web.facebook.com/venzkitchen/?_rdc=1&_rdr#" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/last-filling-station.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Last Filling Station" />
            <div className='p-4'>
              <span className='font-bold'>Last Filling Station</span>
              <a href="https://www.tipoloresort.com/restaurant/" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/siptea bar.jpg" className='w-full h-52 sm:h-52 object-cover' alt="SipTea Bar & Restaurant" />
            <div className='p-4'>
              <span className='font-bold'>SipTea Bar & Restaurant</span>
              <a href="https://web.facebook.com/SipTeaBar" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/el mercado de moalboal.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Moalboal Food Court" />
            <div className='p-4'>
              <span className='font-bold'>El Mercado de Moalboal</span>
              <a href="https://web.facebook.com/profile.php/?id=100094018757570&_rdc=1&_rdr" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h6 className="pb-2 mt-16 border-b border-gray-300 font-bold text-2xl">Budget-friendly</h6>
        <div className='mt-8 pb-8 grid lg:grid-cols-3 gap-8'>
          {/*cards*/}
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/Tan-aw Restaurant.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Tan-aw Restaurant" />
            <div className='p-4'>
              <span className='font-bold'>Tan-aw Restaurant</span>
              <a href="https://www.neptunediving.com/tan-aw-restaurant-moalboal/" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/Kugita.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Kugita Seafood & Charcoal Grill" />
            <div className='p-4'>
              <span className='font-bold'>Kugita Seafood & Charcoal Grill</span>
              <a href="https://web.facebook.com/kugitamoalboal" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/Shaka.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Shaka" />
            <div className='p-4'>
              <span className='font-bold'>Shaka</span>
              <a href="https://web.facebook.com/shaka.cafes" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/last-filling-station.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Last Filling Station" />
            <div className='p-4'>
              <span className='font-bold'>Last Filling Station</span>
              <a href="https://www.tipoloresort.com/restaurant/" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/siptea bar.jpg" className='w-full h-52 sm:h-52 object-cover' alt="SipTea Bar & Restaurant" />
            <div className='p-4'>
              <span className='font-bold'>SipTea Bar & Restaurant</span>
              <a href="https://web.facebook.com/SipTeaBar" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:translate-y-[-8px] hover:shadow-lg transition-transform duration-300'>
            <img src="/cuisine_assets/el mercado de moalboal.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Moalboal Food Court" />
            <div className='p-4'>
              <span className='font-bold'>El Mercado de Moalboal</span>
              <a href="https://web.facebook.com/profile.php/?id=100094018757570&_rdc=1&_rdr" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll-to-Top Button */}
      {isVisible && (
          <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-2 lg:right-6 p-2 rounded-full bg-blue-800 hover:bg-blue-900 text-white shadow-md transition duration-300"
        >
          <ChevronUpIcon className="h-5 w-5 lg:h-6 lg:w-6" />
        </button>
        )}
    </div>  
    </div>
  )
}

export default Food
