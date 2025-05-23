'use client';

import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import Input from './Input';

const destinations = [
  { value: 'goa', label: 'Goa' },
  { value: 'manali', label: 'Manali' },
  { value: 'leh-ladakh', label: 'Leh-Ladakh' },
  { value: 'kerala', label: 'Kerala' },
  { value: 'jaipur', label: 'Jaipur' },
  { value: 'agra', label: 'Agra' },
  { value: 'shimla', label: 'Shimla' },
  { value: 'ooty', label: 'Ooty' },
  { value: 'rishikesh', label: 'Rishikesh' },
  { value: 'andaman', label: 'Andaman & Nicobar Islands' },
];

export default function CarSearchForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/car-rentals');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <div className="flex-1">
          <Input label="From" name="from" type="select" options={destinations} />
        </div>
        <div className="flex-1">
          <Input label="To" name="to" type="select" options={destinations} />
        </div>
        <div className="flex-1">
          <Input label="Start Date" name="startDate" type="date" />
        </div>
        <div className="flex-1">
          <Input label="End Date" name="endDate" type="date" />
        </div>
        <button
          type="submit"
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-3 rounded-xl whitespace-nowrap shrink-0 hover:bg-orange-600 cursor-pointer"
        >
          <FaSearch /> Search Car
        </button>
      </form>
    </div>
  );
}
