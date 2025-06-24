"use client";

import Link from "next/link";
import ShoppingCart from "@/components/frontpage/header/ShoppingCart";
import WishlistIcon from "@/components/frontpage/header/WishlistIcon";
import {
  User,
  Menu,
  Search,
  Armchair,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";

export default function SmallHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 md:static w-full z-50 bg-[#374c69]">
      <div className="container mx-auto">
        <div className="px-4 py-2 flex justify-between items-center w-full shadow space-x-4">
          <div className="flex items-center space-x-4">
            <Sheet modal={false}>
              <SheetTrigger asChild>
                <button className="text-white hover:text-gray-300">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] bg-[#101828] text-[#BCBDC7] border-r border-[#101828]"
                aria-describedby="sheet-nav-description"
              >
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription id="sheet-nav-description">
                    Placeholder for navigation links.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center">
              <div className="bg-[#AB7C41] rounded-full p-1 mr-2">
                <Armchair className="h-6 w-6 text-white" />
              </div>
              <span className="text-white font-bold text-lg">Erf1 Community</span>
            </Link>
          </div>

          {/* Search Bar - Center */}
          <div className="flex-grow max-w-md mx-4 hidden md:block">
            <div className="relative flex w-full">
              {/* Categories Dropdown */}
              <div className="w-1/3">
                <select className="w-full h-8 px-3 text-sm rounded-l-md border-r border-gray-700 focus:outline-none bg-gray-800 text-gray-400 pr-1">
                  <option>All Categories</option>
                </select>
              </div>
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search..."
                className="h-8 px-3 text-sm focus:outline-none bg-gray-800 text-gray-400 w-2/3"
              />
              {/* Search Button */}
              <button className="bg-[#AB7C41] hover:bg-[#AB7C41]/80 text-white px-3 rounded-r-md cursor-pointer flex items-center justify-center">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Icons on the right (always unauthenticated) */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-white hover:text-gray-300">
              <User className="h-5 w-5" />
            </Link>
            <WishlistIcon />
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}
