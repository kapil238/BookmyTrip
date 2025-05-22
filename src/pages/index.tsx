"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import OfferSection from "@/components/offer/OfferSection";
import PopularDestinations from "@/components/popularDestinations/PopularDestinations";
import BackToTopButton from "@/components/BackToTopButton";
import TrendingPlaces from "@/components/TrendingDestinations/TrendingPlaces";
import FlightRoutes from "@/components/FlightRoutes";
import WhyBookWithUs from "@/components/WhyBookWithUs";
import FaqSection from "@/components/FaqSection";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("car");

  return (
    <main>
      <BackToTopButton />
      <Header />
      <Slider activeTab={activeTab} setActiveTab={setActiveTab} />
      <Hero activeTab={activeTab} />
      <OfferSection />
      <PopularDestinations />
      <TrendingPlaces />
      <FlightRoutes />
      <WhyBookWithUs />
      <FaqSection />
    </main>
  );
}
