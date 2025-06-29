"use client"

import {
  Sheet,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet"
import { useCartStore, CartItem } from "@/hooks/use-cart"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import React from "react"
import { useRouter } from 'next/navigation'

interface CartSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

function getSubtext(item: CartItem) {
  // Example: extract subtext from name or add-ons, fallback to date
  // For demo, just return date or '1 pcs'
  return item.date ? item.date : `${item.quantity} pcs`
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, remove, updateQuantity } = useCartStore()
  const subTotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const vat = subTotal * 0.2
  const total = subTotal + vat
  const router = useRouter()

  function handleViewCart() {
    onOpenChange(false)
    router.push('/cart')
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full max-w-md flex flex-col h-full p-0 bg-white">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#eeeeee]">
          <span className="font-bold text-lg text-[#374c69]">My Cart</span>
          <SheetClose asChild>

          </SheetClose>
        </div>
        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {items.length === 0 && (
            <div className="text-center text-gray-400 py-12">No items in your cart.</div>
          )}
          {items.map((item: CartItem) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center sm:items-stretch bg-white rounded-lg border border-[#eeeeee] p-4 gap-4 relative">
              <Image src={item.image} alt={item.name} width={64} height={64} className="rounded object-contain bg-gray-100 w-16 h-16" />
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-800 truncate" title={item.name}>{item.name}</div>
                    <div className="text-xs text-gray-500 mt-1 truncate">{getSubtext(item)}</div>
                  </div>
                  <button
                    className="ml-2 text-red-500 hover:text-red-700"
                    onClick={() => remove(item.id)}
                    title="Remove"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <button
                      className="w-7 h-7 rounded border border-gray-300 text-lg font-bold text-gray-700 hover:bg-gray-100"
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <button
                      className="w-7 h-7 rounded border border-gray-300 text-lg font-bold text-gray-700 hover:bg-gray-100"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <div className="font-bold text-gray-700 text-base min-w-[60px] text-right">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Cart Summary */}
        <div className="mt-auto px-6 pb-6 pt-2 border-t">
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Sub-Total :</span>
              <span className="font-semibold">${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">VAT (20%) :</span>
              <span className="font-semibold">${vat.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base mt-2">
              <span className="font-bold">Total :</span>
              <span className="font-bold text-[#374c69]">${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <Button className="flex-1 bg-[#415978] hover:bg-[#374c69] text-white font-semibold rounded" variant="default" onClick={handleViewCart}>VIEW CART</Button>
            <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold rounded" variant="default">CHECKOUT</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}