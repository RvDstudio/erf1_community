import { db } from '../db/drizzle';
import { product } from '../db/schema';
import { products } from '../app/(main)/shop/products';

async function insertProducts() {
  try {
    console.log('Starting to insert products...');
    
    // Transform the products data to match the database schema
    const productsToInsert = products.map((prod, index) => ({
      id: `product-${index + 1}`,
      image: prod.image,
      hoverImage: prod.hoverImage,
      category: prod.category,
      title: prod.title,
      link: prod.link,
      weight: prod.weight,
      price: parseFloat(prod.price.replace('$', '')),
      oldPrice: prod.oldPrice ? parseFloat(prod.oldPrice.replace('$', '')) : null,
      isOnSale: prod.isOnSale,
      isDealOfTheDay: index < 3, // Mark first 3 products as deal of the day
      rating: prod.rating,
    }));

    // Insert products
    const result = await db.insert(product).values(productsToInsert);
    
    console.log(`Successfully inserted ${productsToInsert.length} products`);
    console.log('Products inserted:', result);
    
  } catch (error) {
    console.error('Error inserting products:', error);
  }
}

// Run the insertion
insertProducts(); 