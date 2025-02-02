import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const ProductListing = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
      {/* Product Image */}
      <div className="bg-[#EEEFFB] rounded-md overflow-hidden h-48 flex items-center justify-center">
        <Link href={`/ProductDetail/${encodeURIComponent(product.name)}`}>
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain w-full sm:max-w-[180px] md:max-w-[200px]"
          />
        </Link>
      </div>

      {/* Product Details */}
      <div className="mt-4 text-center sm:text-left">
        <h2 className="text-base sm:text-lg text-[#151875] font-semibold">{product.name}</h2>
        <p className="text-xs sm:text-sm text-[#151875] mt-2">{product.description}</p>

        {/* Price and Discount */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
          <p className="text-[#151875] font-bold text-sm sm:text-base">${product.price}</p>
          {product.discountPercentage > 0 && (
            <p className="text-xs sm:text-sm text-[#FB2448]">
              {product.discountPercentage}% OFF
            </p>
          )}
          <p className="text-xs sm:text-sm text-[#151875] mt-2 sm:mt-0">{product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
