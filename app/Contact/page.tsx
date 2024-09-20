import ContactPage from '@/components/contactComponet/ContactPage'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Artist Aura",
  description:
    "Get in touch with the Artist Aura team. Whether you have questions, feedback, or collaboration ideas, we'd love to hear from you. Reach out to us through our contact form or social media.",
  openGraph: {
    title: "Contact Us | Artist Aura",
    description:
      "Have a question or a creative idea to share? Contact the Artist Aura team today. We're here to connect, collaborate, and help you on your artistic journey.",
    url: "https://artist-aura-blog.vercel.app/contact", // Update with your actual Contact page URL
    images: "/public/images/contact-banner.png", // Path to your Contact page image
    siteName: "Artist Aura",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Artist Aura",
    description:
      "We'd love to hear from you! Reach out to Artist Aura with your questions, feedback, or partnership inquiries.",
    images: "/public/images/contact-banner.png", // Path to your Contact page image for Twitter
  },
};

const Contact = () => {
  return (
    <div>
      <ContactPage />
    </div>
  )
}

export default Contact
