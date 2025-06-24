import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="container mx-auto mb-20 
    relative bg-[#eafdff] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden min-h-[400px]">
      {/* Left Content */}
      <div className="flex-1 pl-10 z-10 max-w-2xl">
        <p className="text-green-600 font-semibold mb-2 text-sm md:text-base">
          Save Up To 50% Off On Your First Order
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#232946] leading-tight mb-4">
          Daily Grocery Order and Get <span className="text-sky-500">Express</span> Delivery
        </h1>
        <div className="flex items-center gap-4 mb-8">
          <Button className="flex items-center gap-2 px-6 py-3 text-lg bg-sky-700 hover:bg-sky-800">
            <span>Explore Shop</span>
            {/* Inline Shopping Cart Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="7" cy="21" r="1"/><circle cx="20" cy="21" r="1"/></svg>
          </Button>
          <span className="text-gray-600 text-base">Starting at <span className="text-red-500 font-bold text-xl align-middle">$60.99</span></span>
        </div>
      </div>
      {/* Right Image */}
      <div className="flex-1 flex justify-center items-center z-10">
        <Image
          src="/public/images/app-preview.png"
          alt="Grocery Bag"
          width={420}
          height={320}
          className="object-contain drop-shadow-xl"
          priority
        />
      </div>
      {/* Left Arrow */}
      <button className="absolute left-6 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center z-20">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      {/* Right Arrow */}
      <button className="absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center z-20">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
      </button>
      {/* Down Arrow Button */}
      <button className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-sky-700 hover:bg-sky-800 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg z-20 border-4 border-white">
        <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
      </button>
      {/* Decorative background pattern (optional) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        {/* You can add SVG or background pattern here if desired */}
      </div>
    </section>
  )
}