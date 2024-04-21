import { fetchBlogData } from "@/utils/FetchBlogData";
import React from "react";
import BlogData from "@/components/BlogData";

import { BlogDocument } from "@/utils/interface";
const Blog = async () => {
  const data: BlogDocument[] = await fetchBlogData();
  console.log("🚀 ~ file: page.tsx:7 ~ blog:", data);
  return (
    <div>
      <h1 className="text-3xl uppercase font-bold text-center py-5">
        all blogs
      </h1>

      <div>
        {data?.length <= 0 && !data && data === undefined ? (
          <div>
            <h1 className="text-3xl uppercase font-bold text-center py-5">
              no blog found
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 max-w-7xl gap-4 m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
            {
              data?.map((value)=>{
                return(
                 <BlogData value={value} key={value._id} />
                )
              })
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
