"use server";

import { db } from "@/db/drizzle";
import { product } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { Product } from "@/types/products";

export async function getProducts(): Promise<Product[]> {
  try {
    const products = await db.select().from(product).orderBy(desc(product.createdAt));

    // Transform database data to match Product interface
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
      isDealOfTheDay: p.isDealOfTheDay,
      rating: p.rating,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
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

export async function getNewArrivalsProducts() {
  try {
    const products = await db
      .select()
      .from(product)
      .orderBy(desc(product.createdAt))
      .limit(8);

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
    console.error("Error fetching new arrivals products:", error);
    return [];
  }
}

export async function getTrendingProducts() {
  try {
    const products = await db
      .select()
      .from(product)
      .where(eq(product.isOnSale, true))
      .orderBy(desc(product.createdAt))
      .limit(3);

    // Transform database data to match ProductShowcase interface
    return products.map((p) => ({
      id: p.id,
      name: p.title,
      category: p.category,
      price: `$${p.price.toString()}`,
      oldPrice: p.oldPrice ? `$${p.oldPrice.toString()}` : undefined,
      image: p.image,
    }));
  } catch (error) {
    console.error("Error fetching trending products:", error);
    return [];
  }
}

export async function getTopRatedProducts() {
  try {
    const products = await db
      .select()
      .from(product)
      .where(eq(product.rating, 5))
      .orderBy(desc(product.createdAt))
      .limit(3);

    // Transform database data to match ProductShowcase interface
    return products.map((p) => ({
      id: p.id,
      name: p.title,
      category: p.category,
      price: `$${p.price.toString()}`,
      oldPrice: p.oldPrice ? `$${p.oldPrice.toString()}` : undefined,
      image: p.image,
    }));
  } catch (error) {
    console.error("Error fetching top rated products:", error);
    return [];
  }
}

export async function getTopSellingProducts() {
  try {
    const products = await db
      .select()
      .from(product)
      .orderBy(desc(product.createdAt))
      .limit(3);

    // Transform database data to match ProductShowcase interface
    return products.map((p) => ({
      id: p.id,
      name: p.title,
      category: p.category,
      price: `$${p.price.toString()}`,
      oldPrice: p.oldPrice ? `$${p.oldPrice.toString()}` : undefined,
      image: p.image,
    }));
  } catch (error) {
    console.error("Error fetching top selling products:", error);
    return [];
  }
}