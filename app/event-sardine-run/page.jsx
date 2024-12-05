import React from 'react';

const SardineRunEvent = () => {
  return (
    <div className="p-8 bg-gray-100">
      {/* First Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <a href="/events">
          <div className="btn mb-5 bg-gray-700 text-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300">
            Return ➤
          </div>
        </a>
        <div className="w-auto h-[500px] mx-auto overflow-hidden rounded-lg">
          <img
            src="event_assets/event_1.png"
            alt="Sardine Run Freediving"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Sardine Run Freediving in Moalboal
        </h2>
        <p className="text-gray-600 mt-2">
          A breathtaking underwater experience that brings you face-to-face with a swirling spectacle of sardines.
        </p>
        <p className="text-gray-700 mt-4">
          The Sardine Run in Moalboal is a world-famous attraction where freedivers and snorkelers can immerse themselves
          in a dazzling display of millions of sardines moving in synchronized patterns. Located off the coast of
          Moalboal, Cebu, this natural phenomenon offers a unique and unforgettable adventure for underwater enthusiasts.
        </p>
      </div>

      {/* Second Section */}
      <div className="mt-8 max-w-4xl mx-auto">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Event Gallery</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <img
      src="https://cdn.oceanographicmagazine.com/wp-content/uploads/2023/12/07092135/DSC01977-1920x1280.jpg"
      alt="Gallery Image 1"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://www.taraletsanywhere.com/wp-content/uploads/2019/12/sardine-run-in-moalboal.jpg"
      alt="Gallery Image 2"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://res.klook.com/image/upload/q_85/c_fill,w_750/v1622047458/blog/uohrwcrr7k5kpgk78f51.jpg"
      alt="Gallery Image 3"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://gocebutours.com/wp-content/uploads/2023/04/Ken_Moalboal_Select2-1024x768-min.jpg"
      alt="Gallery Image 4"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://static.wixstatic.com/media/4f04c0_8348149505c348d89f2c7fbc9db353b7~mv2.png/v1/fill/w_980,h_720,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4f04c0_8348149505c348d89f2c7fbc9db353b7~mv2.png"
      alt="Gallery Image 5"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
    <img
      src="https://lakbaypinas.com/wp-content/uploads/2024/11/Snapinsta.app_375268031_6318043388317494_2441552875404143967_n_1080.jpg"
      alt="Gallery Image 6"
      className="w-full h-[200px] object-cover rounded-lg shadow-lg"
    />
  </div>
</div>
    </div>
  );
};

export default SardineRunEvent;
