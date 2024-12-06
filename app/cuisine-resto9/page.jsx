import React from 'react';

const BBQ = () => {
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
            src="https://media-cdn.tripadvisor.com/media/photo-s/1a/02/16/d4/dining-area.jpg"
            alt="resto_img"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
        Besty's Grill and Resto Bar
        </h2>
        <p className="text-gray-600 mt-2">
        Location: Panagsama Beach, Moalboal, Cebu
        </p>
        <p className="text-gray-700 mt-4">
        A cozy beachfront restaurant offering a mix of flavorful Filipino dishes and international favorites. Besty's Grill and Resto Bar is renowned for its freshly grilled seafood and meats, paired with an extensive selection of drinks. The laid-back ambiance and oceanfront setting make it an ideal place to enjoy a meal with friends or family while watching the sunset.
         </p>
      </div>

      {/* Second Section */}
      <div className="mt-8 max-w-4xl mx-auto">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Food Gallery</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <img
      src="https://media-cdn.tripadvisor.com/media/photo-s/1a/75/dd/92/betsy-s-grill-and-restobar.jpg"
      alt="Gallery Image 1"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/a0/90/7f/frozen-margaritas.jpg?w=900&h=500&s=1"
      alt="Gallery Image 2"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://media.istockphoto.com/id/2161115810/photo/baby-back-ribs-on-wooden-board.jpg?s=612x612&w=0&k=20&c=sC_U1eiJ6fIxKX4X0csueiqmH_Oo4yWzgycCtv_ugo4="
      alt="Gallery Image 3"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-xUux4OCbTH0pvk7olYTgz-mt-Ig_usvfw&s"
      alt="Gallery Image 4"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://panlasangpinoy.com/wp-content/uploads/2019/12/filipino-pork-barbecue-scaled-jpg.webp"
      alt="Gallery Image 5"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://www.willflyforfood.net/wp-content/uploads/2021/05/bangus.jpg"
      alt="Gallery Image 6"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
  </div>
</div>
    </div>
  );
};

export default BBQ;
