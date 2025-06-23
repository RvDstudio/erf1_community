import Link from 'next/link'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu'
import { ShoppingCart, User, Search, Phone, Globe, ChevronDown, Heart, LogIn, CreditCard } from 'lucide-react'

function EcommerceHeader() {
  return (
    <header className="w-full bg-[#232f3e] text-white shadow">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-4 py-1 text-xs bg-[#232f3e] border-b border-[#2e3b4e]">
        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 hover:underline">
                <Globe className="w-4 h-4" /> English <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Currency Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 hover:underline">
                US Dollar <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>US Dollar</DropdownMenuItem>
              <DropdownMenuItem>Euro</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:underline flex items-center gap-1"><User className="w-4 h-4" /> My Account</Link>
          <Link href="#" className="hover:underline flex items-center gap-1"><Heart className="w-4 h-4" /> My Wish List</Link>
          <Link href="#" className="hover:underline flex items-center gap-1"><CreditCard className="w-4 h-4" /> Checkout</Link>
          <Link href="#" className="hover:underline flex items-center gap-1"><LogIn className="w-4 h-4" /> Sign In</Link>
        </div>
      </div>
      {/* Main Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 md:px-12 py-5 md:py-6 bg-[#232f3e] gap-4 md:gap-6">
        {/* Logo & Tagline */}
        <div className="flex items-center gap-3 min-w-[180px]">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-yellow-400">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="currentColor" />
              <path d="M12 25L25 12M12 12h13v13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-white">MARKET</span>
          </Link>
          <span className="hidden md:inline text-xs text-gray-300 font-medium ml-2">Shop all you want</span>
        </div>
        {/* Search & Category */}
        <form className="flex flex-1 max-w-2xl mx-auto bg-white rounded overflow-hidden shadow-sm">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button type="button" className="flex items-center px-3 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 border-r border-gray-200">
                All Categories <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>All Categories</DropdownMenuItem>
              <DropdownMenuItem>Electronics</DropdownMenuItem>
              <DropdownMenuItem>Fashion</DropdownMenuItem>
              <DropdownMenuItem>Home & Garden</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Input type="search" placeholder="Enter keywords to search..." className="flex-1 border-0 focus:ring-0 text-gray-900 placeholder:text-gray-400 bg-white" />
          <Button type="submit" size="icon" className="rounded-none bg-yellow-400 hover:bg-yellow-500 text-gray-900">
            <Search className="h-5 w-5" />
          </Button>
        </form>
        {/* Call & Cart */}
        <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-6 min-w-[220px] md:justify-end mt-2 md:mt-0">
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-200">CALL US NOW</span>
            <span className="font-bold text-white ml-1">TOLL FREE 0123-456-789</span>
          </div>
          <Link href="#" className="flex items-center gap-2 bg-[#1a2533] px-3 py-2 rounded text-sm hover:bg-[#222f3e]">
            <ShoppingCart className="w-5 h-5 text-yellow-400" />
            <span className="text-white">2 item(s) - $120.00</span>
          </Link>
        </div>
      </div>
      {/* Navigation Bar */}
      <nav className="flex items-center px-4 md:px-8 py-2 bg-[#1a2533] text-sm gap-2 md:gap-6 overflow-x-auto">
        {/* All Categories Button */}
        <Button variant="secondary" className="bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500 px-4 py-2 rounded-none">
          ALL CATEGORIES
        </Button>
        {/* Main Links */}
        <div className="flex gap-4 md:gap-6 items-center">
          <Link href="/" className="hover:text-yellow-400 font-medium">Home</Link>
          <div className="relative flex items-center">
            <Link href="#" className="hover:text-yellow-400 font-medium">Features</Link>
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-[10px] px-1 rounded">NEW</span>
          </div>
          <div className="relative flex items-center">
            <Link href="#" className="hover:text-yellow-400 font-medium">Pages</Link>
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-[10px] px-1 rounded">NEW</span>
          </div>
          <Link href="#" className="hover:text-yellow-400 font-medium">Categories</Link>
          <Link href="#" className="hover:text-yellow-400 font-medium">Accessories</Link>
          <Link href="#" className="hover:text-yellow-400 font-medium">Blog</Link>
        </div>
        <div className="flex-1" />
        {/* Special Links */}
        <Link href="#" className="hover:text-yellow-400 font-semibold">Buy This Theme</Link>
        <Link href="#" className="hover:text-yellow-400 font-semibold">Special Offer!</Link>
      </nav>
    </header>
  )
}

export { EcommerceHeader } 