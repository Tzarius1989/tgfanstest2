import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Digital Marketplace</h1>
      <Link href="/buyers" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Browse Products
      </Link>
      <Link href="/creators" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Creator Dashboard
      </Link>
    </main>
  )
}
