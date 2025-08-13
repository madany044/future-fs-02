// Import the initializeDatabase function that returns models
const initializeDatabase = require('./models');

// Your product data
const products = [
  {
    name: "Wireless Headphones",
    price: 999,
    description: "Premium sound quality with 40hr battery life",
    image: "/public/headphone.jpg"
  },
  {
    name: "Smart Fitness Watch",
    price: 1499,
    description: "Track your workouts and health metrics",
    image: "/public/smartwatch.jpg"
  },
  // Include ALL your products here
];

async function seed() {
  try {
    // Initialize database and get models
    const { Product } = await initializeDatabase();
    
    // Clear existing data
    await Product.sync({ force: true });
    
    // Insert new data
    await Product.bulkCreate(products);
    
    console.log('✅ Database seeded successfully!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
  } finally {
    process.exit();
  }
}

seed();