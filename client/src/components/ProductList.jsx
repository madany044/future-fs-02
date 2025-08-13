import { useState } from 'react';
import ProductCard from './ProductCard'; // Make sure this path is correct
import './ProductList.css';

export default function ProductList() {
  // Directly use mock data - no API calls
  const [products] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 999,
      image: 'headphone.jpg',
      rating: 4.8,
      inStock: true
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 1499,
      image: 'smartwatch.jpg',
      rating: 4.6,
      inStock: true
    },
    {
      id: 3,
      name: 'Organic Cotton T-Shirt',
      price: 299,
      image: 't-shirt.jpg',
      rating: 4.4,
      inStock: true
    },
    {
      id: 4,
      name: 'Cricket Bat',
      price: 850,
      image: 'cricketbat.jpg',
      rating: 4.4,
      inStock: true
    },
    {
      id: 5,
      name: 'College Bag',
      price: 600,
      image: 'bag.jpg',
      rating: 4.1,
      inStock: true
    },
    {
      id: 6,
      name: 'Bluetooth Speaker',
      price: 899,
      image: 'speaker.jpg',
      rating: 4.7,
      inStock: true
    },
    {
      id: 7,
      name: 'Yoga Mat',
      price: 39.99,
      image: 'yogamat.jpg',
      rating: 4.9,
      inStock: true
    }
  ]);

  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}