import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-800 text-white py-3">
        <div className="container mx-auto">
            <div className="flex justify-between">
                <Link href='/'>
                    <h1 className="py-2 px-2 text-2xl md:text-2x1 font-bold active:text-yellow-400 hover:text-gray-100">MOALBOAL</h1>
                </Link>
                <ul className="flex justify-end items-center space-x-1 tracking-wide">
                    {/* <li>
                        <a href="/home">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        </a>
                    </li> */}
                    <li className="text-sm hover:bg-slate-700 px-2 py-2 rounded transition active:text-yellow-400">
                        <a href="/home">
                        {/* <img src="\i_home.svg" alt="home" style={{ width: '30px', height: '30px' }} /> */}
                        Home</a>
                    </li>

                    <li className="text-sm hover:bg-slate-700 px-2 py-2 rounded transition active:text-yellow-400">
                        <a href="/about">
                        {/* <img src="\i_about.svg" alt="about" style={{ width: '30px', height: '30px' }} /> */}
                        About Us</a>
                    </li>

                    <li className="text-sm hover:bg-slate-700 px-2 py-2 rounded transition active:text-yellow-400">
                        <a href="/home">
                        {/* <img src="\i_attraction.svg" alt="attractions" style={{ width: '30px', height: '30px' }} /> */}
                        Attractions</a>
                    </li>

                    <li className="text-sm hover:bg-slate-700 px-2 py-2 rounded transition active:text-yellow-400">
                        <a href="/home">
                        {/* <img src="\i_fc.svg" alt="food_and_culture" style={{ width: '30px', height: '30px' }} /> */}
                        Food & Culture</a>
                    </li>

                    <li className="text-sm hover:bg-slate-700 px-2 py-2 rounded transition active:text-yellow-400">
                        <a href="/home">
                        Travel</a>
                    </li>

                    <li className="text-sm hover:bg-slate-700 px-2 py-2 rounded transition active:text-yellow-400">
                        <a href="/home">
                        Events & Festivals</a>
                    </li>
                    
                    <li className="text-sm hover:bg-slate-700 px-2 py-2 rounded transition active:text-yellow-400">
                        <a href="/home">
                        Contact</a>
                    </li>
                </ul>

            </div>
        </div>
    </header>
  )
}

export default Header