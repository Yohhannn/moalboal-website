import React from 'react';

const AboutMoalboal = () => {
  const facts = [
    {
      title: 'Origin of the Name',
      description:
        'The name "Moalboal" is believed to have come from the Cebuano words "bocal-bocal," referring to the bubbling springs found in the area. Over time, it evolved into "Moalboal."',
    },
    {
      title: 'Rich History',
      description:
        'Moalboal was established as a municipality in the late 19th century. It has grown into a vibrant community while preserving its cultural heritage.',
    },
    {
      title: 'Marine Biodiversity',
      description:
        'The town is renowned for its marine ecosystem, including the world-famous Sardine Run and the diverse coral reefs of Pescador Island.',
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="bg-gradient-to-t from-blue-600 to-gray-800 text-white py-24 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('about_assets/history_img.png')" }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">About Moalboal</h1>
          <p className="text-lg max-w-2xl mx-auto">
            A picturesque coastal town in Cebu, Moalboal is known for its natural beauty, rich culture, and vibrant community. Discover its history and charm.
          </p>
        </div>
      </div>

      {/* About Moalboal */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">The Municipality of Moalboal</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Nestled on the southwestern coast of Cebu, Moalboal is a haven for travelers seeking stunning landscapes and vibrant underwater life. With its warm, welcoming community and rich cultural traditions, it stands as one of the province's crown jewels.
          </p>

          {/* Facts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="card bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:bg-gray-800 hover:text-white"
              >
                <h3 className="text-xl font-bold">{fact.title}</h3>
                <p className="mt-4">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-gray-100 py-10 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          {/* Left: Image */}
          <div className="md:w-1/2">
            <img
              src="https://cebufundivers.com/wp-content/uploads/2022/08/panagsama_beach_girl_1500.jpg"
              alt="Nature of Moalboal"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="md:w-1/2 p-6 md:p-10 text-white">
            <h2 className="text-2xl font-bold mb-4">A Haven of Natural Wonders</h2>
            <p>
              From the pristine beaches of Panagsama to the tranquil waters of White Beach, Moalboal offers an array of attractions for nature lovers. Its
              underwater ecosystem attracts divers from around the globe, while its picturesque landscapes make it a perfect escape from the hustle and
              bustle of city life.
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Heritage Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Cultural Heritage</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Moalboal takes pride in its cultural heritage. From vibrant festivals like the Kagasangan Festival to traditional Cebuano practices, the
            town's culture is alive and thriving.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">Kagasangan Festival</h3>
              <p>
                Celebrated annually, this festival showcases Moalboal's rich history and the resilience of its people through dance, music, and cultural
                exhibits.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">Cebuano Traditions</h3>
              <p>
                The town is deeply rooted in Cebuano traditions, with a strong sense of community that emphasizes family, faith, and hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* Map Section */}
            <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Location of Moalboal</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Moalboal is located on the southwestern coast of Cebu Island in the Philippines. It is approximately 89 kilometers (55 miles) from Cebu City, accessible via a scenic drive.
          </p>
          <div className="shadow-lg rounded-lg overflow-hidden">
            <iframe
              title="Moalboal Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4275898325335!2d123.39692691432637!3d9.943297292899566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa17a302e91a11%3A0x95388f52c69b3732!2sMoalboal%2C%20Cebu!5e0!3m2!1sen!2sph!4v1697048165534!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMoalboal;