'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import BackButton from '@/components/BackButton';

const wheelSizes: number[] = [15, 16, 17, 18, 19, 20, 21, 22];

const SelectWheelSize: React.FC = () => {
  const searchParams = useSearchParams();
  const selectedCar = searchParams.get('car') || 'Unknown Car';

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-8">
      <div className="w-full max-w-5xl px-4 mb-6">
        <BackButton />
      </div>

      <h1 className="text-4xl font-extrabold mb-6 text-center">
        Select Wheel Size for <span className="text-blue-500">{selectedCar}</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {wheelSizes.map((size) => (
          <button
            key={size}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {size} Inches
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectWheelSize;
