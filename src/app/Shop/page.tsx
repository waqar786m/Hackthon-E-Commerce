"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import ProductListing from "../component/ProductListing";
import Navbar from "./Navbar";
import Pagination from "../component/Pagination";

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch products inside useEffect to make sure it's on the client-side
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type == "product"]{
          name,
          price,
          description,
          discountPercentage,
          "image": image.asset._ref,
        }`;
      const productData = await client.fetch(query);
      setProducts(productData);
    };

    fetchProducts();
  }, []);

  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="mx-auto h-[285px] bg-gray-100 py-10 px-6 sm:px-28">
        <div className="container mx-auto flex flex-col justify-center items-start h-full">
          <h2 className="text-3xl text-[#101750] font-bold mb-2">Product Listing</h2>
          <div className="flex flex-row items-center">
            <p className="text-black">Home.Page</p>
            <p className="text-pink-500">.Product Listing</p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {currentProducts.map((product: Product) => (
          <ProductListing product={product} key={product.name} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        totalProducts={products.length}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        onPageChange={paginate}
      />
    </div>
  );
};

export default Shop;
