"use client"
import { useState } from 'react'

export default function ProductCreationForm({ onProductCreated }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [type, setType] = useState('photo')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newProduct = { name, price: parseFloat(price), type }
    onProductCreated(newProduct)
    setName('')
    setPrice('')
    setType('photo')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        className="mb-2 p-2 border rounded w-full"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        className="mb-2 p-2 border rounded w-full"
        required
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
      >
        <option value="photo">Photo</option>
        <option value="video">Video</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Create Product
      </button>
    </form>
  )
}
