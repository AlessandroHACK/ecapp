import React from 'react';

const Card = ({ imageUrl, title, price, category, onOrder }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 w-64 mx-auto max-w-lg">
   
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4 rounded-md" />

      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      <p className="text-gray-700 mb-2">${price}</p>

     
      
      <button
        type="button"
        className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-700"
        onClick={onOrder}
      >
        Ordenar
      </button>
    </div>
  );
};

export default Card;
