import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import mastercard from "src/assets/master-card.png";
import visa from "src/assets/294654_visa_icon.png";
import paypal from "src/assets/paypal.png";
import america from "src/assets/american-express.png"
import bitcoin from "src/assets/2900503_25503.jpg";


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Container fluid>
  <Row className="justify-content-center ">
    <Col md={3} sm={6} xs={12} className={styles.aboutInfo}>
      <h5>About Info</h5>
      <p>Lorem ipsum dolor sit amet...</p>
      <p><strong>Address:</strong> 123 Pall Mall, London England</p>
      <p><strong>Email:</strong> hello@example.com</p>
      <p><strong>Phone:</strong> (012) 345 6789</p>
    </Col>
    <Col md={3} sm={6} xs={12} className={styles.footerLinks}>
      <h5>Information</h5>
      <ul>
        <li>Contact us</li>
        <li>About us</li>
        <li>Terms & Conditions</li>
        <li>Gift Vouchers</li>
        <li>BestSellers</li>
      </ul>
    </Col>
    <Col md={3} sm={6} xs={12} className={styles.footerLinks}>
      <h5>Quick Links</h5>
      <ul>
        <li>My Account</li>
        <li>Shopping cart</li>
        <li>Wishlist</li>
        <li>Custom Link</li>
        <li>Help</li>
      </ul>
    </Col>
    <Col md={3} sm={6} xs={12} className={styles.socialLinks}>
      <h5>Follow Us On</h5>
      <ul>
        <li><FaFacebook /> Facebook</li>
        <li><FaTwitter /> Twitter</li>
        <li><FaInstagram /> Instagram</li>
        <li><FaYoutube /> Youtube</li>
      </ul>
    </Col>
  </Row>
  <Row className={styles.bottomFooter}>
          <Col md={6}> &copy;Copyright BookNest | Built with 💖 by BookNest   </Col>
          <Col md={6} className={styles.paymentIcons}>
            <img src={mastercard} alt="MasterCard" />
            <img src={paypal} alt="PayPal" />
            <img src={america} alt="American Express" />
            <img src={bitcoin} alt="Bitcoin" />
            <img src={visa} alt="Visa" />
          </Col>
        </Row>

</Container>

     
    </footer>
  );
};

export default Footer;
