"use client";

import Header from "@/components/Header";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Input from "@/components/Input";

export default function PaymentPage() {
  const [method, setMethod] = useState("card");
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  // Debug: check all incoming params
  useEffect(() => {
    console.log("Params:", params);
  }, [params]);

  const {
    name,
    cartype,
    fuelType,
    price,
    luggage,
    seats,
    airline,
    from,
    to,
    departure,
    arrival,
    duration,
    stops,
    cabinClass,
    title,
    location,
    type,
    // imgSrc,
    highlights,
        nights,
    amenities,
  } = params;

  const isFlightBooking = !!airline;
  const isCarBooking = !!cartype;
  const isTourBooking = !!title && !!location;
  const isHotelBooking = !!nights && !!amenities;

  return (
    <main className="bg-white min-h-screen">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-600 mb-10">
          Complete Your Payment
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <section className="flex-1 bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-6">
              Select Payment Method
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { key: "card", label: "Credit/Debit Card" },
                { key: "upi", label: "UPI" },
                { key: "wallet", label: "Wallet" },
                { key: "netbanking", label: "Net Banking" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setMethod(key)}
                  className={`py-3 rounded-lg border text-sm sm:text-base font-medium transition text-center
                    ${
                      method === key
                        ? "bg-orange-500 text-white border-orange-500 shadow-md"
                        : "bg-white text-gray-600 border-gray-300 hover:border-orange-400"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Processing payment via ${method.toUpperCase()}...`);
              }}
            >
              {method === "card" && (
                <>
                  <Input
                    label="Card Number"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                  />
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      label="Expiry Date"
                      name="expiry"
                      placeholder="MM/YY"
                    />
                    <Input
                      label="CVV"
                      name="cvv"
                      placeholder="123"
                      type="password"
                    />
                  </div>
                  <Input
                    label="Name on Card"
                    name="cardName"
                    placeholder="John Doe"
                  />
                </>
              )}

              {method === "upi" && (
                <Input label="UPI ID" name="upiId" placeholder="yourname@upi" />
              )}

              {method === "wallet" && (
                <Input
                  label="Select Wallet"
                  name="wallet"
                  type="select"
                  options={[
                    { value: "paytm", label: "Paytm" },
                    { value: "phonepe", label: "PhonePe" },
                    { value: "googlepay", label: "Google Pay" },
                  ]}
                />
              )}

              {method === "netbanking" && (
                <Input
                  label="Select Bank"
                  name="bank"
                  type="select"
                  options={[
                    { value: "sbi", label: "State Bank of India" },
                    { value: "hdfc", label: "HDFC Bank" },
                    { value: "icici", label: "ICICI Bank" },
                    { value: "axis", label: "Axis Bank" },
                  ]}
                />
              )}

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition"
              >
                Pay Now
              </button>
            </form>
          </section>

          <aside className="w-full lg:w-1/3 bg-orange-50 p-6 sm:p-8 rounded-xl shadow-md text-gray-700">
            <h2 className="text-lg sm:text-xl font-semibold mb-6 text-orange-600">
              Booking Summary
            </h2>

            <div className="space-y-4">
              {isCarBooking ? (
                <>
                  <div className="flex items-center gap-4">
                    <div>
                      <p>
                        <span className="font-semibold">Car Type:</span>{" "}
                        {cartype ?? "N/A"}
                      </p>
                      <p>
                        <span className="font-semibold">Car Name:</span>{" "}
                        {name ?? "N/A"}
                      </p>
                    </div>
                  </div>
                  <p>
                    <span className="font-semibold">Pickup Date:</span> Monday,
                    26 May, 2025
                  </p>
                  <p>
                    <span className="font-semibold">Pickup Time:</span> 10:00 AM
                  </p>
                  <p>
                    <span className="font-semibold">Fuel Type:</span>{" "}
                    {fuelType ?? "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold">Seats:</span>{" "}
                    {seats ?? "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold">Luggage:</span>{" "}
                    {luggage ?? "N/A"} Bags
                  </p>
                </>
              ) : isFlightBooking ? (
                <>
                  <div className="flex items-center gap-4">
                    <div>
                      <p>
                        <span className="font-semibold">Airline:</span>{" "}
                        {airline ?? "N/A"}
                      </p>
                      <p>
                        <span className="font-semibold">Route:</span>{" "}
                        {from ?? "N/A"} → {to ?? "N/A"}
                      </p>
                    </div>
                  </div>
                  <p>
                    <span className="font-semibold">Departure:</span>{" "}
                    {departure ?? "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold">Arrival:</span>{" "}
                    {arrival ?? "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold">Duration:</span>{" "}
                    {duration ?? "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold">Stops:</span>{" "}
                    {stops ?? "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold">Class:</span>{" "}
                    {cabinClass ?? "N/A"}
                  </p>
                </>
              ) : isTourBooking ? (
                <>
                  <div className="flex items-center gap-4">
                    {/* <img
                      src={imgSrc ?? "/placeholder.png"}
                      alt={title}
                      className="w-16 h-16 rounded-lg object-cover"
                    /> */}
                    <div>
                      <p>
                        <span className="font-semibold">Tour:</span>{" "}
                        {title ?? "N/A"}
                      </p>
                      <p>
                        <span className="font-semibold">Location:</span>{" "}
                        {location ?? "N/A"}
                      </p>
                    </div>
                  </div>
                  <p>
                    <span className="font-semibold">Type:</span> {type ?? "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold">Highlights:</span>{" "}
                    {highlights
                      ? highlights.split(",").join(", ")
                      : "N/A"}
                  </p>
                </>
              ) : isHotelBooking ? (
                <>
                  <div className="flex items-center gap-4">
                    {/* <img
                      src={imgSrc ?? "/placeholder.png"}
                      alt={name}
                      className="w-16 h-16 rounded-lg object-cover"
                    /> */}
                    <div>
                      <p>
                        <span className="font-semibold">Hotel:</span> {name ?? "N/A"}
                      </p>
                      <p>
                        <span className="font-semibold">Location:</span> {location ?? "N/A"}
                      </p>
                    </div>
                  </div>
                  <p>
                    <span className="font-semibold">Nights:</span> {nights ?? "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold">Amenities:</span>{" "}
                    {amenities ? amenities.split(",").join(", ") : "N/A"}
                  </p>
                </>
              )
              
              : (
                <p>No booking details available</p>
              )}

              <div className="border-t mt-4 pt-4 text-2xl font-extrabold text-orange-700">
                {price ?? "828"}
              </div>

              {(isCarBooking || isFlightBooking) && (
                <p className="mt-4 text-green-700 text-sm font-medium">
                  ✅ Free Cancellation before 30 minutes of journey time.
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
