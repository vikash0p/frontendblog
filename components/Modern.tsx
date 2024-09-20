"use client";
import React from "react";
import { BlogDocument } from "@/utils/interface";
import BlogData from "./BlogData";
import HowToCard from "./HowToCard";
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import NewsletterForm from "./NewsletterForm";

interface ModernChildrenProps {
  value: BlogDocument[];
}

const Modern: React.FC<ModernChildrenProps> = ({ value }) => {
  // Helper function to check if value is empty
  const isNoBlogFound = !value || value.length === 0;

  // Helper function to render blog section
  const renderBlogSection = (
    title: string,
    start: number,
    end: number,
    Component: React.FC<any>
  ) => (
    <section>
      <div className="flex flex-col lg:flex-row items-center gap-7 pt-14">
        <h1 className="text-4xl font-mono">{title}</h1>
        <div className="w-72 h-[2px] bg-slate-500"></div>
      </div>
      <p className="w-3/4 py-3">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium dolor em que laud antium, totam rem.
      </p>
      {isNoBlogFound ? (
        <div>
          <h1 className="text-3xl uppercase font-bold text-center py-5">
            No blog found
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 max-w-7xl gap-3 m-auto px-2 md:grid-cols-2 lg:grid-cols-3 pt-5">
          {value.slice(start, end).map((blog) => (
            <Component value={blog} key={blog._id} />
          ))}
        </div>
      )}
    </section>
  );

  return (
    <div className="py-16 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row">
        <main className="flex-1 lg:pr-8">
          {/* Modern Art Section */}
          {renderBlogSection("Modern Art", 8, 14, BlogData)}

          {/* Classic Art Section */}
          {renderBlogSection("Classic Art", 16, 22, BlogData)}

          {/* How To Section */}
          <section>
            <div className="flex flex-col lg:flex-row items-center gap-7 pt-14">
              <h1 className="text-4xl font-mono">How To</h1>
              <div className="w-72 h-[2px] bg-slate-500"></div>
            </div>
            <p className="w-3/4 py-3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dolor em que laud antium, totam rem.
            </p>
            {isNoBlogFound ? (
              <div>
                <h1 className="text-3xl uppercase font-bold text-center py-5">
                  No blog found
                </h1>
              </div>
            ) : (
              <div className="grid grid-cols-1 max-w-7xl gap-3 m-auto px-2 lg:grid-cols-2 pt-5">
                {value.slice(27, 33).map((blog) => (
                  <HowToCard value={blog} key={blog._id} />
                ))}
              </div>
            )}
          </section>
        </main>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
          {/* Follow Me Section */}
          <section>
            <h2 className="text-xl font-bold border-b-2 border-gray-800 py-2 px-5">
              Follow Me
            </h2>
            <div className="flex flex-wrap gap-4 py-5">
              <div className="w-32 h-28 bg-blue-600 flex flex-col items-center justify-center text-white">
                <FaFacebookF size={30} />
                <h5>90.5k</h5>
                <p>fans</p>
              </div>
              <div className="w-32 h-28 bg-sky-400 flex flex-col items-center justify-center text-white">
                <FaXTwitter size={30} />
                <h5>892k</h5>
                <p>followers</p>
              </div>
              <div className="w-32 h-28 bg-red-600 flex flex-col items-center justify-center text-white">
                <FaYoutube size={30} />
                <h5>1000.5k</h5>
                <p>Subscribers</p>
              </div>
            </div>
          </section>

          {/* Recent Posts Section */}
          <section className="pt-10">
            <h2 className="text-xl font-bold border-b-2 border-gray-800 py-2 px-5">
              Recent Posts
            </h2>
            {isNoBlogFound ? (
              <div>
                <h1 className="text-3xl uppercase font-bold text-center py-5">
                  No blog found
                </h1>
              </div>
            ) : (
              <div className="grid grid-cols-1 max-w-7xl gap-3 m-auto px-2 pt-5">
                {value.slice(34, 41).map((blog) => (
                  <HowToCard value={blog} key={blog._id} />
                ))}
              </div>
            )}
          </section>

          {/* Newsletter Section */}
          <section className="pt-20">
            <div className="space-y-3">
              <h2 className="text-xl font-bold border-b-2 border-gray-800 py-2 px-5">
                Newsletter
              </h2>
              <p className="text-center">
                Subscribe to my Newsletter for new blog posts, tips & new
                photos. Let stay updated!
              </p>
            </div>
            <NewsletterForm />
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Modern;
