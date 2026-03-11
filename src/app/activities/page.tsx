"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Activities() {

  const images = [
    "/activities/boardgames.jpg",
    "/activities/language.jpg",
    "/activities/meeting.jpg",
    "/activities/community.jpg"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
 <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1f1f1f]">

      {/* CAROUSEL */}

      <div className="relative w-full h-[420px] overflow-hidden">

        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

      </div>

      {/* CONTENT */}

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">

        <h1 className="text-4xl font-semibold text-[#3A2A1F] dark:text-[#FDF1DD] mb-4">
          Kala Baru Activities
        </h1>

        <p className="text-[#5C4A3A] dark:text-gray-300 mb-12">
          Kala Baru is more than a coffee shop.  
          It is a place to connect, learn and share moments.
        </p>

        {/* ACTIVITY GRID */}

        <div className="grid md:grid-cols-2 gap-8">

          <Link
            href="/activities/boardgames"
            className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md p-10"
          >
            <h2 className="text-2xl font-semibold mb-2 text-[#3A2A1F] dark:text-white">
              🎲 Board Games
            </h2>

            <p className="text-[#6B5A48] dark:text-gray-300">
              Discover and learn different board games available at Kala Baru.
            </p>
          </Link>

          <Link
            href="/activities/language-course"
             className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md p-10"
          >
            <h2 className="text-2xl font-semibold mb-2 text-[#3A2A1F] dark:text-white">
              🌍 Language Course
            </h2>

            <p className="text-[#6B5A48] dark:text-gray-300">
              Practice languages together in a relaxed coffee shop environment.
            </p>
          </Link>

          <div className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md p-10">
            <h2 className="text-2xl font-semibold mb-2 text-[#3A2A1F] dark:text-white">
              👥 Community Meetup
            </h2>

            <p className="text-[#6B5A48] dark:text-gray-300">
              Meet new people and join social activities at Kala Baru.
            </p>
          </div>

          <div className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md p-10">
            <h2 className="text-2xl font-semibold mb-2 text-[#3A2A1F] dark:text-white">
              💻 Meeting & Work
            </h2>

            <p className="text-[#6B5A48] dark:text-gray-300">
              Use Kala Baru as a comfortable place for meetings, study or remote work.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}