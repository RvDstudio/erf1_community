import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  getTrendingProducts,
  getTopRatedProducts,
  getTopSellingProducts,
} from "@/server/products";
import { ProductShowcaseClient } from "./ProductShowcaseClient";

// Server component to fetch data
async function ProductShowcase() {
  const [trendingProducts, topRatedProducts, topSellingProducts] =
    await Promise.all([
      getTrendingProducts(),
      getTopRatedProducts(),
      getTopSellingProducts(),
    ]);

  const sections = [
    {
      title: "Trending Items",
      products: trendingProducts,
    },
    {
      title: "Top Rated",
      products: topRatedProducts,
    },
    {
      title: "Top Selling",
      products: topSellingProducts,
    },
  ];

  return <ProductShowcaseClient sections={sections} />;
}

export { ProductShowcase };
