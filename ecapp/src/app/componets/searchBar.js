import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <nav className="bg-pink-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
    
          <div className="text-3xl font-bold text-white flex-grow">Logo</div>

     
          <div className="text-3xl text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" passHref className="text-white hover:text-gray-200">Inicio</Link>
            <Link href="/products" passHref className="text-white hover:text-gray-200">Productos</Link>
           
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-72 h-10 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaSearch className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className={`md:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center fixed inset-x-0 top-0 bottom-auto z-50 bg-pink-300 p-4`}>
          <div className="text-3xl text-white self-end" onClick={() => setIsMenuOpen(false)}>
            <FaTimes />
          </div>
          <Link href="/" passHref className="text-white hover:text-gray-200 mt-8">Inicio</Link>
          <Link href="/products" passHref className="text-white hover:text-gray-200 mt-4">Productos</Link>
          
          {/* Search Bar for mobile */}
          <div className="mt-4 w-full relative">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full h-10 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
