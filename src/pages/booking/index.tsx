"use client";
import { useState } from "react";
import Header from "@/components/Header";

const bookings = [
  {
    id: 1,
    airline: "IndiGo",
    flight: "6E-203",
    from: "Delhi",
    to: "Mumbai",
    date: "2025-05-30",
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
    status: "Confirmed",
  },
  {
    id: 2,
    airline: "Air India",
    flight: "AI-101",
    from: "Delhi",
    to: "Mumbai",
    date: "2025-06-01",
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
    status: "Cancelled",
  },
  {
    id: 3,
    airline: "Air India Express",
    flight: "IX-555",
    from: "Delhi",
    to: "Mumbai",
    date: "2025-06-03",
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
    status: "Confirmed",
  },
];

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState<"all" | "cancelled">("all");

  const filteredBookings =
    activeTab === "cancelled"
      ? bookings.filter((b) => b.status === "Cancelled")
      : bookings;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold mb-6">My Bookings</h1>
        <div className="flex gap-4 border-b mb-6">
          <button
            onClick={() => setActiveTab("all")}
            className={`pb-2 border-b-2 ${
              activeTab === "all"
                ? "border-orange-500 text-orange-600"
                : "border-transparent text-gray-500"
            } font-medium`}
          >
            All Bookings
          </button>
          <button
            onClick={() => setActiveTab("cancelled")}
            className={`pb-2 border-b-2 ${
              activeTab === "cancelled"
                ? "border-orange-500 text-orange-600"
                : "border-transparent text-gray-500"
            } font-medium`}
          >
            Cancelled Bookings
          </button>
        </div>
        {filteredBookings.length === 0 ? (
          <p className="text-gray-500">No bookings found.</p>
        ) : (
          <div className="space-y-4">
            {filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white shadow rounded-lg p-4 border border-gray-200 hover:shadow-md transition"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex gap-4 items-start">
                    <img
                      src={booking.imgSrc}
                      alt={booking.airline}
                      className="w-14 h-14 object-contain"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">
                        {booking.airline}
                      </h2>
                      <p className="text-sm text-gray-500">{booking.flight}</p>
                      <span
                        className={`text-xs font-medium inline-block mt-1 px-2 py-1 rounded-full ${
                          booking.badgeText === "Best Value"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {booking.badgeText}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700 mt-2 sm:mt-0">
                    <div>
                      <p className="font-medium">From</p>
                      <p>{booking.from}</p>
                    </div>
                    <div>
                      <p className="font-medium">To</p>
                      <p>{booking.to}</p>
                    </div>
                    <div>
                      <p className="font-medium">Date</p>
                      <p>{booking.date}</p>
                    </div>
                    <div>
                      <p className="font-medium">Departure</p>
                      <p>{booking.departure}</p>
                    </div>
                    <div>
                      <p className="font-medium">Arrival</p>
                      <p>{booking.arrival}</p>
                    </div>
                    <div>
                      <p className="font-medium">Duration</p>
                      <p>{booking.duration}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end mt-2 sm:mt-0 gap-2">
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        booking.status === "Cancelled"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {booking.status}
                    </span>
                    <p className="text-lg font-bold text-gray-800">
                      {booking.price}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">Stops:</span> {booking.stops}
                  </p>
                  <p>
                    <span className="font-medium">Cabin Class:</span>{" "}
                    {booking.cabinClass}
                  </p>
                  <p>
                    <span className="font-medium">Flight Type:</span>{" "}
                    {booking.flightType}
                  </p>
                  <p className="col-span-2">
                    <span className="font-medium">Offer:</span>{" "}
                    {booking.offerText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
