import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CartWishlistContext } from "../pages/CartWishlistContext";
import styles from "../styles/Cart.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
  const { cartItems, setCartItems, moveToWishlist, updateCartCount } = useContext(CartWishlistContext);
  const shippingCost = 39;

  const handleQuantityChange = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + amount;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
    updateCartCount(); // Call to update cart count after changing quantity
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    updateCartCount(); // Call to update cart count after removing an item
  };

  const totalGross = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalPayable = totalGross + shippingCost;

  return (
    <>
      <Navbar />
      <Container className="my-5">
        <Row>
          <Col md={9}>
            <h3>My Shopping Cart</h3>
          </Col>
        </Row>

        {cartItems.length > 0 ? (
          <div className={`${styles.cartContainer} p-3 mt-3`}>
            {cartItems.map((item, index) => (
              <Row key={item.id} className={`${styles.cartItem} py-3 align-items-center`}>
                <Col xs={1}><span className="fw-bold">{index + 1}</span></Col>
                <Col xs={2}><img src={item.image} alt={item.title} className={`${styles.cartImage} rounded`} /></Col>
                <Col xs={4}>
                  <h5>{item.title}</h5>
                  <p className="text-danger fw-bold mb-1">By: {item.author}</p>
                  <p>₹{item.price}  <span className={styles.originalPrice}>{item.originalPrice}</span></p>
                </Col>
                <Col xs={2}>
                  <div className={styles.quantityControls}>
                    <Button variant="outline-dark" size="sm" onClick={() => handleQuantityChange(item.id, -1)}>-</Button>
                    <span className="px-2">{item.quantity}</span>
                    <Button variant="outline-dark" size="sm" onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
                  </div>
                </Col>
                <Col xs={2} className="text-end">
                  <Button variant="danger" size="sm" className="my-3" onClick={() => moveToWishlist(item)}>Move to Wishlist</Button>
                  <Button variant="outline-danger" className="g-1" size="sm" onClick={() => handleRemove(item.id)}>Remove</Button>
                </Col>
              </Row>
            ))}
            <hr />
            <Row className="mt-3">
              <Col xs={6}><p className="fw-bold text-success">Ships within 1-4 days.</p></Col>
              <Col xs={3}><p><strong>Total Items:</strong> {cartItems.length}</p><p><strong>Total Price:</strong> ₹{totalGross}</p></Col>
              <Col xs={3} className="text-end">
                <p><strong>Shipping:</strong> ₹{shippingCost}</p>
                <p className="fw-bold">Amount Payable: ₹{totalPayable}</p>
                <Link to="/checkout"><Button variant="danger" className={styles.buyBtn}>Buy Now</Button></Link>
              </Col>
            </Row>
          </div>
        ) : (
          <p className="text-muted">Your cart is empty.</p>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
