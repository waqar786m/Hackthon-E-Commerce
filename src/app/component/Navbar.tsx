// components/Navbar.jsx
import Link from "next/link";
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
import { RiArrowDropDownLine, RiShoppingCart2Line } from "react-icons/ri";
import { FaRegHeart, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="text-black">
      {/* Top bar */}
      <div className="bg-[#7E33E0] text-white py-2 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-20">
          <div className="flex space-x-4 gap-6 mb-2 md:mb-0">
            <div className="flex items-center">
              <MdOutlineMailOutline className="text-white" />
              <span className="ml-2">mhhasanul@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MdOutlinePhoneInTalk className="text-white" />
              <a href="#" className="underline hover:text-slate-300 ml-2">
                (12345)67890
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-white text-sm">English</div>
            <RiArrowDropDownLine className="text-white text-2xl" />
            <div className="text-white text-sm">USD</div>
            <RiArrowDropDownLine className="text-white text-2xl" />
            <div className="text-white text-sm">Login</div>
            <RiArrowDropDownLine className="text-white text-2xl" />
            <div className="text-white text-sm">Wishlist</div>
            <FaRegHeart className="text-white text-xl" />
            <RiShoppingCart2Line className="text-white text-xl" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-20">
          {/* Logo */}
          <div className="text-2xl font-bold mb-4 md:mb-0">Hekto</div>

          {/* Navigation Links */}
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6">
              <li>
                <Link href="/" className="text-[#FB2E86]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/HektoDemo" className="text-[#0D0E43]">
                  Pages
                </Link>
              </li>
              <li>
                <Link href="/ProductDetails" className="text-[#0D0E43]">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/Blogs" className="text-[#0D0E43]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/GridDefault" className="text-[#0D0E43]">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="text-[#0D0E43]">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Search Bar */}
          <div className="w-full md:w-[317px] h-[40px] flex items-center border border-[#E7E6EF] rounded-sm overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-4 py-2 outline-none text-gray-700"
            />
            <div className="w-[51px] h-full flex justify-center items-center bg-[#FB2E86] text-white">
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
