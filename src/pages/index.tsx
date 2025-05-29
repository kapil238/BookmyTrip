"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OfferSection from "@/components/offer/OfferSection";
import PopularDestinations from "@/components/popularDestinations/PopularDestinations";
import BackToTopButton from "@/components/BackToTopButton";
import TrendingPlaces from "@/components/TrendingDestinations/TrendingPlaces";
import FlightRoutes from "@/components/FlightRoutes";
import WhyBookWithUs from "@/components/WhyBookWithUs";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <BackToTopButton />
      <Header />
      <Hero /> 
      <OfferSection />
      <PopularDestinations />
      <TrendingPlaces />
      <FlightRoutes />
      <WhyBookWithUs />
      <FaqSection />
      <Footer />
    </main>
  );
}
