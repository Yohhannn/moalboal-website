import React from 'react';

const Shaka = () => {
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
            src="https://images.happycow.net/venues/1024/15/17/hcmp151750_2307523.jpeg"
            alt="resto_img"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
        Shaka
        </h2>
        <p className="text-gray-600 mt-2">
        Location: Panagsama Beach, Moalboal, Cebu
        </p>
        <p className="text-gray-700 mt-4">
        A tropical haven offering fresh, healthy bowls, smoothies, and signature dishes with a laid-back island vibe. Shaka is famous for its surf-inspired atmosphere and vibrant flavors, serving up an irresistible combination of nourishing meals and refreshing drinks, perfect for a relaxed dining experience by the beach.
         </p>
      </div>

      {/* Second Section */}
      <div className="mt-8 max-w-4xl mx-auto">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Food Gallery</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <img
      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/8f/be/40/the-bowl-spread.jpg?w=900&h=500&s=1"
      alt="Gallery Image 1"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://images.happycow.net/venues/1024/15/17/hcmp151750_1480388.jpeg"
      alt="Gallery Image 2"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://www.nopostcode.com/wp-content/uploads/2021/02/Shaka-Cafe-Moalboal-19-1024x682.jpg"
      alt="Gallery Image 3"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://www.nopostcode.com/wp-content/uploads/2021/02/Shaka-Cafe-Moalboal-17-1024x576.jpg"
      alt="Gallery Image 4"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://images.deliveryhero.io/image/fd-ph/LH/b93q-listing.jpg"
      alt="Gallery Image 5"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://media-cdn.tripadvisor.com/media/photo-s/11/38/a9/26/best-of-both-worlds.jpg"
      alt="Gallery Image 6"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
  </div>
</div>
    </div>
  );
};

export default Shaka;
