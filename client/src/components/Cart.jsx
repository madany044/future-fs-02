import { useCart } from './context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity,
    cartTotal 
  } = useCart();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <h3>Your Cart ({cart.length})</h3>
      
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>

                  {/* ✅ Show color and size if available */}
                  {item.color && <p>Color: {item.color}</p>}
                  {item.size && <p>Size: {item.size}</p>}

                  <div className="item-price">${item.price.toFixed(2)}</div>
                  <div className="item-quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                </div>
                <button 
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            Total: ${cartTotal.toFixed(2)}
          </div>
          <button 
            className="checkout-btn"
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}
