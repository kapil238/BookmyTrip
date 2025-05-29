import { FaCar, FaPlane, FaHotel, FaMapMarkedAlt } from "react-icons/fa";

interface SliderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Slider({ activeTab, setActiveTab }: SliderProps) {
  const tabs = [
    { id: "car", icon: <FaCar />, label: "Car Rentals" },
    { id: "flight", icon: <FaPlane />, label: "Flight Booking" },
    { id: "hotel", icon: <FaHotel />, label: "Hotel Booking" },
    { id: "tour", icon: <FaMapMarkedAlt />, label: "Tour Packages" },
  ];

  return (
    <div className="flex flex-wrap max-w-7xl mx-auto">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-2 px-5 py-2.5 text-md transition-all duration-300 ease-in-out shadow-md cursor-pointer font-bold ${
            activeTab === tab.id
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-white text-gray-700 hover:text-orange-500 hover:shadow-lg border border-gray-200"
          } ${index === 0 ? "rounded-tl-2xl" : ""} ${
            index === tabs.length - 1 ? "rounded-tr-2xl" : ""
          }`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
