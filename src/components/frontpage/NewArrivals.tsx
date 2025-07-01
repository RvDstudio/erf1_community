"use client";

import { useState } from "react";
import { products } from "@/app/(main)/shop/products";
import ShopCard from "../shop/ShopCard";

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
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-bold text-2xl text-[#374C69] md:text-3xl">
            New <span className="text-[#689BCD]">Arrivals</span>
          </h2>
          <p className="mt-1 text-base text-gray-500">
            Shop online for new arrivals and get free shipping!
          </p>
        </div>
        <div className="flex gap-6">
          {categories.map((cat) => (
            <button
              className={`border-b-2 pb-2 font-semibold text-sm uppercase tracking-wide transition-colors ${selected === cat.value ? "border-[#5DC399] text-[#5DC399]" : "border-transparent text-gray-500 hover:text-[#5DC399]"}`}
              key={cat.value}
              onClick={() => setSelected(cat.value)}
              type="button"
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((product, index) => (
          <ShopCard key={`${product.title}-${index}`} {...product} />
        ))}
      </div>
    </section>
  );
}

export { NewArrivals };
