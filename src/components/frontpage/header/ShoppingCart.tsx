"use client"; // Make it a client component

import React, { useState } from "react";
import { ShoppingCart as CartIcon } from "lucide-react";
import { useCartStore } from "@/hooks/use-cart";
import { CartSheet } from "@/components/shop/CartSheet";

const ShoppingCart = () => {
  const itemCount = useCartStore((state) => state.getItemCount());
  const cartTotal = useCartStore((state) => state.getTotal());
  const [open, setOpen] = useState(false);

  const toggleCartSheet = () => setOpen((v) => !v);

  return (
    <>
      <button onClick={toggleCartSheet} className="flex items-center text-left">
        <div className="relative bg-[#6699cc] rounded-md p-2 mr-3">
          <CartIcon className="h-5 w-5 text-white" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {itemCount}
            </span>
          )}
        </div>
        <div className="hidden md:block">
          <div className="text-white text-xs font-bold">SHOPPING CART</div>
          <div className="text-white text-xs">
            {itemCount} item(s) - ${cartTotal.toFixed(2)}
          </div>
        </div>
      </button>
      <CartSheet open={open} onOpenChange={setOpen} />
    </>
  );
};

export default ShoppingCart;
