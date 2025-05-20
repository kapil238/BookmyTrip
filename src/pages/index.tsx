"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("car");

  return (
    <main>
      <Header />
      <Slider activeTab={activeTab} setActiveTab={setActiveTab} />
      <Hero activeTab={activeTab} />
    </main>
  );
}
