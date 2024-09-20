import AboutTop from '@/components/aboutComponets/AboutTop'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Artist Aura",
  description:
    "Learn more about Artist Aura. Our mission is to inspire creativity through stories, insights, and the latest art trends. Discover our journey, team, and values that drive our blog.",
  openGraph: {
    title: "About Us | Artist Aura",
    description:
      "Discover the story behind Artist Aura, the team, and our mission to inspire creativity and provide insights into the world of art.",
    url: "https://artist-aura-blog.vercel.app/about", // Update with your actual About page URL
    images: "/public/images/about-banner.png", // Path to your About page image
    siteName: "Artist Aura",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Artist Aura",
    description:
      "Learn about the team behind Artist Aura and our mission to inspire creativity through our blog.",
    images: "/public/images/about-banner.png", // Path to your About page image for Twitter
  },
};

const Abouot = () => {
  return (
    <div>
      <AboutTop />
    </div>
  )
}

export default Abouot
