'use client';

import { FaCalendarAlt, FaPhoneAlt, FaFire } from 'react-icons/fa';
import { MdOutlinePriceCheck, MdReplayCircleFilled } from 'react-icons/md';

const features = [
  {
    icon: <FaCalendarAlt className="text-4xl text-orange-500" />,
    title: 'Easy Booking',
    description: 'We offer easy and convenient flight bookings with attractive offers.',
  },
  {
    icon: <MdOutlinePriceCheck className="text-4xl text-orange-500" />,
    title: 'Lowest Price',
    description: 'We ensure low rates on hotel reservation, holiday packages and on flight tickets.',
  },
  {
    icon: <MdReplayCircleFilled className="text-4xl text-orange-500" />,
    title: 'Instant Refund',
    description: 'Get instant refunds effortlessly on your travel bookings with us.',
  },
  {
    icon: <FaPhoneAlt className="text-4xl text-orange-500" />,
    title: '24/7 Support',
    description: 'Get assistance 24/7 on any kind of travel related query. We are happy to assist you.',
  },
  {
    icon: <FaFire className="text-4xl text-orange-500" />,
    title: 'Exciting Deals',
    description: 'Enjoy exciting deals on flights, hotels, buses, car rental and tour packages.',
  },
];

export default function WhyBookWithUs() {
  return (
    <section className="pt-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Why Book With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {features.map((item, idx) => (
            <div key={idx} className="text-center border-r last:border-r-0 p-4">
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
