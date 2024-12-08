'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the dropdown menu
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu(); // Close the menu on resize to a width >= 768px
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-slate-800 text-white py-4">
      <div className="container mx-auto max-w-8xl 2xl:max-w-7xl px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <h1 className="py-2 px-4 text-2xl font-bold cursor-pointer hover:text-yellow-400 transform transition-transform hover:scale-110">
              <img
                src="/header_assets/MOALBOAL_TEXT.svg"
                alt="Moalboal Logo"
                width={120}
                height={100}
              />
            </h1>
          </Link>

          {/* Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <ul
            className={`md:flex md:items-center md:space-x-6 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "block opacity-100" : "hidden md:opacity-100"
            } absolute md:static top-16 left-0 md:left-auto w-full bg-slate-800 md:bg-transparent md:w-auto py-4 md:py-0 z-50`}
          >
            {/* Dropdown Menu for Mobile */}
            <ul
              className={`dropdown-content menu menu-sm absolute right-0 bg-slate-800 rounded-box shadow mt-2 w-48 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link href="/home" className="hover:text-yellow-400 transform transition-transform hover:scale-105" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutUs" className="hover:text-yellow-400 transform transition-transform hover:scale-105" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/places" className="hover:text-yellow-400 transform transition-transform hover:scale-105" onClick={closeMenu}>
                  Places
                </Link>
              </li>
              <li>
                <Link href="/cuisine" className="hover:text-yellow-400 transform transition-transform hover:scale-105" onClick={closeMenu}>
                  Cuisine
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-yellow-400 transform transition-transform hover:scale-105" onClick={closeMenu}>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-yellow-400 transform transition-transform hover:scale-105" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>

            {/* Desktop Links */}
            <li className="hidden md:flex flex-col items-center text-sm hover:text-yellow-400 transform transition-transform hover:scale-105">
              <Link href="/home" className="flex flex-col items-center">
                <div className="w-6 h-6 bg-gray-800 rounded-full mb-1 md:block">
                  <img src="header_assets/i_home1.svg" alt="Home" />
                </div>
                <span className="md:block">Home</span>
              </Link>
            </li>

            <li className="hidden md:flex flex-col items-center text-sm hover:text-yellow-400 transform transition-transform hover:scale-105">
              <Link href="/aboutUs" className="flex flex-col items-center">
                <div className="w-6 h-6 bg-gray-800 rounded-full mb-1 md:block">
                  <img src="about_assets/about_icon_tag_place.svg" alt="About Us" />
                </div>
                <span className="md:block">About</span>
              </Link>
            </li>

            <li className="hidden md:flex flex-col items-center text-sm hover:text-yellow-400 transform transition-transform hover:scale-105">
              <Link href="/places" className="flex flex-col items-center">
                <div className="w-6 h-6 bg-gray-800 rounded-full mb-1 md:block">
                  <img src="header_assets/i_place.svg" alt="Places" />
                </div>
                <span className="md:block">Places</span>
              </Link>
            </li>

            <li className="hidden md:flex flex-col items-center text-sm hover:text-yellow-400 transform transition-transform hover:scale-105">
              <Link href="/cuisine" className="flex flex-col items-center">
                <div className="w-6 h-6 bg-gray-800 rounded-full mb-1 md:block">
                  <img src="header_assets/i_cuisine.svg" alt="Cuisine" />
                </div>
                <span className="md:block">Cuisine</span>
              </Link>
            </li>

            <li className="hidden md:flex flex-col items-center text-sm hover:text-yellow-400 transform transition-transform hover:scale-105">
              <Link href="/events" className="flex flex-col items-center">
                <div className="w-6 h-6 bg-gray-800 rounded-full mb-1 md:block">
                  <img src="header_assets/i_festival.svg" alt="Events" />
                </div>
                <span className="md:block">Events</span>
              </Link>
            </li>

            <li className="hidden md:flex flex-col items-center text-sm hover:text-yellow-400 transform transition-transform hover:scale-105">
              <Link href="/contacts" className="flex flex-col items-center">
                <div className="w-6 h-6 bg-gray-800 rounded-full mb-1 md:block">
                  <img src="header_assets/i_contact.svg" alt="Contact" />
                </div>
                <span className="md:block">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
