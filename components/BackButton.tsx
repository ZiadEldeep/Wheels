'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi'; // Using React Icons for a professional look

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Navigates to the previous page
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition-all duration-300"
    >
      <BiArrowBack size={20} />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
