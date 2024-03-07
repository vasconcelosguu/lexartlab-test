"use client";

import React from "react";
import { ProductsList } from "../components/ProductsList";
import Header from "../components/Header";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-8 px-4">
        <section className="flex justify-center">
          <h1 className="text-center text-gray-700 font-medium text-2xl">
            Check our Products Below
          </h1>
        </section>
        <ProductsList />
      </main>
    </>
  );
};

export default HomePage;
