"use client";

import Link from "next/link";
import ShoppingCart from "@/components/frontpage/header/ShoppingCart";
import WishlistIcon from "@/components/frontpage/header/WishlistIcon";
import {
  User,
  Menu,
  Search,
  Tractor,
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
import { useSession } from '@/hooks/use-session'
import dynamic from 'next/dynamic'
const UserAvatar = dynamic(() => import('@/components/UserAvatar'), { ssr: false })

type UserObj = { name?: string; image?: string }
function getUserFromSession(session: unknown): UserObj | undefined {
  if (session && typeof session === 'object' && 'data' in session && session.data && typeof session.data === 'object') {
    const data = session.data as { user?: UserObj }
    if (data.user && typeof data.user === 'object') {
      return data.user
    }
  }
  return undefined
}

export default function SmallHeader() {
  const { session, isLoading } = useSession()
  const user = getUserFromSession(session)
  const name = user?.name || '?'
  const image = user?.image || undefined
  const isLoggedIn = !!user?.name
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
              <div className="bg-[#6699cc] rounded-full p-1 mr-2">
                <Tractor className="h-6 w-6 text-white" />
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
              <button className="bg-[#6699cc] hover:bg-[#6699cc]/80 text-white px-3 rounded-r-md cursor-pointer flex items-center justify-center">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Icons on the right (always unauthenticated) */}
          <div className="flex items-center space-x-4">
            {isLoading ? (
              <div className="w-8 h-8 rounded-full bg-gray-400 animate-pulse" />
            ) : isLoggedIn ? (
              <div className="flex items-center gap-2">
                <UserAvatar name={name} image={image} />
                <span className="text-white font-medium text-sm truncate max-w-[100px]">{name}</span>
              </div>
            ) : (
              <Link href="/login" className="text-white hover:text-gray-300">
                <User className="h-5 w-5" />
              </Link>
            )}
            <WishlistIcon />
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}
