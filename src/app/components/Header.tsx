import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="bg-gray-800">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={50}
            className="text-gray-800"
          />
        </div>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/home"
              className="hover:text-teal-300 transition duration-200"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="/add-product"
              className="hover:text-teal-300 transition duration-200"
            >
              Add your product
            </a>
          </li>
          <li>
            <a
              href="/my-products"
              className="hover:text-teal-300 transition duration-200"
            >
              My products
            </a>
          </li>
        </ul>
        <div>
          <a
            href="/login"
            className="bg-teal-500 text-gray-800 hover:bg-teal-600 transition duration-200 rounded px-4 py-2"
          >
            Login
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
