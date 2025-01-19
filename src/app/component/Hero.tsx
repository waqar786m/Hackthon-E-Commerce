import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-10 md:px-16 lg:px-28 relative">
      <div className="container mx-auto flex  sm:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-lg z-10 text-center sm:text-left">
          <p className="text-lg text-[#FB2E86]">
            Best Furniture For Your Castle
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-black mt-4 mb-6">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="text-[#8A8FB9] mb-6">
            Explore a wide selection of premium furniture with the latest styles
            and unbeatable comfort.
          </p>
          <button
            className="w-[163px] h-[50px] bg-[#FB2E86] text-white rounded hover:bg-pink-600"
            aria-label="Shop Now"
          >
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="relative bg-gradient-to-r from-purple-300 to-pink-300 p-4 rounded-full flex items-center justify-center max-w-xs mx-auto sm:max-w-sm md:max-w-md">
          {/* Chair Image */}
          <Image
            src="/hero/image.png" // Replace with your chair image path
            alt="Chair"
            width={629}
            height={629}
            className="object-contain"
          />

          {/* Discount Badge */}
          <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm font-semibold rounded-full px-4 py-1">
            50% off
          </div>
        </div>
      </div>
    </section>
  );
}
