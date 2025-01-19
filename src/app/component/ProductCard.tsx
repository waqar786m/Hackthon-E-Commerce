import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="bg-[#F1F0FF] py-10 px-5 flex justify-center items-center mt-20">
      <div className="max-w-4xl flex flex-col md:flex-row items-center">
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 p-6 flex justify-center">
          <div className="absolute left-4 md:left-10"></div>
          <Image
            src="/trending/image.png" // Replace with your image path
            alt="BB&B Italian Sofa"
            width={300} // Adjusted for smaller screens
            height={320}
            className="relative z-10 object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Unique Features Of Latest & Trending Products
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center justify-center md:justify-start">
              <span className="h-3 w-3 bg-red-500 rounded-full mr-3"></span>
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="h-3 w-3 bg-blue-500 rounded-full mr-3"></span>
              Reinforced with double wood dowels, glue, screw-nails corner blocks and machine nails
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="h-3 w-3 bg-green-500 rounded-full mr-3"></span>
              Arms, backs, and seats are structurally reinforced
            </li>
          </ul>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <button className="bg-pink-500 text-white px-6 py-2 rounded-md">
              Add To Cart
            </button>
            <div className="text-center md:text-right">
              <p className="font-bold text-gray-800">BB&B Italian Sofa</p>
              <p className="text-pink-500 text-lg">$210.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
