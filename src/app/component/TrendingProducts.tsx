"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const TrendingProducts = () => {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      price: "$26.00",
      oldPrice: "$42.00",
      image: "/trending/image1.png",
    },
    {
      id: 2,
      name: "Cantilever chair",
      price: "$26.00",
      oldPrice: "$42.00",
      image: "/trending/image2.png",
    },
    {
      id: 3,
      name: "Cantilever chair",
      price: "$26.00",
      oldPrice: "$42.00",
      image: "/trending/image3.png",
    },
    {
      id: 4,
      name: "Cantilever chair",
      price: "$26.00",
      oldPrice: "$42.00",
      image: "/trending/image4.png",
    },
  ];

  const discountProducts = [
    {
      id: 1,
      name: "Executive Seat Chair",
      price: "$32.00",
      image: "/trending/image7.png",
    },
    {
      id: 2,
      name: "Executive Seat Chair",
      price: "$32.00",
      image: "/trending/image8.png",
    },
    {
      id: 3,
      name: "Executive Seat Chair",
      price: "$32.00",
      image: "/trending/image9.png",
    },
  ];

  return (
    <div className="mt-20 bg-white">
      {/* Trending Products Section */}
      <motion.section
        className="py-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Trending Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-16">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <div className="w-full aspect-w-4 aspect-h-3 bg-[#F5F6F8] flex items-center justify-center rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
                {product.name}
              </h3>
              <p className="text-blue-600 font-bold mb-1">{product.price}</p>
              <p className="text-gray-500 line-through">{product.oldPrice}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Discount Section */}
      <motion.div
        className="flex flex-wrap justify-between items-start gap-6 p-4 ml-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Left Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* First Box */}
          <motion.div
            whileHover={{ y: -10 }}
            className="w-[420px] h-[270px] flex flex-col justify-between bg-pink-100 p-4 rounded-lg shadow-md"
          >
            <div>
              <h2 className="text-lg font-bold text-blue-900 mb-2">
                23% off in all products
              </h2>
              <a href="#" className="text-pink-600 font-medium">
                Shop Now
              </a>
            </div>
            <Image
              src="/trending/image5.png"
              alt="Clock on a table"
              width={213}
              height={207}
              className="ml-40 mt-2"
            />
          </motion.div>
          {/* Second Box */}
          <motion.div
            whileHover={{ y: -10 }}
            className="w-[420px] h-[270px] flex flex-col justify-between bg-blue-100 p-4 rounded-lg shadow-md"
          >
            <div>
              <h2 className="text-lg font-bold text-blue-900 mb-2">
                23% off in all products
              </h2>
              <a href="#" className="text-pink-600 font-medium">
                View Collection
              </a>
            </div>
            <Image
              src="/trending/image6.png"
              alt="Table with decorations"
              width={312}
              height={173}
              className="ml-20 mt-2"
            />
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4 mr-5">
          {discountProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 rounded-lg w-80 p-2 bg-[#F5F6F8] shadow-md"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={64}
                height={71}
                className="rounded-md"
              />
              <div>
                <h3 className="text-[#151875] text-lg font-semibold mb-1">
                  {product.name}
                </h3>
                <p className="text-[#151875]">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TrendingProducts;
