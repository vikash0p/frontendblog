'use client'
import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: FaFacebookF,
    hoverClass: "hover:text-blue-600",
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: FaTwitter,
    hoverClass: "hover:text-blue-400",
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: FaYoutube,
    hoverClass: "hover:text-red-600",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: FaInstagram,
    hoverClass: "hover:text-pink-500",
  },
];
const SocialMedia = () => {
  return (
    <>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.hoverClass} transition duration-300 text-white`}
        >
          <link.icon className="text-lg" />
        </a>
      ))}
    </>
  );
}

export default SocialMedia
