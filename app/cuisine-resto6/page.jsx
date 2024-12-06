import React from 'react';

const Monkeys = () => {
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
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/50/49/58/your-view-upstairs.jpg?w=900&h=500&s=1"
            alt="resto_img"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
        Hungry Monkeys Restaurant
        </h2>
        <p className="text-gray-600 mt-2">
        Location: Panagsama Beach, Moalboal, Cebu
        </p>
        <p className="text-gray-700 mt-4">
        A vibrant dining spot offering a mix of Western comfort food and local favorites. Hungry Monkeys is known for its laid-back ambiance, generous portions, and mouthwatering burgers, making it a go-to destination for satisfying cravings after a day of adventure.
        </p>
      </div>

      {/* Second Section */}
      <div className="mt-8 max-w-4xl mx-auto">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Food Gallery</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <img
      src="https://images.happycow.net/venues/1024/31/36/hcmp313692_2759541.jpeg"
      alt="Gallery Image 1"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://images.happycow.net/venues/1024/31/36/hcmp313692_1869002.jpeg"
      alt="Gallery Image 2"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://cdn.prod.rexby.com/image/86b0e01d118e416fb967d733f3d88c13?format=webp&width=1080&height=1350"
      alt="Gallery Image 3"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://images.happycow.net/venues/1024/31/36/hcmp313692_1871697.jpeg"
      alt="Gallery Image 4"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://menu.restaurantguru.com/m9/menu-Hungry-Monkeys-Moalboal-Restaurant.jpg"
      alt="Gallery Image 5"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://images.happycow.net/venues/1024/31/36/hcmp313692_1946181.jpeg"
      alt="Gallery Image 6"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
  </div>
</div>
    </div>
  );
};

export default Monkeys;
