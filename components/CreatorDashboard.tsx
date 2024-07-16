"use client"
import { useState } from 'react'
import ProductCreationForm from './ProductCreationForm'

interface Product {
  name: string;
  price: number;
  type: string;
}

export default function CreatorDashboard() {
  const [products, setProducts] = useState<Product[]>([])

  const handleProductCreated = (newProduct: Product) => {
    setProducts([...products, newProduct])
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Products</h2>
      <div className="space-y-2 mb-4">
        {products.map((product, index) => (
          <div key={index} className="p-2 border rounded">
            <p className="font-semibold">{product.name}</p>
            <p>${product.price.toFixed(2)} - {product.type}</p>
          </div>
        ))}
      </div>
      <ProductCreationForm onProductCreated={handleProductCreated} />
    </div>
  )
}