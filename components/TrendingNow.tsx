"use client";
import Image from "next/image";
import React from "react";
import {BlogDocument} from '@/utils/interface'
import BlogData from "./BlogData";

interface BlogChildrenProps{
    value:BlogDocument[],
}
const TrendingNow : React.FC<BlogChildrenProps> = ({value}) => {
  return (
    <div className="max-w-6xl min-h-[560px] m-auto relative py-7">
      <div className="w-full h-full overflow-x-auto absolute">
        <Image
          src={
            "https://image.lexica.art/full_webp/54e54310-e77b-4b2e-820f-7225b4a2fbdf"
          }
          alt="images"
          fill
          className="w-full h-full object-cover object-center "
        />
      </div>
      <div className="relative top-0 left-0 right-0 text-white text-center ">
        <h1 className="lg:text-4xl  text-3xl text-white font-semibold text-center py-2"> Trending now</h1>
        <p className="lg:w-1/2 m-auto pb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laud antium, totam re</p>
        <hr className="" />
          <div>
            {value?.length <= 0 && !value && value === undefined ? (
              <div>
                <h1 className="text-3xl uppercase font-bold text-center py-5">
                  no blog found
                </h1>
              </div>
            ) : (
              <div className="grid grid-cols-1 max-w-7xl gap-4 m-auto px-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-12 ">
                {value?.slice(3, 7).map((value) => {
                  return <BlogData value={value} key={value._id} />;
                })}
              </div>
            )}
          </div>
      </div>
    </div>
  );
};

export default TrendingNow;
