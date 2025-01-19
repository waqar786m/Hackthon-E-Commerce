// pages/blog.jsx
import React from "react";
import Image from "next/image";
import { FaPenNib } from "react-icons/fa";
import { MdOutlineEditCalendar } from "react-icons/md";

import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Blog() {
  const blog = [
    {
      id: 1,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      image: "/blogs/image1.png",
      surfAuxion: "Surf Auxion",
      date: "Dec 28, 2024",
    },
    {
      id: 2,
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      image: "/blogs/image2.png",
      surfAuxion: "Surf Auxion",
      date: "Dec 27, 2024",
    },
    {
      id: 3,
      title: "Sit nam congue feugiat nisl, mauris amet nisi.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      image: "/blogs/image3.png",
      surfAuxion: "Surf Auxion",
      date: "Dec 26, 2024",
    },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Recent Post Title 1",
      date: "Dec 28, 2024",
      image: "/blogs/recentpost/image1.png",
    },
    {
      id: 2,
      title: "Recent Post Title 2",
      date: "Dec 27, 2024",
      image: "/blogs/recentpost/image2.png",
    },
    {
      id: 3,
      title: "Recent Post Title 3",
      date: "Dec 26, 2024",
      image: "/blogs/recentpost/image3.png",
    },
    {
      id: 4,
      title: "Recent Post Title 4",
      date: "Dec 26, 2024",
      image: "/blogs/recentpost/image4.png",
    },
  ];

  const saleProduct = [
    {
      id: 1,
      title: "Sale Product 1",
      image: "/blogs/saleproducts/image1.png",
      description: "Get the best deals on this amazing product!",
    },
    {
      id: 2,
      title: "Sale Product 2",
      image: "/blogs/saleproducts/image2.png",
      description: "Discounts you can't resist!",
    },
    {
      id: 3,
      title: "Sale Product 3",
      image: "/blogs/saleproducts/image3.png",
      description: "Don't miss out on this offer!",
    },
  ];

  const OfferProduct = [
    {
      id: 1,
      title: "Duis lectus est.",
      image: "/blogs/offerproducts/image1.png",
      price: "$12.00-$15.00",
    },
    {
      id: 2,
      title: "Sed placerat.",
      image: "/blogs/offerproducts/image2.png",
      price: "$12.00-$15.00",
    },
    {
      id: 3,
      title: "Netus proin.",
      image: "/blogs/offerproducts/image3.png",
      price: "$12.00-$15.00",
    },
    {
      id: 4,
      title: "Platea in.",
      image: "/blogs/offerproducts/image4.png",
      price: "$12.00-$15.00",
    },
  ];
  return (
    <>
    <Navbar />
    <div className="min-h-screen py-20 px-28">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-8">
        {/* Blog Section */}
        <div className="w-full lg:w-2/3">
          <div className="grid gap-8">
            {blog.map((item) => (
              <div key={item.id} className="bg-white ">
                <div className="relative w-full h-[453px]">
                  <Image
                    src={item.image}
                    alt="Blog Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="flex space-x-10 mb-4">
                    <div className="flex items-center gap-2">
                      <FaPenNib className="text-[#FB2E86]" />
                      <div className="px-4 py-1 bg-[#FFECE2] text-[#151875] text-sm rounded-md">
                        {item.surfAuxion}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdOutlineEditCalendar className="text-[#FFA454]" />
                      <div className="px-4 py-1 bg-[#FFECE2] text-[#151875] text-sm rounded-md">
                        {item.date}
                      </div>
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold text-[#151875] mb-4">
                    {item.title}
                  </h1>
                  <p className="text-[#8A8FB9] text-[18px] mb-6">
                    {item.description}
                  </p>
                  <p className="text-[#151875] cursor-pointer hover:underline">
                    Read More
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="w-full lg:w-1/3">
          <div className="mb-8">
            <h2 className="text-[#151875] text-xl font-bold">Search</h2>
            <br />
            <input
              type="text"
              placeholder="Search"
              className="w-[270px] h-[40px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#151875] mb-4">
              Categories
            </h2>
            <div className="grid grid-cols-2 space-y-2 gap-y-4">
              {/* Left Column */}
              <div>
                <button className="w-[122] h-[30] bg-[#F939BF] text-center text-white px-4 py-1 rounded-sm font-medium text-sm">
                  Hobbies (14)
                </button>
                <p className="text-[#151875] font-medium text-sm mt-4">
                  Women (21)
                </p>
                <p className="text-[#151875] font-medium text-sm mt-2">
                  Women (21)
                </p>
              </div>
              {/* Right Column */}
              <div>
                <p className="text-[#151875] font-medium text-sm">Women (21)</p>
                <p className="text-[#151875] font-medium text-sm mt-2">
                  Women (21)
                </p>
                <p className="text-[#151875] font-medium text-sm mt-2">
                  Women (21)
                </p>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#151875] mb-4">
              Recent Posts
            </h2>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center gap-4">
                  <Image
                    src={post.image}
                    alt="Recent Post"
                    width={70}
                    height={51}
                    className="rounded-md"
                  />
                  <div>
                    <h3 className="text-[#151875] font-bold text-sm">
                      {post.title}
                    </h3>
                    <p className="text-[#8A8FB9] text-xs">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Sale Product */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#151875] mb-4">
              Sale Products
            </h2>
            <div className="space-y-4">
              {saleProduct.map((product) => (
                <div key={product.id} className="flex items-center gap-4">
                  <Image
                    src={product.image}
                    alt="Sale Product"
                    width={70}
                    height={51}
                    className="rounded-md"
                  />
                  <div>
                    <h3 className="text-[#151875] font-bold text-sm">
                      {product.title}
                    </h3>
                    <p className="text-[#8A8FB9] text-xs">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Offer Product */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#151875] mb-4">
              Offer Product
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {OfferProduct.map((OfferProduct) => (
                <div
                  key={OfferProduct.id}
                  className="flex flex-col items-center gap-2 w-[140px] h-[160px] rounded-md p-2"
                >
                  <Image
                    src={OfferProduct.image}
                    alt="Offer Product"
                    width={126}
                    height={80}
                    className="rounded-md"
                  />
                  <div className="text-center">
                    <h3 className="text-[#151875] font-bold text-sm">
                      {OfferProduct.title}
                    </h3>
                    <p className="text-[#8A8FB9] text-xs">
                      {OfferProduct.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
       
          <div className="mb-8">
  {/* Follow Section */}
  <h2 className="text-xl font-bold text-[#151875] mb-4">Follow</h2>
  <div className="flex items-center gap-4 mb-6">
    <p className="bg-[#5625DF] text-white text-2xl p-3 rounded-full">
    <FaFacebook />
    </p>
    <p className="bg-[#FF27B7] text-white text-2xl p-3 rounded-full">
    <BsInstagram />
    </p>
    <p className="bg-[#37DAF3] text-white text-2xl p-3 rounded-full">
    <AiFillTwitterCircle  />
    </p>
  </div>
  {/* Tags Section */}
  <h2 className="text-xl font-bold text-[#151875] mb-4">Tags</h2>
  <div className="flex flex-wrap gap-4">
    <a href="#" className="text-[#151875] font-medium text-sm hover:text-pink-500">
      General
    </a>
    <a href="#" className="text-pink-500 font-medium text-sm">
      Atsanil
    </a>
    <a href="#" className="text-[#151875] font-medium text-sm hover:text-pink-500">
      Insas.
    </a>
    <a href="#" className="text-[#151875] font-medium text-sm hover:text-pink-500">
      Bibsaas
    </a>
    <a href="#" className="text-[#151875] font-medium text-sm hover:text-pink-500">
      Nulla.
    </a>
  </div>
</div>

        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
