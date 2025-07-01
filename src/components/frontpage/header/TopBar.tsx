import { ChevronDown, Globe, Heart, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-[#415978] px-4 py-2 text-[#BCBDC7]">
      <div className="container mx-auto flex items-center justify-between text-xs">
        <div className="flex items-center">
          <div className="mr-4 flex items-center">
            <Globe className="mr-1 h-4 w-4" />
            <span>English</span>
            <ChevronDown className="ml-1 h-3 w-3" />
          </div>
          <div className="flex items-center">
            <span>US Dollar</span>
            <ChevronDown className="ml-1 h-3 w-3" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            className="flex items-center hover:text-gray-300"
            href="/account"
          >
            <User className="mr-1 h-4 w-4" />
            <span>My Account</span>
          </Link>
          <Link
            className="flex items-center hover:text-gray-300"
            href="/wishlist"
          >
            <Heart className="mr-1 h-4 w-4" />
            <span>My Wish List</span>
          </Link>
          <Link
            className="flex items-center hover:text-gray-300"
            href="/checkout"
          >
            <ShoppingBag className="mr-1 h-4 w-4" />
            <span>Checkout</span>
          </Link>
          <Link
            className="flex items-center hover:text-gray-300"
            href="/signin"
          >
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
