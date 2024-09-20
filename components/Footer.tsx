'use client'
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" mt-16 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <p className="text-sm mb-2">123 Blog Street, Blog City, BC 12345</p>
            <p className="text-sm mb-2">
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:underline">
                +1 (234) 567-890
              </a>
            </p>
            <p className="text-sm mb-4">
              Email:{" "}
              <a href="mailto:info@blogsite.com" className="hover:underline">
                info@blogsite.com
              </a>
            </p>
            <div>
              <h4 className="text-lg font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaYoutube />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Popular Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Popular Posts</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:underline">
                  How to Start a Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">
                  Top 10 Blogging Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">
                  SEO Best Practices
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">
                  Content Creation Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm mb-4">
              Get the latest updates and articles delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="mb-4 sm:mb-0 sm:mr-4 p-2 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} BlogSite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
