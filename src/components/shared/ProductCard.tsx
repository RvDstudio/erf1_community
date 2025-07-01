import Image from 'next/image';
import React from 'react';

export interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  rating: number;
  price: number;
  oldPrice?: number;
  badge?: 'SALE' | 'NEW';
  weight?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="mt-1 mb-2 flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
          fill="currentColor"
          key={i}
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
    <div className="relative flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow">
      {/* Sale Badge */}
      {badge === 'SALE' && (
        <span className="absolute top-4 right-4 rounded-md bg-[#ff7070] px-4 py-1 font-bold text-white text-xs">
          Sale
        </span>
      )}
      {/* Product Image */}
      <div className="mb-4 flex h-40 items-center justify-center">
        <Image
          alt={name}
          className="max-h-36 object-contain"
          height={160}
          src={image}
          width={160}
        />
      </div>
      {/* Category */}
      <div className="mb-1 font-bold text-gray-400 text-xs">{category}</div>
      {/* Name */}
      <div className="mb-1 font-bold text-[#374c69]">{name}</div>
      {/* Star Rating */}
      <StarRating rating={rating} />
      {/* Price and Weight */}
      <div className="mt-2 flex items-end gap-2">
        <span className="font-bold text-black text-lg">
          ${price.toFixed(2)}
        </span>
        {oldPrice && (
          <span className="text-base text-gray-400 line-through">
            ${oldPrice.toFixed(2)}
          </span>
        )}
        <span className="ml-auto text-gray-400 text-xs">{weight}</span>
      </div>
    </div>
  );
}
