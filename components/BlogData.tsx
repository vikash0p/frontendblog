"use client";
import React from "react";
import { BlogDocument } from "@/utils/interface";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BlogCardImage from "./BlogCardImage";

interface blogProps {
  value: BlogDocument;
}

const BlogData = ({ value }: blogProps) => {


  return (
    <div className="max-w-sm bg-gray-950/50 border border-gray-200 rounded-lg shadow">
      <div className="relative overflow-x-hidden max-w-sm h-48">
        <BlogCardImage value={value} />
        {/* <Image
          className="rounded-t-lg w-full h-full object-cover object-center"
          src={value.img}
          alt={value._id}
          fill
          quality={75}
          // placeholder="blur"
          sizes="(min-width: 1280px) 306px, (min-width: 1040px) calc(21.82vw + 107px), (min-width: 420px) 382px, calc(84vw + 46px)"
        /> */}
      </div>
      <div className=" py-3 text-start ps-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight ">
          {value.title}
        </h5>
        <p className="mb-3 text-sm text-gray-300 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, omnis
          error doloribus eaque rerum aliquid...
        </p>
        <p className="mb-3 font-normal text-red-700 ">{value.author}</p>

        <Link
          href={`/blog/${value._id}`}
          className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white bg- rounded-sm btn-grad   focus:ring-4 focus:outline-none focus:ring-gray-300"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogData;
