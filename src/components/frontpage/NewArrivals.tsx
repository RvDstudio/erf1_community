import { getNewArrivalsProducts } from "@/server/products";
import { NewArrivalsClient } from "./NewArrivalsClient";

// Server component to fetch data
async function NewArrivals() {
  const products = await getNewArrivalsProducts();

  return <NewArrivalsClient products={products} />;
}

export { NewArrivals };
