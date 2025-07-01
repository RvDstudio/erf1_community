'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent } from '@/components/ui/sheet';
import { type CartItem, useCartStore } from '@/hooks/use-cart';

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function getSubtext(item: CartItem) {
  // Example: extract subtext from name or add-ons, fallback to date
  // For demo, just return date or '1 pcs'
  return item.date ? item.date : `${item.quantity} pcs`;
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, remove, updateQuantity } = useCartStore();
  const subTotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const vat = subTotal * 0.2;
  const total = subTotal + vat;
  const router = useRouter();

  function handleViewCart() {
    onOpenChange(false);
    router.push('/cart');
  }

  return (
    <Sheet onOpenChange={onOpenChange} open={open}>
      <SheetContent
        className="flex h-full w-full max-w-md flex-col bg-white p-0"
        side="right"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-[#eeeeee] border-b px-6 py-4">
          <span className="font-bold text-[#374c69] text-lg">My Cart</span>
          <SheetClose asChild />
        </div>
        {/* Cart Items */}
        <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
          {items.length === 0 && (
            <div className="py-12 text-center text-gray-400">
              No items in your cart.
            </div>
          )}
          {items.map((item: CartItem) => (
            <div
              className="relative flex flex-col items-center gap-4 rounded-lg border border-[#eeeeee] bg-white p-4 sm:flex-row sm:items-stretch"
              key={item.id}
            >
              <Image
                alt={item.name}
                className="h-16 w-16 rounded bg-gray-100 object-contain"
                height={64}
                src={item.image}
                width={64}
              />
              <div className="flex min-w-0 flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <div
                      className="truncate font-semibold text-gray-800"
                      title={item.name}
                    >
                      {item.name}
                    </div>
                    <div className="mt-1 truncate text-gray-500 text-xs">
                      {getSubtext(item)}
                    </div>
                  </div>
                  <button
                    className="ml-2 text-red-500 hover:text-red-700"
                    onClick={() => remove(item.id)}
                    title="Remove"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      aria-label="Decrease quantity"
                      className="h-7 w-7 rounded border border-gray-300 font-bold text-gray-700 text-lg hover:bg-gray-100"
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
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
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="min-w-[60px] text-right font-bold text-base text-gray-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Cart Summary */}
        <div className="mt-auto border-t px-6 pt-2 pb-6">
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Sub-Total :</span>
              <span className="font-semibold">${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">VAT (20%) :</span>
              <span className="font-semibold">${vat.toFixed(2)}</span>
            </div>
            <div className="mt-2 flex justify-between text-base">
              <span className="font-bold">Total :</span>
              <span className="font-bold text-[#374c69]">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <Button
              className="flex-1 rounded bg-[#415978] font-semibold text-white hover:bg-[#374c69]"
              onClick={handleViewCart}
              variant="default"
            >
              VIEW CART
            </Button>
            <Button
              className="flex-1 rounded bg-green-500 font-semibold text-white hover:bg-green-600"
              variant="default"
            >
              CHECKOUT
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
