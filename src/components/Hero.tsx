"use client";
import CarSearchForm from "./Car";
import FlightSearchForm from "./FlightSearchForm";
import Hotel from "./Hotel";
import Tour from "./Tour";

interface HeroProps {
  activeTab: string;
}

const tabImages: Record<string, string> = {
  car: "https://www.codezion.com/themes/html/toor/assets/images/banner/car-rental.png",
  flight: "https://www.codezion.com/themes/html/toor/assets/images/banner/flight-booking.png",
  hotel: "https://www.codezion.com/themes/html/toor/assets/images/banner/car-rental.png",
  tour: "https://www.codezion.com/themes/html/toor/assets/images/banner/car-rental.png",
};

export default function Hero({ activeTab }: HeroProps) {
  const imageUrl = tabImages[activeTab] || tabImages["tour"];

  return (
    <section className="relative bg-[#fcf3eb]">
      <div className="container mx-auto pt-15 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-full md:w-2/3">
            {activeTab === "car" && <CarSearchForm />}
            {activeTab === "flight" && <FlightSearchForm />}
            {activeTab === "hotel" && <Hotel />}
            {activeTab === "tour" && <Tour />}
          </div>
          <img
            src={imageUrl}
            alt={`${activeTab} illustration`}
            className="w-full md:w-1/3 mt-8 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
}
