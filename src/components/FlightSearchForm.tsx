"use client";
import { FaSearch } from "react-icons/fa";
import Input from "./Input";
import { useState } from "react";
import { useRouter } from "next/navigation";

const airports = [
  { value: "del", label: "Delhi (DEL)" },
  { value: "bom", label: "Mumbai (BOM)" },
  { value: "blr", label: "Bengaluru (BLR)" },
  { value: "ccu", label: "Kolkata (CCU)" },
  { value: "hyd", label: "Hyderabad (HYD)" },
  { value: "maa", label: "Chennai (MAA)" },
  { value: "pak", label: "Pakistan (PAK)" },
];

const travellers = [
  { value: "1", label: "1 (Adult)" },
  { value: "2", label: "2 (1 Adult + 1 Child)" },
  { value: "3", label: "3 (2 Adults + 1 Child)" },
  { value: "4", label: "4 (2 Adults + 2 Children)" },
  { value: "5", label: "5 (2 Adults + 2 Children + 1 Senior)" },
  { value: "6", label: "6 (2 Adults + 2 Children + 2 Seniors)" },
];

export default function FlightSearchForm() {
  const [option, setOption] = useState("place");
  const [way, setWay] = useState("oneway");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const from = formData.get("from")?.toString() || "";
    const to = formData.get("to")?.toString() || "";
    const departure = formData.get("departure")?.toString() || "";
    const returnDate = formData.get("return")?.toString() || "";
    const travellers = formData.get("travellers")?.toString() || "";

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
    <div className="bg-white rounded-b-2xl rounded-tr-2xl p-6 max-w-6xl mx-auto space-y-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="way"
              value="oneway"
              checked={way === "oneway"}
              onChange={() => setWay("oneway")}
              className="accent-orange-500"
            />
            One Way
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="way"
              value="roundtrip"
              checked={way === "Round-Trip"}
              onChange={() => setWay("Round-Trip")}
              className="accent-orange-500"
            />
            Round-Trip
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Input label="From" name="from" type="select" options={airports} />
          <Input label="To" name="to" type="select" options={airports} />
          <Input label="Departure" name="departure" type="date" />
          <Input label="Return" name="return" type="date" />
          <Input
            label="Travellers"
            name="travellers"
            type="select"
            options={travellers}
          />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="option"
                value="place"
                checked={option === "place"}
                onChange={() => setOption("place")}
                className="accent-orange-500"
              />
              Add Place
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="option"
                value="car"
                checked={option === "car"}
                onChange={() => setOption("car")}
                className="accent-orange-500"
              />
              Add Car
            </label>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 text-lg transition-all duration-300"
          >
            <FaSearch />
            Search Flight
          </button>
        </div>
      </form>
    </div>
  );
}
