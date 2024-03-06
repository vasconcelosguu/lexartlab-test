'use client';

import React from 'react';
import { ProductsList } from '../components/ProductsList';

const HomePage: React.FC = () => {

  return (
    <main className="container mx-auto max-w-md py-8 px-4">
    <div className="flex justify-center">
      <h1 className="text-center text-gray-700 font-medium text-2xl">Home</h1>
      <p className="text-center text-gray-700 font-medium text-2xl">Check our Products Below</p>
    </div>
    <ProductsList />
  </main>
  );
};

export default HomePage;