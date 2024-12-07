import React from 'react';

const Lantaw = () => {
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
            src="https://www.phtourguide.com/wp-content/uploads/2012/11/Lantaw-Floating-Native-Restaurant.jpg"
            alt="resto_img"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
        Tan-aw Restaurant
        </h2>
        <p className="text-gray-600 mt-2">
        Location: Saavedra, Moalboal, Cebu
        </p>
        <p className="text-gray-700 mt-4">
        Perched above the crystal-clear waters, Tan-aw Restaurant offers a serene dining experience with panoramic ocean views. Enjoy a mix of traditional Filipino and fresh seafood dishes, perfectly paired with the gentle sea breeze.
        </p>
      </div>

      {/* Second Section */}
      <div className="mt-8 max-w-4xl mx-auto">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Food Gallery</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <img
      src="https://restaurant.tipoloresort.com/wp-content/uploads/2021/02/half-roast-chicken-1024x1024.jpeg"
      alt="Gallery Image 1"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://primer.com.ph/food/wp-content/uploads/sites/4/2024/07/Mangiamo-290x218.png"
      alt="Gallery Image 2"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/f6/c6/c4/lunch-time-best-selection.jpg?w=900&h=-1&s=1"
      alt="Gallery Image 3"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9a/c0/b8/img-abc5e4f30a477fe95fbdddbddb.jpg?w=400&h=-1&s=1"
      alt="Gallery Image 4"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://bohollocal.ph/cdn/shop/products/Lantaw3_4f35911a-b721-4f0b-b2ef-2319e0ceeb9d_1200x.jpg?v=1610890427"
      alt="Gallery Image 5"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://menu.sluurpy.com/immagini/locali/thumbs/7099430.jpg"
      alt="Gallery Image 6"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
  </div>
</div>
    </div>
  );
};

export default Lantaw;
