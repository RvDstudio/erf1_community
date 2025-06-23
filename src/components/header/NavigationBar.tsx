"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="bg-[#374c69] border-t border-[#415978] px-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Main Navigation */}
        <nav className="flex-grow">
          <ul className="flex">
            <li className="group relative">
              <Link
                href="/"
                className="flex items-center text-white hover:text-[#AB7C41] py-3 px-4"
              >
                Home
                <ChevronDown className="h-4 w-4 ml-1" />
              </Link>
            </li>
            <li className="group relative">
              <Link
                href="/shop"
                className="flex items-center text-[#BCBDC7] hover:text-[#AB7C41] py-3 px-4"
              >
                Shop
              </Link>
            </li>
            <li className="group relative">
              <Link
                href="/pages"
                className="flex items-center text-[#BCBDC7] hover:text-[#AB7C41] py-3 px-4"
              >
                Pages
                <ChevronDown className="h-4 w-4 ml-1" />
              </Link>
            </li>
            <li className="group relative">
              <Link
                href="/categories"
                className="flex items-center text-[#BCBDC7] hover:text-[#AB7C41] py-3 px-4"
              >
                Categories
                <ChevronDown className="h-4 w-4 ml-1" />
              </Link>
            </li>
            <li className="group relative">
              <Link
                href="/accessories"
                className="flex items-center text-[#BCBDC7] hover:text-[#AB7C41] py-3 px-4"
              >
                Accessories
                <ChevronDown className="h-4 w-4 ml-1" />
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-[#BCBDC7] hover:text-[#AB7C41] py-3 px-4 block"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* Call to Action Buttons & Auth Links (always unauthenticated) */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="text-[#BCBDC7] hover:text-[#AB7C41] py-3 px-4 block"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-[#AB7C41] hover:text-[#8a6232] py-3 px-4 block border border-[#AB7C41] rounded"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
