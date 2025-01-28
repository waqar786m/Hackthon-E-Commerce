import Image from "next/image";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import FeaturedProducts from "./component/FeaturedProducts";
import LatestProducts from "./component/LatestProducts";
import DiscountProducts from "./component/DiscountProducts";
import ProductCard from "./component/ProductCard";
import LatestBlog from "./component/LatestBlog";
import TopCategories from "./component/TopCategories";
import TrendingProducts from "./component/TrendingProducts";
import ProductCards from "./Shop/page";
import ShopOffer from "./component/ShopOffer";

export default function Home() {
  return (
    <div>
 
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
      <ShopOffer />
      <ProductCard />
      <TrendingProducts />
      <DiscountProducts />
      <TopCategories />
      <LatestBlog />
      {/* <ProductCards /> */}
      <Footer />
     
    </div>
  );
}
