import './styles/globals.css'
import { CartProvider } from '../contexts/CartContext'
import { useEffect } from 'react'
import { WebApp } from '@twa-dev/sdk'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    WebApp.ready()
  }, [])

  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}