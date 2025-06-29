import { Eye, GitCompareArrows, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useWishlistStore } from '../../hooks/use-wishlist'
import { useCartStore } from '../../hooks/use-cart'
import { toast } from 'sonner'

export interface ShopCardProps {
  image: string
  hoverImage: string
  category: string
  title: string
  link: string
  weight: string
  price: string
  oldPrice?: string
  isOnSale?: boolean
  rating?: number // 0-5
  onAddToCart?: () => void // Optional callback to open cart sheet
}

export default function ShopCard({
  image,
  hoverImage,
  category,
  title,
  link,
  weight,
  price,
  oldPrice,
  isOnSale,
  rating = 3,
  onAddToCart,
}: ShopCardProps) {
  const wishlist = useWishlistStore()
  const cart = useCartStore()
  const id = title // Use title as id for now
  const isInWishlist = wishlist.isInWishlist(id)

  function handleWishlist() {
    if (isInWishlist) {
      wishlist.remove(id)
    } else {
      wishlist.add({
        id,
        name: title,
        image,
        price: Number(price.replace(/[^\d.]/g, '')),
        status: 'Available', // Default, can be improved
        date: new Date().toLocaleDateString('en-GB'),
      })
    }
  }

  function handleCart() {
    cart.add({
      id,
      name: title,
      image,
      price: Number(price.replace(/[^\d.]/g, '')),
      status: 'Available',
      date: new Date().toLocaleDateString('en-GB'),
    })
    toast.success(`Added to cart: ${title}`)
    if (onAddToCart) onAddToCart()
  }

  return (
    <div className="border border-[#eeeeee] rounded-md cursor-pointer group hover:shadow-md transition-all duration-300">
      <div className="z-10 relative transition-all">
        {/* Default image */}
        <Image
          src={image}
          width={500}
          height={500}
          alt="Product"
          className="transition-opacity duration-300 group-hover:opacity-0"
        />
        {/* Hover image */}
        <Image
          src={hoverImage}
          width={500}
          height={500}
          alt="Product hover"
          className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
        {isOnSale && (
          <div className="text absolute top-4 right-4 bg-[#ff7070] font-bold text-xs text-white px-3 py-1 rounded-md">Sale</div>
        )}
        {/* Slide-in icons on hover (from bottom) */}
        <div className="absolute flex flex-row gap-2 bottom-4 left-1/2 -translate-x-1/2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {/* Wishlist Icon */}
          <button
            className={`cursor-pointer bg-white p-2 rounded-md shadow hover:bg-gray-100 transition ${isInWishlist ? 'ring-2 ring-pink-400' : ''}`}
            onClick={handleWishlist}
            aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
            type="button"
          >
            <Heart className={`w-4 h-4 ${isInWishlist ? 'text-pink-500 fill-pink-400' : 'text-[#777777]'}`} />
          </button>
          {/* Cart Icon */}
          <button className="cursor-pointer bg-white p-2 rounded-md shadow hover:bg-gray-100 transition" onClick={handleCart} aria-label="Add to cart" type="button">
            <ShoppingCart className="w-4 h-4 text-[#777777]" />
          </button>
          {/* View Icon */}
          <button className="cursor-pointer bg-white p-2 rounded-md shadow hover:bg-gray-100 transition">
            <Eye className="w-4 h-4 text-[#777777]" />
          </button>
          {/* Compare Icon */}
          <button className="cursor-pointer bg-white p-2 rounded-md shadow hover:bg-gray-100 transition">
            <GitCompareArrows className="w-4 h-4 text-[#777777]" />
          </button>
        </div>
      </div>
      <div className="flex flex-col p-6 border-t border-[#eeeeee] ">
        <div className="">
          <a href="#">
            <h6 className="font-['Manrope'] text-xs font-bold text-[#999999]">
              {category}
            </h6>
          </a>
        </div>
        <div className="mt-2 mb-2">
          <h5 className="font-['Manrope'] font-bold text-[#5f5f5f]">
            <a href={link}>{title}</a>
          </h5>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 shrink-0 ${i < rating ? 'fill-amber-400' : 'fill-gray-300'}`}
                viewBox="0 0 256 256"
              >
                <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
              </svg>
            ))}
          </div>
          <div className="text-xs text-[#777777]">{weight}</div>
        </div>
        <div className="mt-2">
          <span className="font-bold mr-2 text-[4B5966]">{price}</span>
          {oldPrice && <span className="text-[#777777] line-through">{oldPrice}</span>}
        </div>
      </div>
    </div>
  )
}
