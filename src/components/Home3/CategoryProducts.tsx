"use client";

import React, { useState } from "react";
import Product from "../Product/Product";
import { ProductType } from "@/type/ProductType";
import { motion } from "framer-motion";

interface Props {
  data: Array<ProductType>;
  start: number;
  limit: number;
}

const CategoryProducts: React.FC<Props> = ({ data, start, limit }) => {
  const categories = ["fashion", "cosmetic", "jewelry"];
  const [activeTab, setActiveTab] = useState<string>(categories[0]);

  const handleTabClick = (item: string) => {
    setActiveTab(item);
  };

  const filteredProducts = data.filter(
    (product) => product.category === activeTab,
  );

  return (
    <>
      <div className="tab-features-block md:pt-20 pt-10">
        <div className="container">
          <div className="heading flex flex-col items-center text-center">
            <div className="heading3 text-center mb-6">Shop by Category</div>
            <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className={`tab-item relative text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black capitalize ${activeTab === item ? "active" : ""}`}
                  onClick={() => handleTabClick(item)}
                >
                  {activeTab === item && (
                    <motion.div
                      layoutId="active-pill-category"
                      className="absolute inset-0 rounded-2xl bg-white"
                    ></motion.div>
                  )}
                  <span className="relative heading5 z-[1]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="list-product hide-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
            {filteredProducts.slice(start, limit).map((prd, index) => (
              <Product key={index} data={prd} type="grid" style="style-1" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
