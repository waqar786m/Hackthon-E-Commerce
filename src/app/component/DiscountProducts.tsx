import Image from "next/image";

export default function DiscountProducts() {
  return (
    <section className="py-16 px-8 lg:px-24 relative mt-20 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">
          Discount Item
        </h2>
        <ul className="flex justify-center gap-6 text-sm">
          <li className="text-pink-600 underline">Wood Chair</li>
          <li className="text-blue-900">Plastic Chair</li>
          <li className="text-blue-900">Sofa Collection</li>
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
          <p className="text-[#B7BACB]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="grid grid-cols-2 space-y-2">
            <li className="text-[#B8B8DC]">Material expose like metals</li>
            <li className="text-[#B8B8DC]">Clear lines and geometric figures</li>
            <li className="text-[#B8B8DC]">Simple neutral colours</li>
            <li className="text-[#B8B8DC]">Material expose like metals</li>
          </ul>
          <button className="w-[200px] h-[57px] bg-[#FB2E86] text-white font-bold rounded hover:bg-pink-700 transition mt-6">
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center mt-10 lg:mt-0 lg:w-1/2">
          {/* Circular Background */}
          <div className="w-80 h-80 bg-pink-100 rounded-full absolute"></div>
          {/* Chair Image */}
          <Image
            src="/discountproducts/image.png" // Replace with the actual image path
            alt="Discount Chair"
            width={699}
            height={597}
            className="relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
