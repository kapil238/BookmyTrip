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
    from: "Chennai",
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
    departureTime: [],
    duration: [],
    price: [],
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
      selected.flightType.length === 0 ||
      selected.flightType.includes(flight.flightType);
    const cabinClassMatch =
      selected.cabinClass.length === 0 ||
      selected.cabinClass.includes(flight.cabinClass);
    const airlineMatch =
      selected.airline.length === 0 ||
      selected.airline.includes(flight.airline);
    const departureTimeMatch =
      selected.departureTime.length === 0 ||
      selected.departureTime.includes(
        flight.departure.split(" ")[0] === "08:00"
          ? "Morning"
          : flight.departure.split(" ")[0] === "09:00"
          ? "Morning"
          : flight.departure.split(" ")[0] === "10:00"
          ? "Afternoon"
          : flight.departure.split(" ")[0] === "11:00"
          ? "Afternoon"
          : flight.departure.split(" ")[0] === "12:00"
          ? "Afternoon"
          : flight.departure.split(" ")[0] === "13:00"
          ? "Afternoon"
          : flight.departure.split(" ")[0] === "14:00"
          ? "Afternoon"
          : flight.departure.split(" ")[0] === "15:00"
          ? "Afternoon"
          : flight.departure.split(" ")[0] === "16:00"
          ? "Evening"
          : flight.departure.split(" ")[0] === "17:00"
          ? "Evening"
          : flight.departure.split(" ")[0] === "18:00"
          ? "Evening"
          : flight.departure.split(" ")[0] === "19:00"
          ? "Evening"
          : flight.departure.split(" ")[0] === "20:00"
          ? "Night"
          : flight.departure.split(" ")[0] === "21:00"
          ? "Night"
          : flight.departure.split(" ")[0] === "22:00"
          ? "Night"
          : flight.departure.split(" ")[0] === "23:00"
          ? "Night"
          : "Unknown"
      );
    const durationMatch =
      selected.duration.length === 0 ||
      selected.duration.includes(
        flight.duration.split(" ")[0] === "2h"
          ? "Less than 2h"
          : flight.duration.split(" ")[0] === "3h"
          ? "2h - 4h"
          : flight.duration.split(" ")[0] === "4h"
          ? "4h - 6h"
          : flight.duration.split(" ")[0] === "5h"
          ? "4h - 6h"
          : flight.duration.split(" ")[0] === "6h"
          ? "More than 6h"
          : "Unknown"
      );
    const priceMatch =
      selected.price.length === 0 ||
      selected.price.includes(
        flight.price === "₹4,500"
          ? "₹0 - ₹5,000"
          : flight.price === "₹5,200"
          ? "₹5,001 - ₹10,000"
          : "Unknown"
      );

    return (
      flightTypeMatch &&
      cabinClassMatch &&
      airlineMatch &&
      departureTimeMatch &&
      durationMatch &&
      priceMatch
    );
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
            filteredFlights.map((flight, index) => (
              <FlightCard key={index} {...flight} />
            ))
          ) : (
            <p className="text-center text-gray-500">No flights found.</p>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
