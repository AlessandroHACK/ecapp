import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Carrito = () => {
  const [mostrarLista, setMostrarLista] = useState(false);

  const handleToggleLista = () => {
    setMostrarLista(!mostrarLista);
  };

  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50">
      <div className="w-12 h-12 bg-pink-400 rounded-full flex justify-center items-center cursor-pointer shadow-md" onClick={handleToggleLista}>
        <FaShoppingCart color="white" size={24} />
      </div>
      {mostrarLista && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-md p-2 w-48">
          <ul>
            <li>Producto 1</li>
            <li>Producto 2</li>
            <li>Producto 3</li>
           
          </ul>
        </div>
      )}
    </div>
  );
};

export default Carrito;
