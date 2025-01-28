// components/ProductListing.tsx
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const ProductListing = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
      {/* Product Image */}
      <div className="bg-[#EEEFFB] rounded-md overflow-hidden h-60 flex items-center justify-center">
        <Link href={`/ProductDetail/${encodeURIComponent(product.name)}`}>
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <h2 className="text-lg text-[#151875] font-semibold">{product.name}</h2>
        <p className="text-sm text-[#151875] mt-2">{product.description}</p>

        {/* Price and Discount */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-[#151875] font-bold">${product.price}</p>
          {product.discountPercentage > 0 && (
            <p className="text-sm text-[#FB2448]">
              {product.discountPercentage}% OFF
            </p>
          )}
          <p className="text-sm text-[#151875] mt-2">{product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
