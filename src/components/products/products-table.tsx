"use client";

import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Product } from "@/types/products";

interface ProductsTableProps {
  products: Product[];
}

export function ProductsTable({ products }: ProductsTableProps) {
  return (
    <div className="w-full">
      <DataTable columns={columns} data={products} />
    </div>
  );
} 