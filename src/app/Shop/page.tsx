import { client } from "@/sanity/lib/client";
import ProductListing from "../component/ProductListing";
import Navbar from "./Navbar";



async function fetchProducts(): Promise<Product[]> {
  const query = `
    *[_type == "product"]{
      name,
      price,
      description,
      discountPercentage,
      "image": image.asset._ref,
      category
    }`;
  const product = await client.fetch(query);
  return product;
}


const Shop = async () => {
  const product = await fetchProducts();

  return (
    <>
      <Navbar />

       {/* Hero Section */}
       <div className="mx-auto h-[285px] bg-gray-100 py-10 px-28">
          <div className="container mx-auto flex flex-col justify-center items-start h-full">
            {/* About Us Title */}
            <h2 className="text-3xl text-[#101750] font-bold mb-2">
              Product Listing
            </h2>

            {/* Home.Page.About Us Row */}
            <div className="flex flex-row items-center">
              <p className="text-black">Home.Page</p>
              <p className="text-pink-500">.Product Listing</p>
            </div>
          </div>
        </div>
    <div className="px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      {product.map((product: Product) => (
        <ProductListing product={product} key={product.name} />
      ))}
    </div>
    </>
  );
};
export default Shop;