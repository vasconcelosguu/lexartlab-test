'use client';

import React, { useState } from 'react';

const CreatePage: React.FC = () => {
  const [phones, setPhones] = useState([
    {
      name: '',
      brand: '',
      model: '',
      data: [{ price: 0, color: '' }],
    },
  ]);

  const handlePhoneChange = (index: number, field: string, value: string) => {
    const updatedPhones = [...phones];
    updatedPhones[index][field] = value;
    setPhones(updatedPhones);
  };

  const handleDataChange = (phoneIndex: number, dataIndex: number, field: string, value: string) => {
    const updatedPhones = [...phones];
    updatedPhones[phoneIndex].data[dataIndex][field] = value;
    setPhones(updatedPhones);
  };

  const addPhone = () => {
    setPhones([...phones, { name: '', brand: '', model: '', data: [{ price: 0, color: '' }] }]);
  };

  const removePhone = (index: number) => {
    const updatedPhones = [...phones];
    updatedPhones.splice(index, 1);
    setPhones(updatedPhones);
  };

  const addData = (phoneIndex: number) => {
    const updatedPhones = [...phones];
    updatedPhones[phoneIndex].data.push({ price: 0, color: '' });
    setPhones(updatedPhones);
  };

  const removeData = (phoneIndex: number, dataIndex: number) => {
    const updatedPhones = [...phones];
    updatedPhones[phoneIndex].data.splice(dataIndex, 1);
    setPhones(updatedPhones);
  };

  const handleSubmit = () => {
    console.log(phones);
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-900 overflow-auto">
      <div className="p-6 bg-gray-200 rounded shadow-md w-full max-w-md">
      <h1 className="text-4xl text-gray-700 font-bold mb-4">Create Your Product</h1>
        {phones.map((phone, phoneIndex) => (
          <div key={phoneIndex} className="mb-4 space-y-4">
            <input
              type="text"
              value={phone.name}
              onChange={(e) => handlePhoneChange(phoneIndex, 'name', e.target.value)}
              placeholder="Nome do telefone"
              className="border text-gray-600 p-2 w-full"
            />
            <input
              type="text"
              value={phone.brand}
              onChange={(e) => handlePhoneChange(phoneIndex, 'brand', e.target.value)}
              placeholder="Marca do telefone"
              className="border text-gray-600 p-2 w-full"
            />
            <input
              type="text"
              value={phone.model}
              onChange={(e) => handlePhoneChange(phoneIndex, 'model', e.target.value)}
              placeholder="Modelo do telefone"
              className="border text-gray-600 p-2 w-full"
            />
            {phone.data.map((data, dataIndex) => (
              <div key={dataIndex} className="space-y-4">
                <input
                  type="number"
                  value={data.price}
                  onChange={(e) => handleDataChange(phoneIndex, dataIndex, 'price', e.target.value)}
                  placeholder="Preço"
                  className="border text-gray-600 p-2 w-full appearance-none"
                />
                <input
                  type="text"
                  value={data.color}
                  onChange={(e) => handleDataChange(phoneIndex, dataIndex, 'color', e.target.value)}
                  placeholder="Cor"
                  className="border text-gray-600 p-2 w-full"
                />
                {dataIndex > 0 && (
                  <button type="button" onClick={() => removeData(phoneIndex, dataIndex)} className="bg-red-500 text-white p-2 mt-2 w-full">
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={() => addData(phoneIndex)} className="bg-blue-500 text-white p-2 mt-2 w-full">
              Add Same Product
            </button>
            {phoneIndex > 0 && (
              <button type="button" onClick={() => removePhone(phoneIndex)} className="bg-red-500 text-white p-2 mt-2 w-full">
                Remove Product
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addPhone} className="bg-blue-500 text-white p-2 mt-2 w-full">
          Add New Product
        </button>
        <button type="button" onClick={handleSubmit} className="bg-green-500 text-white p-2 mt-2 w-full">
          Send
        </button>
      </div>
    </main>
  );
};

export default CreatePage;