import { fetchBlogData } from "@/utils/FetchBlogData";
import React from "react";
import BlogData from "@/components/BlogData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Blog | Explore Creativity and Insights",
  description:
    "Welcome to Artist Aura! Discover a diverse collection of articles that inspire creativity, delve into personal stories, and offer insights into the art world. Whether you're an artist or simply passionate about art, there's something here for everyone.",
  openGraph: {
    title: "Your Blog | Creativity, Stories, and Art Insights",
    description:
      "Explore captivating articles on Artist Aura. From artist interviews to creative inspiration and tutorials, dive into stories that spark curiosity and passion for art.",
    url: "https://artist-aura-blog.vercel.app/blog", // Replace with the specific blog page URL
    images: "/public/images/blog-article-banner.png", // Path to your blog post image
    siteName: "Artist Aura",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artist Aura | Creativity, Stories, and Art Insights",
    description:
      "Engage with inspiring stories and creative insights on Artist Aura. From interviews with artists to tips on improving your craft, our articles offer something for every art lover.",
    images: "/public/images/blog-article-banner.png", // Path to your blog post image for Twitter
  },
};

import { BlogDocument } from "@/utils/interface";
const Blog = async () => {
  const data: BlogDocument[] = await fetchBlogData();
  // console.log("🚀 ~ file: page.tsx:7 ~ blog:", data);
  const mydata=[...data].reverse();
  return (
    <div>
      <div className="py-10">
        {data?.length <= 0 && !data && data === undefined ? (
          <div>
            <h1 className="text-3xl uppercase font-bold text-center py-5">
              no blog found
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 max-w-7xl gap-4 m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
            {mydata?.map((value) => {
              return <BlogData value={value} key={value._id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
