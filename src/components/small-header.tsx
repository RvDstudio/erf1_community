import Link from 'next/link'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ShoppingCart, Search, User } from 'lucide-react'

function SmallHeader() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#232f3e] shadow transition-transform duration-300">
      <div className="flex items-center justify-between px-4 md:px-8 h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-yellow-400">
          <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill="currentColor" />
            <path d="M12 25L25 12M12 12h13v13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-white">MARKET</span>
        </Link>
        {/* Search */}
        <form className="flex-1 mx-4 max-w-xs hidden md:flex">
          <Input type="search" placeholder="Search..." className="rounded-l bg-white text-gray-900 border-0 focus:ring-0" />
          <Button type="submit" size="icon" className="rounded-l-none bg-yellow-400 hover:bg-yellow-500 text-gray-900">
            <Search className="h-5 w-5" />
          </Button>
        </form>
        {/* Quick Links */}
        <div className="flex items-center gap-2">
          <Link href="#" className="hover:underline text-xs text-white hidden md:inline">My Account</Link>
          <Button variant="ghost" size="icon" aria-label="Cart">
            <ShoppingCart className="h-6 w-6 text-yellow-400" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Account">
            <User className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export { SmallHeader } 