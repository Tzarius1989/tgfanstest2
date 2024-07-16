"use client"
import Image from 'next/image'

interface Product {
  id: number;
  name: string;
  price: number;
  type: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const handleBuy = async () => {
    alert(`Purchasing ${product.name} for $${product.price}`)
  }

  return (
    <div className="border rounded p-4 flex flex-col items-center">
      <Image
        src={`https://via.placeholder.com/150?text=${product.name}`}
        alt={product.name}
        width={150}
        height={150}
        className="mb-2 w-full h-auto"
      />
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="mb-4">${product.price.toFixed(2)}</p>
      <button
        onClick={handleBuy}
        className="mt-auto w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Buy Now
      </button>
    </div>
  )
}