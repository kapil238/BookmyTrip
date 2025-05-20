"use client";
import { FaSearch } from "react-icons/fa";
import Input from "./Input";
import { useState } from "react";

const airports = [
  { value: "del", label: "Delhi (DEL)" },
  { value: "bom", label: "Mumbai (BOM)" },
  { value: "blr", label: "Bengaluru (BLR)" },
  { value: "ccu", label: "Kolkata (CCU)" },
  { value: "hyd", label: "Hyderabad (HYD)" },
  { value: "maa", label: "Chennai (MAA)" },
];

const room = [
  { value: "1", label: "1 Room" },
  { value: "2", label: "2 Room" },
  { value: "3", label: "3 Room" },
];

export default function Tour() {
  const [option, setOption] = useState("place");

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-6xl mx-auto space-y-4">
      <form className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Input label="Form" name="from" type="select" options={airports} />
        <Input label="To" name="to" type="select" options={airports}/>
        <Input label="Start Date" name="start" type="date" />
        <Input label="End Date" name="end" type="date" />
        <Input label="Room" name="room" type="select" options={room} />
      </form>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-6">
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
          className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl"
        >
          <FaSearch />
          Search Flight
        </button>
      </div>
    </div>
  );
}
