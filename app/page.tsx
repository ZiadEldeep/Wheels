'use client';

import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-white py-12 px-4"
      style={{
        background: 'linear-gradient(135deg, #1E3A8A 0%, #1F2937 100%)', // Gradient from blue to dark gray
      }}
    >
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-12 tracking-wide uppercase text-center">
        Welcome to Our Service
      </h1>

      {/* Buttons */}
      <div className="flex flex-wrap gap-6">
        <Link href="/select-cars">
          <button
            type="button"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Select Cars
          </button>
        </Link>

        <Link href="/select-wheel-size">
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Select Wheel Size
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
