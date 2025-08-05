"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NavigationBar() {
  return (
    <div className="border-[#415978] border-t bg-[#374c69] px-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Main Navigation */}
        <nav className="flex-grow">
          <ul className="flex">
            <li className="group relative">
              <Link
                className="flex items-center px-4 py-3 text-white hover:text-[#6699cc]"
                href="/"
              >
                Home
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </li>
            <li className="group relative">
              <Link
                className="flex items-center px-4 py-3 text-[#BCBDC7] hover:text-[#6699cc]"
                href="/shop"
              >
                Shop
              </Link>
            </li>
            <li className="group relative">
              <Link
                className="flex items-center px-4 py-3 text-[#BCBDC7] hover:text-[#6699cc]"
                href="/pages"
              >
                Pages
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </li>
            <li className="group relative">
              <Link
                className="flex items-center px-4 py-3 text-[#BCBDC7] hover:text-[#6699cc]"
                href="/categories"
              >
                Categories
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </li>
            <li className="group relative">
              <Link
                className="flex items-center px-4 py-3 text-[#BCBDC7] hover:text-[#6699cc]"
                href="/accessories"
              >
                Accessories
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-3 text-[#BCBDC7] hover:text-[#6699cc]"
                href="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* Call to Action Buttons & Auth Links (always unauthenticated) */}
        <div className="flex items-center gap-2">
          <Link
            className="block px-4 py-3 text-[#BCBDC7] hover:text-[#6699cc]"
            href="/sign-in"
          >
            Login
          </Link>
          <Link
            className="block rounded border border-[#6699cc] px-4 py-3 text-[#6699cc] hover:text-[#8a6232]"
            href="/sign-up"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
