import React from "react";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-gray-700 text-white py-24 bg-cover bg-center" style={{ backgroundImage: "url('event_assets/event_topbg.png')" }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Events & Festivals of Moalboal</h1>
          <p className="mt-4 text-lg">Discover the vibrant traditions and celebrations of Moalboal!</p>
        </div>
      </header>

      <div className="max-w-8xl mx-auto 2xl:max-w-7xl bg-white shadow-lg rounded-lg p-6">
        {/* Featured Events Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto">
    <h2 className="text-3xl font-semibold text-center mb-8">Featured Events & Festivals</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Sardine Run Card */}
      <div className="card bg-gray-50 shadow-lg">
        <figure>
          <img
            src="event_assets/event_1.png"
            alt="Sardine Run"
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h3 className="text-xl font-bold">Sardine Run Freediving</h3>
          <p className="mt-2 text-gray-600">
            Witness the mesmerizing underwater Sardine Run and join freediving competitions.
          </p>
          <a
            href="/event-sardine-run"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg w-auto text-center hover:bg-white hover:text-black transition duration-200 mt-4 inline-block"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Kagasangan Festival Card */}
      <div className="card bg-gray-50 shadow-lg">
        <figure>
          <img
            src="event_assets/event_2.png"
            alt="Kagasangan Festival"
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h3 className="text-xl font-bold">Kagasangan Festival</h3>
          <p className="mt-2 text-gray-600">
            Celebrate Moalboal’s heritage through dance, music, and vibrant costumes.
          </p>
          <a
            href="/event-kagasangan-festival"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg w-auto text-center hover:bg-white hover:text-black transition duration-200 mt-4 inline-block"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Sinulog sa Kabataan Card */}
      <div className="card bg-gray-50 shadow-lg">
        <figure>
          <img
            src="event_assets/event_3.png"
            alt="Sinulog sa Kabataan"
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h3 className="text-xl font-bold">Sinulog sa Kabataan</h3>
          <p className="mt-2 text-gray-600">
            Experience the local Sinulog Festival, showcasing the unique culture of Moalboal.
          </p>
          <a
            href="/event-sinulog-sa-kabataan"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg w-auto text-center hover:bg-white hover:text-black transition duration-200 mt-4 inline-block"
          >
            Learn More
          </a>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Festival Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-white shadow-lg">
              <figure>
                <img
                  src="event_assets/fest_1.png"
                  alt="Moalboal Town Fiesta"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="text-lg font-bold">Moalboal Town Fiesta</h3>
                <p className="text-gray-600 mt-2">
                  A grand celebration featuring traditional food, dances, and community events.
                </p>
              </div>
            </div>
            <div className="card bg-white shadow-lg">
              <figure>
                <img
                  src="event_assets/fest_2.png"
                  alt="Cultural Dance"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="text-lg font-bold">Cultural Dance Parade</h3>
                <p className="text-gray-600 mt-2">
                  Immerse in the rich culture through dynamic and colorful dance parades.
                </p>
              </div>
            </div>
            <div className="card bg-white shadow-lg">
              <figure>
                <img
                  src="event_assets/fest_3.png"
                  alt="Local Cuisine"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="text-lg font-bold">Local Cuisine Showcases</h3>
                <p className="text-gray-600 mt-2">
                  Relish the authentic flavors of Moalboal through food festivals and fairs.
                </p>
              </div>
            </div>
            <div className="card bg-white shadow-lg">
              <figure>
                <img
                  src="event_assets/fest_4.png"
                  alt="Heritage Night"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="text-lg font-bold">Heritage Night</h3>
                <p className="text-gray-600 mt-2">
                  Celebrate the historical roots of Moalboal through storytelling and performances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      {/* Call to Action Section */}
      <section className="py-16 bg-gray-700 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Plan Your Visit to Moalboal</h2>
          <p className="text-lg mb-8">
            Don’t miss out on the vibrant festivals, breathtaking events, and rich culture of Moalboal.
          </p>
          <a
            href="/contacts"
            className="bg-white text-black px-8 py-3 rounded-btn hover:bg-gray-800 hover:text-white transition duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
