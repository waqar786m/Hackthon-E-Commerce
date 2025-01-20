"use client";

import React from "react";
import Link from "next/link"; // Import Link component

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      code: "Y523001",
      price: "$42.00",
      image: "/images/chair1.png",
    },
    {
      id: 2,
      name: "Cantilever chair",
      code: "Y523001",
      price: "$42.00",
      image: "/images/chair2.png",
      highlighted: true,
    },
    {
      id: 3,
      name: "Cantilever chair",
      code: "Y523001",
      price: "$42.00",
      image: "/images/chair3.png",
    },
    {
      id: 4,
      name: "Cantilever chair",
      code: "Y523001",
      price: "$42.00",
      image: "/images/chair4.png",
    },
  ];

  return (
    <div className="py-10 mt-10">
      <h2 className="text-base xs:text-lg sm:text-xl md:text-3xl font-extrabold text-center text-[#1A0B5B] mb-6 px-4 animate-fade-in-down">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 px-4 md:px-8 lg:px-16">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="w-full xs:w-[250px] sm:w-[270px] h-auto bg-[#FFFFFF] border rounded-xl shadow-md p-4 mx-auto transform transition-transform hover:scale-105 hover:shadow-lg duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Product Image Box */}
            <div className="w-full h-[160px] xs:h-[180px] sm:h-[200px] flex justify-center items-center bg-[#F6F7FB] rounded-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                width={140}
                height={140}
                className="object-contain"
              />
            </div>

            {/* Product Details */}
            <h3 className="text-sm xs:text-base sm:text-lg text-center font-semibold text-[#FB2E86] mt-3">
              {product.name}
            </h3>
            <p className="text-xs xs:text-sm text-center text-[#151875]">
              Code: {product.code}
            </p>
            <p className="text-base xs:text-lg sm:text-xl font-bold text-center text-[#151875] mt-2">
              {product.price}
            </p>

            {/* Link to Product Details Page */}
            <div className="text-center mt-4">
              <Link
                href={`/product/${product.id}`} // Dynamic route to product details
                className="text-sm font-medium text-[#FB2E86] hover:underline"
              >
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
