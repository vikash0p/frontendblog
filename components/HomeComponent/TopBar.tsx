"use client";
import Image from "next/image";
import { useState } from "react";
import { SideBar } from "./SideBar";
import SocialMedia from "./SocialMedia";



const TopBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full py-2 md:py-4">
      <div className="max-w-7xl mx-auto flex  h-full justify-between items-center px-1  md:px-8 gap-1 md:gap-4">
        {/* Left - Social Media Icons */}
        <div className=" hidden md:flex justify-center md:justify-start space-x-4 mb-4 md:mb-0">
         <SocialMedia/>
        </div>

        {/* Center - Logo */}
        <div className="md:flex justify-center hidden">
          <Image
            src="/log.webp" // Add the path to your logo
            alt="Site Logo"
            width={80}
            height={50}
            priority
            className="rounded-full h-14 w-14 md:w-18 md:h-18"
          />
        </div>
        <div className="md:hidden">
          <SideBar />
        </div>

        {/* Right - Search Input */}
        <div className="flex justify-center md:justify-end">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="min-w-72 md:w-96 text-white bg-slate-700  px-4 py-2 t rounded-md focus:outline-none focus:ring-1 focus:ring-red-700"
            aria-label="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
