"use client"
import { useState } from 'react'
import ProductCreationForm from './ProductCreationForm'

export default function CreatorDashboard() {
  const [products, setProducts] = useState([])

  const handleProductCreated = (newProduct) => {
    setProducts([...products, newProduct])
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Products</h2>
      {products.map((product, index) => (
        <div key={index} className="mb-2 p-2 border rounded">
          {product.name} - ${product.price}
        </div>
      ))}
      <ProductCreationForm onProductCreated={handleProductCreated} />
    </div>
  )
}
