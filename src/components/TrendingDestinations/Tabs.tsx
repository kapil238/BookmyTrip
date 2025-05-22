type TabsProps = {
  active: string;
  onChange: (tab: string) => void;
};

export default function Tabs({ active, onChange }: TabsProps) {
  return (
    <div className="flex gap-4 mb-6">
      {["Domestic", "International"].map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition cursor-pointer ${
            active === tab
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
