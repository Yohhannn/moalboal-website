import React from 'react'
const Home = () => {
  return (
    <>
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('home_assets/home_picbg.png')" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-6xl md:text-8xl font-bold">Welcome to Moalboal</h1>
            <p className="mb-6 text-lg">
              Experience pristine beaches, vibrant marine life, and breathtaking adventures. Discover your paradise in Moalboal!
            </p>
            <button className="btn bg-gray-100 text-gray-900 px-8 py-3 text-md transition-all duration-300 hover:bg-gray-900 hover:text-white">Learn More ↓</button>
          </div>
        </div>
      </div>

      {/* About Moalboal Section */}
      <section id="more_info" className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Visit Moalboal?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Located in the heart of Cebu, Moalboal is a tropical haven famous for its white-sand beaches, spectacular coral reefs, and exciting activities
            like snorkeling, diving, and island hopping.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-gray-200 transition-all duration-300 hover:bg-gray-100 shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Stunning Beaches</h3>
              <p className="text-gray-600">Relax on the serene shores of White Beach or dive into the crystal-clear waters of Panagsama Beach.</p>
            </div>
            <div className="card bg-gray-200 transition-all duration-300 hover:bg-gray-100 shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">World-Class Diving</h3>
              <p className="text-gray-600">Explore vibrant coral reefs and encounter diverse marine life, including sea turtles and sardine runs.</p>
            </div>
            <div className="card bg-gray-200 transition-all duration-300 hover:bg-gray-100 shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Adventure Awaits</h3>
              <p className="text-gray-600">Go canyoneering at Kawasan Falls, hike to Osmeña Peak, or enjoy thrilling water sports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Popular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card bg-white shadow-md p-6 rounded-lg">
              <img src="home_assets/home_snork.svg" alt="Snorkeling" className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Snorkeling</h3>
              <p className="text-gray-600">Discover vibrant underwater wonders.</p>
            </div>
            <div className="card bg-white shadow-md p-6 rounded-lg">
              <img src="home_assets/home_dive.png" alt="Diving" className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Diving</h3>
              <p className="text-gray-600">Dive into the colorful coral gardens.</p>
            </div>
            <div className="card bg-white shadow-md p-6 rounded-lg">
              <img src="home_assets/home_island.svg" alt="Island Hopping" className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Island Hopping</h3>
              <p className="text-gray-600">Visit pristine islands and lagoons.</p>
            </div>
            <div className="card bg-white shadow-md p-6 rounded-lg">
              <img src="home_assets/home_falls.svg"  alt="Kawasan Falls" className="rounded-lg mb-4" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
              <h3 className="text-xl font-bold mb-2">Kawasan Falls</h3>
              <p className="text-gray-600">Experience the thrill of canyoneering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-700 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Plan Your Trip</h2>
          <p className="text-lg mb-8">
          Get in touch with us to plan your dream vacation in Moalboal. Let us help you create unforgettable memories.
          </p>
          <a
            href="/contacts"
            className="bg-white text-black px-8 py-3 rounded-btn hover:bg-gray-800 hover:text-white transition duration-200"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
    </>
  )
}

export default Home