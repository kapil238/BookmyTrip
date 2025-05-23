"use client";

import { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How do I book a flight ticket?",
    answer:
      "You can book a flight ticket by selecting your route, choosing dates, and completing the payment process online.",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes, you can cancel or reschedule depending on the airline policy. Charges may apply.",
  },
  {
    question: "How will I receive my tickets?",
    answer:
      "Your e-tickets will be emailed to you and can also be downloaded from your account dashboard.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes, all transactions are secured using industry-standard encryption technologies.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Proper type for contentRefs to avoid red underline
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Assign height based on open/closed state
  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.height =
          activeIndex === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [activeIndex]);

  // Helper function to assign refs cleanly
  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    contentRefs.current[index] = el;
  };

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white border rounded-xl shadow-md transition-all duration-300 ${
                activeIndex === index ? "border-orange-500" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full p-5 text-left"
              >
                <span className="font-semibold text-lg text-gray-800">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <FaMinus className="text-orange-500" />
                ) : (
                  <FaPlus className="text-gray-500" />
                )}
              </button>
              <div
                ref={setRef(index)}
                className="overflow-hidden transition-all duration-300 ease-in-out px-5 text-gray-700 text-sm"
                style={{ height: "0px" }}
              >
                <div className="pb-5">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
