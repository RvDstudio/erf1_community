"use client";

import React from "react";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useWishlistStore, WishlistItem } from "@/hooks/use-wishlist";

export default function WishlistIcon() {
  const itemCount = useWishlistStore(
    (state: { items: WishlistItem[] }) => state.items.length
  );

  return (
    <Link
      href="/wishlist"
      className="flex items-center text-left text-white hover:text-gray-300"
    >
      <div className="relative bg-gray-800 hover:bg-gray-700 rounded-md p-2 mr-3">
        <Heart className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {itemCount}
          </span>
        )}
      </div>
      <div className="hidden md:block">
        <div className="text-xs font-bold">MY WISHLIST</div>
        <div className="text-xs">{itemCount} item(s)</div>
      </div>
    </Link>
  );
}
