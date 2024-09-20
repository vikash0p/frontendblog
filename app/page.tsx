import { fetchBlogData } from "@/utils/FetchBlogData";
import React from "react";
import BlogData from "@/components/BlogData";

import { BlogDocument } from "@/utils/interface";
import TrendingNow from "@/components/TrendingNow";
import Modern from "@/components/Modern";
import LatestPosts from "@/components/LatestPosts";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artist Aura | Stories, Insights, and Inspiration",
  description:
    "Welcome to Your Blog! Dive into a wide variety of articles offering insights, stories, and inspiration. Whether you're looking for creative inspiration, personal growth tips, or the latest trends, you'll find engaging content here.",
  openGraph: {
    title: "Your Blog | Stories, Insights, and Inspiration",
    description:
      "Explore engaging articles on Your Blog. From personal stories to creative inspiration and life hacks, discover unique content that keeps you informed and inspired.",
    url: "https://frontendblog-nu.vercel.app/", // Replace with your blog URL
    images: "/favicon/android-chrome-512x512.png", // Path to your blog's home banner image
    siteName: "Your Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Blog | Stories, Insights, and Inspiration",
    description:
      "Discover engaging stories, insights, and inspiration on Your Blog. Explore articles across various topics and stay inspired.",
    images: "/favicon/android-chrome-512x512.png", // Path to your blog's image for Twitter
  },
};

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
