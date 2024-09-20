"use client";
import React from "react";
import { LinkComponent } from "./HomeComponent/LinkComponent";

const Navbar = () => {
  return (
    <nav className=" p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4 text-xl">
              <LinkComponent />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
