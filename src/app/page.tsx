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
import { Newsletter } from "./component/Newsletter";

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
      <Newsletter />
      <LatestBlog />
      {/* <ProductCards /> */}
      {/* <Footer /> */}
     
    </div>
  );
}
