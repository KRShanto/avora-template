import React from "react";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import productData from "@/data/Product.json";
import Benefit from "@/components/Home1/Benefit";
import Footer from "@/components/Footer/Footer";
import MenuEight from "@/components/Header/Menu/MenuEight";
import SliderTen from "@/components/Slider/SliderTen";
import TrendingNow from "@/components/Home11/TrendingNow";
import TrendingProduct from "@/components/Home3/TrendingProduct";
import CategoryProducts from "@/components/Home3/CategoryProducts";

export const metadata = {
  title: "Home page",
};

export default function Home() {
  return (
    <>
      <div id="header" className="relative w-full">
        <MenuEight />
        <SliderTen />
      </div>
      <TrendingNow />
      <TrendingProduct data={productData} start={12} limit={20} />
      <CategoryProducts data={productData} start={0} limit={8} />
      <Benefit props="md:py-20 py-10" />
      <Footer />
    </>
  );
}
