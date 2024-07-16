"use client"
import { useState } from 'react'

interface Product {
  name: string;
  price: number;
  type: string;
}

interface ProductCreationFormProps {
  onProductCreated: (product: Product) => void;
}

export default function ProductCreationForm({ onProductCreated }: ProductCreationFormProps) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [type, setType] = useState('photo')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newProduct: Product = { name, price: parseFloat(price), type }
    onProductCreated(newProduct)
    setName('')
    setPrice('')
    setType('photo')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        className="w-full p-2 border rounded"
        required
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="photo">Photo</option>
        <option value="video">Video</option>
      </select>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Create Product
      </button>
    </form>
  )
}