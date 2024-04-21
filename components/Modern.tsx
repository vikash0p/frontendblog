"use client";
import React from "react";
import { BlogDocument } from "@/utils/interface";
import BlogData from "./BlogData";
import HowToCard from "./HowToCard";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import NewsletterForm from "./NewsletterForm";

interface modernChildrenProps {
  value: BlogDocument[];
}

const Modern: React.FC<modernChildrenProps> = ({ value }) => {
  return (
    <div className="py-16 max-w-7xl m-auto">
      <div className="flex ">
        <div className="basis-[65%]  ">
          {/* modern art  */}
          <div>
            <div className="flex flex-col lg:flex-row  items-center gap-7 ">
              <h1 className="text-4xl font-mono "> Modern Art</h1>
              <div className="w-72  h-[2px]  bg-slate-500"></div>
            </div>
            <p className="w-3/4 py-3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dolor em que laud antium, totam rem.
            </p>
            <div>
              {value?.length <= 0 && !value && value === undefined ? (
                <div>
                  <h1 className="text-3xl uppercase font-bold text-center py-5">
                    no blog found
                  </h1>
                </div>
              ) : (
                <div className="grid grid-cols-1 max-w-7xl gap-3 m-auto px-2 md:grid-cols-2 lg:grid-cols-3  pt-5 ">
                  {value?.slice(8, 14).map((value) => {
                    return <BlogData value={value} key={value._id} />;
                  })}
                </div>
              )}
            </div>
            {/* classic art */}
            <div>
              <div className="flex flex-col lg:flex-row  items-center gap-7 pt-14 ">
                <h1 className="text-4xl font-mono "> Classic Art</h1>
                <div className="w-72  h-[2px]  bg-slate-500"></div>
              </div>
              <p className="w-3/4 py-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolor em que laud antium, totam rem.
              </p>
              <div>
                {value?.length <= 0 && !value && value === undefined ? (
                  <div>
                    <h1 className="text-3xl uppercase font-bold text-center py-5">
                      no blog found
                    </h1>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 max-w-7xl gap-3 m-auto px-2 md:grid-cols-2 lg:grid-cols-3  pt-5 ">
                    {value?.slice(16, 22).map((value) => {
                      return <BlogData value={value} key={value._id} />;
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* how to open */}
            <div>
              <div className="flex flex-col lg:flex-row  items-center gap-7 pt-14 ">
                <h1 className="text-4xl font-mono ">How to</h1>
                <div className="w-72  h-[2px]  bg-slate-500"></div>
              </div>
              <p className="w-3/4 py-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolor em que laud antium, totam rem.
              </p>
              <div>
                {value?.length <= 0 && !value && value === undefined ? (
                  <div>
                    <h1 className="text-3xl uppercase font-bold text-center py-5">
                      no blog found
                    </h1>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 max-w-7xl gap-3 m-auto px-2 lg:grid-cols-2  pt-5 ">
                    {value?.slice(27, 33).map((value) => {
                      return <HowToCard value={value} key={value._id} />;
                    })}
                  </div>
                )}
              </div>
            </div>
            {/* how to close */}
          </div>
        </div>
        <div className="basis-[35%]  ps-8">
          <div>
            <h2 className="text-xl font-bold border border-s-8 py-2  ps-5 border-gray-800">
              Follow me
            </h2>
            <div className="flex w-full gap-4 text-white py-5">
              <div className=" w-32 h-28 bg-blue-600 flex flex-col items-center justify-center ">
                {" "}
                <FaFacebookF size={30} /> <h5>90.5k</h5> <p>fans</p>{" "}
              </div>
              <div className=" w-32 h-28 bg-sky-400 flex flex-col items-center justify-center">
                <FaXTwitter size={30} /> <h5>892k</h5> <p>followers</p>
              </div>
              <div className=" w-32 h-28 bg-red-600 flex flex-col items-center justify-center ">
                <FaYoutube size={30} />
                <h5>1000.5k</h5> <p>Subscriber</p>{" "}
              </div>
            </div>
          </div>
          {/* recent posts */}
          <div className="pt-10">
            <h2 className="text-xl font-bold border border-s-8  ps-5 border-gray-800 py-2">
              {" "}
              Recent Posts
            </h2>
            <div>
              {value?.length <= 0 && !value && value === undefined ? (
                <div>
                  <h1 className="text-3xl uppercase font-bold text-center py-5">
                    no blog found
                  </h1>
                </div>
              ) : (
                <div className="grid grid-cols-1 max-w-7xl gap-3 m-auto px-2  pt-5 ">
                  {value?.slice(34, 41).map((value) => {
                    return <HowToCard value={value} key={value._id} />;
                  })}
                </div>
              )}
            </div>
          </div>

          {/* new seller */}
          <div className="pt-20 w-full">

            <div className="space-y-3">
                 <h2 className="text-xl font-bold border border-s-8  ps-5 border-gray-800 py-2"> NEWSLETTER</h2>
            <p className="text-center  ">Subscribe my Newsletter for new blog posts, tips & new photos. Lets stay updated!</p>
            </div>
            <NewsletterForm />
          </div>
          {/* new seller end  */}
        </div>
      </div>
    </div>
  );
};

export default Modern;
