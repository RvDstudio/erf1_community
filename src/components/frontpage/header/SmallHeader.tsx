'use client';

import { Menu, Search, Tractor, User } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';
import ShoppingCart from '@/components/frontpage/header/ShoppingCart';
import WishlistIcon from '@/components/frontpage/header/WishlistIcon';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const UserAvatar = dynamic(() => import('@/components/UserAvatar'), {
  ssr: false,
});

type UserObj = { name?: string; image?: string };

interface SmallHeaderProps {
  session?: any;
}

function splitName(name: string): { firstName: string; lastName: string } {
  if (!name) return { firstName: '', lastName: '' };
  const parts = name.trim().split(' ');
  if (parts.length === 1) return { firstName: parts[0], lastName: '' };
  return { firstName: parts[0], lastName: parts.slice(1).join(' ') };
}

export default function SmallHeader({ session }: SmallHeaderProps) {
  let name = '';
  let image;
  let isLoggedIn = false;
  if (
    session &&
    typeof session === 'object' &&
    'user' in session &&
    session.user &&
    typeof session.user === 'object'
  ) {
    const data = session as { user?: UserObj };
    if (data.user && typeof data.user === 'object') {
      name = data.user.name || '';
      image = data.user.image || undefined;
      isLoggedIn = !!name;
    }
  }
  const { firstName, lastName } = splitName(name);
  return (
    <div className="fixed top-0 right-0 left-0 z-50 w-full bg-[#374c69] md:static">
      <div className="container mx-auto">
        <div className="flex w-full items-center justify-between space-x-4 px-4 py-2 shadow">
          <div className="flex items-center space-x-4">
            <Sheet modal={false}>
              <SheetTrigger asChild>
                <button className="text-white hover:text-gray-300">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                aria-describedby="sheet-nav-description"
                className="w-[300px] border-[#101828] border-r bg-[#101828] text-[#BCBDC7]"
                side="left"
              >
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription id="sheet-nav-description">
                    Placeholder for navigation links.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Link className="flex items-center" href="/">
              <div className="mr-2 rounded-full bg-[#6699cc] p-1">
                <Tractor className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                Erf1 Community
              </span>
            </Link>
          </div>

          {/* Search Bar - Center */}
          <div className="mx-4 hidden max-w-md flex-grow md:block">
            <div className="relative flex w-full">
              {/* Categories Dropdown */}
              <div className="w-1/3">
                <select className="h-8 w-full rounded-l-md border-gray-700 border-r bg-gray-800 px-3 pr-1 text-gray-400 text-sm focus:outline-none">
                  <option>All Categories</option>
                </select>
              </div>
              {/* Search Input */}
              <input
                className="h-8 w-2/3 bg-gray-800 px-3 text-gray-400 text-sm focus:outline-none"
                placeholder="Search..."
                type="text"
              />
              {/* Search Button */}
              <button className="flex cursor-pointer items-center justify-center rounded-r-md bg-[#6699cc] px-3 text-white hover:bg-[#6699cc]/80">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Icons on the right */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <UserAvatar image={image} name={name} />
                <span className="flex max-w-[100px] flex-col items-start truncate font-medium text-sm text-white">
                  <span>{firstName}</span>
                  {lastName && (
                    <span className="text-gray-300 text-xs">{lastName}</span>
                  )}
                </span>
              </div>
            ) : (
              <Link className="text-white hover:text-gray-300" href="/login">
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
