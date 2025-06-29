"use client";

import ShopCard, { ShopCardProps } from "@/components/shop/ShopCard";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import React, { useState } from "react";
import { CartSheet } from '@/components/shop/CartSheet'

const products: ShopCardProps[] = [
  {
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_1.jpg",
    hoverImage:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_2.jpg",
    category: "Dried Fruit",
    title: "Mixed Nuts Berries Pack",
    link: "/product-left-sidebar/1",
    weight: "2kg",
    price: "$45.00",
    oldPrice: "$55.00",
    isOnSale: true,
    rating: 3,
  },
  {
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/7_1.jpg",
    hoverImage:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/7_2.jpg",
    category: "Snacks",
    title: "Organic Trail Mix",
    link: "/product-left-sidebar/2",
    weight: "1kg",
    price: "$30.00",
    oldPrice: "$40.00",
    isOnSale: false,
    rating: 4,
  },
  {
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/8_1.jpg",
    hoverImage:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/8_2.jpg",
    category: "Nuts",
    title: "Roasted Almonds",
    link: "/product-left-sidebar/3",
    weight: "500g",
    price: "$20.00",
    oldPrice: "$25.00",
    isOnSale: true,
    rating: 5,
  },
  {
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_1.jpg",
    hoverImage:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_2.jpg",
    category: "Seeds",
    title: "Chia Seeds Pack",
    link: "/product-left-sidebar/4",
    weight: "250g",
    price: "$10.00",
    oldPrice: "$12.00",
    isOnSale: false,
    rating: 2,
  },
  {
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_1.jpg",
    hoverImage:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_2.jpg",
    category: "Dried Fruit",
    title: "Mixed Nuts Berries Pack",
    link: "/product-left-sidebar/1",
    weight: "2kg",
    price: "$45.00",
    oldPrice: "$55.00",
    isOnSale: true,
    rating: 3,
  },
  {
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/7_1.jpg",
    hoverImage:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/7_2.jpg",
    category: "Snacks",
    title: "Organic Trail Mix",
    link: "/product-left-sidebar/2",
    weight: "1kg",
    price: "$30.00",
    oldPrice: "$40.00",
    isOnSale: false,
    rating: 4,
  },
  {
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/8_1.jpg",
    hoverImage:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/8_2.jpg",
    category: "Nuts",
    title: "Roasted Almonds",
    link: "/product-left-sidebar/3",
    weight: "500g",
    price: "$20.00",
    oldPrice: "$25.00",
    isOnSale: true,
    rating: 5,
  },
  {
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_1.jpg",
    hoverImage:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_2.jpg",
    category: "Seeds",
    title: "Chia Seeds Pack",
    link: "/product-left-sidebar/4",
    weight: "250g",
    price: "$10.00",
    oldPrice: "$12.00",
    isOnSale: false,
    rating: 2,
  },
];

const categories = [...Array.from(new Set(products.map((p) => p.category)))];

const brands = ["Frito Lay", "Nespresso", "Oreo", "Quaker", "Welch's"];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(150);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false)

  const filtered = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  function handleBrandChange(brand: string) {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  }

  return (
    <>
      <div className="min-h-screen py-10 pt-0">
        <div className="container mx-auto">
          <div className="mb-2">
            <h1 className="text-2xl font-bold text-gray-800">Shop</h1>
            <div className="mt-2 mb-4">
              <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
            </div>
          </div>
        </div>
        <div className="container mx-auto flex gap-8">
          {/* Sidebar */}
          <aside className="w-72 hidden md:block space-y-6">
            {/* Price Filter */}
            <div className="border border-[#eeeeee] rounded-md p-6 bg-white">
              <h3 className="font-bold text-lg text-gray-700 mb-4">
                Price Filter
              </h3>
              <hr className="-mx-6 mb-4 border border-[#eeeeee]" />
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-xs text-gray-500 mb-1">
                    Min price
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none"
                    value={minPrice}
                    min={0}
                    max={maxPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-gray-500 mb-1">
                    Max price
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none"
                    value={maxPrice}
                    min={minPrice}
                    max={150}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                  />
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={150}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#374C69] mb-2"
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-600">
                  Price: ${minPrice} — ${maxPrice}
                </span>
                <button className="bg-[#374C69] text-white px-6 py-2 rounded font-semibold text-sm hover:bg-[#25344a] transition">
                  Filter
                </button>
              </div>
            </div>
            {/* Categories */}
            <div className="border border-[#eeeeee] rounded-md p-6 bg-white">
              <h3 className="font-bold text-lg text-gray-700 mb-4">
                Product Categories
              </h3>
              <hr className="-mx-6 mb-4 border border-[#eeeeee]" />
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCategory === cat}
                      onChange={() =>
                        setSelectedCategory(selectedCategory === cat ? null : cat)
                      }
                      className="accent-[#374C69] rounded"
                      id={`cat-${cat}`}
                    />
                    <label
                      htmlFor={`cat-${cat}`}
                      className="text-gray-700 text-sm cursor-pointer"
                    >
                      {cat}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            {/* Brands */}
            <div className="border border-[#eeeeee] rounded-md p-6 bg-white">
              <h3 className="font-bold text-lg text-gray-700 mb-4">
                Select Brands
              </h3>
              <hr className="-mx-6 mb-4 border border-[#eeeeee]" />
              <ul className="space-y-3">
                {brands.map((brand) => (
                  <li key={brand} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className="accent-[#374C69] rounded"
                      id={`brand-${brand}`}
                    />
                    <label
                      htmlFor={`brand-${brand}`}
                      className="text-gray-700 text-sm cursor-pointer"
                    >
                      {brand}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          {/* Product Grid */}
          <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered
              .filter((p) => Number(p.price.replace(/[^\d.]/g, '')) >= minPrice && Number(p.price.replace(/[^\d.]/g, '')) <= maxPrice)
              .map((product, idx) => (
                <ShopCard key={idx} {...product} onAddToCart={() => setCartOpen(true)} />
              ))}
          </main>
        </div>
      </div>
      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
    </>
  );
}
