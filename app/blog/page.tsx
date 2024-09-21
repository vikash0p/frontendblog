import { fetchBlogData } from "@/utils/FetchBlogData";
import React from "react";
import BlogData from "@/components/BlogData";
import { Metadata } from "next";
import { Suspense } from "react";
import { BlogDocument } from "@/utils/interface";
import BlogDataSkeleton from "@/components/blogComponent/BlogDataSkeleton";






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



const Blog = async () => {

  const data: BlogDocument[] = await fetchBlogData();
  // await new Promise((resolve)=> setTimeout(resolve, 9000));
  // console.log("🚀 ~ file: page.tsx:7 ~ blog:", data);
  const mydata = [...data].reverse();
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
              return (
                <Suspense
                  fallback={
                    <div className="W-80 h-96 bg-slate-800 round animate-pulse">
                      <div className=" h-48 bg-gray-800 rounded-t-lg"></div>

                      {/* Content Skeleton */}
                      <div className="p-4">
                        {/* Title Skeleton */}
                        <div className="h-6 bg-gray-700 rounded mb-2"></div>

                        {/* Description Skeleton */}
                        <div className="space-y-2 mb-4">
                          <div className="h-4 bg-gray-700 rounded"></div>
                          <div className="h-4 bg-gray-700 rounded"></div>
                          <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                        </div>

                        {/* Author and Date Skeleton */}
                        <div className="flex justify-between items-center mb-4">
                          <div className="h-4 bg-gray-700 rounded w-1/3"></div>
                          <div className="h-4 bg-gray-700 rounded w-1/4"></div>
                        </div>

                        {/* Button Skeleton */}
                        <div className="h-10 bg-gray-700 rounded w-full"></div>
                      </div>
                    </div>
                  }
                  key={value._id}
                >
                  <BlogData value={value} />
                </Suspense>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
