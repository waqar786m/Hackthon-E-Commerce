// components/Navbar.jsx
import Link from "next/link";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className=" text-black">
      {/* Top bar */}
      <div className="bg-[#7E33E0] text-white py-2  text-sm">
        <div className="container mx-auto flex justify-between items-center px-20">
          <div className="flex space-x-4 gap-6">
            <div className="flex items-center ml-2">
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
        <div className="container mx-auto flex justify-between items-center py-4 px-20">
          {/* Logo */}
          <div className="text-2xl font-bold">Hekto</div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-[#FB2E86]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#0D0E43]">
                  Pages
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#0D0E43]">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-[#0D0E43]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#0D0E43]">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/Contact-Us" className="text-[#0D0E43]">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Search Bar */}
          <div className="w-[317px] h-[40px] flex items-center border border-[#E7E6EF] rounded-sm overflow-hidden">
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
