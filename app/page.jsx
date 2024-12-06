import React from 'react';
import LandingLayout from './landing-layout';

const Landing = () => {
  return (
    <>
    <LandingLayout>
      <div
        className="hero min-h-screen"
        // style={{
        //   backgroundImage: "url(landing_assets/landing_bg.svg)",
        // }}
        style={{
          position: "relative",
          height: "100vh", // Full viewport height
          width: "100%", // Full viewport width
          overflow: "hidden", // Ensures content doesn't spill out
        }}
      >
         {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute", // Position video behind content
          top: "0",
          left: "0",
          width: "100%", // Ensure video covers full width
          height: "100%", // Ensure video covers full height
          objectFit: "cover", // Ensures the video covers the screen without distortion
          zIndex: "-1", // Places the video behind other content
        }}
      >
        <source src="https://cdn.create.vista.com/api/media/medium/76396945/stock-video-shoal-jack-fish?token=w1733285098PNZfQWUqScvQCwhSNHD8jileJYM7e" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        {/* Gradient Overlay */}
        <div
        style={{
          position: "absolute", // Position overlay above the video
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))", // Gradient from black to transparent
          zIndex: "-1", // Places the gradient between the video and content
        }}
      ></div>

        <div className="hero-overlay bg-opacity-60"></div>
        {/* <div className="w-full h-1/4 bg-slate-900 bg-opacity-50"></div> */}
        <div className="hero-content text-white text-left px-10">
              <div className="max-w-screen-lg">
                <h1 className="mb-2 text-7xl md:text-8xl font-bold">MOALBOAL</h1>
                <h1 className="mb-5 text-lg md:text-3xl font-thin"><i>EXPERIENCE CEBU'S HIDDEN TREASURE</i></h1>
                <p className='text-xs pt-10'>⌕ | PHILIPPINES | VISAYAS | CEBU | MOALBOAL</p>
                <p className="mb-5 text-md md:text-lg font-thin pt-2 pb-10">
                  <b>Moalboal</b> is a tropical escape renowned for white-sand beaches,
                  vibrant coral reefs, and the famous sardine run. Dive into
                  adventure or relax by the serene shores—Moalboal has it all.
                </p>
                <a href="/home">
                <button className="btn bg-gray-100 hover:text-white font-semibold text-md hover:bg-slate-800">
                  Get Started ➤
                </button>
                </a>
              </div>
            </div>
      </div>
      </LandingLayout>
    </>
  );
};

export default Landing;