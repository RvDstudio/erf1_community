import { db } from '../db/drizzle';
import { product } from '../db/schema';

async function verifyProducts() {
  try {
    console.log('Verifying products in database...');
    
    // Query all products
    const products = await db.select().from(product);
    
    console.log(`Found ${products.length} products in database:`);
    products.forEach((prod, index) => {
      console.log(`${index + 1}. ${prod.title} - ${prod.category} - $${prod.price}`);
    });
    
  } catch (error) {
    console.error('Error verifying products:', error);
  }
}

// Run the verification
verifyProducts(); 