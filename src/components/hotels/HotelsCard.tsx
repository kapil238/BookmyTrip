"use client";
import { useRouter } from "next/navigation";

type HotelCardProps = {
  name: string;
  location: string;
  nights: string;
  type: string;
  price: string;
  imgSrc: string;
  amenities: string;
  nearby?: string;
  rating?: string;
};

export default function HotelsCard({
  name,
  location,
  nights,
  type,
  price,
  imgSrc,
  amenities,
  nearby,
  rating,
}: HotelCardProps) {
  const router = useRouter();

  const handleBookNow = () => {
    const query = new URLSearchParams({
      name,
      location,
      nights,
      type,
      price,
      imgSrc,
      amenities,
    }).toString();

    router.push(`/payment?${query}`);
  };

  return (
    <div className="flex flex-col justify-between bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition duration-300 transform hover:scale-105">
      <div>
        <div className="relative h-48 w-full">
          <img
            src={imgSrc}
            alt={name}
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {price}
          </div>
        </div>

        <div className="p-4 space-y-2 flex-grow">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{location} • {nights} • {type}</p>
          {rating && <p className="text-sm text-yellow-500">⭐ {rating} Stars</p>}
          <p className="text-sm text-gray-600">{amenities}</p>
          {nearby && (
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Nearby:</span> {nearby}
            </p>
          )}
        </div>
      </div>

      <div className="p-4 pt-0">
        <button
          onClick={handleBookNow}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md text-sm font-medium transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
