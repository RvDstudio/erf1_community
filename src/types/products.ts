import { ColumnDef } from "@tanstack/react-table"

export interface Product {
  id: string
  image: string
  hoverImage: string
  category: string
  title: string
  link: string
  weight: string
  price: string
  oldPrice?: string
  isOnSale: boolean
  isDealOfTheDay: boolean
  rating: number
  createdAt: Date
  updatedAt: Date
}

export interface ProductTableProps {
  products: Product[]
}

export type ProductColumn = ColumnDef<Product> 