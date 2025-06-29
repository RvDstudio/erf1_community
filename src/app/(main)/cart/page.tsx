"use client"

import { useCartStore, CartItem } from '@/hooks/use-cart'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function CartPage() {
  const { items, remove, updateQuantity } = useCartStore()
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <div className="min-h-screen bg-white py-12 pt-0 px-4 sm:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#374c69]">Shopping <span className="text-[#6699CC]">Cart</span></h2>
            <p className="text-gray-400 mt-1">Review your cart items and proceed to checkout.</p>
          </div>
          <Link href="/shop">
            <button className="bg-[#6699CC] hover:bg-[#6699CC]/80 cursor-pointer text-white font-semibold px-6 py-2 rounded transition">Shop More</button>
          </Link>
        </div>
        <div className="p-6 pb-0">
          <h3 className="text-lg font-semibold text-gray-600">CART</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 mt-2">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-400">No items in your cart.</td>
                </tr>
              )}
              {items.map((item: CartItem, idx: number) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Image src={item.image} alt={item.name} width={56} height={56} className="rounded object-contain bg-gray-100" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <button
                        className="w-7 h-7 rounded border border-gray-300 text-lg font-bold text-gray-700 hover:bg-gray-100"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        aria-label="Decrease quantity"
                      >-</button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        className="w-7 h-7 rounded border border-gray-300 text-lg font-bold text-gray-700 hover:bg-gray-100"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >+</button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded"
                      title="Remove from cart"
                      onClick={() => remove(item.id)}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-8">
          <div className="bg-gray-50 rounded p-6 min-w-[300px]">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-lg text-[#374c69]">${total.toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
} 