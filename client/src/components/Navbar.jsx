import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cart } = useCart();
  
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span>FutureShop</span>
      </Link>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      
      <Link to="/cart" className="nav-cart">
        🛒 <span className="cart-count">{cart.length}</span>
      </Link>
    </nav>
  );
};

export default Navbar;