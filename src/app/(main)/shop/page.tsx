import React from "react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import ShopPageClient from "@/components/shop/ShopPageClient";
import { getProducts } from "@/server/products";

export default async function ShopPage() {
  const products = await getProducts();

  const categories = [...Array.from(new Set(products.map((p) => p.category)))];

  const brands = ["Frito Lay", "Nespresso", "Oreo", "Quaker", "Welch's"];

  return (
    <>
      <div className="container mx-auto">
        <div className="mb-2">
          <h1 className="font-bold text-2xl text-gray-800">Shop</h1>
          <div className="mt-2 mb-4">
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Shop" }]}
            />
          </div>
        </div>
      </div>
      <ShopPageClient
        products={products}
        categories={categories}
        brands={brands}
      />
    </>
  );
}
