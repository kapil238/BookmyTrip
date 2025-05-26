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
        className={`w-full max-w-xs bg-white border rounded-lg space-y-6 text-sm p-4 lg:block transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {Object.entries(filters).map(([category, options]) => (
          <div key={category}>
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
                className="flex items-center space-x-2 py-1 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selected[category]?.includes(option) || false}
                  onChange={() => handleCheckboxChange(category, option)}
                  className="accent-orange-600"
                />
                <span>{option}</span>
              </label>
            ))}
            <hr className="border-b border-gray-200 w-full" />
          </div>
        ))}
      </aside>
    </>
  );
}
