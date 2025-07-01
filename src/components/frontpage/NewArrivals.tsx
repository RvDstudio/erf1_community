"use client";

import { useState } from "react";
import ShopCard from "../shop/ShopCard";
import { products } from "@/app/(main)/shop/products";

const categories = [
  { label: "All", value: "all" },
  // Dynamically generate categories from products
  ...Array.from(new Set(products.map((p) => p.category))).map((cat) => ({
    label: cat,
    value: cat,
  })),
];

function NewArrivals() {
  const [selected, setSelected] = useState("all");
  const filtered =
    selected === "all"
      ? products
      : products.filter((p) => p.category === selected);

  return (
    <section className="container mx-auto mb-12">
      {/* Header + Filter Bar Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#4b5966]">
            New <span className="text-[#5DC399]">Arrivals</span>
          </h2>
          <p className="text-gray-500 mt-1 text-base">
            Shop online for new arrivals and get free shipping!
          </p>
        </div>
        <div className="flex gap-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`uppercase text-sm font-semibold tracking-wide pb-2 border-b-2 transition-colors ${selected === cat.value ? "border-[#5DC399] text-[#5DC399]" : "border-transparent text-gray-500 hover:text-[#5DC399]"}`}
              onClick={() => setSelected(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filtered.map((product, idx) => (
          <ShopCard key={idx} {...product} />
        ))}
      </div>
    </section>
  );
}

export { NewArrivals };
