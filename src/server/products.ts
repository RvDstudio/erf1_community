"use server";

import { db } from "@/db/drizzle";
import { product } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function getProducts() {
  try {
    const products = await db.select().from(product).orderBy(desc(product.createdAt));

    // Transform database data to match ShopCardProps interface
    return products.map((p) => ({
      id: p.id,
      image: p.image,
      hoverImage: p.hoverImage,
      category: p.category,
      title: p.title,
      link: p.link,
      weight: p.weight,
      price: `$${p.price.toString()}`,
      oldPrice: p.oldPrice ? `$${p.oldPrice.toString()}` : undefined,
      isOnSale: p.isOnSale,
      rating: p.rating,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getDealOfTheDayProducts() {
  try {
    const products = await db
      .select()
      .from(product)
      .where(eq(product.isDealOfTheDay, true))
      .orderBy(desc(product.createdAt));

    // Transform database data to match ShopCardProps interface
    return products.map((p) => ({
      id: p.id,
      image: p.image,
      hoverImage: p.hoverImage,
      category: p.category,
      title: p.title,
      link: p.link,
      weight: p.weight,
      price: `$${p.price.toString()}`,
      oldPrice: p.oldPrice ? `$${p.oldPrice.toString()}` : undefined,
      isOnSale: p.isOnSale,
      rating: p.rating,
    }));
  } catch (error) {
    console.error("Error fetching deal of the day products:", error);
    return [];
  }
}