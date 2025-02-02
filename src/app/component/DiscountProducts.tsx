import Image from "next/image";

export default function DiscountProducts() {
  return (
    <section className="py-16 px-8 lg:px-24 relative mt-20 bg-[#F1F0FF]">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">
          Discount Item
        </h2>
        <ul className="flex justify-center gap-6 text-sm">
          <li className="text-pink-600 underline cursor-pointer">Wood Chair</li>
          <li className="text-blue-900 cursor-pointer">Plastic Chair</li>
          <li className="text-blue-900 cursor-pointer">Sofa Collection</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-lg z-10 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-blue-900">
            20% Discount Of All Products
          </h1>
          <p className="text-pink-600 text-lg font-medium">Eams Sofa Compact</p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="grid grid-cols-2 gap-2 text-gray-500">
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">✔</span> Material expose like metals
            </li>
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">✔</span> Clear lines and geometric figures
            </li>
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">✔</span> Simple neutral colours
            </li>
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">✔</span> Material expose like metals
            </li>
          </ul>
          <button className="w-[200px] h-[57px] bg-[#FB2E86] text-white font-bold rounded hover:bg-pink-700 transition mt-6">
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center lg:mt-0 lg:w-1/2">
          {/* Circular Background */}
          <div className=" rounded-full absolute lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] top-[-100px] lg:top-[-150px]"></div>
          {/* Chair Image */}
          <Image
            src="/discountproducts/image.png" // Using uploaded image
            alt="Discount Chair"
            width={699}
            height={597}
            className="relative z-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
