'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { type CartItem, useCartStore } from '@/hooks/use-cart';

export default function CartPage() {
  const { items, remove, updateQuantity } = useCartStore();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="min-h-screen bg-white px-4 py-12 pt-0 sm:px-8">
      <div className="container mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-2xl text-[#374c69]">
              Shopping <span className="text-[#6699CC]">Cart</span>
            </h2>
            <p className="mt-1 text-gray-400">
              Review your cart items and proceed to checkout.
            </p>
          </div>
          <Link href="/shop">
            <button className="cursor-pointer rounded bg-[#6699CC] px-6 py-2 font-semibold text-white transition hover:bg-[#6699CC]/80">
              Shop More
            </button>
          </Link>
        </div>
        <div className="p-6 pb-0">
          <h3 className="font-semibold text-gray-600 text-lg">CART</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="mt-2 min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td className="py-8 text-center text-gray-400" colSpan={6}>
                    No items in your cart.
                  </td>
                </tr>
              )}
              {items.map((item: CartItem, idx: number) => (
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
                    <div className="flex items-center gap-2">
                      <button
                        aria-label="Decrease quantity"
                        className="h-7 w-7 rounded border border-gray-300 font-bold text-gray-700 text-lg hover:bg-gray-100"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-medium text-sm">
                        {item.quantity}
                      </span>
                      <button
                        aria-label="Increase quantity"
                        className="h-7 w-7 rounded border border-gray-300 font-bold text-gray-700 text-lg hover:bg-gray-100"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-gray-700 text-sm">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <button
                      className="rounded bg-gray-600 p-2 text-white hover:bg-gray-700"
                      onClick={() => remove(item.id)}
                      title="Remove from cart"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex justify-end">
          <div className="min-w-[300px] rounded bg-gray-50 p-6">
            <div className="mb-2 flex justify-between">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-[#374c69] text-lg">
                ${total.toFixed(2)}
              </span>
            </div>
            <button className="mt-4 w-full rounded bg-green-500 py-2 font-semibold text-white hover:bg-green-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
