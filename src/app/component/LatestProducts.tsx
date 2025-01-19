"use client";

import React from "react";

const LatestProducts = () => {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      price: "$42.00",
      discount: "$65.00",
      image: "/leatestproduct/chair1.png",
    },
    {
      id: 2,
      name: "Cantilever chair",
      price: "$42.00",
      discount: "$65.00",
      image: "/leatestproduct/chair2.png",
      highlighted: true,
    },
    {
      id: 3,
      name: "Cantilever chair",
      price: "$42.00",
      discount: "$65.00",
      image: "/leatestproduct/chair3.png",
    },
    {
      id: 4,
      name: "Cantilever chair",
      price: "$42.00",
      discount: "$65.00",
      image: "/leatestproduct/chair4.png",
    },
    {
      id: 5,
      name: "Cantilever chair",
      price: "$42.00",
      discount: "$65.00",
      image: "/leatestproduct/chair5.png",
      highlighted: true,
    },
    {
      id: 6,
      name: "Cantilever chair",
      price: "$42.00",
      discount: "$65.00",
      image: "/leatestproduct/chair6.png",
    },
  ];

  return (
    <div className="py-10 flex flex-col justify-center items-center">
      <h2 className="text-2xl xs:text-3xl font-bold text-center text-purple-900 mb-8">
        Latest Products
      </h2>
      <ul className="grid grid-cols-4 gap-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <li className="text-[#FB2E86] underline">New Arrival</li>
        <li className="text-[#151875]">Best Seller</li>
        <li className="text-[#151875]">Featured</li>
        <li className="text-[#151875]">Special Offer</li>
      </ul>
      {/* Main Grid with 2 rows */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 lg:px-20 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className={`w-full sm:w-[270px] h-[306px] relative bg-white border rounded-lg shadow-lg overflow-hidden ${
              product.highlighted ? "border-blue-500" : "border-gray-200"
            }`}
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              width={223}
              height={229}
              className="w-full h-[270px] object-contain bg-[#F7F7F7]" // Adjust image size
            />

            {/* Product Name and Price */}
            <div className="absolute bottom-0 left-4 right-4 flex justify-between space-x-6">
              <h3 className="text-base xs:text-lg font-semibold text-[#151875]">{product.name}</h3>
              <p className="text-lg xs:text-xl font-bold text-[#151875]">{product.price}</p>
              <p className="text-[#FB2448] line-through">{product.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
