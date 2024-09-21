import ContactPage from '@/components/contactComponet/ContactPage'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Artist Aura",
  description:
    "Get in touch with the Artist Aura team. Whether you have questions, feedback, or collaboration ideas, we have love to hear from you. Reach out to us through our contact form or social media.",
  openGraph: {
    title: "Contact Us | Artist Aura",
    description:
      "Have a question or a creative idea to share? Contact the Artist Aura team today. We're here to connect, collaborate, and help you on your artistic journey.",
    url: "https://artist-aura-blog.vercel.app/contact",
    images: "/public/images/contact-banner.png",
    siteName: "Artist Aura",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Artist Aura",
    description:
      "We'd love to hear from you! Reach out to Artist Aura with your questions, feedback, or partnership inquiries.",
    images: "/public/images/contact-banner.png",
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
