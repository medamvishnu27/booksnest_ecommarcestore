import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CartWishlistContext } from "../pages/CartWishlistContext";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useContext(CartWishlistContext);

  const handleRemove = (id) => {
    removeFromWishlist(id);
  };

  return (
    <>
    <Navbar />
    <Container className="mt-4">
      <h3>My Wishlist</h3>
      {wishlistItems.length > 0 ? (
        wishlistItems.map((item) => (
          <Row key={item.id} className="py-3 align-items-center">
            <Col xs={2}>
              <img src={item.image} alt={item.title} className="img-fluid rounded" />
            </Col>
            <Col xs={6}>
              <h5>{item.title}</h5>
              <p>By: {item.author}</p>
              <p className="fw-bold text-danger">Price: ₹{item.price}</p>
            </Col>
            <Col xs={4} className="text-end">
              <Button variant="success" size="sm" className="me-2" onClick={() => addToCart(item)}>
                Add to Cart
              </Button>
              <Button variant="outline-danger" size="sm" onClick={() => handleRemove(item.id)}>
                Remove
              </Button>
            </Col>
          </Row>
        ))
      ) : (
        <p className="text-muted">Your wishlist is empty.</p>
      )}
    </Container>
    <Footer/>
    </>
  );
};

export default Wishlist;
