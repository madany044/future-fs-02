import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>FutureShop</h1>
          </Link>
          
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/products">Shop</Link>
            <Link to="/about">About</Link>
          </nav>
          
          <div className="header-actions">
            <button className="icon-btn">
              <FaUser />
            </button>
            <button className="icon-btn cart-btn">
              <FaShoppingCart />
              <span className="cart-count">3</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
