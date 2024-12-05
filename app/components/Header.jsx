import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-800 text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <h1 className="py-2 px-4 text-2xl font-bold cursor-pointer hover:text-yellow-400">
              <img src="/header_assets/MOALBOAL_TEXT.svg" alt="" width={120} height={100}/>
            </h1>
          </Link>
          {/* Navigation Menu */}
          <ul className="flex items-center space-x-6">
            {/* Home */}
            <li className="flex flex-col items-center text-sm hover:text-yellow-400 transition">
              <a href="/home" className="flex flex-col items-center">
                {/* Placeholder Icon */}
                <div className="w-6 h-6 bg-gray- rounded-full mb-1"><img src="header_assets/i_home1.svg" alt="home style" /></div>
                Home
              </a>
            </li>
                {/* About The Place */}
                <li className="flex flex-col items-center text-sm hover:text-yellow-400 transition">
              <a href="/aboutUs" className="flex flex-col items-center">
                {/* Placeholder Icon */}
                <div className="w-6 h-6 bg-gray- rounded-full mb-1"><img src="about_assets/about_icon_tag_place.svg" alt="aboutUS" /></div>
                About
              </a>
            </li>
            {/* Places */}
            <li className="flex flex-col items-center text-sm hover:text-yellow-400 transition">
              <a href="/places" className="flex flex-col items-center">
                {/* Placeholder Icon */}
                <div className="w-6 h-6 bg-gray- rounded-full mb-1"><img src="header_assets/i_place.svg" alt="places" /></div>
                Places
              </a>
            </li>
            {/* Cuisine */}
            <li className="flex flex-col items-center text-sm hover:text-yellow-400 transition">
              <a href="/cuisine" className="flex flex-col items-center">
                {/* Placeholder Icon */}
                <div className="w-6 h-6 bg-gray- rounded-full mb-1"><img src="header_assets/i_cuisine.svg" alt="food" /></div>
                Cuisine
              </a>
            </li>
            {/* Festivals */}
            <li className="flex flex-col items-center text-sm hover:text-yellow-400 transition">
              <a href="/events" className="flex flex-col items-center">
                {/* Placeholder Icon */}
                <div className="w-6 h-6 bg-gray- rounded-full mb-1"><img src="header_assets/i_festival.svg" alt="festival" /></div>
                Events
              </a>
            </li>
            {/* Contact */}
            <li className="flex flex-col items-center text-sm hover:text-yellow-400 transition">
              <a href="/contacts" className="flex flex-col items-center">
                {/* Placeholder Icon */}
                <div className="w-6 h-6 bg-gray- rounded-full mb-1"><img src="header_assets/i_contact.svg" alt="contact" /></div>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;