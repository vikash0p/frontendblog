import RegisterForm from '@/components/RegisterForm'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Artist Aura",
  description:
    "Join the Artist Aura community today! Create your account to explore personalized content, save your favorite articles, and engage with like-minded creators.",
  openGraph: {
    title: "Register | Artist Aura",
    description:
      "Sign up for Artist Aura and become part of a vibrant community of creators. Register to unlock personalized content and connect with fellow artists.",
    url: "https://artist-aura-blog.vercel.app/register", // Update with your actual Register page URL
    images: "/public/images/register-banner.png", // Path to your Register page image
    siteName: "Artist Aura",
  },
  twitter: {
    card: "summary_large_image",
    title: "Register | Artist Aura",
    description:
      "Create your Artist Aura account to explore exclusive content, save articles, and join a community of passionate creators.",
    images: "/public/images/register-banner.png", // Path to your Register page image for Twitter
  },
};

const Register = () => {
  return (
    <div>
      <RegisterForm />
    </div>
  )
}

export default Register
