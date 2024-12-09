import React from 'react';

const Kugita = () => {
  return (
    <div className="p-8 bg-gray-100">
      {/* First Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <a href="/cuisine">
          <div className="btn mb-5 bg-gray-700 text-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300">
            Return ➤
          </div>
        </a>
        <div className="w-auto h-[500px] mx-auto overflow-hidden rounded-lg">
          <img
            src="https://www.nopostcode.com/wp-content/uploads/2021/01/Kugita-Moalboal-4-1024x682.jpg"
            alt="resto_img"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
        Kugita Seafood & Charcoal Grill
        </h2>
        <p className="text-gray-600 mt-2">
        Location: Panagsama Beach, Moalboal, Cebu
        </p>
        <p className="text-gray-700 mt-4">
        Kugita Seafood and Charcoal Grill is a proudly Filipino eco-friendly restaurant that brings together the finest flavors of fresh seafood, premium meats, and expertly crafted sushi. Whether you're craving indulgent barbecue, fresh catch of the day, or vibrant sushi rolls, they provide an unforgettable dining experience in a warm and inviting ambiance.
        </p>
      </div>

      {/* Second Section */}
      <div className="mt-8 max-w-4xl mx-auto">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Food Gallery</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <img
      src="https://www.nopostcode.com/wp-content/uploads/2021/01/Kugita-Moalboal-14-1024x682.jpg"
      alt="Gallery Image 1"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://www.nopostcode.com/wp-content/uploads/2021/01/Kugita-Moalboal-Feature.jpg"
      alt="Gallery Image 2"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://www.nopostcode.com/wp-content/uploads/2021/01/Kugita-Moalboal-11-1024x819.jpg"
      alt="Gallery Image 3"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IxNQsZK-RubSrsygRz-VmL3lk2YoY5g-CJz-b75x41wZMFg9T4AD8p1GUWOKtMlANoQ&usqp=CAU"
      alt="Gallery Image 4"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://media-cdn.tripadvisor.com/media/photo-s/15/d6/68/56/these-bad-ass-shrimp.jpg"
      alt="Gallery Image 5"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://www.nopostcode.com/wp-content/uploads/2021/01/Kugita-Moalboal-12-819x1024.jpg"
      alt="Gallery Image 6"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
  </div>
</div>
    </div>
  );
};

export default Kugita;
