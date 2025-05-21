import React from "react";
import { Heart } from "lucide-react";

type Props = {
  image: string;
  name: string;
  location: string;
  price: string;
};

const DestinationCard: React.FC<Props> = ({ image, name, location, price }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white w-full max-w-xs group hover:shadow-lg transition duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transform transition duration-400 group-hover:scale-95 scale-110"
        />
        <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
          <Heart className="text-red-500" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{location}</p>
        <p className="text-black mt-2 font-medium">
          ₹{price}{" "}
          <span className="text-sm text-gray-500">/Per Night</span>
        </p>
      </div>
      <div className="bg-teal-200 text-teal-900 font-semibold p-3 text-center">
        60+ Places for stay
      </div>
    </div>
  );
};

export default DestinationCard;
