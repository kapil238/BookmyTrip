'use client';

import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: "How do I book a flight ticket?",
    answer: "You can book a flight ticket by selecting your route, choosing dates, and completing the payment process online.",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer: "Yes, you can cancel or reschedule depending on the airline policy. Charges may apply.",
  },
  {
    question: "How will I receive my tickets?",
    answer: "Your e-tickets will be emailed to you and can also be downloaded from your account dashboard.",
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes, all transactions are secured using industry-standard encryption technologies.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-sm transition duration-300 hover:shadow-md">
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between p-5 focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900 text-left">{faq.question}</span>
                {activeIndex === index ? (
                  <FaMinus className="text-gray-500" />
                ) : (
                  <FaPlus className="text-gray-500" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-5 pb-5 text-sm text-gray-700 transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
