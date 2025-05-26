import { useRouter } from "next/navigation";

type CarCardProps = {
  cartype: string;
  name: string;
  fuelType: string;
  price: string;
  badgeText: string;
  offerText: string;
  imgSrc: string;
  unit: string;
  luggage: string;
  seats: string;
};

export default function CarCard({
  cartype,
  name,
  fuelType,
  price,
  badgeText,
  offerText,
  imgSrc,
  unit,
  luggage,
  seats,
}: CarCardProps) {
  const router = useRouter();

  const handleBookNow = () => {
    const query = new URLSearchParams({
      name,
      cartype,
      fuelType,
      price: price.toString(),
      imgSrc,
      seats: seats.toString(),
      luggage: luggage.toString(),
      unit,
    }).toString();

    router.push(`/payment?${query}`);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 p-5 border rounded-xl bg-white shadow-md hover:shadow-lg transition-all">
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="flex flex-col sm:flex-row items-start gap-5 flex-1">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-green-600 font-medium text-xs sm:text-sm mb-2">
              🛡️ Safety
            </span>
            <img
              src={imgSrc}
              alt={name}
              className="w-28 h-20 sm:w-40 sm:h-24 object-contain"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-semibold">{cartype}</h3>
            <h4 className="text-sm sm:text-base bg-orange-100 rounded px-2 inline-block mt-1">
              {name}
            </h4>
            <p className="text-sm text-gray-500 mt-1">{fuelType}</p>
            <hr className="my-2 border-gray-300" />

            <ul className="flex flex-wrap gap-3 text-sm text-gray-600">
              <li>🚗 {unit}</li>
              <li>🧳 {luggage}</li>
              <li>🪑 {seats}</li>
              <li>💰 {price}</li>
            </ul>

            <ul className="flex flex-wrap gap-3 text-xs text-gray-400 mt-2">
              <li>✔️ Free cancellation</li>
              <li>✔️ Toll included</li>
              <li>✔️ 24/7 helpline</li>
              <li>✔️ Partial Payment</li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block w-px bg-gray-300 mx-4" />
        <div className="flex flex-col items-start md:items-end w-full md:w-auto justify-between gap-2">
          <div className="text-orange-600 font-semibold text-xs">
            🏅 {badgeText}
          </div>

          <div className="text-left md:text-right mt-3 md:mt-auto w-full md:w-auto">
            <p className="text-green-600 text-sm font-medium">
              Applied EMT CAB
            </p>
            <p className="text-xs text-gray-500">{offerText}</p>
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
    </div>
  );
}
