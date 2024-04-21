"use client";
import React from "react";
import { BlogDocument } from "@/utils/interface";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface blogProps {
  value: BlogDocument;
}

const BlogData = ({ value }: blogProps) => {
  const pathname=usePathname();
  const date =new  Date(value.createdAt);
  const local= date.toDateString();
  console.log("🚀 ~ file: BlogData.tsx:13 ~ data:", local);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative overflow-x-hidden max-w-sm h-48 ">
        <Image
          className="rounded-t-lg  w-full h-full object-cover object-center"
          src={value.img}
          alt={value._id}
          fill
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {value.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {value.des}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {value.author}
        </p>

        <Link
          href={`/blog/${value._id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogData;
