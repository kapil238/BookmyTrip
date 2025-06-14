"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const filters = {
  type: ["Adventure", "Cultural", "Beach", "Wildlife"],
  duration: ["3 Days", "4 Days", "5 Days"],
  location: ["Goa", "Manali", "Jaipur"],
  category: ["Domestic", "International"],
  price: ["₹0 - ₹25,000", "₹25,001 - ₹50,000", "₹50,001 - ₹75,000", "₹75,001+"],
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
    const cleared = Object.keys(filters).reduce((acc, key) => {
      acc[key] = [];
      return acc;
    }, {} as { [key: string]: string[] });
    setSelected(cleared);
  };

  const handleApply = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="lg:hidden mb-4 flex justify-between items-center">
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
        className={`w-full max-w-xs bg-white border rounded-lg p-4 space-y-6 text-sm lg:block transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {Object.entries(filters).map(([category, options]) => (
          <div
            key={category}
            className="bg-gray-50 rounded-md p-3 shadow-sm border"
          >
            <div className="flex justify-between items-center font-semibold mb-2 capitalize">
              <span>{category.replace(/([A-Z])/g, " $1")}</span>
              <button
                onClick={() => handleReset(category)}
                className="text-orange-600 text-xs"
              >
                Reset
              </button>
            </div>
            {options.map((option) => (
              <label
                key={option}
                className="flex items-center space-x-2 py-1 cursor-pointer text-gray-700 hover:text-orange-600 transition duration-200 text-sm"
              >
                <input
                  type="checkbox"
                  checked={selected[category]?.includes(option) || false}
                  onChange={() => handleCheckboxChange(category, option)}
                  className="accent-orange-600 form-checkbox h-4 w-4"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        ))}

        {/* Mobile-only buttons */}
        <div className="flex justify-between gap-2 lg:hidden">
          <button
            onClick={handleClearAll}
            className="flex-1 border border-gray-300 rounded-md py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            Clear All
          </button>
          <button
            onClick={handleApply}
            className="flex-1 bg-orange-600 text-white rounded-md py-2 text-sm hover:bg-orange-700 transition"
          >
            Apply
          </button>
        </div>
      </aside>
    </>
  );
}
