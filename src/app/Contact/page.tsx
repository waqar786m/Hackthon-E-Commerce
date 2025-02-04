import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

function Contact() {
  return (
    <div>
      <>
        <Navbar />

        {/* Hero Section */}
     <div className="mx-auto h-[285px] bg-gray-100 py-10 px-6 sm:px-28">
        <div className="container mx-auto flex flex-col justify-center items-start h-full">
          <h2 className="text-3xl text-[#101750] font-bold mb-2">Contact Us</h2>
          <div className="flex flex-row items-center">
            <p className="text-black">Home.Page</p>
            <p className="text-pink-500">.Contact Us</p>
          </div>
        </div>
      </div>

        <div className="max-w-7xl mx-auto p-6 mt-10">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 sm:grid-cols-1 sm:gap-6">
            {/* Left Side: Information About Us */}
            <div>
              <h2 className="text-2xl text-[#151875] font-bold mb-4 sm:text-xl">
                Information About us
              </h2>
              <p className="text-[#8A8FB9] mb-6 sm:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices tristique amet erat vitae eget dolor. Accumsan
                faucibus vitae lobortis quis bibendum quam.
              </p>
              <div className="flex space-x-4 sm:space-x-2">
                <div className="w-10 h-10 bg-[#5625DF] rounded-full"></div>
                <div className="w-10 h-10 bg-[#FF27B7] rounded-full"></div>
                <div className="w-10 h-10 bg-[#37DAF3] rounded-full"></div>
              </div>
            </div>

            {/* Right Side: Contact Way */}
            <div>
              <h2 className="text-2xl text-[#151875] font-bold mb-4 sm:text-xl">
                Contact Way
              </h2>
              <div className="grid grid-cols-2 gap-10 sm:grid-cols-1 sm:gap-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#5726DF] flex items-center justify-center rounded-full"></div>
                  <p className="ml-4 text-[#8A8FB9] text-sm sm:text-xs">
                    Tel: 877-67-88-99 <br /> E-Mail: shop@store.com
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#FB2E86] flex items-center justify-center rounded-full"></div>
                  <p className="ml-4 text-[#8A8FB9] text-sm sm:text-xs">
                    Support Forum <br /> For over 24hr
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#FFB265] flex items-center justify-center rounded-full"></div>
                  <p className="ml-4 text-[#8A8FB9] text-sm sm:text-xs">
                    20 Margaret st, London <br /> Great britain, 3NM98-LK
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#1BE982] flex items-center justify-center rounded-full"></div>
                  <p className="ml-4 text-[#8A8FB9] text-sm sm:text-xs">
                    Free standard shipping <br /> on all orders.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center sm:grid-cols-1 sm:gap-6">
            {/* Left Side: Form */}
            <div>
              <h2 className="text-2xl text-[#151875] font-bold mb-4 sm:text-xl">
                Get In Touch
              </h2>
              <p className="text-[#8A8FB9] mb-6 sm:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices tristique amet erat vitae eget dolor.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 sm:gap-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <input
                    type="email"
                    placeholder="Your E-mail"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
                <textarea
                  placeholder="Type Your Message"
                  rows={10}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#FB2E86] text-white py-3 px-6 rounded hover:bg-pink-600 focus:outline-none focus:ring focus:ring-pink-300"
                >
                  Send Mail
                </button>
              </form>
            </div>

            {/* Right Side: Illustration */}
            <div>
              <img
                src="/contact/image.png"
                alt="Contact Illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Contact;
