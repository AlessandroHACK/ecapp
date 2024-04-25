import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { FaShoppingCart, FaTimes } from 'react-icons/fa';

const Cart = ({ cartItems }) => {
  const [mostrarLista, setMostrarLista] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Guardar los datos del carrito en localStorage cuando cartItems cambie
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleToggleLista = () => {
    setMostrarLista(!mostrarLista);
  };

  const handleVerCarrito = () => {
    router.push('/carrito'); 
  };

  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.acf.price), 0);
  const numProductos = cartItems.length; // Contador de productos

  return (
    <div className="fixed top-1/4 right-6 transform -translate-y-1/2 z-50">
      <div className="w-12 h-12 bg-pink-500 rounded-full flex justify-center items-center cursor-pointer shadow-lg transition duration-300 ease-in-out hover:bg-pink-600" onClick={handleToggleLista}>
        {mostrarLista ? <FaTimes color="white" size={24} /> : <FaShoppingCart color="white" size={24} />}
        {numProductos > 0 && ( // Mostrar el contador solo si hay productos en el carrito
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center text-xs font-semibold">
            {numProductos}
          </span>
        )}
      </div>
      {mostrarLista && (
        <div className="absolute top-full right-0 mt-2 bg-gray-100 rounded-lg shadow-lg p-4 w-64 transition duration-300 ease-in-out" style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <h2 className="text-xl font-semibold mb-4 border-b border-purple-500 pb-2">Carrito de Compras</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={item.id} className={`flex justify-between items-center ${index !== 0 ? 'mt-2' : ''} border-b border-pink-300 pb-2`}>
                <span>{item.title.rendered}</span>
                <span className="font-semibold">${item.acf.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-2">
            <div className="flex justify-between border-t border-purple-500 pt-2">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <button
              type="button"
              className="w-full bg-purple-500 text-white px-8 py-2 mt-4 rounded-md shadow-md hover:bg-purple-600 focus:outline-none focus:bg-purple-700 transition duration-300 ease-in-out"
              onClick={handleVerCarrito}
            >
              Ver carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
