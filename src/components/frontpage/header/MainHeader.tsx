"use client";

import React, { useEffect, useRef, useState } from "react";
import { Search, Phone, Armchair } from "lucide-react";
import ShoppingCart from "@/components/frontpage/header/ShoppingCart";
import Link from "next/link";
import SmallHeader from "@/components/frontpage/header/SmallHeader";
import TopBar from "@/components/frontpage/header/TopBar";
import NavigationBar from "./NavigationBar";
import WishlistIcon from "@/components/frontpage/header/WishlistIcon";

const MainHeader = () => {
  const [showMain, setShowMain] = useState(true);
  const [showSmall, setShowSmall] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      setIsShrunk(currentScrollY > 30);
      if (currentScrollY <= 0) {
        setShowMain(true);
        setShowSmall(false);
      } else if (currentScrollY > lastScrollY.current) {
        setShowMain(false);
        setShowSmall(true);
      } else {
        setShowMain(true);
        setShowSmall(false);
      }
      lastScrollY.current = currentScrollY;
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Header */}
      <div
        className={`
          fixed top-0 left-0 w-full z-40
          transition-transform duration-300
          ${showMain ? "translate-y-0" : "-translate-y-full"}
        `}
        style={{
          boxShadow: isShrunk ? "0 2px 8px rgba(0,0,0,0.08)" : undefined,
        }}
      >
        <TopBar />

        <div
          className={`bg-[#374c69] border-t border-[#415978] px-4 transition-all duration-300 ${
            isShrunk ? "py-1" : "py-4"
          }`}
        >
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center py-4">
              <div
                className={`bg-[#AB7C41] rounded-full mr-2 transition-all duration-300 ${
                  isShrunk ? "p-1" : "p-2"
                }`}
              >
                <div
                  className={`text-white font-bold transition-all duration-300 ${
                    isShrunk ? "text-lg" : "text-xl"
                  }`}
                >
                  <Armchair className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <div
                  className={`text-white font-bold transition-all duration-300 ${
                    isShrunk ? "text-lg" : "text-2xl"
                  }`}
                >
                  Erf1 Community
                </div>
                <div
                  className={`text-[#BCBDC7] transition-all duration-300 ${
                    isShrunk ? "text-[10px]" : "text-xs"
                  }`}
                >
                  Shop all you want
                </div>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="flex-grow max-w-xl mx-4">
              <div className="flex">
                <div className="w-1/3">
                  <select className="w-full h-10 px-3 rounded-l-md border-r border-gray-700 focus:outline-none bg-gray-800 text-[#BCBDC7] pr-1">
                    <option>All Categories</option>
                  </select>
                </div>
                <div className="w-2/3 relative flex">
                  <input
                    type="text"
                    placeholder="Enter keywords to search..."
                    className="w-full h-10 px-3 focus:outline-none bg-gray-800 text-[#BCBDC7]"
                  />
                  <button className="bg-[#AB7C41] hover:bg-[#AB7C41]/80 text-white px-4 rounded-r-md cursor-pointer">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Call Us Section (always shown, no user logic) */}
            <div className="flex items-center mr-4">
              <div className="bg-gray-800 rounded-full p-3 mr-3">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-white text-xs font-bold">
                  CALL US NOW:
                </div>
                <div className="text-white text-xs">
                  TOLL FREE: 0123-456-789
                </div>
              </div>
            </div>

            {/* Wishlist Icon */}
            <WishlistIcon />

            {/* Shopping Cart */}
            <ShoppingCart />
          </div>
        </div>
        <NavigationBar />
      </div>

      {/* Small Header */}
      <div
        className={`
          fixed top-0 left-0 w-full z-50
          transition-transform duration-300
          ${showSmall ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <SmallHeader />
      </div>
    </>
  );
};

export default MainHeader;
