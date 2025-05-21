'use client';
import { useEffect, useState } from 'react';

const images = [
  {
    url: 'https://media.cntravellerme.com/photos/665aa1383794dbd58f75ed8f/16:9/w_2560%2Cc_limit/montage%2520travel%2520hack.jpg',
    title: 'Travel the World, Your Way!',
    description: 'Explore destinations at your pace, with personalized journeys.',
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    title: 'Discover Hidden Paradises',
    description: 'Find secret spots and breathtaking views off the beaten path.',
  },
  {
    url: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98',
    title: 'Adventures Await',
    description: 'Every step is a new story. Start yours today!',
  },
];

export default function ImageShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const current = images[currentIndex];

  return (
    <div className="relative w-full h-[92vh] overflow-hidden">
      <img
        src={current.url}
        alt="Slide Image"
        className="w-full h-full object-cover transition-all duration-500"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-lg shadow text-sm max-w-xs">
        <h4 className="font-bold">{current.title}</h4>
        <p className="text-xs text-gray-600">{current.description}</p>
      </div>

      <div className="absolute bottom-8 left-6 text-white">
        <h3 className="text-xl font-bold leading-snug">
          Explore the World,<br />Beyond Boundaries!
        </h3>
        <button className="mt-2 bg-white/80 text-black px-4 py-2 rounded-lg text-sm">
          Start your adventure today!
        </button>
      </div>

      <div className="absolute inset-y-0 left-2 flex items-center">
        <button
          onClick={handlePrev}
          className="bg-white/60 hover:bg-white px-2 py-1 rounded-full text-lg"
        >
          ‹
        </button>
      </div>

      <div className="absolute inset-y-0 right-2 flex items-center">
        <button
          onClick={handleNext}
          className="bg-white/60 hover:bg-white px-2 py-1 rounded-full text-lg"
        >
          ›
        </button>
      </div>
    </div>
  );
}
