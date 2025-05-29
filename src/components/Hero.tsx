"use client";
import { useState } from "react";
import CarSearchForm from "./Car";
import FlightSearchForm from "./FlightSearchForm";
import Hotel from "./Hotel";
import Tour from "./Tour";
import Slider from "./Slider";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("car");

  const bgimageUrl =
    "https://demo.qzency.com/html/tripfy/preview/assets/image/banner-img/hero-section.png";
  const imageUrl =
    "https://demo.qzency.com/html/tripfy/preview/assets/image/banner-img/banner-gril.png";

  return (
    <section
      className="relative bg-orange-50 overflow-hidden bg-no-repeat bg-contain bg-right-top"
      style={{ backgroundImage: `url('${bgimageUrl}')` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-orange-600 font-medium text-lg mb-3 italic border border-orange-600 inline-block px-4 py-1 rounded-full">
              Adventure Awaits
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Explore The World <br />
              One{" "}
              <span className="inline-block relative text-orange-600 font-semibold">
                Adventure
                <img
                  src="/images/underline.png"
                  alt="Underline"
                  className="absolute left-0 -bottom-2 w-full object-contain"
                />
              </span>
              <br />
              At A Time
            </h1>
            <p className="text-gray-600 text-lg mb-6 max-w-xl">
              Save up to 40% on the best attractions, tours, and activities with Tripfy.
            </p>
          </div>
          <div className="relative">
            <img
              src={imageUrl}
              alt="Adventure Lady"
              className="w-full max-w-sm md:max-w-full mx-auto"
            />
          </div>
        </div>

        <div className="rounded-lg mt-12">
          <Slider activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="p-6 bg-white rounded-tr-2xl rounded-b-2xl shadow-lg">
            {activeTab === "car" && <CarSearchForm />}
            {activeTab === "flight" && <FlightSearchForm />}
            {activeTab === "hotel" && <Hotel />}
            {activeTab === "tour" && <Tour />}
          </div>
        </div>
      </div>
    </section>
  );
}
