"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import {
  XCircleIcon,
  CheckCircleIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

const initialBookings = [
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
  {
    id: 4,
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
];

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState<"all" | "cancelled">("all");
  const [bookingData, setBookingData] = useState(initialBookings);

  useEffect(() => {
    const saved = localStorage.getItem("bookingData");
    if (saved) {
      setBookingData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
  }, [bookingData]);

  const handleCancel = (id: number) => {
    const confirm = window.confirm(
      "Are you sure you want to cancel this booking?"
    );
    if (!confirm) return;

    const updated = bookingData.map((b) =>
      b.id === id ? { ...b, status: "Cancelled" } : b
    );
    setBookingData(updated);
  };

  const filteredBookings =
    activeTab === "cancelled"
      ? bookingData.filter((b) => b.status === "Cancelled")
      : bookingData;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Bookings</h1>

        <div className="flex gap-6 border-b border-gray-200 mb-6">
          {["all", "cancelled"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "all" | "cancelled")}
              className={`relative pb-2 font-semibold text-sm transition-all duration-300 ${
                activeTab === tab
                  ? "text-orange-600 border-b-2 border-orange-500"
                  : "text-gray-500 hover:text-orange-500"
              }`}
            >
              {tab === "all" ? "All Bookings" : "Cancelled Bookings"}
            </button>
          ))}
        </div>

        {filteredBookings.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">No bookings found.</p>
        ) : (
          <div className="space-y-5">
            {filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-5"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex gap-4 items-start">
                    <img
                      src={booking.imgSrc}
                      alt={booking.airline}
                      className="w-14 h-14 object-contain rounded"
                    />
                    <div className="space-y-1">
                      <h2 className="text-lg font-bold text-gray-800">
                        {booking.airline}
                      </h2>
                      <p className="text-sm text-gray-500">{booking.flight}</p>
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
                          booking.badgeText === "Best Value"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        <StarIcon className="w-4 h-4" />
                        {booking.badgeText}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700 mt-2 sm:mt-0 pt-5">
                    <div>
                      <p className="font-medium">From : {booking.from}</p>
                    </div>
                    <div>
                      <p className="font-medium">To : {booking.to}</p>
                    </div>
                    <div>
                      <p className="font-medium">Date : {booking.date}</p>
                    </div>
                    <div>
                      <p className="font-medium">Departure : {booking.departure}</p>
                    </div>
                    <div>
                      <p className="font-medium">Arrival : {booking.arrival}</p>
                    </div>
                    <div>
                      <p className="font-medium">Duration : {booking.duration}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-2">
                    <span
                      className={`inline-flex items-center gap-1 text-sm font-semibold px-3 py-1 rounded-full ${
                        booking.status === "Cancelled"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {booking.status === "Cancelled" ? (
                        <XCircleIcon className="w-4 h-4" />
                      ) : (
                        <CheckCircleIcon className="w-4 h-4" />
                      )}
                      {booking.status}
                    </span>
                    <p className="text-2xl font-bold text-gray-800">
                      {booking.price}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-sm text-gray-600 items-center pt-3">
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
                  <p className="col-span-2 sm:col-span-3">
                    <span className="font-medium">Offer:</span>{" "}
                    {booking.offerText}
                  </p>
                  {booking.status !== "Cancelled" && (
                    <button
                      onClick={() => handleCancel(booking.id)}
                      className="text-sm text-red-600 font-medium hover:underline bg-red-50 hover:bg-red-100 transition px-3 py-1 rounded-full col-span-2 sm:col-span-1"
                    >
                      Cancel Booking
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
