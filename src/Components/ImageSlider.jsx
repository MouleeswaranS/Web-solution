'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import images from '../Data/ImageData';

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const current = images[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      <div className="relative z-10  mt-6 px-4 sm:px-6 md:px-10 lg:px-12 py-12 h-full flex flex-col justify-center items-start max-w-4xl">
        <p className="text-xl sm:text-2xl md:text-3xl uppercase tracking-widest text-orange-500">DEV</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-black">NET <span className="text-orange-500">S</span>OLUTION</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-orange-500">{current.title}</h2>
        <p className={`mt-2 max-w-2xl text-sm sm:text-base md:text-lg ${current.textColor}`}>{current.description}</p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none">
  <button className="px-4 py-2 text-sm sm:text-base bg-white text-black font-semibold rounded hover:bg-gray-300 transition">
    See More
  </button>
  <button className="px-4 py-2 text-sm sm:text-base border border-white border-solid bg-black text-orange-600 rounded hover:bg-white hover:text-black transition">
    Subscribe
  </button>
</div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 sm:p-3 rounded-full z-20"
      >
        &#8592;
      </button>
      <button
        onClick={() => setIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 sm:p-3 rounded-full z-20"
      >
        &#8594;
      </button>
    </div>
  );
}
