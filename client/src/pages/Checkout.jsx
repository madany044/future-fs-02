import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    payment: 'credit'
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (!formData.address) newErrors.address = 'Address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    const orderData = {
      orderId: `#₹{Math.floor(Math.random() * 1000000)}`, 
      date: new Date().toLocaleDateString(),
      total: cartTotal,
      items: [...cart],
      customer: { ...formData }
    };
    
    // In real app, you would send this to your backend
    console.log('Order data:', orderData);
    
    clearCart();
    navigate('/order-confirmation', { state: orderData });
  }
};

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-container">
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          {/* Add similar form groups for email, address */}

          <div className="form-group">
            <label>Payment Method</label>
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="crypto">Crypto</option>
            </select>
          </div>

          <button type="submit" className="submit-order-btn">
            Place Order (₹{cartTotal.toFixed(2)})
          </button>
        </form>

        <div className="order-summary">
          <h3>Your Order</h3>
          {cart.map(item => (
            <div key={item.id} className="order-item">
              <span>{item.name} × {item.quantity}</span>
              <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="order-total">
            <span>Total</span>
            <span>₹{cartTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}