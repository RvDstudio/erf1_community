'use client';

import { Phone, Search, Tractor } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import ShoppingCart from '@/components/frontpage/header/ShoppingCart';
import SmallHeader from '@/components/frontpage/header/SmallHeader';
import TopBar from '@/components/frontpage/header/TopBar';
import WishlistIcon from '@/components/frontpage/header/WishlistIcon';
import NavigationBar from './NavigationBar';

const UserAvatar = dynamic(() => import('@/components/UserAvatar'), {
  ssr: false,
});

interface MainHeaderProps {
  session?: any;
}

function splitName(name: string): { firstName: string; lastName: string } {
  if (!name) return { firstName: '', lastName: '' };
  const parts = name.trim().split(' ');
  if (parts.length === 1) return { firstName: parts[0], lastName: '' };
  return { firstName: parts[0], lastName: parts.slice(1).join(' ') };
}

const MainHeader = ({ session }: MainHeaderProps) => {
  const [showMain, setShowMain] = useState(true);
  const [showSmall, setShowSmall] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const lastScrollY = useRef(0);

  let name = '';
  let image;
  let isLoggedIn = false;
  type UserObj = { name?: string; image?: string };
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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Header */}
      <div
        className={`fixed top-0 left-0 z-40 w-full transition-transform duration-300 ${showMain ? 'translate-y-0' : '-translate-y-full'} `}
        style={{
          boxShadow: isShrunk ? '0 2px 8px rgba(0,0,0,0.08)' : undefined,
        }}
      >
        <TopBar />

        <div
          className={`border-[#415978] border-t bg-[#374c69] px-4 transition-all duration-300 ${
            isShrunk ? 'py-1' : 'py-4'
          }`}
        >
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link className="flex items-center py-4" href="/">
              <div
                className={`mr-2 rounded-full bg-[#6699cc] transition-all duration-300 ${
                  isShrunk ? 'p-1' : 'p-2'
                }`}
              >
                <div
                  className={`font-bold text-white transition-all duration-300 ${
                    isShrunk ? 'text-lg' : 'text-xl'
                  }`}
                >
                  <Tractor className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <div
                  className={`font-bold text-white transition-all duration-300 ${
                    isShrunk ? 'text-lg' : 'text-2xl'
                  }`}
                >
                  Erf1 Community
                </div>
                <div
                  className={`text-[#BCBDC7] transition-all duration-300 ${
                    isShrunk ? 'text-[10px]' : 'text-xs'
                  }`}
                >
                  Shop all you want
                </div>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="mx-4 max-w-xl flex-grow">
              <div className="flex">
                <div className="w-1/3">
                  <select className="h-10 w-full rounded-l-md border-gray-700 border-r bg-gray-800 px-3 pr-1 text-[#BCBDC7] focus:outline-none">
                    <option>All Categories</option>
                  </select>
                </div>
                <div className="relative flex w-2/3">
                  <input
                    className="h-10 w-full bg-gray-800 px-3 text-[#BCBDC7] focus:outline-none"
                    placeholder="Enter keywords to search..."
                    type="text"
                  />
                  <button className="cursor-pointer rounded-r-md bg-[#6699cc] px-4 text-white hover:bg-[#6699cc]/80">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* User or Call Us Section */}
              {isLoggedIn ? (
                <>
                  <UserAvatar image={image} name={name} />
                  <span className="flex max-w-[120px] flex-col items-start truncate font-medium text-sm text-white">
                    <span>{firstName}</span>
                    {lastName && (
                      <span className="text-gray-300 text-xs">{lastName}</span>
                    )}
                  </span>
                </>
              ) : (
                <div className="flex items-center">
                  <div className="rounded-full bg-gray-800 p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-2">
                    <div className="font-bold text-white text-xs">
                      CALL US NOW:
                    </div>
                    <div className="text-white text-xs">
                      TOLL FREE: 0123-456-789
                    </div>
                  </div>
                </div>
              )}
              <WishlistIcon />
              <ShoppingCart />
            </div>
          </div>
        </div>
        <NavigationBar />
      </div>

      {/* Small Header */}
      <div
        className={`fixed top-0 left-0 z-50 w-full transition-transform duration-300 ${showSmall ? 'translate-y-0' : '-translate-y-full'} `}
      >
        <SmallHeader session={session} />
      </div>
    </>
  );
};

export default MainHeader;
