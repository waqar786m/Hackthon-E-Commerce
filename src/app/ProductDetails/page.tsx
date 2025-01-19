import React from "react";

import { FaRegHeart } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Info from "./Info";
import Description from "./Description";

const ProductDetails = () => {
  const product = {
    name: "Playwood arm chair",
    price: "$32.00",
    oldPrice: "$39.00",
    rating: 4.5,
    reviews: 22,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    categories: [],
    tags: [],
    images: ["/productdetails/image2.png", "/productdetails/image3.png", "/productdetails/image4.png"],
    mainImage: "/productdetails/image1.png",
  };

  return (
    <>

    <Navbar />

     {/* Hero Section */}
     <div className="mx-auto h-[285px] bg-gray-100 py-10 px-28">
          <div className="container mx-auto flex flex-col justify-center items-start h-full">
            {/* About Us Title */}
            <h2 className="text-3xl text-[#101750] font-bold mb-2">
            Product Details
            </h2>

            {/* Home.Page.About Us Row */}
            <div className="flex flex-row items-center">
              <p className="text-black">Home.Page</p>
              <p className="text-pink-500">.Product Details</p>
            </div>
          </div>
        </div>

    <div className="w-[1150px] h-[509px] flex flex-wrap bg-[#FFFFFF] shadow-lg p-6 rounded-lg mt-20 ml-28">
      {/* Left Side: Thumbnails and Main Image */}
      <div className="w-full md:w-1/3 flex">
        {/* Thumbnail Images */}
        <div className="flex flex-col space-y-2 mt-16">
          {product.images.slice(0, 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={151}
              height={155}
              className=" object-cover "
            />
          ))}
        </div>
        {/* Main Product Image */}
        <div className="ml-4 flex justify-center items-center">
          <img
            src={product.mainImage}
            alt={product.name}
            width={375}
            height={487}
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Right Side: Product Details */}
      <div className="w-full md:w-2/3 space-y-2 p-10 mt-6">
        {/* Product Name */}
        <h1 className="text-3xl font-bold text-[#0D134E]">{product.name}</h1>

        {/* Product Rating and Reviews */}
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500 text-lg">
            {"★".repeat(Math.floor(product.rating))}
          </span>
          <span className="text-gray-400">({product.reviews})</span>
        </div>

        {/* Product Price */}
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold text-[#151875]">
            {product.price}
          </span>
          <span className="text-[#FB2E86] line-through">
            {product.oldPrice}
          </span>
        </div>

        {/* Product Description */}
        <p className="text-[#A9ACC6] text-[29px]">{product.description}</p>

        {/* Add to Cart Button */}
        <div className="flex items-center justify-center space-x-2">
          <button className="text-[#151875] text-2xl px-4 py-2 ">
            Add to Cart
          </button>
          <FaRegHeart className="text-[#535399] text-lg cursor-pointer" />
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="text-sm font-bold text-[#151875]">Categories:</h3>
        </div>

        {/* Product Tags */}
        <div>
          <h3 className="text-sm font-bold text-[#151875]">Tags</h3>
        </div>

        {/* Share Options */}
        <div className="flex gap-3">
          <h3 className="text-sm font-bold text-[#151875]">Share</h3>
          <FaFacebook className="text-[#151875]" />
          <RiInstagramFill className="text-[#FB2E86]" />
          <AiFillTwitterCircle className="text-[#151875]" />
        </div>
      </div>
    </div>
    
    <Description />
    <Info />

    <Footer />
    </>
  );
};

export default ProductDetails;
