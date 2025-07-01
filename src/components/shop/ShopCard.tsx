import { Eye, GitCompareArrows, Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { toast } from 'sonner';
import { useCartStore } from '../../hooks/use-cart';
import { useWishlistStore } from '../../hooks/use-wishlist';

export interface ShopCardProps {
  image: string;
  hoverImage: string;
  category: string;
  title: string;
  link: string;
  weight: string;
  price: string;
  oldPrice?: string;
  isOnSale?: boolean;
  rating?: number; // 0-5
  onAddToCart?: () => void; // Optional callback to open cart sheet
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
  const wishlist = useWishlistStore();
  const cart = useCartStore();
  const id = title; // Use title as id for now
  const isInWishlist = wishlist.isInWishlist(id);

  function handleWishlist() {
    if (isInWishlist) {
      wishlist.remove(id);
    } else {
      wishlist.add({
        id,
        name: title,
        image,
        price: Number(price.replace(/[^\d.]/g, '')),
        status: 'Available', // Default, can be improved
        date: new Date().toLocaleDateString('en-GB'),
      });
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
    });
    toast.success(`Added to cart: ${title}`);
    if (onAddToCart) onAddToCart();
  }

  return (
    <div className="group cursor-pointer rounded-md border border-[#eeeeee] transition-all duration-300 hover:shadow-md">
      <div className="relative z-10 transition-all">
        {/* Default image */}
        <Image
          alt="Product"
          className="transition-opacity duration-300 group-hover:opacity-0"
          height={500}
          src={image}
          width={500}
        />
        {/* Hover image */}
        <Image
          alt="Product hover"
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          height={500}
          src={hoverImage}
          width={500}
        />
        {isOnSale && (
          <div className="text absolute top-4 right-4 rounded-md bg-[#ff7070] px-3 py-1 font-bold text-white text-xs">
            Sale
          </div>
        )}
        {/* Slide-in icons on hover (from bottom) */}
        <div className="-translate-x-1/2 absolute bottom-4 left-1/2 flex translate-y-4 flex-row gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {/* Wishlist Icon */}
          <button
            aria-label={
              isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'
            }
            className={`cursor-pointer rounded-md bg-white p-2 shadow transition hover:bg-gray-100 ${isInWishlist ? 'ring-2 ring-pink-400' : ''}`}
            onClick={handleWishlist}
            type="button"
          >
            <Heart
              className={`h-4 w-4 ${isInWishlist ? 'fill-pink-400 text-pink-500' : 'text-[#777777]'}`}
            />
          </button>
          {/* Cart Icon */}
          <button
            aria-label="Add to cart"
            className="cursor-pointer rounded-md bg-white p-2 shadow transition hover:bg-gray-100"
            onClick={handleCart}
            type="button"
          >
            <ShoppingCart className="h-4 w-4 text-[#777777]" />
          </button>
          {/* View Icon */}
          <button className="cursor-pointer rounded-md bg-white p-2 shadow transition hover:bg-gray-100">
            <Eye className="h-4 w-4 text-[#777777]" />
          </button>
          {/* Compare Icon */}
          <button className="cursor-pointer rounded-md bg-white p-2 shadow transition hover:bg-gray-100">
            <GitCompareArrows className="h-4 w-4 text-[#777777]" />
          </button>
        </div>
      </div>
      <div className="flex flex-col border-[#eeeeee] border-t p-6 ">
        <div className="">
          <a href="#">
            <h6 className="font-['Manrope'] font-bold text-[#999999] text-xs">
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
                className={`h-4 w-4 shrink-0 ${i < rating ? 'fill-amber-400' : 'fill-gray-300'}`}
                key={i}
                viewBox="0 0 256 256"
              >
                <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z" />
              </svg>
            ))}
          </div>
          <div className="text-[#777777] text-xs">{weight}</div>
        </div>
        <div className="mt-2">
          <span className="mr-2 font-bold text-[4B5966]">{price}</span>
          {oldPrice && (
            <span className="text-[#777777] line-through">{oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}
