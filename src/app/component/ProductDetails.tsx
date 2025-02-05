"use client";

import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import Navbar from "./Navbar";
import { urlFor } from "@/sanity/lib/image";
import Description from "../ProductDetail/Description";
import { useCart } from "../Context/CartContext";

const ProductDetails = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />

      {/* Product Section */}
      <div className="w-[1150px] flex flex-wrap p-6 rounded-lg mt-20 ml-28">
        {/* Left Side: Images */}
        <div className="w-full md:w-1/3 flex">
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={375}
            height={487}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-2/3 space-y-2 p-10 mt-6">
          <h1 className="text-3xl font-bold text-[#0D134E]">{product.name}</h1>
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold text-[#151875]">
              ${product.price}
            </span>
            <span className="text-[#FB2E86] line-through">
              %{product.discountPercentage}
            </span>
          </div>
          <p className="text-[#A9ACC6] text-lg">{product.description}</p>

          {/* Add to Cart Button */}
          <div className="flex items-center gap-4 mt-4">
          <button
            className="bg-[#151875] text-white px-6 py-2 rounded-lg text-center"
            onClick={() =>
              addToCart({
                name: product.name,
                price: product.price,
                image: urlFor(product.image).url(),
                quantity: 1,
              })
            }
          >
            Add to Cart
          </button>
          <FaRegHeart className="text-[#535399] text-lg cursor-pointer" />
            </div>
          <div className="flex gap-4 mt-4">
            <h3 className="text-sm font-bold text-[#151875]">Category:</h3>
            <p className="text-sm font-bold text-[#A9ACC6]">
              {product.category}
            </p>
          </div>

          <div className="flex gap-4">
            <h3 className="text-sm font-bold text-[#151875]">Stock Level:</h3>
            <p className="text-sm font-bold text-[#A9ACC6]">
              {product.stockLevel}
            </p>
          </div>

          <div className="flex gap-3">
            <h3 className="text-sm font-bold text-[#151875]">Share</h3>
            <FaFacebook className="text-[#151875]" />
            <RiInstagramFill className="text-[#FB2E86]" />
            <AiFillTwitterCircle className="text-[#151875]" />
          </div>
        </div>
      </div>

      <Description />
    </>
  );
};

export default ProductDetails;
