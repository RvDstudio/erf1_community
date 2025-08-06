import React from "react";
import { getProducts } from "@/server/products";
import { ProductsTable } from "@/components/products/products-table";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="space-y-6 mt-8">
      <div>
        <h2 className="text-2xl font-normal tracking-tight text-[#374c69]">
          Products
        </h2>
        <p className="text-muted-foreground">
          Manage your product inventory and view all products in your store.
        </p>
      </div>
      <ProductsTable products={products} />
    </div>
  );
}
