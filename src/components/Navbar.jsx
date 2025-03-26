import React, { useState, useEffect, useRef, useContext } from 'react';
import { CartWishlistContext } from '../pages/CartWishlistContext';
import { NavLink, Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaBars } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';
import booklogo from "public\stack-of-books.png"

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useContext(CartWishlistContext);
  const [cartCount, setCartCount] = useState(cartItems.length);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(cartItems.length);
    };

    updateCartCount();

    const handleStorageChange = () => {
      updateCartCount();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [cartItems]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <NavLink className={styles.navBrand} to="/">
        <img src={booklogo} alt="" style={{ width: "55px", padding: "5px" }} />
        BookNest.com
      </NavLink>

      {/* Hamburger Menu Icon */}
      <div className={styles.menuIcon} onClick={toggleMobileMenu}>
        <FaBars />
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
          <NavLink to="/" className={styles.navLink} onClick={toggleMobileMenu}>Home</NavLink>
          <NavLink to="/store" className={styles.navLink} onClick={toggleMobileMenu}>Store</NavLink>
          <NavLink to="/about" className={styles.navLink} onClick={toggleMobileMenu}>About</NavLink>
          <NavLink to="/contact" className={styles.navLink} onClick={toggleMobileMenu}>Contact</NavLink>
          <NavLink to="/login" className={styles.navLink} onClick={toggleMobileMenu}>Login</NavLink>

          {/* Wishlist Icon */}
          <NavLink to="/wishlist" className={styles.navLink} onClick={toggleMobileMenu}>
            <FaHeart className={styles.wishlistIcon} />
          </NavLink>

          {/* Cart Icon */}
          <NavLink to="/cart" className={styles.navLink} onClick={toggleMobileMenu}>
            <FaShoppingCart className={styles.cartIcon} />
            {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
          </NavLink>
        </div>
      )}

      {/* Desktop Navbar Links */}
      <div className={styles.navCenter}>
        <NavLink to="/" className={styles.navLink}>Home</NavLink>
        <div className={styles.navLink} onClick={handleDropdownToggle}>
          Store
          {isDropdownOpen && (
            <div className={styles.dropdown} ref={dropdownRef}>
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownImages}>
                  <Link to="/allcategories"><img src="/Love in Bloom Timeless Wisdom.webp" alt="Book 1" /></Link>
                  <Link to="/allcategories"><img src="/Science Fiction Saga You.webp" alt="Book 2" /></Link>
                  <Link to="/allcategories"><img src="/Tales from the Forgotten Realms.webp" alt="Book 3" /></Link>
                </div>
                <div className={styles.dropdownFilter}>
                  <Link to="/allcategories" className="nav-link">All Books</Link>
                  <Link to="/biography" className="nav-link">Biography</Link>
                  <Link to="/history" className="nav-link">History</Link>
                  <Link to="/romanticbooks" className="nav-link">Romance</Link>
                  <Link to="/thriller" className="nav-link">Thriller</Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <NavLink to="/about" className={styles.navLink}>About</NavLink>
        <NavLink to="/contact" className={styles.navLink}>Contact</NavLink>
      </div>

      <div className={styles.navRight}>
        <NavLink to="/login" className={styles.navLink}>Login</NavLink>

        {/* Wishlist Icon */}
        <div className={styles.wishlist}>
          <NavLink to="/wishlist">
            <FaHeart className={styles.wishlistIcon} />
          </NavLink>
        </div>

        {/* Cart Icon */}
        <div className={styles.cart}>
          <NavLink to="/cart">
            <FaShoppingCart className={styles.cartIcon} />
          </NavLink>
          {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
