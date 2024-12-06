import React from 'react';

const Bar = () => {
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
            src="https://cebutrip.net/files/becf099243979b0fca369a059fd0a1bf.jpg"
            alt="resto_img"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
        The Pleasure Principle Resto-Bar
        </h2>
        <p className="text-gray-600 mt-2">
        Location: Panagsama Beach, Moalboal, Cebu
        </p>
        <p className="text-gray-700 mt-4">
        A vibrant fusion of international and local flavors awaits you at The Pleasure Principle. Whether you're craving a refreshing cocktail or a delicious meal, this resto-bar offers the perfect blend of beachside relaxation and culinary delight.
        </p>
      </div>

      {/* Second Section */}
      <div className="mt-8 max-w-4xl mx-auto">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Food Gallery</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <img
      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/b4/a2/fe/the-pleasure-principle.jpg?w=900&h=500&s=1"
      alt="Gallery Image 1"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://media-cdn.tripadvisor.com/media/photo-s/0f/33/1d/be/photo2jpg.jpg"
      alt="Gallery Image 2"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://img.lacarte.menu/storage/media/company_gallery/33996179/conversions/contribution_gallery.jpg"
      alt="Gallery Image 3"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://img.lacarte.menu/storage/media/company_gallery/23488658/conversions/contribution_gallery.jpg"
      alt="Gallery Image 4"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://media-cdn.tripadvisor.com/media/photo-s/0c/aa/3e/c1/some-of-the-excellent.jpg"
      alt="Gallery Image 5"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://media-cdn.tripadvisor.com/media/photo-s/0f/30/ec/4e/caption.jpg"
      alt="Gallery Image 6"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
  </div>
</div>
    </div>
  );
};

export default Bar;
