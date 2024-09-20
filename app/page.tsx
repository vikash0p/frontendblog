import { fetchBlogData } from "@/utils/FetchBlogData";
import React from "react";
import BlogData from "@/components/BlogData";

import { BlogDocument } from "@/utils/interface";
import TrendingNow from "@/components/TrendingNow";
import Modern from "@/components/Modern";
import LatestPosts from "@/components/LatestPosts";
const Home = async () => {
  const data: BlogDocument[] = await fetchBlogData();
  // console.log("🚀 ~ file: page.tsx:7 ~ blog:", data);
  return (
    <div>

      <TrendingNow  value={data} />
      <Modern value={data} />
      <LatestPosts value={data} />
    </div>
  );
};

export default Home;
