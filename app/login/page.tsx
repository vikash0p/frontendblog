import LoginForm from '@/components/LoginForm'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Artist Aura",
  description:
    "Access your Artist Aura account to explore personalized content, save your favorite articles, and engage with the community. Login to stay connected with your artistic journey.",
  openGraph: {
    title: "Login | Artist Aura",
    description:
      "Log in to your Artist Aura account to enjoy personalized content, bookmark articles, and connect with the creative community.",
    url: "https://artist-aura-blog.vercel.app/login", // Update with your actual Login page URL
    images: "/public/images/login-banner.png", // Path to your Login page image
    siteName: "Artist Aura",
  },
  twitter: {
    card: "summary_large_image",
    title: "Login | Artist Aura",
    
    description:
      "Sign in to your Artist Aura account to unlock personalized features, save content, and engage with your favorite creative community.",
    images: "/public/images/login-banner.png", // Path to your Login page image for Twitter
  },
};

const Login = () => {
  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default Login
