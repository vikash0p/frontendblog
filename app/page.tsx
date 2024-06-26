import { fetchBlogData } from "@/utils/FetchBlogData";
import React from "react";
import BlogData from "@/components/BlogData";

import { BlogDocument } from "@/utils/interface";
import TrendingNow from "@/components/TrendingNow";
import Modern from "@/components/Modern";
import LatestPosts from "@/components/LatestPosts";
const Home = async () => {
  const data: BlogDocument[] = await fetchBlogData();
  console.log("🚀 ~ file: page.tsx:7 ~ blog:", data);
  return (
    <div>
      <div>
        {data?.length <= 0 && !data && data === undefined ? (
          <div>
            <h1 className="text-3xl uppercase font-bold text-center py-5">
              no blog found
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 w-full px-1 py-2 gap-4 m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
            {data?.slice(0, 4).map((value) => {
              return <BlogData value={value} key={value._id} />;
            })}
          </div>
        )}
      </div>
      <TrendingNow  value={data} />
      <Modern value={data} />
      <LatestPosts value={data} />
    </div>
  );
};

export default Home;
