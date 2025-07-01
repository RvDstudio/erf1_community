'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { CartSheet } from '@/components/shop/CartSheet';
import ShopCard, { ShopCardProps } from '@/components/shop/ShopCard';
import { products } from './products';

const categories = [...Array.from(new Set(products.map((p) => p.category)))];

const brands = ['Frito Lay', 'Nespresso', 'Oreo', 'Quaker', "Welch's"];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(150);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

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
            <h1 className="font-bold text-2xl text-gray-800">Shop</h1>
            <div className="mt-2 mb-4">
              <Breadcrumb
                items={[{ label: 'Home', href: '/' }, { label: 'Shop' }]}
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto flex gap-8">
          {/* Sidebar */}
          <aside className="hidden w-72 space-y-6 md:block">
            {/* Price Filter */}
            <div className="rounded-md border border-[#eeeeee] bg-white p-6">
              <h3 className="mb-4 font-bold text-gray-700 text-lg">
                Price Filter
              </h3>
              <hr className="-mx-6 mb-4 border border-[#eeeeee]" />
              <div className="mb-4 flex items-center gap-4">
                <div className="flex-1">
                  <label className="mb-1 block text-gray-500 text-xs">
                    Min price
                  </label>
                  <input
                    className="w-full rounded border border-gray-200 px-2 py-1 text-sm focus:outline-none"
                    max={maxPrice}
                    min={0}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    type="number"
                    value={minPrice}
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-gray-500 text-xs">
                    Max price
                  </label>
                  <input
                    className="w-full rounded border border-gray-200 px-2 py-1 text-sm focus:outline-none"
                    max={150}
                    min={minPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    type="number"
                    value={maxPrice}
                  />
                </div>
              </div>
              <input
                className="mb-2 w-full accent-[#374C69]"
                max={150}
                min={0}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                type="range"
                value={maxPrice}
              />
              <div className="mt-2 flex items-center justify-between">
                <span className="text-gray-600 text-sm">
                  Price: ${minPrice} — ${maxPrice}
                </span>
                <button className="rounded bg-[#374C69] px-6 py-2 font-semibold text-sm text-white transition hover:bg-[#25344a]">
                  Filter
                </button>
              </div>
            </div>
            {/* Categories */}
            <div className="rounded-md border border-[#eeeeee] bg-white p-6">
              <h3 className="mb-4 font-bold text-gray-700 text-lg">
                Product Categories
              </h3>
              <hr className="-mx-6 mb-4 border border-[#eeeeee]" />
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li className="flex items-center gap-2" key={cat}>
                    <input
                      checked={selectedCategory === cat}
                      className="rounded accent-[#374C69]"
                      id={`cat-${cat}`}
                      onChange={() =>
                        setSelectedCategory(
                          selectedCategory === cat ? null : cat
                        )
                      }
                      type="checkbox"
                    />
                    <label
                      className="cursor-pointer text-gray-700 text-sm"
                      htmlFor={`cat-${cat}`}
                    >
                      {cat}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            {/* Brands */}
            <div className="rounded-md border border-[#eeeeee] bg-white p-6">
              <h3 className="mb-4 font-bold text-gray-700 text-lg">
                Select Brands
              </h3>
              <hr className="-mx-6 mb-4 border border-[#eeeeee]" />
              <ul className="space-y-3">
                {brands.map((brand) => (
                  <li className="flex items-center gap-2" key={brand}>
                    <input
                      checked={selectedBrands.includes(brand)}
                      className="rounded accent-[#374C69]"
                      id={`brand-${brand}`}
                      onChange={() => handleBrandChange(brand)}
                      type="checkbox"
                    />
                    <label
                      className="cursor-pointer text-gray-700 text-sm"
                      htmlFor={`brand-${brand}`}
                    >
                      {brand}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          {/* Product Grid */}
          <main className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered
              .filter(
                (p) =>
                  Number(p.price.replace(/[^\d.]/g, '')) >= minPrice &&
                  Number(p.price.replace(/[^\d.]/g, '')) <= maxPrice
              )
              .map((product, idx) => (
                <ShopCard
                  key={idx}
                  {...product}
                  onAddToCart={() => setCartOpen(true)}
                />
              ))}
          </main>
        </div>
      </div>
      <CartSheet onOpenChange={setCartOpen} open={cartOpen} />
    </>
  );
}
