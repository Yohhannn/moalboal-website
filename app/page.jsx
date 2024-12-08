import React from 'react';
import LandingLayout from './landing-layout';
import "animate.css";

const Landing = () => {
  return (
    <>
      <LandingLayout>
        <div
          className="hero min-h-screen animate-fadeIn"
          style={{
            position: "relative",
            height: "100vh",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: "-1",
            }}
          >
            <source
              src="https://cdn.create.vista.com/api/media/medium/76396945/stock-video-shoal-jack-fish?token=w1733285098PNZfQWUqScvQCwhSNHD8jileJYM7e"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
              zIndex: "-1",
            }}
          ></div>

          <div className="hero-overlay bg-opacity-60"></div>

          <div className="hero-content text-white text-left px-6 sm:px-10 md:px-20">
            <div className="max-w-screen-lg">
              <h1 className="mb-2 text-5xl sm:text-6xl md:text-7xl font-bold">
MOALBOAL
              </h1>
              <h2 className="mb-5 text-lg md:text-3xl font-thin italic animate__fadeIn animate__delay-1s">
                EXPERIENCE CEBU'S HIDDEN TREASURE
              </h2>
              <p className="text-xs sm:text-sm pt-10 opacity-80">
                ⌕ | PHILIPPINES | VISAYAS | CEBU | MOALBOAL
              </p>
              <p className="mb-5 text-md sm:text-lg font-thin pt-2 pb-10">
                <b>Moalboal</b> is a tropical escape renowned for white-sand beaches, vibrant coral reefs, and the famous sardine run. Dive into adventure or relax by the serene shores—Moalboal has it all.
              </p>
              <a href="/home">
                <button className="btn bg-gray-100 text-black hover:text-white font-semibold text-md hover:bg-slate-800 transition-colors duration-300 ease-in-out">
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
