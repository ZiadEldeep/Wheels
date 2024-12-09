import React from 'react';
import { useRouter } from 'next/navigation';
import BackButton from '@/components/BackButton';

const carModels = [
  { name: 'BMW', logo: '/images/bmw-logo.png' },
  { name: 'Golf', logo: '/images/golf-logo.png' },
  { name: 'Audi', logo: '/images/audi-logo.png' },
  { name: 'Mercedes-Benz', logo: '/images/mercedes-logo.png' },
  { name: 'Toyota', logo: '/images/toyota-logo.png' },
  { name: 'Ferrari', logo: '/images/ferrari-logo.png' },
];

const SelectCars: React.FC = () => {
  const router = useRouter();

  const handleCarSelect = (car: string) => {
    router.push(`/select-wheel-size?car=${encodeURIComponent(car)}`);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-8 px-4 text-white"
      style={{
        background: 'linear-gradient(135deg, #1E3A8A 0%, #1F2937 100%)',
      }}
    >
      <div className="w-full max-w-5xl px-4 mb-6 self-start">
        <BackButton />
      </div>

      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wide uppercase">
        Choose Your Car Model
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {carModels.map(({ name, logo }) => (
          <button
            key={name}
            onClick={() => handleCarSelect(name)}
            className="bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center"
          >
            <div className="text-4xl mb-2">
              <img src={logo} alt={name} className="w-16 h-16 object-contain" />
            </div>
            <span className="text-lg">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectCars;
