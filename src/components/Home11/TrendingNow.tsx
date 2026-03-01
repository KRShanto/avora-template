"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { useRouter } from "next/navigation";
import productData from "@/data/Product.json";

const trendingCategories = [
  {
    name: "T-Shirts",
    type: "t-shirt",
    image: "/images/categories/t-shirt.png",
  },
  { name: "Shirts", type: "shirt", image: "/images/categories/shirt.png" },
  {
    name: "Polo T-Shirts",
    type: "polo-t-shirt",
    image: "/images/categories/polo-t-shirt.png",
  },
  { name: "Jeans", type: "jeans", image: "/images/categories/jeans.png" },
  {
    name: "Sneakers",
    type: "sneakers",
    image: "/images/categories/sneakers.png",
  },
  { name: "Hoodies", type: "hoodie", image: "/images/categories/hoodie.png" },
];

const TrendingNow = () => {
  const router = useRouter();

  const handleTypeClick = (type: string) => {
    router.push(`/shop/breadcrumb1?type=${type}`);
  };

  const getProductCount = (type: string) => {
    return productData.filter((product) => product.type === type).length;
  };

  return (
    <>
      <div className="trending-block style-six md:pt-20 pt-10">
        <div className="container">
          <div className="heading3 text-center">Trending Right Now</div>
          <div className="list-trending section-swiper-navigation style-small-border style-outline md:mt-10 mt-6">
            <Swiper
              spaceBetween={12}
              slidesPerView={2}
              navigation
              loop={true}
              modules={[Navigation, Autoplay]}
              breakpoints={{
                576: {
                  slidesPerView: 3,
                  spaceBetween: 12,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1290: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              className="h-full"
            >
              {trendingCategories.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="trending-item block relative cursor-pointer"
                    onClick={() => handleTypeClick(item.type)}
                  >
                    <div className="bg-img rounded-full overflow-hidden">
                      <Image
                        src={item.image}
                        width={1000}
                        height={1000}
                        alt={item.name}
                        priority={true}
                        className="w-full"
                      />
                    </div>
                    <div className="trending-name text-center mt-5 duration-500">
                      <span className="heading5">{item.name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingNow;
