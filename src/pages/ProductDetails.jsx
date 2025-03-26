import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../styles/ProductDetails.module.css';
import { CartWishlistContext } from '../pages/CartWishlistContext'; // Import the context

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, addToWishlist } = useContext(CartWishlistContext); // Use the context

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  
  const handleAddToWishlist = () => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<span key={i} className={`fa fa-star ${styles.checked}`}></span>);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<span key={i} className={`fa fa-star-half-o ${styles.checked}`}></span>);
      } else {
        stars.push(<span key={i} className="fa fa-star-o"></span>);
      }
    }
    return stars;
  };

  return (
    <>
      <Navbar />
      <Container className="my-5">
        <Row>
          <Col md={6} className={styles.imageCol}>
            <img src={product.image} alt={product.title} className={styles.productImage} />
          </Col>
          <Col md={6}>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productAuthor}>By {product.author}</p>
            <div className={styles.rating}>
              {renderStars(product.rating)}
              <span className={styles.numericRating}> ({product.rating}/5)</span> {/* Display numeric rating */}
            </div>
            <p className={styles.productPrice}>₹{parseFloat(product.price).toFixed(2)}</p>
            <p className={styles.productDescription}>{product.description}</p>
            <Button 
              className={styles.addToCartButton} 
              onClick={() => addToCart(product)} // Call addToCart with the product
            >
              Add to Cart
            </Button>
            <Button variant="outline-primary" className={styles.wishlistButton} onClick={handleAddToWishlist}>
              Wishlist
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetails;