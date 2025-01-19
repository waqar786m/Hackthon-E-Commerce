"use client";

import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";

const sanity = sanityClient({
  projectId: "2z3mii5z",
  dataset: "production",
  apiVersion: "2025-01-15",
  useCdn: true,
});

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type== "product"]{
          _id,
          name,
          "imageUrl": image.asset->url,
          price,
          description,
          discountPercentage,
          isFeaturedProduct,
          stockLevel,
          category
        }`;

      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  const truncateDescription = (description: string): string => {
    return description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4 mx-20">
      <h1 className="text-center text-3xl font-bold text-[#151875] mt-4 mb-6">
        Products From API's Data
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="w-full bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            {/* Product Image */}
            <div className="bg-[#EEEFFB] rounded-md overflow-hidden h-60 flex items-center justify-center">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="mt-4">
              <h2 className="text-lg text-[#151875] font-semibold">
                {product.name}
              </h2>
              <p className="text-sm text-[#151875] mt-2">
                {truncateDescription(product.description)}
              </p>

              {/* Price and Discount */}
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-[#151875] font-bold">${product.price}</p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-[#FB2448]">
                      {product.discountPercentage}% OFF
                    </p>
                  )}
                </div>
                {product.isFeaturedProduct && (
                  <p className="text-sm text-blue-600 font-bold">
                    Featured Product
                  </p>
                )}
              </div>

              {/* Category and Stock */}
              <p className="text-sm text-[#151875] mt-2">
                Category: {product.category}
              </p>
              <p className="text-sm text-[#151875]">
                Stock Level: {product.stockLevel}
              </p>
            </div>

            {/* Add to Cart Button */}
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div>
                  <p className="font-medium text-slate-900">{item.name}</p>
                  <p className="text-sm text-blue-600">
                    $
                    {typeof item.price === "number"
                      ? item.price.toFixed(2)
                      : item.price}
                  </p>
                </div>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">
            Your Cart is Empty. Please Add Products.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
