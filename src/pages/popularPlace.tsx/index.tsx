"use client";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PopularDestinations from "@/components/popularDestinations/PopularDestinations";
import TrendingPlaces from "@/components/TrendingDestinations/TrendingPlaces";
import WhyBookWithUs from "@/components/WhyBookWithUs";

export default function PopularPlace() {

  return (
    <main>
      <Header />
      {/* <h1>Popular Place</h1> */}
      <PopularDestinations />
      <TrendingPlaces />
      <WhyBookWithUs />
      <FaqSection />
      <Footer />
    </main>
  );
}
