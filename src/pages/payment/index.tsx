"use client";

import Header from "@/components/Header";
import Input from "@/components/Input";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function PaymentPage() {
  const [gender, setGender] = useState("Mr.");
  const searchParams = useSearchParams();

  const params = Object.fromEntries(searchParams.entries());
  const {
    name,
    cartype,
    fuelType,
    price,
    imgSrc,
    unit,
    luggage,
    seats,
  } = params;

  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-orange-600 text-white text-sm flex items-center justify-center">
              1
            </div>
            <span className="text-orange-600 font-semibold">Review & Travellers</span>
          </div>
          <div className="flex-1 h-0.5 bg-gray-300" />
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-6 h-6 rounded-full bg-gray-200 text-sm flex items-center justify-center">
              2
            </div>
            <span>Payment</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-6">
            <div className="bg-white border rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-semibold mb-2">
                Pickup : Monday, 26 May, 2025 10:00 AM
              </h2>
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-md">
                <img
                  src={imgSrc ?? "/car.png"}
                  alt={name ?? "Car"}
                  className="w-24 h-16 object-contain"
                />
                <div className="flex-1">
                  <div className="font-medium">
                    Car Type: <span className="font-normal">{cartype}</span>
                  </div>
                  <div className="font-medium">
                    Car Name: <span className="font-normal">{name}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-between mt-4 text-sm text-gray-600 gap-2">
                <div>Fuel Type: {fuelType}</div>
                <div>Km Charges: Rs. 14/km after {unit} KM</div>
                <div>
                  Extra: {luggage} Luggage Bags | {seats} Seats | AC
                </div>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="bg-white border rounded-lg p-4 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Travellers Details</h2>

                <div className="flex gap-2 mb-4">
                  {["Mr.", "Ms.", "Mrs."].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGender(g)}
                      className={`px-4 py-1 rounded border text-sm ${
                        gender === g
                          ? "bg-orange-100 text-orange-600 border-orange-500"
                          : "border-gray-300 text-gray-600"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input
                    name="firstName"
                    label="First Name"
                    placeholder="Enter First Name"

                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter Last Name"

                  />
                  <Input
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder="Enter Your Email Address"

                  />
                  <div className="flex gap-2">
                    <Input
                      name="countryCode"
                      label="Code"
                      type="select"
                      options={[
                        { value: "+91", label: "+91" },
                        { value: "+1", label: "+1" },
                      ]}
    
                    />
                    <Input
                      name="mobile"
                      label="Mobile Number"
                      type="tel"
                      placeholder="Enter Mobile No"
    
                    />
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  Your booking details will be sent to this email address and mobile number.
                </p>
              </div>
              <div className="bg-white border rounded-lg p-4 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Trip Details</h2>
                <div className="mb-4">
                  <Input
                    name="pickupAddress"
                    label="Pick-Up Address"
                    placeholder="Enter Pick-Up Address"
                    type="text"

                  />
                </div>
                <div>
                  <Input
                    name="dropAddress"
                    label="Drop-Off Address"
                    placeholder="Enter Drop-Off Address"
                    type="text"

                  />
                </div>
              </div>
            </form>
          </div>
          <div className="rounded-lg p-4 w-full lg:w-1/3 space-y-4">
            <div className="text-sm text-green-600 border border-gray-300 p-2 rounded-lg shadow-lg">
              ✅ Free Cancellation before 30 minutes of journey time.
            </div>
            <div className="text-right">
              <div className="flex justify-between border border-gray-300 p-2 rounded-lg shadow-lg items-center">
                <div className="text-black text-xl font-bold">Grand Total</div>
                <div>
                  <div className="text-2xl font-bold text-black">{price ?? "828"}</div>
                  <a href="#" className="text-sm text-orange-600 block mt-1">
                    Fare Breakups
                  </a>
                </div>
              </div>

              <button
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-full w-full text-lg font-semibold transition"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
