'use client'; // Make it a client component

import { ShoppingCart as CartIcon } from 'lucide-react';
import React, { useState } from 'react';
import { CartSheet } from '@/components/shop/CartSheet';
import { useCartStore } from '@/hooks/use-cart';

const ShoppingCart = () => {
  const itemCount = useCartStore((state) => state.getItemCount());
  const cartTotal = useCartStore((state) => state.getTotal());
  const [open, setOpen] = useState(false);

  const toggleCartSheet = () => setOpen((v) => !v);

  return (
    <>
      <button className="flex items-center text-left" onClick={toggleCartSheet}>
        <div className="relative mr-3 rounded-md bg-[#6699cc] p-2">
          <CartIcon className="h-5 w-5 text-white" />
          {itemCount > 0 && (
            <span className="-top-1 -right-1 absolute flex h-4 w-4 items-center justify-center rounded-full bg-red-500 font-bold text-white text-xs">
              {itemCount}
            </span>
          )}
        </div>
        <div className="hidden md:block">
          <div className="font-bold text-white text-xs">SHOPPING CART</div>
          <div className="text-white text-xs">
            {itemCount} item(s) - ${cartTotal.toFixed(2)}
          </div>
        </div>
      </button>
      <CartSheet onOpenChange={setOpen} open={open} />
    </>
  );
};

export default ShoppingCart;
