"use client";
import { useState } from "react";
import FilterSidebar from "@/components/flight-booking/FilterSidebar";
import FlightCard from "@/components/flight-booking/FlightCard";
import Header from "@/components/Header";
import FlightSearchForm from "@/components/FlightSearchForm";
import Footer from "@/components/Footer";

const flightData = [
  {
    airline: "IndiGo",
    from: "Delhi",
    to: "Mumbai",
    duration: "2h 5m",
    stops: "Non-stop",
    departure: "08:00 AM",
    arrival: "10:05 AM",
    price: "₹4,500",
    imgSrc: "https://flight.easemytrip.com/Content/AirlineLogon/6E.png",
    offerText: "Save ₹500 on your first flight",
    badgeText: "Popular Choice",
    flightType: "Non-stop",
    cabinClass: "Economy",
  },
  {
    airline: "Air India",
    from: "Delhi",
    to: "Mumbai",
    duration: "2h 20m",
    stops: "1 Stop",
    departure: "09:00 AM",
    arrival: "11:20 AM",
    price: "₹5,200",
    imgSrc: "https://flight.easemytrip.com/Content/AirlineLogon/AI.png",
    offerText: "Free meal included",
    badgeText: "Best Value",
    flightType: "1 Stop",
    cabinClass: "Business",
  },
    {
    airline: "Air India Express",
    from: "Delhi",
    to: "Mumbai",
    duration: "2h 20m",
    stops: "1 Stop",
    departure: "09:00 AM",
    arrival: "11:20 AM",
    price: "₹5,200",
    imgSrc: "https://flight.easemytrip.com/Content/AirlineLogon/IX.png",
    offerText: "Free meal included",
    badgeText: "Best Value",
    flightType: "1 Stop",
    cabinClass: "Business",
  },
];

export default function FlightBooking() {
  const [selected, setSelected] = useState<{ [key: string]: string[] }>({
    flightType: [],
    cabinClass: [],
    airline: [],
  });

  const handleCheckboxChange = (category: string, option: string) => {
    setSelected((prev) => {
      const options = prev[category] || [];
      return {
        ...prev,
        [category]: options.includes(option)
          ? options.filter((o) => o !== option)
          : [...options, option],
      };
    });
  };

  const filteredFlights = flightData.filter((flight) => {
    const flightTypeMatch =
      selected.flightType.length === 0 || selected.flightType.includes(flight.flightType);
    const cabinClassMatch =
      selected.cabinClass.length === 0 || selected.cabinClass.includes(flight.cabinClass);
    const airlineMatch =
    selected.airline.length === 0 || selected.airline.includes(flight.airline);

    return flightTypeMatch && cabinClassMatch && airlineMatch;
  });

  return (
    <main className="min-h-screen">
      <Header />
      <div className="p-5">
        <FlightSearchForm />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-4 sm:p-6 max-w-7xl mx-auto">
        <div className="lg:col-span-1">
          <FilterSidebar
            selected={selected}
            setSelected={setSelected}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>

        <div className="lg:col-span-3 space-y-4">
          {filteredFlights.length > 0 ? (
            filteredFlights.map((flight, index) => <FlightCard key={index} {...flight} />)
          ) : (
            <p className="text-center text-gray-500">No flights found.</p>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
