"use client"

import { useWishlistStore, WishlistItem } from '@/hooks/use-wishlist'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2, X } from 'lucide-react'

export default function WishlistPage() {
  const { items, remove } = useWishlistStore()

  return (
    <div className="min-h-screen bg-white py-12 pt-0 px-4 sm:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#374c69]">Product <span className="text-[#6699CC]">Wishlist</span></h2>
            <p className="text-gray-400 mt-1">Your product wish is our first priority.</p>
          </div>
          <Link href="/shop">
            <button className="bg-[#6699CC] hover:bg-[#6699CC]/80 cursor-pointer text-white font-semibold px-6 py-2 rounded transition">Shop Now</button>
          </Link>
        </div>
        <div className="bg-white rounded-lg border border-[#eeeeee]">
          <div className="p-6 pb-0">
            <h3 className="text-lg font-semibold text-gray-600">WISHLIST</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 mt-2">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-8 text-gray-400">No items in your wishlist.</td>
                  </tr>
                )}
                {items.map((item: WishlistItem, idx: number) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{idx + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Image src={item.image} alt={item.name} width={56} height={56} className="rounded object-contain bg-gray-100" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${item.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {item.status === 'Available' ? (
                        <span className="text-green-500">Available</span>
                      ) : (
                        <span className="text-red-400">Out Of Stock</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                      <button
                        className="bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded"
                        title="Move to cart (not implemented)"
                        disabled
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button
                        className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded"
                        title="Remove from wishlist"
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
        </div>
      </div>
    </div>
  )
} 