"use client";
import Image from "next/image";
import React from "react";
import { BlogDocument } from "@/utils/interface";
import BlogData from "./BlogData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface BlogChildrenProps {
  value: BlogDocument[];
}

const TrendingNow: React.FC<BlogChildrenProps> = ({ value }) => {
  return (
    <div className="max-w-7xl min-h-[560px] m-auto relative py-7">
      <div className="w-full h-full overflow-x-auto absolute bg-black ">
        <Image
          src="https://image.lexica.art/full_webp/54e54310-e77b-4b2e-820f-7225b4a2fbdf"
          alt="images"
          fill
          className="w-full h-full object-cover object-center "
        />
      </div>
      <div className="relative top-0 left-0 right-0 text-white text-center bg-black/60">
        <h1 className="lg:text-4xl text-3xl text-white font-semibold text-center py-2">
          Trending now
        </h1>
        <p className="lg:w-1/2 m-auto pb-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium dolor em que laud antium, totam re
        </p>
        <hr />
        <div className="pt-12">
          {value?.length <= 0 || value === undefined ? (
            <div>
              <h1 className="text-3xl uppercase font-bold text-center py-5">
                No blog found
              </h1>
            </div>
          ) : (
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              modules={[Pagination, Navigation]}
              className="swiper-container"
            >
              {value.slice(3, 12).map((blog) => (
                <SwiperSlide
                  key={blog._id}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                >
                  <BlogData value={blog} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
