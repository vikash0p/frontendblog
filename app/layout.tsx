import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/utils/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bloggers",
  description:
    "Welcome to our vibrant corner of the internet! Dive into a mosaic of insightful articles, captivating stories, and thought-provoking discussions. From trending topics to niche interests, we curate a diverse array of content to spark your curiosity and inspire your imagination. Join our community and explore the world of ideas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
