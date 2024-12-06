import React from 'react';

const Venz = () => {
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
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/0d/9a/9d/the-blue-abyss-dive-resort.jpg?w=700&h=-1&s=1"
            alt="resto_img"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
        Blue Abyss Dive Resort Restaurant
        </h2>
        <p className="text-gray-600 mt-2">
        Location: Basdiot, Moalboal, Cebu
        </p>
        <p className="text-gray-700 mt-4">
        Dive into a unique culinary experience at Blue Abyss, where you can enjoy flavorful dishes while surrounded by divers and the tranquil ambiance of Moalboal’s pristine coastline. Fresh, local ingredients meet a laid-back, ocean-inspired atmosphere.
        </p>
      </div>

      {/* Second Section */}
      <div className="mt-8 max-w-4xl mx-auto">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Food Gallery</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <img
      src="https://lh6.googleusercontent.com/proxy/2AbT9fpyPMZBbJl6yK_h1OdeRsWEP_dWDGOnJyRK4XUCciuRGWD9-yQ0su3ptvMp3xlXVVcZDACdtHbNKeeKsH73DmRTIFpXArAYx34DotkMl_LgqPgq-hnzxPiphT5dP5a_3cISI1R_6Q"
      alt="Gallery Image 1"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://media-cdn.tripadvisor.com/media/photo-s/12/f2/2d/b8/fried-rice-sea-food-du.jpg"
      alt="Gallery Image 2"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://www.roowanders.com/wp-content/uploads/2024/05/Cebu-Moalboal-Food-The-Boundary-1024x768.jpg"
      alt="Gallery Image 3"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://www.roowanders.com/wp-content/uploads/2024/05/Cebu-Moalboal-Food-Theo-Street-1024x768.jpg"
      alt="Gallery Image 4"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://lh4.googleusercontent.com/proxy/f4seNhrBuvNc6vv2n4iCpysLbJh91fOD8L-_9ZnxFTyF_YkrBxDned6wrAd96be0gGqYoMBd9vHfvj2l-At4C5qiWNlJk7lNO6toDAV4sq0kSGIWT3Hq5Un_OErSGmSXyI4HrQ"
      alt="Gallery Image 5"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://lh3.googleusercontent.com/proxy/ibZJifzLZXEJmbG6-GDWVjftYs9rvln5Nqf051QG9ETaBHFgoecVc-g1EydKhEfmsMWu-qguMFjiS_x7cTn4Exa6p9QHDT6RjlOkduN9Bv1-sU-PXacBlhA"
      alt="Gallery Image 6"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
  </div>
</div>
    </div>
  );
};

export default Venz;
