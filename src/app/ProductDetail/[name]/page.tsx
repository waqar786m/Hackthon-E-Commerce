import React from "react";
import { client } from "@/sanity/lib/client";
import ProductDetails from "@/app/component/ProductDetails";
import { notFound } from "next/navigation";

//  Fetch all products (used for static params)
async function fetchProducts(): Promise<Product[]> {
  try {
    const query = `*[_type == "product"]{
      name,
      price,
      description,
      category,
      discountPercentage,
      "image": image.asset._ref,
      stockLevel
    }`;
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

//  Generate Static Params (For SSG)
export async function generateStaticParams() {
  const products = await fetchProducts();
  return products.map((product) => ({
    name: encodeURIComponent(product.name),
  }));
}

//  Dynamic Product Page Component
export default async function ProductDetail({ params }: { params: { name: string } }) {
  const decodedName = decodeURIComponent(params.name);
  const products = await fetchProducts();

  const product = products.find((p) => p.name.toLowerCase() === decodedName.toLowerCase());

  if (!product) {
    notFound(); // Next.js built-in 404 page
  }

  return <ProductDetails product={product} />;
}
