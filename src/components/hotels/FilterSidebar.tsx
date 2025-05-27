"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const filters = {
  type: ["Beach Resort", "Mountain Resort", "Luxury", "Budget"],
  nights: ["1 Night", "2 Nights", "3 Nights"],
  location: ["Goa", "Manali", "Jaipur"],
  category: ["Domestic", "International"],
  price: ["₹0 - ₹5,000", "₹5,001 - ₹10,000", "₹10,001+"],
};

export default function FilterSidebar({
  selected,
  setSelected,
  handleCheckboxChange,
}: {
  selected: { [key: string]: string[] };
  setSelected: React.Dispatch<
    React.SetStateAction<{ [key: string]: string[] }>
  >;
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
      <div className="lg:hidden mb-4 flex justify-between items-center">
        <span className="font-semibold text-gray-700 text-base">Filters</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 border rounded-md text-sm shadow-sm"
          aria-label="Toggle filters"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <aside
        className={`w-full max-w-xs bg-white border rounded-xl shadow-md p-4 space-y-6 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } lg:block`}
      >
        {Object.entries(filters).map(([category, options]) => (
          <div
            key={category}
            className="border border-gray-200 rounded-lg p-4 bg-gray-50"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold capitalize">{category}</h3>
              <button
                onClick={() => handleReset(category)}
                className="text-sm text-orange-500 hover:underline"
              >
                Reset
              </button>
            </div>

            <hr className="mb-3 border-gray-200" />

            {options.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 py-1 cursor-pointer text-gray-800 hover:text-orange-600 transition"
              >
                <input
                  type="checkbox"
                  checked={selected[category]?.includes(option) || false}
                  onChange={() => handleCheckboxChange(category, option)}
                  className="accent-orange-600 h-4 w-4"
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        ))}
        <div className="lg:hidden flex justify-between pt-4 border-t mt-4">
          <button
            onClick={handleClearAll}
            className="text-sm text-red-600 hover:underline"
          >
            Clear All
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm"
          >
            Apply Filters
          </button>
        </div>
      </aside>
    </>
  );
}
