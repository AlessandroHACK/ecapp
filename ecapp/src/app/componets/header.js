import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            
          </div>
        </div>
        
        <div className={`md:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center fixed inset-x-0 top-0 bottom-auto z-50 bg-pink-300 p-4`}>
          <div className="text-3xl text-white self-end" onClick={() => setIsMenuOpen(false)}>
            <FaTimes />
          </div>
          <Link href="/" passHref className="text-white hover:text-gray-200 mt-8">Inicio</Link>
          <Link href="/products" passHref className="text-white hover:text-gray-200 mt-4">Productos</Link>
         
        </div>
      </div>
    </nav>
  );
};

export default Header;
