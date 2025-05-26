import { useRouter } from "next/navigation";

type FlightCardProps = {
  airline: string;
  from: string;
  to: string;
  duration: string;
  stops: string;
  departure: string;
  arrival: string;
  price: string;
  badgeText: string;
  offerText: string;
  imgSrc: string;
  flightType: string; // For filtering
  cabinClass: string; // For filtering (optional display)
};

export default function FlightCard({
  airline,
  from,
  to,
  duration,
  stops,
  departure,
  arrival,
  price,
  badgeText,
  offerText,
  imgSrc,
  flightType,
  cabinClass,
}: FlightCardProps) {
  const router = useRouter();

  const handleBookNow = () => {
    const query = new URLSearchParams({
      airline,
      from,
      to,
      duration,
      stops,
      departure,
      arrival,
      price,
      flightType,
      cabinClass,
      imgSrc,
    }).toString();

    router.push(`/payment?${query}`);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 p-5 border rounded-xl bg-white shadow-md hover:shadow-lg transition-all">
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="flex flex-col sm:flex-row items-start gap-5 flex-1">
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={imgSrc}
              alt={airline}
              className="w-10 h-10 sm:w-20 sm:h-15 object-contain"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-semibold">{airline}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {from} → {to}
            </p>
            <p className="text-sm text-gray-500">
              Duration: {duration} | Stops: {stops}
            </p>
            <p className="text-sm text-gray-500">
              Departure: {departure} | Arrival: {arrival}
            </p>
            <p className="text-sm text-gray-500">Class: {cabinClass}</p>
            <hr className="my-2 border-gray-300" />
            <p className="text-green-600 font-medium text-sm">{offerText}</p>
          </div>
        </div>
        <div className="hidden md:block w-px bg-gray-200 mx-4" />
        <div className="flex flex-col items-start md:items-end w-full md:w-auto justify-between gap-2">
          <div className="text-orange-600 font-semibold text-xs">🏅 {badgeText}</div>

          <p className="text-2xl font-bold text-gray-800 mt-1">{price}</p>

          <button
            onClick={handleBookNow}
            className="mt-3 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full text-sm transition-all w-full md:w-auto cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
