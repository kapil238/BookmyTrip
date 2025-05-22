"use client";

import { useState } from "react";
import DestinationCard from "./DestinationCard";
import Tabs from "./Tabs";
import { MdCallReceived  } from "react-icons/md";

const allDestinations = [
  {
    name: "Ladakh",
    location: "Mountainous, Barren",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS4Ck_fHmBHtRclATgzHI-Vu30BiXVKoSx9qiDjj9smknOanX3n76QmqBRxvNgQpeHOMpbXWoihC7xVlFQ6Xlyn9JtqbjUzd-qi4onUwg",
    originalPrice: 69999,
    price: 55999,
    rating: 4.9,
    dateRange: "Tue, Jul 20 - Fri, Jul 23",
    liked: true,
    type: "Domestic",
  },
  {
    name: "Mumbai",
    location: "City Dreams",
    image:
      "https://lp-cms-production.imgix.net/image_browser/Mumbai_nightlife_S.jpg",
    originalPrice: 69999,
    price: 55999,
    rating: 4.9,
    dateRange: "Tue, Jul 20 - Fri, Jul 23",
    type: "Domestic",
  },
  {
    name: "Ladakh",
    location: "Mountainous, Barren",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS4Ck_fHmBHtRclATgzHI-Vu30BiXVKoSx9qiDjj9smknOanX3n76QmqBRxvNgQpeHOMpbXWoihC7xVlFQ6Xlyn9JtqbjUzd-qi4onUwg",
    originalPrice: 69999,
    price: 55999,
    rating: 4.9,
    dateRange: "Tue, Jul 20 - Fri, Jul 23",
    liked: true,
    type: "Domestic",
  },
  {
    name: "Mumbai",
    location: "City Dreams",
    image:
      "https://lp-cms-production.imgix.net/image_browser/Mumbai_nightlife_S.jpg",
    originalPrice: 69999,
    price: 55999,
    rating: 4.9,
    dateRange: "Tue, Jul 20 - Fri, Jul 23",
    type: "Domestic",
  },
  {
    name: "Ladakh",
    location: "Mountainous, Barren",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS4Ck_fHmBHtRclATgzHI-Vu30BiXVKoSx9qiDjj9smknOanX3n76QmqBRxvNgQpeHOMpbXWoihC7xVlFQ6Xlyn9JtqbjUzd-qi4onUwg",
    originalPrice: 69999,
    price: 55999,
    rating: 4.9,
    dateRange: "Tue, Jul 20 - Fri, Jul 23",
    liked: true,
    type: "Domestic",
  },
  {
    name: "Paris",
    location: "City of Light",
    image:
      "https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/",
    originalPrice: 129999,
    price: 99999,
    rating: 4.9,
    dateRange: "Tue, Aug 10 - Fri, Aug 13",
    liked: true,
    type: "International",
  },
  {
    name: "Bali",
    location: "Tropical Paradise",
    image:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSWozmUfIc1217cJ0PtD3IHhYVNa267gaFTACOP2sONuwBhsKe_eVj6bCKGXsdX3a2E_hY8Am3abZYEdmrHFHZyPdId7duiLEt_pG-nyw",
    originalPrice: 119999,
    price: 89999,
    rating: 4.9,
    dateRange: "Tue, Sep 01 - Fri, Sep 04",
    type: "International",
  },
  {
    name: "Paris",
    location: "City of Light",
    image:
      "https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/",
    originalPrice: 129999,
    price: 99999,
    rating: 4.9,
    dateRange: "Tue, Aug 10 - Fri, Aug 13",
    liked: true,
    type: "International",
  },
  {
    name: "Bali",
    location: "Tropical Paradise",
    image:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSWozmUfIc1217cJ0PtD3IHhYVNa267gaFTACOP2sONuwBhsKe_eVj6bCKGXsdX3a2E_hY8Am3abZYEdmrHFHZyPdId7duiLEt_pG-nyw",
    originalPrice: 119999,
    price: 89999,
    rating: 4.9,
    dateRange: "Tue, Sep 01 - Fri, Sep 04",
    type: "International",
  },
];

export default function TrendingPlaces() {
  const [activeTab, setActiveTab] = useState("Domestic");
  const [viewAll, setViewAll] = useState(false);

  const filteredDestinations = allDestinations.filter(
    (dest) => dest.type === activeTab
  );

  const destinations = viewAll
    ? filteredDestinations
    : filteredDestinations.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
        Trending Places to Visit
      </h2>
      <p className="text-center text-sm text-gray-500 mb-6">
        See where everyones going! Check out our most popular destinations for
        inspiration.
      </p>

      <Tabs
        active={activeTab}
        onChange={(tab) => {
          setActiveTab(tab);
          setViewAll(false);
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {destinations.map((item, idx) => (
          <DestinationCard key={idx} {...item} />
        ))}
      </div>

      {filteredDestinations.length > 4 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setViewAll(!viewAll)}
            className="px-6 py-2 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 cursor-pointer transition flex items-center gap-2 mx-auto"
          >
            {viewAll ? "View Less" : "View All"}
            <MdCallReceived 
              size={18}
              className={
                viewAll ? "rotate-180 transition-transform" : "transition-transform"
              }
            />
          </button>
        </div>
      )}
    </section>
  );
}
