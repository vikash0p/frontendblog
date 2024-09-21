"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

const ContactPage: React.FC = () => {
  return (
    <section className=" py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Contact Info and Map */}
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold ">Get in Touch</h2>
          <p className="text-lg ">
            Feel free to reach out to us anytime. We are available to answer
            your questions and discuss your project needs.
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-red-500 w-6 h-6" />
              <span className="text-lg ">+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-red-500 w-6 h-6" />
              <span className="text-lg ">info@yourcompany.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-red-500 w-6 h-6" />
              <span className="text-lg ">123 Street, faridabad, HR</span>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-64 bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7014.19836658875!2d77.31471974111156!3d28.476559533811212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce70d50453351%3A0x196d2dfbb34b67f5!2sAggarwal%20Sweets!5e0!3m2!1sen!2sin!4v1726841504403!5m2!1sen!2sin"
              className="w-full h-full object-contain"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side: Contact Form and Image */}
        <div className="space-y-8">
          <Image
            src="/a person with a backpack looking at a cell phone.webp" // Replace with your image path
            alt="Contact Us"
            width={500}
            height={350}
            className="rounded-md  shadow-lg object-cover"
          />

          <form className="bg-gray-900 p-6 rounded-md  shadow-md space-y-6">
            <h2 className="text-2xl font-semibold ">Contact Form</h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block ">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md text-black "
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block ">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md  text-black"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block ">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md text-black"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-500 text-white py-2 px-4 rounded-md  hover:bg-red-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
