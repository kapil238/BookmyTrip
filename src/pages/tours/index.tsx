"use client";
import { useState } from "react";
import FilterSidebar from "@/components/tour/FilterSidebar";
import TourCard from "@/components/tour/TourCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tourData = [
  {
    title: "Romantic Goa Getaway",
    location: "Goa",
    duration: "3 Days",
    type: "Beach",
    category: "Domestic",
    price: "₹8,999",
    imgSrc:
      "https://weddingsdegoa.com/wp-content/uploads/2017/01/Romantic-Dinning-opt-1-879622860.jpg",
    highlights: "Sunset Cruise | Beachside Resort",
    Visit: "Baga Beach, Fort Aguada, Tito's Street",
  },
  {
    title: "Himalayan Adventure Trek",
    location: "Manali",
    duration: "5 Days",
    type: "Adventure",
    category: "Domestic",
    price: "₹14,500",
    imgSrc: "https://www.rockyfeet.com/wp-content/uploads/2016/04/ARN_9764.jpg",
    highlights: "Camping | River Rafting",
    Visit: "Solang Valley, Jogini Falls, Manu Temple",
  },
  {
    title: "Rajasthan Heritage Tour",
    location: "Jaipur",
    duration: "4 Days",
    type: "Cultural",
    category: "Domestic",
    price: "₹10,200",
    imgSrc:
      "https://ranthamborenationalpark-india.com/wp-content/uploads/2024/05/1569232483_rajasthan_budget_tour.jpg",
    highlights: "Palace Visits | Camel Safari",
    Visit: "Amber Fort, Hawa Mahal, City Palace",
  },
  {
    title: "Stunning Kashmir Valley",
    location: "Kashmir",
    duration: "5 Days",
    type: "Adventure",
    category: "Domestic",
    price: "₹14,500",
    imgSrc:
      "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3766/Picturesque%20view%20of%20snow-covered%20hills%20in%20Gulmarg.jpeg",
    highlights: "Camping | River Rafting",
    Visit: "Shankaracharya Temple, Avantipura Ruins, Cheshma Shahi",
  },
  {
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    duration: "5 Days",
    type: "Adventure",
    category: "International",
    price: "₹75,000",
    imgSrc:
      "https://i.natgeofe.com/n/28fd84d5-ebb6-45c8-a758-17d0089a0464/TT_report_ST0058057copy-Enhanced_HR.jpg",
    highlights: "Skiing | Scenic Train Rides",
    Visit: "Jungfrau, Interlaken, Lucerne",
  },
  {
    title: "Paris Romantic Escape",
    location: "Paris",
    duration: "4 Days",
    type: "Cultural",
    category: "International",
    price: "₹88,000",
    imgSrc:
      "https://cdn1.tripoto.com/media/filter/tst/img/2551121/Image/1739855971_untitled_design_2025_02_18t104912_221.jpg.webp",
    highlights: "Eiffel Tower | Seine Cruise",
    Visit: "Eiffel Tower, Louvre Museum, Notre-Dame",
  },
  {
    title: "Gems of Nepal",
    location: "Nepal",
    duration: "6 Days",
    type: "Cultural",
    category: "International",
    price: "₹45,000",
    imgSrc:
      "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3816/Swayambhunath%20Temple%20at%20night.jpg",
    highlights: "Kathmandu Valley | Pokhara Lakeside",
    Visit: "Pashupatinath Temple, Swayambhunath Stupa, Pokhara",
  },
  {
    title: "My Bali My Way",
    location: "Bali",
    duration: "5 Days",
    type: "Cultural",
    category: "International",
    price: "₹60,000",
    imgSrc:
      "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1404/pexels-darren-lawrence-848896-3822070.jpg",
    highlights: "Ubud Rice Terraces | Tanah Lot Temple",
    Visit: "Ubud, Kuta Beach, Seminyak",
  },
];

export default function TourPackages() {
  const [selected, setSelected] = useState<{ [key: string]: string[] }>({
    type: [],
    duration: [],
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

  const filteredTours = tourData.filter((tour) => {
    const typeMatch =
      selected.type.length === 0 || selected.type.includes(tour.type);
    const durationMatch =
      selected.duration.length === 0 ||
      selected.duration.includes(tour.duration);
    const locationMatch =
      selected.location.length === 0 ||
      selected.location.includes(tour.location);
    const categoryMatch =
      selected.category.length === 0 ||
      selected.category.includes(tour.category);
    const priceMatch =
      selected.price.length === 0 ||
      selected.price.some((priceRange) => {
        const [min, max] = priceRange
          .split(" - ")
          .map((p) => parseInt(p.replace(/[₹,]/g, "")));
        const tourPrice = parseInt(tour.price.replace(/[₹,]/g, ""));
        return (
          (isNaN(min) || tourPrice >= min) && (isNaN(max) || tourPrice <= max)
        );
      });
    return (
      typeMatch && durationMatch && locationMatch && categoryMatch && priceMatch
    );
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-5 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Explore Tour Packages
        </h1>
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
          {filteredTours.length > 0 ? (
            filteredTours.map((tour, index) => (
              <TourCard key={index} {...tour} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No tour packages found.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
