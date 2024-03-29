import React from 'react';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  brand: string;
  model: string;
  price: number;
  color: string;
}

export const ProductsList: React.FC = () => {
  const [allItems, setAllItems] = useState([] as Product[]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('/api/products/read')
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data.products);
        setLoading(false);
      });
  }, []);

  return (
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-center text-gray-700 font-medium mb-8 text-2xl">Products</h1>
        {loading && <p>Loading...</p>}
        {!loading && allItems.length === 0 && <p>No products found</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {allItems.map((item) => (
            <div key={item.id} className="border p-4 rounded text-center hover:bg-blue-100 transition-colors duration-200 overflow-auto">
              <img src="https://via.placeholder.com/150" className="mx-auto block" alt="Product" />
              <p>Name:{item.name}</p>
              <p>Brand:{item.brand}</p>
              <p>Model:{item.model}</p>
              <p>Price:{item.price}</p>
              <p>Color{item.color}</p>
            </div>
          ))}
        </div>
      </main>
  );
};