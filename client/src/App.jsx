import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [cartCount] = useState(0); // You can replace with real cart logic later

  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <nav className="navbar">
          <Link to="/" className="logo">FutureShop</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart" className="cart-link">
              🛒 Cart {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
      <footer className="site-footer">
  <div className="container">
    <div className="footer-grid">
      <div className="footer-col">
        <h3>FutureShop</h3>
        <p>Your premier destination for quality products and exceptional service.</p>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Customer Service</h4>
        <ul>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/shipping">Shipping Policy</Link></li>
          <li><Link to="/returns">Returns & Refunds</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Newsletter</h4>
        <p>Subscribe for updates and promotions</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} FutureShop. All rights reserved.</p>
      <div className="payment-methods">
        <i className="fab fa-cc-visa"></i>
        <i className="fab fa-cc-mastercard"></i>
        <i className="fab fa-cc-paypal"></i>
        <i className="fab fa-cc-apple-pay"></i>
      </div>
    </div>
  </div>
</footer>
      </div>
    </Router>
  );
}

export default App;