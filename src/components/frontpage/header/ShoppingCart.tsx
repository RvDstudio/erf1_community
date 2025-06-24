"use client"; // Make it a client component

import React from "react";
import { ShoppingCart as CartIcon } from "lucide-react";
// Removed: import { useCartStore } from "@/store/cart-store";

const ShoppingCart = () => {
  // Removed cart state logic
  // const { getCartItemCount, getCartTotal, toggleCartSheet } = useCartStore();
  // const itemCount = getCartItemCount();
  // const cartTotal = getCartTotal();

  // Static values
  const itemCount = 0;
  const cartTotal = 0.0;
  const toggleCartSheet = () => {};

  return (
    <button onClick={toggleCartSheet} className="flex items-center text-left">
      <div className="relative bg-[#AB7C41] rounded-md p-2 mr-3">
        <CartIcon className="h-6 w-6 text-white" />
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
  );
};

export default ShoppingCart;
