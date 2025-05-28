"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsBookFill } from "react-icons/bs";
import { FaPlaneDeparture } from "react-icons/fa";

const routes = [
  {
    from: "Chennai",
    to: "Mumbai",
    code: "MAA-BOM",
    image: "/images/mumbai-img.png",
  },
  {
    from: "Mumbai",
    to: "Chennai",
    code: "BOM-MAA",
    image: "/images/chennai-img.png",
  },
  {
    from: "Hyderabad",
    to: "Bangalore",
    code: "HYD-BLR",
    image: "/images/bangalore-img.png",
  },
  {
    from: "Delhi",
    to: "Ahmedabad",
    code: "DEL-AMD",
    image: "/images/ahmedabad-img.png",
  },
  {
    from: "Mumbai",
    to: "Dubai",
    code: "BOM-DXB",
    image: "/images/dubai-img.png",
  },
  {
    from: "Mumbai",
    to: "Jaipur",
    code: "BOM-JAI",
    image: "/images/jaipur-img.png",
  },
  {
    from: "Delhi",
    to: "Lucknow",
    code: "DEL-LKO",
    image: "/images/lucknow-img.png",
  },
  {
    from: "Mumbai",
    to: "Kolkata",
    code: "BOM-CCU",
    image: "/images/kolkata-img.png",
  },
  {
    from: "Delhi",
    to: "Dubai",
    code: "DEL-DXB",
    image: "/images/delhi-img.jpg",
  },
];

export default function FlightRoutes() {
  const router = useRouter();

  const handleNavigate = (from: string, to: string) => {
    const departure = new Date().toISOString().split("T")[0];
    const returnDate = "";
    const travellers = "1";

    const query = new URLSearchParams({
      from,
      to,
      departure,
      return: returnDate,
      travellers,
    }).toString();

    router.push(`/flights?${query}`);
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Top Flight Routes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((route, i) => (
          <div
            key={i}
            onClick={() => handleNavigate(route.from, route.to)}
            className="cursor-pointer flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm transform transition-all duration-1000 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-105 hover:bg-orange-50 group"
          >
            <Image
              src={route.image}
              alt={`${route.from} to ${route.to}`}
              width={64}
              height={64}
              className="rounded-md object-cover transition-transform duration-500 group-hover:scale-110 hover:-translate-y-2"
            />
            <div>
              <p className="text-lg font-medium transition-colors duration-300 group-hover:text-orange-600">
                {route.from}{" "}
                <span className="text-gray-500 group-hover:text-orange-400">
                  ↠
                </span>{" "}
                {route.to}
              </p>
              <p className="text-orange-600 font-bold transition-transform duration-300 group-hover:scale-105">
                {route.code}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
          <div className="bg-white p-2 rounded-full shadow text-orange-500 text-xl">
            <BsBookFill />
          </div>
          <div>
            <p className="font-semibold">Important Info:</p>
            <p className="text-sm">
              To cancel/claim refund or reschedule/modify your booking.
              <a href="#" className="text-orange-500 ml-1">
                Click here…
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
          <div className="bg-white p-2 rounded-full shadow text-orange-500 text-xl">
            <FaPlaneDeparture />
          </div>
          <div>
            <p className="font-semibold">Airline Notifications</p>
            <p className="text-sm">
              Get instant flight updates, notifications and travel alerts.
              <a href="#" className="text-orange-500 ml-1">
                Click here…
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
