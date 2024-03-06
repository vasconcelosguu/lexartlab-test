'use client';

import React from 'react';
import { ProductsList } from '../components/ProductsList';
import Header from '../components/Header';

const HomePage: React.FC = () => {

  return (
    <>
    <Header />
        <main className="container mx-auto max-w-md py-8 px-4">
    <div className="flex justify-center">
      <h1 className="text-center text-gray-700 font-medium text-2xl">Check our Products Below</h1>
    </div>
    <ProductsList />
  </main>
    </>
  );
};

export default HomePage;