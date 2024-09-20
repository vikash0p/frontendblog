"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutTop: React.FC = () => {
  return (
    <section className=" text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Left side: About Text */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold ">
            Welcome to My Blog
          </h1>
          <p className="text-lg md:text-xl ">
            Hi! I’m John Doe, a passionate writer, tech enthusiast, and avid
            traveler. Through this blog, I share my journey, thoughts, and
            experiences on a variety of topics. From deep dives into
            cutting-edge technologies to personal reflections and travel
            diaries, there’s something for everyone here.
          </p>
          <p className="text-md =">
            With over a decade of experience in the tech industry, I also offer
            tutorials, coding tips, and my perspective on the latest trends. My
            travels around the world have allowed me to meet incredible people,
            and I love sharing those stories with my readers.
          </p>
          <p className="text-md =">
            When I’m not writing or coding, you’ll probably find me hiking in
            the mountains or enjoying a cup of coffee in a cozy café. I’m always
            open to new ideas and collaborations, so feel free to reach out!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-500 text-white py-2 px-6 rounded-md text-lg hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Contact Me
          </Link>
        </div>

        {/* Right side: Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/log.webp" // replace with your image path
            alt="About John Doe"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>
      </div>

      {/* Additional Details */}
      <div className="max-w-4xl mx-auto mt-12 space-y-8">
        <h2 className="text-2xl font-bold ">More About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Section */}
          <div className="bg-gray-900  p-6 rounded-md shadow-2xl ">
            <h3 className="text-xl font-semibold  mb-4">
              My Journey
            </h3>
            <p className="text-md ">
              I started my career as a software engineer, working with various
              startups and tech companies. Over the years, I transitioned into a
              more holistic role that combines writing, coding, and mentorship.
              This blog is my outlet to share everything I’ve learned along the
              way.
            </p>
          </div>

          {/* Hobbies Section */}
          <div className="bg-gray-900  p-6 rounded-md shadow-2xl ">
            <h3 className="text-xl font-semibold  mb-4">
              Hobbies & Interests
            </h3>
            <p className="text-md ">
              Apart from my professional work, I’m passionate about traveling,
              photography, and hiking. These hobbies help me disconnect and find
              inspiration for my blog posts. I often share photos from my
              adventures, so stay tuned for more!
            </p>
          </div>

          {/* Skills Section */}
          <div className="bg-gray-900  p-6 rounded-md shadow-2xl ">
            <h3 className="text-xl font-semibold  mb-4">
              Skills & Expertise
            </h3>
            <ul className="list-disc list-inside text-md ">
              <li>Full-stack Development (React, Node.js, Next.js)</li>
              <li>UI/UX Design and Prototyping</li>
              <li>Technical Writing & Blogging</li>
              <li>DevOps & Cloud Infrastructure (AWS, Docker)</li>
            </ul>
          </div>

          {/* Fun Fact Section */}
          <div className="bg-gray-900  p-6 rounded-md shadow-2xl ">
            <h3 className="text-xl font-semibold  mb-4">
              Fun Facts
            </h3>
            <p className="text-md ">
              Did you know I’ve visited over 30 countries? My favorite
              destination so far has been Japan, and I’m always looking for new
              travel recommendations. Oh, and I make a mean cup of pour-over
              coffee!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTop;
