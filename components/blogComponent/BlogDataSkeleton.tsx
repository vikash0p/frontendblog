import React from "react";

const BlogDataSkeleton = () => {
  return (
    <div className="grid grid-cols-1 max-w-7xl gap-4 m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      <div className="max-w-80 mx-auto bg-white border border-gray-800 rounded-lg shadow-lg animate-pulse">
        {/* Image Skeleton */}
        <div className="relative h-48 bg-gray-800 rounded-t-lg"></div>

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
    </div>
  );
};

export default BlogDataSkeleton;
