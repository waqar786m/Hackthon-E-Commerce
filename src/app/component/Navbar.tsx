"use client";

import Link from "next/link";
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
import { RiArrowDropDownLine, RiShoppingCart2Line } from "react-icons/ri";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useCart } from "../Context/CartContext";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { cart } = useCart(); // Access cart data
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0); // Total items in cart

  // Fetch product data
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[ _type == "product"]{
        name,
        "imageUrl": image.asset->url,
        price,
        description,
        category,
        "id": _id
      }`;
      const result = await client.fetch(query);
      setProducts(result);
    };
    fetchProducts();
  }, []);

  // Handle search logic
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
    setSearchResults(filtered);
  };

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
            <Link href="/Login">
              <div className="flex items-center space-x-2">
                <div className="text-white text-sm">Login</div>
                <FiUser className="text-white text-xl" />
              </div>
            </Link>
            <div className="text-white text-sm">Wishlist</div>
            <FaRegHeart className="text-white text-xl" />

            {/* Cart Icon with Count */}
            <Link href="/Cart" className="relative">
              <RiShoppingCart2Line className="text-white text-xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-20">
          {/* Logo */}
          <div className="text-2xl font-bold mb-4 md:mb-0">Hekto</div>

          {/* Navigation Links */}
          <nav className="mb-4 md:mb-0 w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6">
              <li>
                <Link href="/" className="text-[#FB2E86]">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/HektoDemo"} className="text-[#0D0E43]">
                  Pages
                </Link>
              </li>
              <li>
                <Link href={"/GridDefault"} className="text-[#0D0E43]">
                  Products
                </Link>
              </li>
              <li>
                <Link href={"/Blogs"} className="text-[#0D0E43]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={"/Shop"} className="text-[#0D0E43]">
                  Shop
                </Link>
              </li>
              <li>
                <Link href={"/Contact"} className="text-[#0D0E43]">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Search Bar */}
          <div className="w-full md:w-[317px] h-[40px] flex items-center border border-[#E7E6EF] rounded-sm overflow-hidden mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="flex-1 px-4 py-2 outline-none text-gray-700"
            />
            <div className="w-[51px] h-full flex justify-center items-center bg-[#FB2E86] text-white">
              <FaSearch />
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      {searchTerm && (
        <div className="container mx-auto mt-4">
          <h3 className="text-lg font-bold">Search Results:</h3>
          <ul className="space-y-2">
            {searchResults.map((product) => (
              <li key={product.id} className="border p-2 rounded-md">
                <Link href={`/product/${product.id}`} className="text-blue-600">
                  {product.name} - ${product.price}
                </Link>
              </li>
            ))}
          </ul>
          {searchResults.length === 0 && <p>No products found.</p>}
        </div>
      )}
    </header>
  );
}
