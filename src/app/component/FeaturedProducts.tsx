"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegHeart, FaHeart } from "react-icons/fa"; // Import wishlist icons

const FeaturedProducts = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Save wishlist to localStorage when updated
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const products = [
    { id: 1, name: "Cantilever chair", code: "Y523001", price: "$42.00", image: "/images/chair1.png" },
    { id: 2, name: "Cantilever chair", code: "Y523001", price: "$42.00", image: "/images/chair2.png", highlighted: true },
    { id: 3, name: "Cantilever chair", code: "Y523001", price: "$42.00", image: "/images/chair3.png" },
    { id: 4, name: "Cantilever chair", code: "Y523001", price: "$42.00", image: "/images/chair4.png" },
  ];

  return (
    <div className="py-10 mt-10 ">
      <h2 className="text-base xs:text-lg sm:text-xl md:text-3xl font-extrabold text-center text-[#1A0B5B] mb-6 px-4">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 px-4 md:px-8 lg:px-16">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full xs:w-[250px] sm:w-[270px] h-auto bg-[#FFFFFF] border rounded-xl shadow-md p-4 mx-auto transform transition-transform hover:scale-105 hover:shadow-lg duration-300"
          >
            {/* Product Image Box */}
            <div className="relative w-full h-[160px] xs:h-[180px] sm:h-[200px] flex justify-center items-center bg-[#F6F7FB] rounded-md overflow-hidden">
              {/* Wishlist Icon */}
              <div
                className={`absolute top-2 right-2 p-2 rounded-full shadow-lg cursor-pointer ${
                  wishlist.includes(product.id) ? "bg-[#FB2E86] text-white" : "bg-white text-[#FB2E86]"
                }`}
                onClick={() => toggleWishlist(product.id)}
              >
                {wishlist.includes(product.id) ? <FaHeart /> : <FaRegHeart />}
              </div>
              <Image src={product.image} alt={product.name} width={140} height={140} className="object-contain" />
            </div>

            {/* Product Details */}
            <h3 className="text-sm xs:text-base sm:text-lg text-center font-semibold text-[#FB2E86] mt-3">
              {product.name}
            </h3>
            <p className="text-xs xs:text-sm text-center text-[#151875]">Code: {product.code}</p>
            <p className="text-base xs:text-lg sm:text-xl font-bold text-center text-[#151875] mt-2">
              {product.price}
            </p>

            {/* Link to Product Details Page */}
            <div className="text-center mt-4">
              <Link href={`/product/${product.id}`} className="text-sm font-medium text-[#FB2E86] hover:underline">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
