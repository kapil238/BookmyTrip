"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const filters = {
  flightType: ["Non-stop", "1 Stop", "2+ Stops"],
  cabinClass: ["Economy", "Business", "First Class"],
  airline: ["IndiGo", "Air India", "Air India Express"],
  price: ["₹0 - ₹5,000", "₹5,001 - ₹10,000", "₹10,001+"],
  departureTime: ["Morning", "Afternoon", "Evening", "Night"],
  duration: ["Less than 2h", "2h - 4h", "4h - 6h", "More than 6h"],
};

export default function FilterSidebar({
  selected,
  setSelected,
  handleCheckboxChange,
}: {
  selected: { [key: string]: string[] };
  setSelected: React.Dispatch<React.SetStateAction<{ [key: string]: string[] }>>;
  handleCheckboxChange: (category: string, option: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleReset = (category: string) => {
    setSelected((prev) => ({ ...prev, [category]: [] }));
  };

  const handleClearAll = () => {
    const cleared = Object.keys(filters).reduce(
      (acc, key) => ({ ...acc, [key]: [] }),
      {}
    );
    setSelected(cleared);
  };

  return (
    <>
      <div className="lg:hidden mb-4 flex justify-between items-center sticky top-0 bg-white z-10 py-2">
        <span className="font-semibold text-gray-700 text-base">Filters</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 border rounded-md text-sm"
        >
          {isOpen ? (
            <X size={18} className="text-orange-600" />
          ) : (
            <Menu size={18} className="text-orange-600" />
          )}
        </button>
      </div>

      <aside
        className={`w-full max-w-xs bg-white border rounded-lg text-sm transition-all duration-300 lg:block ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="space-y-4 p-4">
          {Object.entries(filters).map(([category, options]) => (
            <div
              key={category}
              className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex justify-between items-center font-semibold mb-3 capitalize">
                <span>{category.replace(/([A-Z])/g, " $1")}</span>
                <button
                  onClick={() => handleReset(category)}
                  className="text-orange-600 text-xs hover:underline"
                >
                  Reset
                </button>
              </div>

              <div className="space-y-2">
                {options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition duration-200 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selected[category]?.includes(option) || false}
                      onChange={() => handleCheckboxChange(category, option)}
                      className="accent-orange-600 h-4 w-4"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="lg:hidden pt-2 border-t mt-2 flex justify-between gap-4">
            <button
              onClick={handleClearAll}
              className="w-1/2 border border-gray-300 text-gray-700 rounded-md py-2 hover:bg-gray-100 text-sm"
            >
              Clear All Filters
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-1/2 bg-orange-600 text-white rounded-md py-2 hover:bg-orange-700 text-sm"
            >
              Apply
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
