import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/utils/Layout";

const inter = Inter({ subsets: ["latin"] });

export const artistAuraMetadata: Metadata = {
  metadataBase: new URL("https://frontendblog-nu.vercel.app/"),
  title: {
    default: "Artist Aura | Insights into Art, Creativity, and Expression",
    template: "%s | Artist Aura",
  },
  description:
    "Welcome to Artist Aura! Explore articles, stories, and inspiration from the world of art. Dive into creative expressions, techniques, and the journey of artists across various mediums. Whether you're a seasoned artist or an art enthusiast, find something to ignite your passion here.",
  openGraph: {
    title: {
      default: "Artist Aura | Insights into Art, Creativity, and Expression",
      template: "%s | Artist Aura",
    },
    description:
      "Artist Aura brings you closer to the world of art, creativity, and self-expression. Discover thought-provoking articles on the latest trends in painting, sculpture, and digital art. Learn from artist interviews, tutorials, and artistic journeys.",
    images: [
      {
        url: "/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Artist Aura Blog Logo",
      },
    ],
    url: "https://frontendblog-nu.vercel.app/",
    siteName: "Artist Aura",
    locale: "en_US",
    type: "website",
  },
  applicationName: "Artist Aura",
  keywords: [
    "ArtBlog",
    "CreativeInspiration",
    "ArtistStories",
    "ArtTechniques",
    "DigitalArt",
    "Sculpture",
    "Painting",
    "ArtistInterviews",
    "ArtTrends",
    "ArtWorkshops",
  ],
  authors: [
    { name: "Artist Aura Team" },
    { name: "Artist Aura", url: "https://frontendblog-nu.vercel.app/" },
  ],
  creator: "Artist Aura Inc.",
  publisher: "https://frontendblog-nu.vercel.app/",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
