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
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-900 mb-8 animate__animated animate__fadeIn">
        Latest Products
      </h2>
      <ul className="grid grid-cols-4 gap-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <li className="text-[#FB2E86] underline">New Arrival</li>
        <li className="text-[#151875]">Best Seller</li>
        <li className="text-[#151875]">Featured</li>
        <li className="text-[#151875]">Special Offer</li>
      </ul>
      {/* Main Grid with 2 rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:px-20 mt-10">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`w-full sm:w-[360px] h-[306px] relative bg-[#FFFFFF] border rounded-lg shadow-lg overflow-hidden ${
              product.highlighted ? "border-blue-500" : "border-gray-200"
            } animate__animated animate__fadeIn animate__delay-${index * 200}ms`} // Adding delay animation for each product
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              width={360}
              height={270}
              className="w-full h-[270px] object-contain bg-[#F7F7F7]" // Adjust image size to fill the container
            />

            {/* Product Name and Price */}
            <div className="absolute bottom-0 left-4 right-4 flex justify-between space-x-4">
              <h3 className="text-base sm:text-lg font-semibold text-[#151875]">{product.name}</h3>
              <p className="text-lg sm:text-xl font-bold text-[#151875]">{product.price}</p>
              <p className="text-[#FB2448] line-through">{product.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
