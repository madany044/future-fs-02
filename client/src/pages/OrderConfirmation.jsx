import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import './OrderConfirmation.css';

export default function OrderConfirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Mock order data if coming directly to the page
  const orderData = state || {
    orderId: `#₹{Math.floor(Math.random() * 1000000)}`,
    date: new Date().toLocaleDateString(),
    total: 0,
    items: []
  };

  return (
    <div className="confirmation-page">
      <div className="confirmation-card">
        <FaCheckCircle className="success-icon" />
        <h2>Order Confirmed!</h2>
        <p className="order-id">Order #{orderData.orderId}</p>
        <p>Thank you for your purchase! We've sent a confirmation to your email.</p>
        
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Date:</span>
            <span>{orderData.date}</span>
          </div>
          <div className="summary-row">
            <span>Total:</span>
            <span>₹{orderData.total.toFixed(2)}</span>
          </div>
        </div>

        <button 
          onClick={() => navigate('/products')}
          className="continue-shopping-btn"
        >
            <div className="tracking-notice">
      <p>Want to track your order?</p>
      <button 
      onClick={() => navigate('/account/orders')} 
      className="track-order-btn"
      >
          View Your Orders
     </button>
    </div>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}