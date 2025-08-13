import { useCart } from '../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  // Rating stars calculation
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i}>★</span>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<span key={i}>½</span>);
      } else {
        stars.push(<span key={i}>☆</span>);
      }
    }
    return stars;
  };

  return (
    
    <div className="product-card">
      <div className="product-image-wrapper">
  <img src={product.image} alt={product.name} />
</div>


      <h3>{product.name}</h3>
      <p className="price">₹{product.price.toFixed(2)}</p>
      
      <div className="rating">
        {renderStars()}
        <span>({product.reviews})</span>
      </div>
      
      
      {product.colors && (
        <div className="color-options">
          {product.colors.map(color => (
            <span 
              key={color} 
              className="color-dot" 
              style={{ backgroundColor: color.toLowerCase() }} 
            />
          ))}
        </div>
      )}
      
      <button 
        onClick={() => addToCart(product)}
        disabled={!product.inStock}
        className={!product.inStock ? 'out-of-stock' : ''}
      >
        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  );
}