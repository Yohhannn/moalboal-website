import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto">
            <div className="flex justify-between">
                <Link href="/">
                    <h1 className="text-2xl font-bold">MOALBOAL</h1>
                </Link>
                <ul className="flex justify-end items-center font-bold space-x-5 tracking-wide">
                    <li><button className="btn btn-outline btn-info">HOME</button></li>
                    <li><button className="btn btn-outline btn-info">ABOUT</button></li>
                    <li><button className="btn btn-outline btn-info">ATTRACTIONS</button></li>
                    <li><button className="btn btn-outline btn-info">EVENTS & FESTIVALS</button></li>
                    <li><button className="btn btn-outline btn-info">FOOD & CULTURE</button></li>

                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header