import React, { useState } from "react";
import { Heart } from "lucide-react";

type Props = {
  image: string;
  name: string;
  location: string;
  price: string;
};

const DestinationCard: React.FC<Props> = ({ image, name, location, price }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white w-full sm:max-w-sm md:max-w-md lg:max-w-xs group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-40 sm:h-48 md:h-56 object-cover transform scale-110 group-hover:scale-100 transition-transform duration-500 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <button
          onClick={toggleLike}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white rounded-full p-1.5 sm:p-2 shadow-md"
        >
          <Heart
            className={`w-4 h-4 sm:w-5 sm:h-5 ${
              liked ? "fill-red-500 text-red-500" : "text-red-500"
            }`}
          />
        </button>

        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
          <button className="bg-white text-black font-semibold px-4 py-1.5 rounded-full shadow hover:bg-gray-100 text-sm">
            Explore
          </button>
        </div>

        <div className="absolute top-2 left-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
          <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-r-full shadow-sm">
            Popular
          </span>
        </div>
      </div>

      <div className="p-3 sm:p-4 transition-all duration-300">
        <h3 className="text-base sm:text-lg font-semibold">{name}</h3>
        <p className="text-sm sm:text-base text-gray-500">{location}</p>
        <p className="text-sm sm:text-base text-black mt-2 font-medium">
          ₹{price}{" "}
          <span className="text-xs sm:text-sm text-gray-500">/Per Night</span>
        </p>
      </div>

      <div className="bg-teal-200 text-teal-900 font-semibold text-sm sm:text-base p-2 sm:p-3 text-center">
        60+ Places for stay
      </div>
    </div>
  );
};

export default DestinationCard;
