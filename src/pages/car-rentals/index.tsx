"use client";
import { useState } from "react";
import FilterSidebar from "@/components/car-rentals/FilterSidebar";
import CarCard from "@/components/car-rentals/CarCard";
import Header from "@/components/Header";
import CarSearchForm from "@/components/Car";
import Footer from "@/components/Footer";

const carData = [
  {
    cartype: "Hatchback",
    name: "Swift, Celerio Or Equivalent CNG",
    fuelType: "CNG",
    price: "₹11/km",
    badgeText: "Best Seller",
    offerText: "Book Now and Get Rs 162 OFF*",
    unit: "1",
    luggage: "4",
    seats: "4",
    imgSrc: "https://transfer.easemytrip.com/assets/img/wagonr.png",
  },
  {
    cartype: "Hatchback",
    name: "Swift, Celerio Or Equivalent Petrol",
    fuelType: "Petrol",
    price: "₹11/km",
    badgeText: "Best Seller",
    offerText: "Book Now and Get Rs 162 OFF*",
    unit: "1",
    luggage: "4",
    seats: "4",
    imgSrc: "https://transfer.easemytrip.com/assets/img/wagonr.png",
  },
  {
    cartype: "Sedan",
    name: "Dzire, Etios Or Equivalent CNG",
    fuelType: "CNG",
    price: "₹12/km",
    badgeText: "Best Seller",
    offerText: "Book Now and Get Rs 166 OFF*",
    unit: "1",
    luggage: "4",
    seats: "4",
    imgSrc: "https://transfer.easemytrip.com/assets/img/dezire.png",
  },
  {
    cartype: "SUV",
    name: "Ertiga",
    fuelType: "Diesel",
    price: "₹15/km",
    badgeText: "Best Seller",
    offerText: "Book Now and Get Rs 227 OFF*",
    unit: "1",
    luggage: "4",
    seats: "5",
    imgSrc: "https://transfer.easemytrip.com/assets/img/xylo.png",
  },
    {
    cartype: "SUV",
    name: "Ertiga",
    fuelType: "CNG",
    price: "₹15/km",
    badgeText: "Best Seller",
    offerText: "Book Now and Get Rs 227 OFF*",
    unit: "1",
    luggage: "4",
    seats: "5",
    imgSrc: "https://transfer.easemytrip.com/assets/img/xylo.png",
  },
  {
    cartype: "SUV",
    name: "InnovaCrysta, KIA Carens",
    fuelType: "Petrol",
    price: "₹18/km",
    badgeText: "Best Seller",
    offerText: "Book Now and Get Rs 227 OFF*",
    unit: "1",
    luggage: "4",
    seats: "6",
    imgSrc: "https://transfer.easemytrip.com/assets/img/xylo.png",
  },
  {
    cartype: "SUV",
    name: "InnovaCrysta, KIA Carens",
    fuelType: "Diesel",
    price: "₹18/km",
    badgeText: "Best Seller",
    offerText: "Book Now and Get Rs 227 OFF*",
    unit: "1",
    luggage: "4",
    seats: "6",
    imgSrc: "https://transfer.easemytrip.com/assets/img/xylo.png",
  },
];

export default function Home() {
  const [selected, setSelected] = useState<{ [key: string]: string[] }>({
    carType: [],
    fuelType: [],
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

  const filteredCars = carData.filter((car) => {
    const carTypeMatch =
      selected.carType.length === 0 || selected.carType.includes(car.cartype);
    const fuelTypeMatch =
      selected.fuelType.length === 0 || selected.fuelType.includes(car.fuelType);

    return carTypeMatch && fuelTypeMatch;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-5">
        <CarSearchForm />
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
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => <CarCard key={index} {...car} />)
          ) : (
            <p className="text-center text-gray-500">No cars found.</p>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
