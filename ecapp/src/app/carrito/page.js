'use client'
import React, { useState, useEffect } from 'react';
import { FaTrash, FaShoppingCart, FaCreditCard } from 'react-icons/fa';

const Carrito = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      try {
        const parsedCartItems = JSON.parse(storedCartItems);
        setCartItems(parsedCartItems);
      } catch (error) {
        console.error("Error al parsear los datos del carrito:", error);
      }
    }
  }, []);

  const total = cartItems.reduce((acc, item) => acc + (item.acf && item.acf.price ? parseFloat(item.acf.price) : 0), 0);

  const handleProcederPago = () => {
    if (cartItems.length === 0) {
      setShowEmptyCartMessage(true);
      setTimeout(() => {
        setShowEmptyCartMessage(false);
      }, 3000);
    } else {
      setShowNotification(true);
      setTimeout(() => {
        window.location.href = '/products';
      }, 3000);
    }
  };

  const handleVaciarCarrito = () => {
    localStorage.removeItem('cartItems');
    setCartItems([]);
  };

  const handleEliminarProducto = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  return (
    <div className="container mx-auto mt-10 p-5">
      <div className="flex flex-col items-center">
        <FaShoppingCart className="text-6xl text-purple-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-700 mb-6">Tu Carrito</h1>
        <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-6 divide-y divide-gray-200">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-3">
                <span className="font-semibold text-gray-600">{item.title.rendered}</span>
                <div className="flex items-center">
                  <span className="font-semibold text-purple-500 mr-4">${item.acf.price}</span>
                  <button onClick={() => handleEliminarProducto(item.id)}>
                    <FaTrash className="text-red-500 hover:text-red-600" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Tu carrito está vacío.</p>
          )}
          <div className="pt-6">
            <div className="flex justify-between">
              <span className="text-xl font-semibold text-gray-700">Total:</span>
              <span className="text-xl font-semibold text-purple-500">${total.toFixed(2)}</span>
            </div>
            <div className="flex space-x-4 mt-6">
              <button 
                className="flex-1 bg-red-500 text-white flex justify-center items-center px-5 py-2 rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:bg-red-700 transition duration-300 ease-in-out"
                onClick={handleVaciarCarrito}
              >
                <FaTrash className="mr-2" />
                Vaciar
              </button>
              <button 
                className="flex-1 bg-purple-500 text-white flex justify-center items-center px-5 py-2 rounded-lg shadow-lg hover:bg-purple-600 focus:outline-none focus:bg-purple-700 transition duration-300 ease-in-out"
                onClick={handleProcederPago}
              >
                <FaCreditCard className="mr-2" />
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
      {showEmptyCartMessage && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg">
          Tu carrito está vacío, por favor ingresa productos.
        </div>
      )}
      {showNotification && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
          ¡Compra realizada con éxito!
        </div>
      )}
    </div>
  );
};

export default Carrito;
