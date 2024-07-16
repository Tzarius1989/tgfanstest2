import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-24">
      <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-center">Welcome to Digital Marketplace</h1>
      <Link href="/buyers" className="w-full sm:w-auto bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-center mb-4">
        Browse Products
      </Link>
      <Link href="/creators" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-center">
        Creator Dashboard
      </Link>
    </main>
  )
}