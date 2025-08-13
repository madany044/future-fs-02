import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in a real app, you'd fetch this from an API
  const product = {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 199.99,
    description: 'Experience crystal-clear sound with our noise-cancelling wireless headphones. 40-hour battery life, comfortable over-ear design, and Bluetooth 5.0 technology.',
    images: [
      'https://via.placeholder.com/800x600?text=Headphones+Front',
      'https://via.placeholder.com/800x600?text=Headphones+Side',
      'https://via.placeholder.com/800x600?text=Headphones+Back'
    ],
    features: [
      'Active Noise Cancellation',
      '40-hour battery life',
      'Bluetooth 5.0',
      'Built-in microphone',
      'Foldable design'
    ],
    rating: 4.8,
    reviews: 124,
    colors: ['Black', 'Silver', 'Blue'],
    sizes: ['Small', 'Medium', 'Large']
  };

  return (
    <div className="product-detail">
      <div className="product-gallery">
        <div className="main-image">
          <img src={product.images[selectedImage]} alt={product.name} />
        </div>
        <div className="thumbnail-container">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={selectedImage === index ? 'active' : ''}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <div className="product-meta">
          <span className="rating">★ {product.rating} ({product.reviews} reviews)</span>
          <span className="price">${product.price.toFixed(2)}</span>
        </div>

        <p className="description">{product.description}</p>

        {/* ✅ Colors Section */}
        {product.colors && (
          <div className="product-variations">
            <h4>Colors:</h4>
            <div className="color-options">
              {product.colors.map(color => (
                <button
                  key={color}
                  className="color-swatch"
                  style={{ backgroundColor: color.toLowerCase() }}
                  aria-label={color}
                />
              ))}
            </div>
          </div>
        )}

        {/* ✅ Sizes Section */}
        {product.sizes && (
          <div className="product-variations">
            <h4>Sizes:</h4>
            <div className="size-options">
              {product.sizes.map(size => (
                <button key={size} className="size-option">
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
        {product.colors && (
        <div className="color-options">
        {product.colors.map(color => (
        <span key={color}>{color}</span>
        ))}
         </div>
        )}

        <div className="features">
          <h3>Features:</h3>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
       
       // Add to your existing ProductDetail component
        <div className="product-highlights">
          <h3>Product Highlights</h3>
        <ul className="features-list">
      {product.features.map((feature, index) => (
      <li key={index}>{feature}</li>
      ))}
      </ul>
        </div>

        {product.discount && (
          <div className="discount-badge">
          Save {product.discount}%
        </div>
        )}
        <div className="add-to-cart">
          <div className="quantity-selector">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
          <button
            className="add-to-cart-btn"
            onClick={() => {
              addToCart({ ...product, quantity });
              setQuantity(1);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
