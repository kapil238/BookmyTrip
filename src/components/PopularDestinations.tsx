import React from "react";
import DestinationCard from "./DestinationCard";

const destinations = [
  {
    name: "Bali",
    location: "Bali",
    price: "5999",
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRIw9_s7L6agvYj_23FbIzv6sGkGIieXQNKwxbYcWi4E-1NgY_NOezJuq-uLQkOdWpNVRsN4wBnx1hWUoUDVuViXlKWeK6tE9w1Wl03Kg",
  },
  {
    name: "Switzerland",
    location: "Switzerland",
    price: "5999",
    image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTmjaSMS-TS_szvOgbCa217DEZBKwbGOkyiyEOWQP992nQlH1U2UfawX4UGFug4M89L61jdL4R9MqZmBsWj6WAxYyicmV3DS_dptCwRLg",
  },
  {
    name: "Thailand",
    location: "Thailand",
    price: "5999",
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSy4w4bwz4UoFYWXbADxZ44-Bv0gHIRW0QLCdnwCIDqAgvGgxJ3NE1W4I9CEUuGlUfYUUxN4Q89bghlTPIDR8qJhAPGkMCyuhjDnCm8lA",
  },
  {
    name: "Vietnam",
    location: "Vietnam",
    price: "5999",
    image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT2dIOWeiuRkQQYlTOv_rlpowg_1akyNBFutsFjWNFGEFL625dVS8HhU4uRuD2DnWDuc5L3T_HnZG5o1GX5juLaoqq5m9PP7kgPqtWWBw",
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Explore stays in popular destinations
        </h2>
        <p className="text-gray-600 mb-10">
          Average prices based on current calendar month
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
          {destinations.map((dest, idx) => (
            <DestinationCard
              key={idx}
              name={dest.name}
              location={dest.location}
              price={dest.price}
              image={dest.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
