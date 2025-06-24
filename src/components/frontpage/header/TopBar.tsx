import React from "react";
import { Globe, User, Heart, ShoppingBag, ChevronDown } from "lucide-react";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="bg-[#415978] text-[#BCBDC7] py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-xs">
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <Globe className="h-4 w-4 mr-1" />
            <span>English</span>
            <ChevronDown className="h-3 w-3 ml-1" />
          </div>
          <div className="flex items-center">
            <span>US Dollar</span>
            <ChevronDown className="h-3 w-3 ml-1" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/account"
            className="flex items-center hover:text-gray-300"
          >
            <User className="h-4 w-4 mr-1" />
            <span>My Account</span>
          </Link>
          <Link
            href="/wishlist"
            className="flex items-center hover:text-gray-300"
          >
            <Heart className="h-4 w-4 mr-1" />
            <span>My Wish List</span>
          </Link>
          <Link
            href="/checkout"
            className="flex items-center hover:text-gray-300"
          >
            <ShoppingBag className="h-4 w-4 mr-1" />
            <span>Checkout</span>
          </Link>
          <Link
            href="/signin"
            className="flex items-center hover:text-gray-300"
          >
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
