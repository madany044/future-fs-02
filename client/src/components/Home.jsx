import React from 'react';
import './Home.css';
const Home = () => {
 return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Welcome to FutureShop</h1>
          <p>Discover amazing products at unbeatable prices</p>
        </div>
      </section>
      
      <section className="container">
        <div className="features">
          <div className="feature">
            <h3>🚀 Fast Shipping</h3>
            <p>Get your orders delivered in just 2-3 business days with our premium shipping service.</p>
          </div>
          <div className="feature">
            <h3>🛡️ Quality Guarantee</h3>
            <p>All our products come with a 30-day money back guarantee.</p>
          </div>
          <div className="feature">
            <h3>💳 Secure Payments</h3>
            <p>Shop with confidence using our bank-grade secure payment system.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;