import { useState } from "react";
import { Heart, Star } from "lucide-react";

type DestinationProps = {
  name: string;
  location: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  dateRange: string;
  liked?: boolean;
};

export default function DestinationCard({
  name,
  location,
  image,
  price,
  originalPrice,
  rating,
  dateRange,
  liked = false,
}: DestinationProps) {
  const [isLiked, setIsLiked] = useState(liked);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="rounded-xl shadow-md overflow-hidden relative group transition hover:shadow-lg">
      <img src={image} alt={name} className="w-full h-52 object-cover" />
      <button
        onClick={toggleLike}
        className="absolute top-3 right-3 p-1.5 rounded-full bg-white shadow"
      >
        <Heart
          className={`w-5 h-5 ${
            isLiked ? "fill-red-500 text-red-500" : "text-gray-400"
          }`}
        />
      </button>
      <div className="p-4">
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="mt-2 flex items-center justify-between text-sm">
          <div>
            <span className="line-through text-gray-400 mr-1">₹{originalPrice}</span>
            <span className="text-green-600 font-semibold">₹{price}</span>
          </div>
          <div className="flex items-center text-orange-500">
            <Star className="w-4 h-4 mr-1 fill-orange-500" />
            {rating}
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-1">{dateRange}</p>
      </div>
    </div>
  );
}
