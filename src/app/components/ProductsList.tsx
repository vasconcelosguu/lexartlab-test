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
    <main className="container mx-auto max-w-md py-8 px-4">
      <h1 className="text-center text-gray-700 font-medium text-2xl">Products</h1>
      {loading && <p>Loading...</p>}
      {!loading && allItems.length === 0 && <p>No products found</p>}
      <ul>
        {allItems.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.brand}</p>
            <p>{item.model}</p>
            <p>{item.price}</p>
            <p>{item.color}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};