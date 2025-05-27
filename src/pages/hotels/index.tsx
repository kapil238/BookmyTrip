"use client";
import { useState } from "react";
import FilterSidebar from "@/components/hotels/FilterSidebar";
import HotelsCard from "@/components/hotels/HotelsCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const hotelData = [
  {
    name: "Moustache Goa Luxuria",
    location: "Goa",
    nights: "3 Nights",
    type: "Beach Resort",
    category: "Domestic",
    price: "₹8,999",
    rating: "4.5",
    imgSrc: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201008301457553185-570e400f-db50-4b20-978b-126fada538e7.jpg?output-quality=75&output-format=webp&downsize=720:*",
    amenities: "Free Wi-Fi, Breakfast",
    nearby: "Baga Beach, Fort Aguada",
  },
  {
    name: "Himalayan Heights",
    location: "Manali",
    nights: "2 Nights",
    type: "Mountain Resort",
    category: "Domestic",
    price: "₹7,200",
    rating: "4.2",
    imgSrc: "https://r1imghtlak.mmtcdn.com/eb36b0b6622711ebb9ee0242ac110002.jfif?output-quality=75&output-format=webp&downsize=720:*",
    amenities: "Heater, Balcony View",
    nearby: "Solang Valley, Mall Road",
  },
  {
    name: "Himalayan Heights",
    location: "Manali",
    nights: "2 Nights",
    type: "Mountain Resort",
    category: "Domestic",
    price: "₹7,200",
    rating: "4.2",
    imgSrc: "https://r1imghtlak.mmtcdn.com/eb36b0b6622711ebb9ee0242ac110002.jfif?output-quality=75&output-format=webp&downsize=720:*",
    amenities: "Heater, Balcony View",
    nearby: "Solang Valley, Mall Road",
  },
  {
    name: "Himalayan Heights",
    location: "Manali",
    nights: "2 Nights",
    type: "Mountain Resort",
    category: "Domestic",
    price: "₹7,200",
    rating: "4.2",
    imgSrc: "https://r1imghtlak.mmtcdn.com/eb36b0b6622711ebb9ee0242ac110002.jfif?output-quality=75&output-format=webp&downsize=720:*",
    amenities: "Heater, Balcony View",
    nearby: "Solang Valley, Mall Road",
  },
  {
    name: "Himalayan Heights",
    location: "Manali",
    nights: "2 Nights",
    type: "Mountain Resort",
    category: "Domestic",
    price: "₹7,200",
    rating: "4.2",
    imgSrc: "https://r1imghtlak.mmtcdn.com/eb36b0b6622711ebb9ee0242ac110002.jfif?output-quality=75&output-format=webp&downsize=720:*",
    amenities: "Heater, Balcony View",
    nearby: "Solang Valley, Mall Road",
  },
];

export default function HotelBookingPage() {
  const [selected, setSelected] = useState<{ [key: string]: string[] }>({
    type: [],
    nights: [],
    location: [],
    category: [],
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

  const filteredHotel = hotelData.filter((hotel) => {
    const typeMatch =
      selected.type.length === 0 || selected.type.includes(hotel.type);
    const nightsMatch =
      selected.nights.length === 0 || selected.nights.includes(hotel.nights);
    const locationMatch =
      selected.location.length === 0 || selected.location.includes(hotel.location);
    const categoryMatch =
      selected.category.length === 0 || selected.category.includes(hotel.category);
    const priceMatch =
      selected.price.length === 0 ||
      selected.price.some((priceRange) => {
        const [min, max] = priceRange
          .split(" - ")
          .map((p) => parseInt(p.replace(/[₹,]/g, "")));
        const hotelPrice = parseInt(hotel.price.replace(/[₹,]/g, ""));
        return (
          (isNaN(min) || hotelPrice >= min) && (isNaN(max) || hotelPrice <= max)
        );
      });

    return (
      typeMatch && nightsMatch && locationMatch && categoryMatch && priceMatch
    );
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-5 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Book Your Hotel</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 sm:px-6 max-w-7xl mx-auto pb-10">
        <div className="lg:col-span-1">
          <FilterSidebar
            selected={selected}
            setSelected={setSelected}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHotel.length > 0 ? (
            filteredHotel.map((hotel, index) => (
              <HotelsCard key={index} {...hotel} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No hotels found.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
