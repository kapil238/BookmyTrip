"use client";

import {
  FaCheckCircle,
  FaCalendarAlt,
  FaGlobe,
  FaUserTie,
} from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import Image from "next/image";

export default function TravelHighlightSection() {
  const highlights = [
    "Stay Informed and Secure",
    "24/7 Customer Support",
    "Tailored Travel Packages",
    "Trusted by Thousands of Travelers",
  ];

  const features = [
    {
      icon: <MdAttachMoney className="text-2xl text-green-700" />,
      title: "Best Price",
      description: "Unbeatable prices for unforgettable adventures",
      bg: "bg-green-100",
    },
    {
      icon: <FaGlobe className="text-2xl text-cyan-700" />,
      title: "Global Reach",
      description: "Explore everywhere with global coverage",
      bg: "bg-cyan-100",
    },
    {
      icon: <FaCalendarAlt className="text-2xl text-orange-600" />,
      title: "Fastest Booking",
      description: "Explore everywhere with fastest booking",
      bg: "bg-orange-100",
    },
    {
      icon: <FaUserTie className="text-2xl text-blue-700" />,
      title: "Expert Guidance",
      description: "Experience the difference with expert guidance",
      bg: "bg-blue-100",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          <p className="text-orange-600 font-bold text-4xl mb-2">We Are Best</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black leading-snug mb-6">
            Discover What Makes Us The Best In Travel And Tourism
          </h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8">
            {highlights.map((text, i) => (
              <div
                className="flex items-start gap-2 transition-all hover:scale-105"
                key={i}
              >
                <FaCheckCircle className="text-orange-500 mt-1" />
                <p className="text-gray-800 text-sm sm:text-base">{text}</p>
              </div>
            ))}
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-lg w-full h-64 sm:h-72 group">
            <Image
              src="/images/island-walk.jpg"
              alt="Island Walk"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5">
          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/images/Trip.webp"
              alt="Beach Trip"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            {features.map((item, idx) => (
              <div
                key={idx}
                className={`${item.bg} p-5 rounded-md shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
