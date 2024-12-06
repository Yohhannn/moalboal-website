import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <a href="/team" className="flex flex-col items-center ">
              <div className="w-6 h-6 mb-1">
                <img src="header_assets/i_team.svg" alt="Team" />
              </div>
            
          <p className="text-lg text-gray-400">
            <b className='hover:text-yellow-200'>BLACK MAVERICKS</b>
          </p>
          </a>
          <p className="text-sm text-gray-400 items-center">
          Join us in exploring the beauty and promoting the wonders of Moalboal.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-row gap-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com/lgumoalboal" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <img src="footer_assets/facebook.svg" alt="Facebook" className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <img src="footer_assets/twitter.svg" alt="Twitter" className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <img src="footer_assets/instagram.svg" alt="Instagram" className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-4">
        © 2024 Moalboal Tourism. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
