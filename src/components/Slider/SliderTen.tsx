"use client";

import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

const SliderTen = () => {
  return (
    <>
      <div className="slider-block style-one bg-[#F5EEE7] xl:h-[540px] lg:h-[540px] md:h-[380px] h-[360px] max-[420px]:h-[300px] w-full">
        <div className="slider-main h-full w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="h-full relative"
            autoplay={{
              delay: 4000,
            }}
          >
            <SwiperSlide>
              <div className="slider-item h-full w-full relative overflow-hidden">
                <div className="container lg:pl-[320px] w-full h-full flex items-center relative">
                  <div className="text-content basis-1/2">
                    <div className="text-sub-display">
                      Ramadan Special Offer – Up To 40% Off!
                    </div>
                    <div className="heading1 md:mt-5 mt-2">
                      Upgrade Your Ramadan Look with Premium Styles
                    </div>
                    <Link
                      href="/shop/breadcrumb-img"
                      className="button-main md:mt-8 mt-3"
                    >
                      Shop Ramadan Collection
                    </Link>
                  </div>
                  <div className="sub-img absolute xl:w-[33%] sm:w-[36%] w-[58%] xl:right-[40px] lg:right-0 md:right-6 -right-6 bottom-0 z-[-1]">
                    <Image
                      src={"/images/home-slider/one.png"}
                      width={2000}
                      height={1936}
                      alt="bg10-1"
                      priority={true}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item h-full w-full relative overflow-hidden">
                <div className="container lg:pl-[320px] w-full h-full flex items-center relative">
                  <div className="text-content basis-1/2">
                    <div className="text-sub-display">
                      Eid Collection 2026 – Limited Stock!
                    </div>
                    <div className="heading1 md:mt-5 mt-2">
                      Get Ready for Eid with Trending Outfits
                    </div>
                    <Link
                      href="/shop/breadcrumb-img"
                      className="button-main md:mt-8 mt-3"
                    >
                      Explore Eid Deals
                    </Link>
                  </div>
                  <div className="sub-img absolute xl:w-[35%] sm:w-[38%] w-[64%] xl:right-0 md:right-5 -right-8 bottom-0 z-[-1]">
                    <Image
                      src={"/images/home-slider/two.png"}
                      width={2000}
                      height={1936}
                      alt="bg10-2"
                      priority={true}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item h-full w-full relative overflow-hidden">
                <div className="container lg:pl-[320px] w-full h-full flex items-center relative">
                  <div className="text-content basis-1/2">
                    <div className="text-sub-display">
                      Cash on Delivery Available Across Bangladesh
                    </div>
                    <div className="heading1 md:mt-5 mt-2">
                      Premium Fashion Delivered Fast to Your Doorstep
                    </div>
                    <Link
                      href="/shop/breadcrumb-img"
                      className="button-main md:mt-8 mt-3"
                    >
                      Shop Now
                    </Link>
                  </div>
                  <div className="sub-img absolute xl:w-[34%] sm:w-[39%] w-[60%] xl:right-[40px] md:right-4 sm:right-[0px] -right-8 bottom-0 z-[-1]">
                    <Image
                      src={"/images/home-slider/three.png"}
                      width={2000}
                      height={2000}
                      alt="bg10-3"
                      priority={true}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SliderTen;
