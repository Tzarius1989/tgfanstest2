import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { createInvoice, requestPayment } from '../utils/telegramPayment';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const handlePurchase = () => {
    const invoice = createInvoice(product);
    requestPayment(invoice);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-lg font-semibold mb-4">${product.price.toFixed(2)}</p>
      <div className="flex justify-between">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Добавить в корзину
        </button>
        <button
          onClick={handlePurchase}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Купить за Stars
        </button>
      </div>
    </div>
  );
}