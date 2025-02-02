import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="w-full bg-[#F1F0FF] py-10 px-4 sm:px-6 lg:px-8 flex justify-center items-center mt-20">
      <div className="max-w-6xl w-full flex flex-col sm:flex-row items-center gap-8">
        {/* Product Image */}
        <div className="w-full sm:w-1/2 lg:w-[55%] relative h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src="/trending/image.png"
            alt="BB&B Italian Sofa"
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Product Details */}
        <div className="w-full sm:w-1/2 lg:w-[45%] p-4 sm:p-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Unique Features Of Latest & Trending Products
          </h2>
          
          <ul className="space-y-4 mb-8">
            {[
              {
                color: "bg-red-500",
                text: "All frames constructed with hardwood solids and laminates"
              },
              {
                color: "bg-blue-500",
                text: "Reinforced with double wood dowels, glue, screw-nails corner blocks and machine nails"
              },
              {
                color: "bg-green-500",
                text: "Arms, backs, and seats are structurally reinforced"
              }
            ].map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className={`${feature.color} h-3 w-3 rounded-full mt-1.5 mr-3 flex-shrink-0`} />
                <span className="text-gray-600 text-base sm:text-lg">{feature.text}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <button className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg transition-colors duration-200">
              Add To Cart
            </button>
            <div className="text-center sm:text-right">
              <p className="text-lg font-semibold text-gray-900">BB&B Italian Sofa</p>
              <p className="text-2xl font-bold text-pink-600">$210.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
