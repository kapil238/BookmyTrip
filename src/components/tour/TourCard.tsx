"use client";
import { useRouter } from "next/navigation";

type TourCardProps = {
  title: string;
  location: string;
  duration: string;
  type: string;
  price: string;
  imgSrc: string;
  highlights: string;
  Visit?: string;
};

export default function TourCard({
  title,
  location,
  duration,
  type,
  price,
  imgSrc,
  highlights,
  Visit,
}: TourCardProps) {
  const router = useRouter();

  const handleBookNow = () => {
    const query = new URLSearchParams({
      title,
      location,
      duration,
      type,
      price,
      imgSrc,
      highlights,
    }).toString();

    router.push(`/payment?${query}`);
  };

  return (
    <div className="flex flex-col justify-between bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 h-full">
      <div>
        <div className="relative h-48 w-full">
          <img
            src={imgSrc}
            alt={title}
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {price}
          </div>
        </div>

        <div className="p-4 space-y-2 flex-grow">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">
            {location} • {duration} • {type}
          </p>
          <p className="text-sm text-gray-600">{highlights}</p>
          {Visit && (
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-700">Visit:</span> {Visit}
            </p>
          )}
        </div>
      </div>

      <div className="p-4 pt-0">
        <button
          onClick={handleBookNow}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium text-sm transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
