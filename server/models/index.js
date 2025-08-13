import { CartProvider } from './context/CartContext';

const sequelize = require('../config/database');
const Product = require('./Product');

function App() {
  return (
    <CartProvider>  {/* Wrap your app with this provider */}
      <ProductList />
    </CartProvider>
);
}


// Test connection and sync
async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Database authenticated');
    
    await Product.sync({ force: true });
    console.log('Product model synchronized');
    
    return { Product };
  } catch (error) {
    console.error('Database initialization failed:', error);
    throw error;
  }
}

module.exports = initializeDatabase;