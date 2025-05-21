"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import OfferSection from "@/components/OfferSection";
import PopularDestinations from "@/components/PopularDestinations";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("car");

  return (
    <main>
      <Header />
      <Slider activeTab={activeTab} setActiveTab={setActiveTab} />
      <Hero activeTab={activeTab} />
      <OfferSection />
      <PopularDestinations />
    </main>
  );
}
