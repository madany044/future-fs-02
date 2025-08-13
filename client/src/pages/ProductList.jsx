import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('http://localhost:3005/api/products');
        if (!response.ok) throw new Error('API failed');
        const data = await response.json();
        setProducts(data.length ? data : getMockProducts());
      } catch (err) {
        console.error("API Error:", err);
        setProducts(getMockProducts());
        setError("Couldn't connect to API - showing demo data");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product-list-page">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// Mock data moved outside the component
function getMockProducts() {
  return [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 999,
      description: 'Premium sound quality with 40hr battery life',
      image: '/public/headphone.jpg',
      colors: ['Black', 'Silver', 'Blue'],
      rating: 4.8,
      reviews: 142,
      inStock: true
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 1499,
      description: 'Track your workouts and health metrics',
      image: '/public/smartwatch.jpg',
      colors: ['Black', 'Rose Gold'],
      rating: 4.6,
      reviews: 89,
      inStock: true
    },
    {
      id: 3,
      name: 'Organic Cotton T-Shirt',
      price: 299,
      description: 'Sustainable fabric, comfortable fit',
      image: '/public/t-shirt.jpg',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Navy'],
      rating: 4.4,
      reviews: 56,
      inStock: true
    },
    {
      id: 4,
      name: 'Cricket Bat',
      price: 850,
      description: 'Sustainable Wood, Hard Wood',
      image: '/public/cricketbat.jpg',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Navy'],
      rating: 4.4,
      reviews: 56,
      inStock: true
    },
    {
      id: 5,
      name: 'College Bag',
      price: 600,
      description: 'Sustainable Material, Stylish',
      image: '/public/bag.jpg',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Navy'],
      rating: 4.1,
      reviews: 56,
      inStock: true
    },
    {
      id: 6,
      name: 'Bluetooth Portable Speaker',
      price: 899,
      description: 'Waterproof wireless speaker with 20hr battery life',
      image: '/public/speaker.jpg',
      colors: ['Black', 'Blue', 'Red'],
      features: [
        'IPX7 Waterproof',
        '20-hour playtime',
        'Bluetooth 5.0',
        'Built-in microphone'
      ],
      rating: 4.7,
      reviews: 68,
      inStock: true,
      discount: 10,
      category: 'electronics'
    },
    {
      id: 7,
      name: 'Yoga Mat',
      price: 39.99,
      description: 'Eco-friendly non-slip yoga mat',
      image: '/public/yogamat.jpg',
      colors: ['Purple', 'Teal', 'Gray'],
      sizes: ['Standard', 'Extra Long'],
      features: [
        'Non-slip surface',
        'Eco-friendly materials',
        '72" x 24"',
        'Includes carrying strap'
      ],
      rating: 4.9,
      reviews: 124,
      inStock: true,
      category: 'fitness'
    }
  ];
}