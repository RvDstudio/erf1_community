'use client';

import { Heart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useWishlistStore, type WishlistItem } from '@/hooks/use-wishlist';

export default function WishlistIcon() {
  const itemCount = useWishlistStore(
    (state: { items: WishlistItem[] }) => state.items.length
  );

  return (
    <Link
      className="flex items-center text-left text-white hover:text-gray-300"
      href="/wishlist"
    >
      <div className="relative mr-3 rounded-md bg-gray-800 p-2 hover:bg-gray-700">
        <Heart className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="-top-1 -right-1 absolute flex h-4 w-4 items-center justify-center rounded-full bg-red-500 font-bold text-white text-xs">
            {itemCount}
          </span>
        )}
      </div>
      <div className="hidden md:block">
        <div className="font-bold text-xs">MY WISHLIST</div>
        <div className="text-xs">{itemCount} item(s)</div>
      </div>
    </Link>
  );
}
