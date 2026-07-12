"use client";

import { useState, useEffect } from "react";
import Link from "next/link";




export default function Activities() {
  const images = [
    "/activities/boardgames.jpg",
    "/activities/language.jpg",
    "/activities/meeting.jpg",
    "/activities/community.jpg",
  ];

 
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a]">

      {/* HERO CAROUSEL */}
      <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay text */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold text-center px-4">
            Kala Baru Activities
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 text-center">

        <p className="text-[#5C4A3A] dark:text-gray-300 mb-10 text-sm md:text-lg">
          Kala Baru is more than a coffee shop.  
          It is a place to connect, learn, and share experiences.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* BOARD GAMES */}
          <Link
            href="/activities/boardgames"
            className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md p-6 md:p-10 hover:shadow-xl transition"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[#3A2A1F] dark:text-white">
              🎲 Board Games
            </h2>

            <p className="text-[#6B5A48] dark:text-gray-300 text-sm md:text-base">
              Discover and learn different board games available at Kala Baru.
            </p>
          </Link>

          {/* LANGUAGE */}
          <Link
            href="/activities/language-course"
            className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md p-6 md:p-10 hover:shadow-xl transition"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[#3A2A1F] dark:text-white">
              🌍 Language Course
            </h2>

            <p className="text-[#6B5A48] dark:text-gray-300 text-sm md:text-base">
              Practice languages together in a relaxed environment.
            </p>
          </Link>

          {/* COMMUNITY */}
          <div className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md p-6 md:p-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[#3A2A1F] dark:text-white">
              👥 Community Meetup
            </h2>

            <p className="text-[#6B5A48] dark:text-gray-300 text-sm md:text-base">
              Meet new people and join community activities.
            </p>
          </div>

          {/* WORK */}
          <div className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md p-6 md:p-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[#3A2A1F] dark:text-white">
              💻 Work & Study
            </h2>

            <p className="text-[#6B5A48] dark:text-gray-300 text-sm md:text-base">
              Comfortable space for meetings, working, and studying.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}