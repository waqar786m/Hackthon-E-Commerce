// pages/ProductDetail/[name].tsx
import React from "react";
import { client } from "@/sanity/lib/client";
import ProductDetails from "@/app/component/ProductDetails";

async function fetchProducts(): Promise<Product[]> {
  try {
    const query = `
      *[_type == "product"]{
        name,
        price,
        description,
        category,
        discountPercentage,
        "image": image.asset._ref,
        stockLevel
      }`;
    const products = await client.fetch(query);
    return products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

const ProductDetail = async ({ params }: { params: { name: string } }) => {
  const { name } = params;

  // Decode the product name to ensure it's properly matched
  const decodedName = decodeURIComponent(name);

  // Fetch all products
  const products = await fetchProducts();

  // Find the product by name (case-insensitive)
  const product = products.find((p) => p.name.toLowerCase() === decodedName.toLowerCase());

  if (!product) {
    return <div className="text-center">Product not found</div>;
  }

  return (
   <>
      <ProductDetails product={product} />
    </>
  );
};

export default ProductDetail;
