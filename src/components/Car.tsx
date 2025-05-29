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
    <div className="rounded-b-2xl rounded-tr-2xl p-4 sm:p-6 max-w-full w-full">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end"
      >
        <Input label="From" name="from" type="select" options={destinations} />
        <Input label="To" name="to" type="select" options={destinations} />
        <Input label="Start Date" name="startDate" type="date" />
        <Input label="End Date" name="endDate" type="date" />
        <div className="sm:col-span-2 lg:col-span-4 flex justify-end">
          <button
            type="submit"
            className="flex items-center justify-center text-base sm:text-lg gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition duration-200"
          >
            <FaSearch /> Search Car
          </button>
        </div>
      </form>
    </div>
  );
}
