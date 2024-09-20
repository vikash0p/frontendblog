"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
];

export const LinkComponent = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => (
        <motion.div
          key={link.href}
          whileHover={{ scale: 1.1 }} // Scale up the link slightly on hover
          whileTap={{ scale: 0.95 }} // Slightly shrink the link when clicked
          initial={{ opacity: 0, y: 20 }} // Start with the link being slightly lower and invisible
          animate={{ opacity: 1, y: 0 }} // Animate to visible and its proper position
          transition={{ duration: 0.3 }} // Animation duration
        >
          <Link
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-red-700 bg-slate-800"
                : "text-gray-300"
            } hover:text-red-700 hover:bg-slate-700 px-3 py-2 rounded-md text-xl font-medium`}
          >
            {link.label}
          </Link>
        </motion.div>
      ))}
    </>
  );
};
