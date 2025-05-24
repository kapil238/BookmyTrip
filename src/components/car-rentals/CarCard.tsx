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
    <div className="flex flex-col md:flex-row justify-between gap-4 p-4 border rounded-lg bg-white shadow-sm w-full">
      <div className="flex flex-col sm:flex-row items-start gap-4 flex-1">
        <div className="flex flex-col items-center sm:items-start justify-center text-center sm:text-left min-w-[100px] w-full sm:w-auto">
          <div className="text-green-600 font-semibold text-sm pb-2 sm:pb-4">
            🛡️ Safety
          </div>
          <img
            src={imgSrc}
            alt={name}
            className="w-50 h-20 sm:w-40 sm:h-24 object-contain"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-semibold">{cartype}</h3>
          <h3 className="text-base sm:text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{fuelType}</p>

          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm mt-2 text-gray-600">
            <li>🚗 {unit} </li>
            <li>🧳 {luggage} </li>
            <li>🪑 {seats} </li>
            <li> @ {price} </li>
          </ul>

          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400 mt-2">
            <li>✔️ Free cancellation</li>
            <li>✔️ Toll included</li>
            <li>✔️ 24/7 helpline</li>
            <li>✔️ Partial Payment</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-start md:items-end md:justify-between w-full md:w-auto">
        <div className="text-orange-500 font-semibold text-xs mb-1 md:mb-2">
          🏅 {badgeText}
        </div>
        <div className="text-left md:text-right mt-4 md:mt-auto w-full">
          <p className="text-green-600 font-semibold text-sm">
            Applied EMT CAB
          </p>
          <p className="text-xs text-gray-500">{offerText}</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">{price}</p>
          <button
            onClick={handleBookNow}
            className="mt-2 bg-orange-500 text-white py-1.5 px-4 rounded-full text-sm hover:bg-orange-600 transition w-full md:w-auto"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
