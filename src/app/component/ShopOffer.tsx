"use client";

import React from "react";
import Image from "next/image";

const ShopexOffer = () => {
  const offers = [
    {
      id: 1,
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      icon: "/images/icons/free-shipping.png", // Replace with your icon path
    },
    {
      id: 2,
      title: "Money Back Guarantee",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      icon: "/images/icons/money-back.png", // Replace with your icon path
    },
    {
      id: 3,
      title: "Award Winning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      icon: "/images/icons/award.png", // Replace with your icon path
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      icon: "/images/icons/support.png", // Replace with your icon path
    },
  ];

  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1A0B5B] mb-12">
        What Shopex Offers!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-16">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="w-full sm:w-[270px] md:w-[270px] h-[320px] bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={offer.icon}
                alt={offer.title}
                width={50} 
                height={50} 
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#151875] mb-2">
              {offer.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-500">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopexOffer;
