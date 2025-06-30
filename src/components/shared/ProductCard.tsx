import React from "react";
import Image from "next/image";

export interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  rating: number;
  price: number;
  oldPrice?: number;
  badge?: "SALE" | "NEW";
  weight?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 mt-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <polygon points="9.9,1.1 7.6,6.6 1.6,7.6 6,11.7 4.9,17.6 9.9,14.6 14.9,17.6 13.8,11.7 18.2,7.6 12.2,6.6 " />
        </svg>
      ))}
    </div>
  );
}

export default function ProductCard({
  image,
  name,
  category,
  rating,
  price,
  oldPrice,
  badge,
  weight,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col relative shadow-sm hover:shadow transition">
      {/* Sale Badge */}
      {badge === "SALE" && (
        <span className="absolute top-4 right-4 bg-[#ff7070] text-white font-bold text-xs px-4 py-1 rounded-md">Sale</span>
      )}
      {/* Product Image */}
      <div className="flex justify-center items-center h-40 mb-4">
        <Image src={image} alt={name} width={160} height={160} className="object-contain max-h-36" />
      </div>
      {/* Category */}
      <div className="text-xs font-bold text-gray-400 mb-1">{category}</div>
      {/* Name */}
      <div className="font-bold text-[#374c69] mb-1">{name}</div>
      {/* Star Rating */}
      <StarRating rating={rating} />
      {/* Price and Weight */}
      <div className="flex items-end gap-2 mt-2">
        <span className="text-lg font-bold text-black">${price.toFixed(2)}</span>
        {oldPrice && <span className="text-gray-400 line-through text-base">${oldPrice.toFixed(2)}</span>}
        <span className="ml-auto text-xs text-gray-400">{weight}</span>
      </div>
    </div>
  );
} 