"use client"
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

interface Product {
  id: number;
  name: string;
  price: number;
  type: string;
}

export default function BuyerDashboard() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    setProducts([
      { id: 1, name: 'Sample Photo', price: 9.99, type: 'photo' },
      { id: 2, name: 'Sample Video', price: 19.99, type: 'video' },
    ])
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}