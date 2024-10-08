"use client";
import Footer from "@/components/Footer";
import TopBar from "@/components/HomeComponent/TopBar";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/context/AuthProvider";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface LayoutChildrenProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutChildrenProps) => {
  return (
    <div>
      <AuthProvider>
        <TopBar />
        <Navbar />
        <main> {children}</main>
        <Footer />
        <ToastContainer />

      </AuthProvider>
    </div>
  );
};

export default Layout;
