"use client";
import { useGlobalAuthContext } from "@/context/AuthProvider";
import { ToastError, ToastSuccess } from "@/utils/React_Toastify";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const { setIsUser, user } = useGlobalAuthContext();
  const router = useRouter();
  const LogoutHandler = async () => {
    try {
      const res = await axios.get("https://backendblog-eta.vercel.app/auth/logout");
      console.log("🚀 ~ file: Navbar.tsx:11 ~ res:", res);
      if (res.status === 200) {
        // alert(res.data.message);
        ToastSuccess(res.data.message);
        setIsUser(true);
        router.refresh();
        router.push("/login");
      }
    } catch (error:any) {
      console.log("🚀 ~ file: Navbar.tsx:15 ~ error:", error);
      ToastError(error.message)
    }
  };

  const { isUser } = useGlobalAuthContext();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-2xl font-mono ">
           Bloggers
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 text-xl">
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              {!user?.user  ? (
                <div className="space-x-3">
                  <Link
                    href="/login"
                    className="text-gray-300 hover:text-white"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="text-gray-300 hover:text-white"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <div className="space-x-3">
                  <Link href="/blog" className="text-gray-300 hover:text-white">
                    Blog
                  </Link>
                  <Link href="/user" className="text-gray-300 hover:text-white">
                    User
                  </Link>
                  <button
                    type="button"
                    onClick={LogoutHandler}
                    className="text-gray-300 px-5 py-2 bg-red-600 hover:text-white"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
