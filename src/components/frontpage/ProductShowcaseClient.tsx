"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ProductShowcaseProduct {
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  image: string;
}

interface ProductShowcaseSection {
  title: string;
  products: ProductShowcaseProduct[];
}

interface ProductShowcaseClientProps {
  sections: ProductShowcaseSection[];
}

export function ProductShowcaseClient({
  sections,
}: ProductShowcaseClientProps) {
  return (
    <div className="container mx-auto mt-10 mb-10 flex w-full flex-col gap-6 lg:flex-row">
      {/* Promo Card */}
      <div
        className="relative flex aspect-square w-full min-w-[320px] max-w-sm items-start justify-start overflow-hidden rounded-xl shadow-sm lg:w-1/4"
        style={{
          backgroundImage: "url(/images/4.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex w-full flex-col items-start p-8">
          <h2 className="mb-4 font-semibold text-2xl text-gray-800 leading-tight">
            Our Top Most Products
            <br />
            Check It Now
          </h2>
          <button className="rounded bg-emerald-500 px-6 py-2 font-bold text-white shadow transition hover:bg-emerald-600">
            Shop Now
          </button>
        </div>
      </div>
      {/* Product Sections */}
      <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
        {sections.map((section, idx) => (
          <div className="flex flex-col bg-white p-4" key={section.title}>
            {/* Section Header */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-2xl text-gray-800">
                <span
                  className={
                    idx === 0
                      ? "text-emerald-600"
                      : idx === 1
                        ? "text-emerald-700"
                        : "text-emerald-500"
                  }
                >
                  {section.title.split(" ")[0]}
                </span>{" "}
                <span className="text-gray-700">
                  {section.title.split(" ").slice(1).join(" ")}
                </span>
              </h3>
            </div>
            {/* Product List */}
            <div className="flex flex-col gap-6">
              {section.products.map((product, i) => (
                <div
                  className="flex items-center gap-6 rounded-xl border border-[#eeeeee] bg-white px-6 py-6"
                  key={`${product.id}-${i}`}
                >
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image
                      alt={product.name}
                      className="rounded object-contain"
                      fill
                      src={product.image}
                    />
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <div className="mb-1 truncate font-semibold text-gray-800 text-lg">
                      {product.name}
                    </div>
                    <div className="mb-2 text-gray-500 text-sm">
                      {product.category}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-base text-gray-800">
                        {product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-gray-400 text-sm line-through">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
