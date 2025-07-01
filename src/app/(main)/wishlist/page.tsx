'use client';

import { Trash2, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useWishlistStore, type WishlistItem } from '@/hooks/use-wishlist';

export default function WishlistPage() {
  const { items, remove } = useWishlistStore();

  return (
    <div className="min-h-screen bg-white px-4 py-12 pt-0 sm:px-8">
      <div className="container mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-2xl text-[#374c69]">
              Product <span className="text-[#6699CC]">Wishlist</span>
            </h2>
            <p className="mt-1 text-gray-400">
              Your product wish is our first priority.
            </p>
          </div>
          <Link href="/shop">
            <button className="cursor-pointer rounded bg-[#6699CC] px-6 py-2 font-semibold text-white transition hover:bg-[#6699CC]/80">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="rounded-lg border border-[#eeeeee] bg-white">
          <div className="p-6 pb-0">
            <h3 className="font-semibold text-gray-600 text-lg">WISHLIST</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="mt-2 min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {items.length === 0 && (
                  <tr>
                    <td className="py-8 text-center text-gray-400" colSpan={7}>
                      No items in your wishlist.
                    </td>
                  </tr>
                )}
                {items.map((item: WishlistItem, idx: number) => (
                  <tr key={item.id}>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-700 text-sm">
                      {idx + 1}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Image
                        alt={item.name}
                        className="rounded bg-gray-100 object-contain"
                        height={56}
                        src={item.image}
                        width={56}
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-700 text-sm">
                      {item.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-700 text-sm">
                      {item.date}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-700 text-sm">
                      ${item.price}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      {item.status === 'Available' ? (
                        <span className="text-green-500">Available</span>
                      ) : (
                        <span className="text-red-400">Out Of Stock</span>
                      )}
                    </td>
                    <td className="flex gap-2 whitespace-nowrap px-6 py-4">
                      <button
                        className="rounded bg-green-100 p-2 text-green-700 hover:bg-green-200"
                        disabled
                        title="Move to cart (not implemented)"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <button
                        className="rounded bg-gray-600 p-2 text-white hover:bg-gray-700"
                        onClick={() => remove(item.id)}
                        title="Remove from wishlist"
                      >
                        <X className="h-4 w-4" />
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
  );
}
