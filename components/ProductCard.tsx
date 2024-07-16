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
    <div className="border rounded p-4">
      <Image
        src={`https://via.placeholder.com/150?text=${product.name}`}
        alt={product.name}
        width={150}
        height={150}
        className="mb-2"
      />
      <h3 className="font-semibold">{product.name}</h3>
      <p>${product.price}</p>
      <button
        onClick={handleBuy}
        className="mt-2 bg-green-500 text-white p-2 rounded w-full"
      >
        Buy Now
      </button>
    </div>
  )
}